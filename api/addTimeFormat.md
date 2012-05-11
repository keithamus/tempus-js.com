---
layout: api
title: addTimeFormat
permalink: addTimeFormat/index.html
filename: api/addTimeFormat.md
---

Adding a time format is a fairly comprehensive change to the inner workings of 
Tempus. Formatting strings are a huge part of what Tempus does - and so when you 
add a time format it does a few things with it:

 1. It makes the format available through [toString](/api/toString). By calling
    toString with the first argument as `formatNameString`, toString will return
    a string as formatted by `formatString`.

 2. It makes a shortcut method named `to<formatNameString>String` which when 
    called, is the equivalent of `toString(formatNameString)`.

 3. It makes the format available through the [Tempus](/api/Tempus) constructor, 
    and through [set](/api/set), meaning you can call both as reverse formatters
    with the formatNameString, as opposed to the formatString, e.g:
    `new Tempus('date', formatNameString)` and `.set('date', formatNameString)`

 4. It adds the format to the list of default parsers, when no format is 
    supplied, so when you run `.set('date')` it will run through all format 
    parsers, including yours.

This is all fairly complex, and so much easier demonstrated in code:

{% capture code %}
Tempus.addTimeFormat('MyDate', '%m::%d::%y');

// Set date to 1st January 2012 using "MyDate" parser.
var tempus_object = new Tempus('01::01::2012', 'MyDate');

tempus_object.toString('MyDate'); // Returns 01::01::2012

// Set the date to 1st Febuary 2012, by trying all format parsers
tempus.object.set('02::01::2012');

tempus_object.toMyDateString(); // Returns 02::01::2012
{% endcapture %}{% include code.html %}

### formatsObject

You can also use the `formatsObject` signature to add many time formats at once.
`formatsObject` should be a simple key-value hash, where key is the 
`formatNameString` and value is the `formatString`. For example:

{% capture code %}
Tempus.addTimeFormat({
    'MyDate': '%m::%d::%y',
    'AnotherDate': '%m%d%y',
    'OurDate': '@%d-%m-%y@'
});
{% endcapture %}{% include code.html %}

### formatString

Here is a table of the special characters in formatString. For more details on 
these visit the [toString](/api/toString) page.

{% include toString_table.md %}