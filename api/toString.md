---
layout: api
title: toString
permalink: toString/index.html
filename: api/toString.md
---

### String formatting ###

The toString function can take a format string, which will replace certain 
markers with parts of the date. It follows a standard convention called 
[strftime][strftime]. [strftime][strftime] methods are avialable in many 
languages, including [C++][strftimec], [Python][strftimepy], [Ruby][strftimerb] 
and [PHP][strftimephp]. 

[strftime][strftime] uses the `%` symbol before a letter to denote something 
that will be replaced. The letter tells toString _what_ to replace it with. So 
for example, a date like `'%Y.%m.%d'` turns to `'2011.12.31'`, as **%Y** is 
replaced by the fullYear, **%m** is replaced by the month, and **%d** is 
replaced by the date. Here are a list of the fragments that will be replaced in 
the string. All of these are avilable in the other languages mentioned above:

{% include strftime_table.md %}

### Formatter Constants ###

For convienience, there are some predefined formatter strings that can be used.
These each have their own toString methods, such as 
[toISO8601String](/api/toISO8601String). You can extend these formatter 
constants using the [addTimeFormat](/api/addTimeFormat) method. Here are the 
default constants supplied:

{% include toString_table.md %}


[strftime]: http://pubs.opengroup.org/onlinepubs/007908799/xsh/strftime.html
[strftimec]: http://www.cplusplus.com/reference/clibrary/ctime/strftime/
[strftimepy]: http://docs.python.org/library/datetime.html#strftime-strptime-behavior
[strftimerb]: http://www.ruby-doc.org/core-1.9.3/Time.html#method-i-strftime
[strftimephp]: http://php.net/manual/en/function.strftime.php