---
layout: docs
title: Method Type Rundown
permalink: method-type-rundown/index.html
filename: docs/method-type-rundown.html
breadcrumbs: [docs]
---

Tempus sticks to hard naming conventions and patterns inside it's api. It has 
about half a dozen different method "types". Each method type will either 
strictly return a value, or have a strict argument set.


### Classes ### {#classes}

The main modules: `Tempus`, `Tempus.Timer` and `Tempus.Interval` each have their
own class. A class in the traditional JavaScript sense is something that has 
returns a completely new instance of itself. No two instances are identical,
which means you can do anything you want with one, and not affect the other. 

Typically, a class is "newed up", by prepending the `new` keywordbefore invoking
the method, like this:

{% capture code %}
new Tempus( 2008, 2, 15 );
{% endcapture %}{% include code.html %}

But classes inside Tempus are special; they have a dual behaviour, in that they 
are a [Factory Method](http://en.wikipedia.org/wiki/Factory_method_pattern). A
factory method is one that when called without the `new` keyword, will still 
return a new instance. So with tempus, the two following lines of code provide 
the same result:
    
{% capture code %}
// these are the same:
var tempus_object = Tempus( 2008, 2, 15 );
var tempus_object = new Tempus( 2008, 2, 15 );
{% endcapture %}{% include code.html %}

Use whichever convertion you feel comfortable with, it makes very little 
difference (it could be argued that using the `new` keyword will be _faster_, 
but not using it saves bytes of code)

--------------------------------------------------------------------------------

### Setters and Getters ### {#setters-and-getters}

###### Getters ###### {#setters-and-getters--getters}

When you want to get a piece of information from the date object, such as the
year, you need to use a __getter__. A getter will __always__ return a value, and
__will not__ in any way affect the current instance (for example changing the 
year). Getters __always__ start with the word `get`. Getters __always__ take no 
arguments. Examples of some getters are [getYear](/api/getYear), 
[getMonth](/api/getMonth), [getDateOrdinal](/api/getDateOrdinal). Examples of 
such code are:

{% capture code %}
var tempus_object = Tempus( 2008, 2, 15 );

tempus_object.getDate(); // Returns 15
tempus_object.getDateOrdinal(); // Returns 'th'
tempus_object.getMonth(); // Returns 2
{% endcapture %}{% include code.html %}

###### Setters ###### {#setters-and-getters--setters}

When you want to set a piece of information, such as the year, you will need to 
use a __setter__. Setters will __always__ return `this`, which means you can 
chain them together (like jQuery), and __always__ change a property on the 
current instance. Setters __always__ start with the word `set`. Setters can 
sometimes take no arguments, and sometimes take 1 or more - it depends on the 
exact method. If a setter takes arguments, the first argument will always be the
value that will be set. Examples of some setters are [setYear](/api/setYear), 
[setMonth](/api/setMonth), [setTimeToNow](/api/setTimeToNow). 
Examples of such code are:

{% capture code %}
var tempus_object = Tempus( 2008, 2, 15 );

// Set the date to 5
tempus_object.setDate(5);

// Chain setter methods together into 1 line
tempus_object.setMonth(1).setHour(8).setMinute(30);

// setTimeToNow takes no arguments
tempus_object.setTimeToNow();
{% endcapture %}{% include code.html %}

###### GetterSetters ###### {#setters-and-getters--gettersetters}

There is also another type of getter/setter, which we call a __GetterSetter__.
GetterSetters work as both the getter and the setter - if you give the 
GetterSetter no arguments, then it will return the value, like a getter. If you 
give it some arguments, it will set the value and return `this`, like a setter.
Not all methods have GetterSetters, because not all methods can be both set and 
retreived (for example setTimeToNow, you cannot getTimeToNow). Because it does 
both, a GetterSetter is not prefexed, so for example [getYear](/api/getYear)s 
GetterSetter is [year](/api/year). [jQuery](http://jquery.com) is a library that
uses this pattern extensively, so you might be the most familiar with this. 
Examples of GetterSetters are [month](/api/month), [day](/api/day). Examples of 
such code are:

{% capture code %}
var tempus_object = Tempus( 2008, 2, 15 );

// Set the date to 5 using a setter...
tempus_object.setDate(5);
// is the same as using without
tempus_object.date(5);

// Chain GetterSetter methods work
// as long as you pass arguments
tempus_object.month(1).hour(8).minute(30);

// You could chain GetterSetters up until the last one:
tempus_object.month(1).hour(8).minute(); // Returns 30
{% endcapture %}{% include code.html %}

--------------------------------------------------------------------------------

### Assertions ### {#assertions}

When you want to test that something is what it is, for example if the date is 
the 16th, you can use an __assertion__ method. Typically, trying to do this you 
would use a getter, and use `===` to check the return value. This can be quite 
clunky though, especially with complex assertions like [isBefore](/api/isBefore).
Assertion methods __always__ start with `is` and will __always__ return `true` 
if the statement matches the argument, or `false` if it doesn't. You can see a 
full list of assertion methods in [the API assertion category](/api/assertions).
Examples of such code are:

{% capture code %}
var tempus_object = Tempus( 2008, 2, 15 );

tempus_object.isBefore( 2008, 2, 18 ); // Returns true
tempus_object.isBefore( 2008, 2, 11 ); // Returns false

tempus_object.isEqual( 2008, 2, 15 ); // Returns true
tempus_object.isAfter( 2011, 2, 15 ); // Returns false

// How you would do it with assertions:
tempus_object.isEqual( 2008, 2, 15 ); // Returns true

// How you would do it without assertions:
+tempus_object === +Tempus( 2008, 2, 15 ); // Returns true
{% endcapture %}{% include code.html %}

--------------------------------------------------------------------------------

### Iterators ### {#iterators}

Iterators allow you to do complex looping over a particular range. Iterators are
good at, for example [looping through every day of the month](/api/eachDayOfMonth).
Iterator methods are __always__ prefixed with `each`, usually `each` will be 
followed by the unit of iteration, followed by "of", followed by the wider 
unit to loop until, for example to iterate over weeks in a month, it is 
[eachWeekOfMonth](/api/eachWeekOfMonth), because Week is the iterator unit, and 
month is the wider unit, to loop through each day in a week, the method is 
[eachDayOfWeek](/api/eachDayOfWeek) (iterator unit is day, wider unit is week).

Iterators take exactly one argument, the function argument gets called for every
iteration, and is passed two arguments. The first argument is the equivalent
getter value of the iterator unit, the second argument is a new date object, 
with that value set. This is best explained with code:

{% capture code %}
var tempus_object = Tempus( 2008, 2, 15 );

tempus_object.eachDayOfWeek(
    function (dayNumber, day_tempus_object) {
        console.log(dayNumber, day_tempus_object);
    }
);

// This will log the following:
//  9,   (new Tempus( 2008, 2, 9));
//  10,  (new Tempus( 2008, 2, 10));
//  11,  (new Tempus( 2008, 2, 11));
//  12,  (new Tempus( 2008, 2, 12));
//  13,  (new Tempus( 2008, 2, 13));
//  14,  (new Tempus( 2008, 2, 14));
//  15,  (new Tempus( 2008, 2, 15));
{% endcapture %}{% include code.html %}

You can see a full list of iterator methods in 
[the API assertion category](/api/iterators).

--------------------------------------------------------------------------------

### String Methods ### {#string}

String methods allow you to turn the date object you have into a string 
representation. The default method, [toString](/api/toString) is the father of 
all of the string methods, and is also utilised by JavaScript itself - if you 
cast something as a `String()` then it will attempt to use 
[toString](/api/toString). All string methods follow the naming convention of 
to`Something`String, where `Something` is the type of string you want to convert
it to, for example [toDateString](/api/toDateString). You can see a full list of
String methods in [the api docs](/api/string). Examples of such code are:

{% capture code %}
var tempus_object = Tempus( 2008, 2, 15 );
tempus_object.toCOOKIEString(); // "Saturday, 15-Mar-08 00:00:00 +00:00"

// Casting tempus as a String(), these two lines are the same.
String(tempus_object);
tempus_object.toString();
{% endcapture %}{% include code.html %}