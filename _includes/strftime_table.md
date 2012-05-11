| String |              Replaced By              |          Examples           |
| :----: | :------------------------------------ | :-------------------------- |
|  '%a'  | The short day name                    | 'Mon', 'Tue', 'Wed', 'Sun'  |
|  '%A'  | The full day name                     | 'Monday', 'Tuesday'         |
|  '%b'  | The short month name                  | 'Jan', May', 'Oct', 'Dec'   |
|  '%B'  | The full month name                   | 'January', 'May', 'October' |
|  '%c'  | A shortcut for '%a %b %d %T %Y'       | '%a %b %d %T %Y'            |
|  '%C'  | The century                           | 2011 => '20', 1900 => '19'  |
|  '%d'  | 0-padded date                         | '01', '05', '12', '31'      |
|  '%D'  | A shortcut for '%m/%d/%y'             | '%m/%d/%y'                  |
|  '%e'  | Space-padded date                     | ' 1', ' 5', '12', '31'      |
|  '%f'† | Second fractionals                    | '100', '023', '600'         |
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