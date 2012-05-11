---
layout: api
title: addLocale
permalink: addLocale/index.html
filename: api/addLocale.md
---

The `localeObject` is an object that is created from the arguments in an 
`addLocale` call. It has strict expectations on what each argument does, and as
such should be followed precisely:

### localeName

While locale name can be any `String` value, it is best to set it to a country 
code as defined by [IETF Language Tag][IETF], as this is a common standard. All 
locales officially included with Tempus follow this standard.

### fullMonthsArray

This should be an `Array` containing 12 `String` values. `fullMonthsArray[0]`
must be the full name of the first month of the year, for example 'January', 
through to `fullMonthsArray[11]` must be the full name of the last month of the 
year, for example 'December'. So `fullMonthsArray` for the 'en' culture will be:

{% capture code %}
var fullMonthsArray = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December'
];
{% endcapture %}{% include code.html %}

### shortMonthsArray

This should be an `Array` containing 12 `String` values, each one corresponding 
to the short-hand equivalent of the `fullMonthsArray`. If the locale does not 
include feature a short-hand version of a month then the `shortMonthsArray`
should be identical to the fullMonthsArray. An example of `shortMonthsArray`:

{% capture code %}
var shortMonthsArray = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Nov',
    'Dec'
];
{% endcapture %}{% include code.html %}

### fullDaysArray

This should be an `Array` containing 7 `String` values, each one corresponding 
to the full name of the day of the week. `fullDaysArray[0]` should be the last
day in the weekend, i.e 'Sunday', moving sequentially through to 
`fullDaysArray[6]` which should be the first day of the weekend, i.e 'Saturday'.
In the 'en' culture, `fullDaysArray` will look like:

{% capture code %}
var fullDaysArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
{% endcapture %}{% include code.html %}

### shortDaysArray

This should be an `Array` containing 7 `String` values, each one corresponding 
to the short-hand representation of the day of the week, in the same order. For 
example, the `shortDaysArray` in the 'en' culture looks like:

{% capture code %}
var shortDaysArray = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];
{% endcapture %}{% include code.html %}

### ampmArray

This should be an `Array` containing 4 `String` values. `ampmArray[0]` should be 
the 12-hour time representation of a morning time slot, in upper case or 
equivalent, for example 'AM'. `ampmArray[1]` should be the equivalent afternoon 
time slot, e.g 'PM'. `ampmArray[2]` and `ampmArray[3]` are these lower case 
variants. If the language does not have a lower case, these should be identical 
to the first two. An example of ampmArray in the 'en' culture would be:

{% capture code %}
var ampmArray = [
    'AM',
    'PM',
    'am',
    'pm'
];
{% endcapture %}{% include code.html %}

## Putting it together

Now we know the specification of each locale, it is trivial to piece them 
together to make a new locale:

{% capture code %}
Tempus.addLocale(
    // Locale name
    'en-GB',
    // fullMonthsArray
    [   'January',  'Febuary',  'March',
        'April',    'May',      'June',
        'July',     'August',   'September',
        'November', 'December'
    ],
    // shortMonthsArray
    [   'Jan',  'Feb',  'Mar',
        'Apr',  'May',  'Jun',
        'Jul',  'Aug',  'Sep',
        'Nov',  'Dec'
    ],
    // fullDaysArray
    [   'Sunday',       'Monday',   'Tuesday',
        'Wednesday',    'Thursday', 'Friday',
        'Saturday'
    ],
    // shortDaysArray
    [   'Sun',  'Mon',  'Tue',
        'Wed',  'Thu',  'Fri',
        'Sat'
    ],
    // ampmArray
    [   'AM', 'PM', 'am', 'pm' ]

);
{% endcapture %}{% include code.html %}

[locales]: /docs/locales
[IETF]: http://en.wikipedia.org/wiki/IETF_language_tag