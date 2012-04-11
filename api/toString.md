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

[strftime][strftime] uses the <code>%</code> symbol before a letter to denote 
something that will be replaced. The letter tells toString _what_ to replace it 
with. So for example, a date like <code>'%Y.%m.%d'</code> turns to 
<code>'2011.12.31'</code>, as **%Y** is replaced by the fullYear, **%m** is 
replaced by the month, and **%d** is replaced by the date. Here are a list of 
the fragments that will be replaced in the string. All of these are avilable in 
the other languages mentioned above:

| String |              Replaced By              |          Examples           |
| :----: | :------------------------------------ | :-------------------------- |
|  '%a'  | The short day name                    | 'Mon', 'Tue', 'Wed', 'Sun'  |
|  '%A'  | The full day name                     | 'Monday', 'Tuesday'         |
|  '%b'  | The short month name                  | 'Jan', May', 'Oct', 'Dec'   |
|  '%B'  | The full month name                   | 'January', 'May', 'October' |
|  '%c'  | A shortcut for '%a %b %d %T %Y'       | '%a %b %d %T %Y'            |
|  '%C'  | The century                           | 2011 => '20', 1900 => '19'  |
|  '%d'  | 0-padded date                         | '01', '05', '12', '31'      |
|  '%D'  | A shortcut for '%a %b %d %T %Y'       | '%a %b %d %T %Y'            |
|  '%e'  | Space-padded date                     | ' 1', ' 5', '12', '31'      |
|  '%f'† | 0-padded microseconds                 | '100000', '023422'          |
|  '%F'  | A shortcut for '%Y-%m-%d'             | '%Y-%m-%d'                  |
|  '%g'  | The two digit yea                     | '12', '99', '86'            |
|  '%G'  | The four digit year                   | '2012', '1999', '1986'      |
|  '%h'  | The short month name                  | 'Jan', 'May', 'Oct', 'Dec'  |
|  '%H'  | 0-padding 24 based hour               | '01', '08', '16', '23'      |
|  '%I'  | 0-padding 12 based hour               | '01', '08', '04', '11'      |
|  '%j'  | 0-padded day of the year              | '001', 055', '366'          |
|  '%H'  | Space padding 24 hour                 | ' 1', ' 8', '16', '23'      |
|  '%I'  | Space padding 12 hour                 | ' 1', ' 8', ' 4', '11'      |
|  '%L'  | 0-padded milliseconds                 | '003', '085', '617', '999'  |
|  '%m'  | 0-padded month                        | '01', '03', '09', '12'      |
|  '%M'  | 0-padded minute                       | '01', '05', '15', '59'      |
|  '%n'  | A newline character: "\n"             | "\n"                        |
|  '%o'‡ | Date ordinal suffix, e.g 'th' or 'rd' | 'th', 'rd', 'st'            |
|  '%p'  | 'AM' or 'PM' time designation         | 'AM', 'PM'                  |
|  '%P'  | 'AM' or 'PM' time designation         | 'am', 'pm'                  |
|  '%r'  | Shortcut for '%I:%M:%S %p'            | '%I:%M:%S %p'               |
|  '%R'  | Shortcut for '%H:%M'                  | '%H:%M'                     |
|  '%s'  | Seconds since EPOCH                   | '1315774123519'             |
|  '%S'  | 0-padded seconds                      | '01', '05', '15', '59'      |
|  '%t'  | A tab character: "\t"                 | "\t"                        |
|  '%T'  | 24-hour timestamp                     | '03:02:01', '14:55:59'      |
|  '%u'  | Day of the week, 1 (Mon) to 7 (Sun)   | '1', '2', '5', '7'          |
|  '%U'  | 0-padded week number                  | '01', '09', '17', '52'      |
|  '%V'  | 0-padded week number (same as '%U')   | '01', '09', '17', '52'      |
|  '%w'  | Day of the week, 0 (Sun) to 6 (Sat)   | '0', '1', '4', '6'          |
|  '%W'  | 0-padded week number (same as '%U')   | '01', '09', '17', '52'      |
|  '%y'  | 0-padded 2 digit year                 | '03', '99'                  |
|  '%Y'  | The four digit year (same as '%G')    | '2012', '1999', '1986'      |
|  '%z'  | The timezone                          | '+00:00', '-04:00'          |
|  '%Z'  | The timezone, potentially abbreviated | 'GMT', '+02:00'             |
|  '%%'  | Replaced by '%'                       | '%'                         |
{: .table .table-striped .table-bordered                                       }

**†: Only Python features this string**

**‡: Not featured in other languages**

### Formatter Constants ###

For convienience, there are some predefined formatter strings that can be used.
These each have their own toString methods, such as 
[toISO8601String](/api/toISO8601String).

|   Constant  |                   Method Name                   |       String Equivalent      |
| :---------- | :---------------------------------------------- | :--------------------------- |
| ISO8601Date | [toISO8601DateString](/api/toISO8601DateString) | '%Y-%m-%d'                   |
| ISO8601     | [toISO8601String](/api/toISO8601String)         | '%Y-%m-%dT%T.%L%z'           |
| COOKIE      | [toCOOKIEString](/api/toCOOKIEString)           | '%A, %d-%b-%y %T %Z'         |
| RFC822      | [toRFC822String](/api/toRFC822String)           | '%a, %d %b %y %T %z'         |
| RFC850      | [toRFC850String](/api/toRFC850String)           | '%A, %d-%b-%y %T %Z'         |
| RFC1036     | [toRFC1036String](/api/toRFC1036String)         | '%a, %d %b %y %T %z'         |
| RFC1123     | [toRFC1123String](/api/toRFC1123String)         | '%a, %d %b %Y %T %z'         |
| RFC2822     | [toRFC2822String](/api/toRFC2822String)         | '%a, %d %b %Y %T %z'         |
| RFC3339     | [toRFC3339String](/api/toRFC3339String)         | '%Y-%m-%dT%T%Z'              |
| RSS         | [toRSSString](/api/toRSSString)                 | '%a, %d %b %Y %T %z'         |
| W3C         | [toW3CString](/api/toW3CString)                 | '%Y-%m-%dT%T%Z'              |
| Locale      | [toLocaleString](/api/toLocaleString)           | '%a %b %d %Y %T GMT%z (%Oz)' |
| GMT         | [toGMTString](/api/toGMTString)                 | '%a, %d %b %Y %T GMT'        |
| NCC1701     | [toNCC1701String](/api/toNCC1701String)         | '%Y.%j'                      |
{: .table .table-striped .table-bordered                                                       }


[strftime]: http://pubs.opengroup.org/onlinepubs/007908799/xsh/strftime.html
[strftimec]: http://www.cplusplus.com/reference/clibrary/ctime/strftime/
[strftimepy]: http://docs.python.org/library/datetime.html#strftime-strptime-behavior
[strftimerb]: http://www.ruby-doc.org/core-1.9.3/Time.html#method-i-strftime
[strftimephp]: http://php.net/manual/en/function.strftime.php