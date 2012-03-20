(function () {
    var apiJSON = {}
    ,   log = window.console && window.console.log ?
        function () { window.console.log.apply(console, arguments); } : function () {};    

    $.getJSON('/api.json', {}, function (data) {
        log('Loaded api version ' + data.version);
        apiJSON = data.methods;
        window.apiJSON = apiJSON;
    });

    function contains(needle, haystack) {
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    }

    function searchResultFactory(result) {
        var rt = $(document.createElement('li')).addClass('api-search-result');
        rt.append(
            $(document.createElement('a')).attr({
                'class': 'title',
                'href': '/api/' + result.title
            }).html(result.title),
            $(document.createElement('a')).attr({
                'class': 'description',
                'href': '/api/' + result.title
            }).html(result.description)
        );
        return rt;
    }

    $(function () {
        oldVal = '';

        $(document.body).on('keyup', 'form[name="api-search"] input', function () {
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


            $.each(apiJSON, function (i, method) {

                if (contains(text, method.title)) {
                    $methods = searchResultFactory(method).add($methods);
                } else if (contains(text, method.description)) {
                    $methods = $methods.add(searchResultFactory(method));
                }

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

    });
})();