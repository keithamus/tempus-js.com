---
layout: docs
title: Browser support and details
permalink: browser-support/index.html
filename: docs/browser-support.md
breadcrumbs: [docs]
---

Tempus works in many browsers - it has official support for the following:

|         Browser         | Tested Versions |
|-------------------------| :-------------: |
| [Firefox][Firefox]      |    3.6-Latest   |
| [Chrome][Chrome]        |     1-Latest    |
| [Internet Explorer][IE] |     6-Latest    |
| [Opera][Opera]          |      Latest     |
| [Safari][Safari]        |     5-Latest    |
{: .table .table-striped .table-bordered    }

To gauge what versions to test for, StatCounter's global statistics are used,
to establish the lowest popular version of a particular vendor. You can see the
[full list here][BrowserStats].

Every major, point and patch release is tested in all browsers, across Mac OSX,
Windows and Linux machines. At current there is no benchmarking done on any
machines. Every commit up to a release is tested using the headless browser
testing suite [PhantomJS](http://www.phantomjs.org/) -- automatically using
[TravisCI](http://travis-ci.org/).

# Feature Support

Tempus introduces a compatibility layer for various functions that are not
supported in certain browsers. All functionality in Tempus works in all of the
above tested browsers. The below table represents functionality in Date that is
only present in certain browsers. Based on
[Kangax's Compatibility tables](http://kangax.github.com/es5-compat-table/)

|   Function  | Firefox | Chrome |  IE  | Opera | Safari |
|-------------| :-----: | :----: | :--: | :---: | :----: |
|  Date.now   |    3    |    5   |   9  | 10.50 |    4   |
| toISOString |   3.5   |    5   |   9  | 10.50 |    4   |
{: .table .table-striped .table-bordered                 }

If you find any cross browser issues, or if you feel a browser should be
supported, then please [file an issue][Issues] on the issue tracker.


{% capture year %}{{ 'now' | date: '%Y' }}{% endcapture %}
{% capture month %}{{ 'now' | date: '%m' }}{% endcapture %}

[Firefox]: http://firefox.com
[Chrome]: http://chrome.google.com
[IE]: http://windows.microsoft.com/en-GB/internet-explorer/products/ie/home
[Opera]: http://opera.com
[Safari]: http://apple.com/safari
[Issues]: {{ site.github_project_url }}/issues/new
[BrowserStats]: http://gs.statcounter.com/#browser_version_partially_combined-ww-monthly-{{ year | minus: 1 }}{{ month }}-{{ year }}{{ month }}-bar