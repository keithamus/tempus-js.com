---
layout: api
title: Tempus
permalink: Tempus/index.html
filename: api/tempus.md
---

The `Tempus` core class will start a new instance of Tempus, and internally 
calls [set](/api/set). The arguments can be anything that the native Date 
function takes, with additional ways to invoke it on top.


### Optional Newing ###

The `Tempus` class is smart enough to automatically new itself up if you ommited
the `new` keyword. For example, `new Tempus()` and `Tempus()` do the exact same 
thing.

{% capture code %}
// these are the same:
var tempus_object = Tempus( 2008, 2, 15 );
var tempus_object = new Tempus( 2008, 2, 15 );
{% endcapture %}{% include code.html %}

### Cloning Tempus or Date objects ###

Cloning the Tempus or Date objects is easily done by passing the Date or Tempus 
object in as the first and only argument.

{% capture code %}
var date_object = new Date();
var tempus_object = new Tempus( date_object );
{% endcapture %}{% include code.html %}

### Arguments as array ###

Rather than passing individual arguments to `Tempus`, you can also pass an array 
as the first argument, which will automatically be expanded to be used as a 
conventual argument structure.

{% capture code %}
var args = [];
args.push(2008);
args.push(2);
args.push(15)
var tempus_object = new Tempus( args );
// this is the same as
var tempus_object = new Tempus( 2008, 2, 15 );
{% endcapture %}{% include code.html %}

### Parse Ordering ###

It is important to note the order in which Tempus will parse date arguments. You 
should always utilise the fastest route to creating a Tempus object, to make 
sure your code remains efficient.

1.  No arguments, then use `new Date()`
2.  If only 1 argument, which is array, turn that into arguments
3.  If 1st argument is Tempus object, then copy that to this object
4.  If only 1 argument, which is Date object, then copy this
5.  If only 1 argument, which is number, then use this as timestamp
6.  If multiple arguments which are all numbers, then formulate date from them 
      like Date(year, month, date..))
7.  Loop Through all parsers that pertain to this set of arguments
8.  throw Error