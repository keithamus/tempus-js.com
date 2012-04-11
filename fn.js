(function () {
    var apiJSON = {}
    ,   log = window.console && window.console.log ?
        function () { window.console.log.apply(console, arguments); } : function () {};    

    try {
        apiJSON = JSON.parse(sessionStorage['api']);
        log('Loaded api from cache');
    } catch(e) {}

    if (({}).toString.call(apiJSON) !== '[object Array]' || apiJSON.length < 1) {
        $.getJSON('/api.json', {}, function (data) {
            log('Loaded api version ' + data.version);
            apiJSON = data.methods;
            sessionStorage['api'] = JSON.stringify(apiJSON);
        });
    }

    function selectionOnElements(el) {
        el = $(el);
        if (window.getSelection && document.createRange) {
            var sel = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(el[0]);
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (document.selection && document.body.createTextRange) {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(el[0]);
            textRange.select();
        }
    }

    function contains(needle, haystack) {
        var search = (''+haystack).toLowerCase()
        ,   match = false
        ,   ix
        ,   count = 0
        ,   i;

        needle = needle.toLowerCase().replace(/[^\w]/, '').split('');

        for (i = 0; i < needle.length; ++i) {
            if ((ix = search.indexOf(needle[i])) !== -1) {
                search=search.substr(ix);
                haystack = haystack.replace(
                    new RegExp('([^/<]|^)('+needle[i]+')', 'i'), '$1<b>$2</b>');
                ++count;
            } else {
                return false;
            }
        }
        return { text: haystack, count: count };
    }

    function searchResultFactory(result) {
        var rt = $(document.createElement('li')).addClass('api-search-result');
        rt.append(
            $(document.createElement('a')).attr({
                'class': 'title',
                'href': '/api/' + result.title
            }).html(result.htmlTitle || result.title),
            $(document.createElement('a')).attr({
                'class': 'description',
                'href': '/api/' + result.title
            }).html(result.htmlDescription || result.description)
        );
        return rt;
    }

    $(function () {
        var oldVal = ''
        ,   $searchInput = $('form[name="api-search"] input');

        $(document.body).on('keydown', function (e) {
            if ($searchInput.is(':focus')) return;
            if (e.metaKey || e.altKey || e.ctrlKey) return;
            var key = String.fromCharCode(e.keyCode);
            if (/^(\w|\b|\d|\.|\;|\'|\"|\:|\||\}|\{|\]|\[)$/.test(key)) {
                $searchInput.focus();
            }
        }).on('keyup', 'form[name="api-search"] input', function () {
            var $el = $(this)
            ,   text = $el.val()
            ,   $methods = $()
            ,   $results = $el.siblings('.search-results')
            ,   $resultsCount = $el.siblings('.search-results-count');

            // don't re-render if its the same
            if (text === oldVal) return;
            oldVal = text;

            if (text.length < 3) {
                $results.empty();
                $resultsCount.text('');
                return false;
            }

            var results = [];

            $.each(apiJSON, function (i, method) {
                var res;

                if ((res = contains(text, method.title))) {
                    results.push($.extend({}, method, {
                        htmlTitle: res.text,
                        count: method.title.length - res.count
                    }));
                } else if ((res = contains(text, method.description))) {
                    results.push($.extend({}, method, {
                        htmlDescription: res.text,
                        count: method.description.length - res.count
                    }));
                }

            });

            results = results.sort(function (a, b) {
                return a.count < b.count ? -1 : a.count > b.count ? 1 : 0;
            });

            $.each(results, function (i, result) {
                $methods = $methods.add(searchResultFactory(result));
            });

            $resultsCount.text($methods.length);
            $results.empty().append($methods);

        }).on('keydown', 'form[name="api-search"] input', function(e) {
            var $el = $(this)
            ,   $results = $el.siblings('.search-results').children();

            if (e.keyCode === 40 /* down */|| e.keyCode === 38 /* up */) {

                var methods = e.keyCode === 40 ? ['next', 'first'] : ['prev', 'last'];
                
                var $next = $results.siblings('.search-focus')[methods[0]]();
                if ($next.length === 0) $next = $results.siblings()[methods[1]]();

                $results.removeClass('search-focus');
                $next.addClass('search-focus');

                return false;
            } else if (e.keyCode === 13 /* enter */) {
                var $focus = $results.filter('.search-focus');
                
                if (!$focus.length) $focus = $results.first();

                window.location = $focus.children('.title').attr('href');

                return false;
            } else if (e.keyCode === 27 /* escape */) {
                $results.remove();
                $el.siblings('.search-results-count').text('');
                $el.val('').blur();
            }

        }).on('mouseenter', 'form[name="api-search"] .search-results li', function () {
            $(this).addClass('search-focus').siblings().removeClass('search-focus');
        });



        $('#masthead .btn-group .info').on('click', function () {
            selectionOnElements($('code', this));
        });

        $(document.body).on('click', '.example-select', function () {
            selectionOnElements($('.example-precode', $(this).parents('.example')));
        }).on('click', '.example-run', function () {
            var $example = $(this).parents('.example'),
                $sandbox;

            $example.find('.example-sandbox').remove();

            $sandbox = $('<div class="example-sandbox">')
                    .append($('<div class="output">'));

            $example.append($sandbox);
            var code = $('.example-precode', $example).text();
            (function () {
                var $ = function (s) { jQuery(s, $sandbox); },
                    oldConsoleLog = console.log,
                    oldAlert = alert;
                    console.log = function () {
                        var text = jQuery();
                        jQuery.each(([]).slice.call(arguments), function (i, a) {
                            text = text.add(jQuery('<code>').text(String(a)));
                        });
                        $sandbox.append(jQuery('<div class="console-log"><i class="icon-chevron-right"></i></div>').append(text));
                    };
                    alert = function (text) {
                        $sandbox.append(jQuery('<div class="alert"><i class="icon-chevron-right"></i></div>').text(String(text)));
                    };
                    try {
                        (new Function(code))();
                    } catch(e) {
                        console.log('ERROR: ' + e);
                    }
                    alert = oldAlert;
                    console.log = oldConsoleLog;
            })();
        });
    });
})();

