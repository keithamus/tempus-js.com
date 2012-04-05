---
layout: api
title: set
permalink: set/index.html
filename: api/set.md
---

This method is the bulk of the [constructor](/api/Tempus) 
method, which internally calls set to parse the date. As such the code
and allowed arguments are identical to the 
[constructor](/api/Tempus)

### Cloning Tempus or Date objects ###

Cloning the Tempus or Date objects is easily done by passing the Date 
or Tempus object in as the first and only argument.

{% capture code %}
var date_object = new Date();
var tempus_object = new Tempus().set( date_object );
{% endcapture %}{% include code.html %}

### Arguments as array ###

Rather than passing individual arguments to `set`, you can
also pass an array as the first argument, which will automatically be 
expanded to be used as a conventual argument structure.

{% capture code %}
var args = [];
args.push(2008);
args.push(2);
args.push(15)
var tempus_object = new Tempus().set( args );
// this is the same as
var tempus_object = new Tempus().set( 2008, 2, 15 );
{% endcapture %}{% include code.html %}

### Parse Ordering ###

It is important to note the order in which Tempus will parse date 
arguments. You should always utilise the fastest route to creating a 
Tempus object, to make sure your code remains efficient.

1. No arguments, then use `new Date()`
2. If only 1 argument, which is array, turn that into arguments
3. If 1st argument is Tempus object, then copy that to this object
4. If only 1 argument, which is Date object, then copy this
5. If only 1 argument, which is number, then use this as timestamp
6. If multiple arguments which are all numbers, then formulate date from them (like Date(year, month, date..))
7. Loop through all parsers that pertain to this set of arguments
8. throw Error