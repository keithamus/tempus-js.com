---
layout: docs
title: Getting started with Tempus (in the Browser)
permalink: browser-getting-started/index.html
filename: docs/browser-getting-started.md
breadcrumbs: [docs]
---

Tempus works almost the same on the browser as it does in Node.JS. It supports
the most popular browsers made in this millenium (sorry Mosaic users). Because 
of the size restraints around sending the code to the browser, Tempus has been 
split up into modules (this is in contrast to [Node](docs/node-getting-started)
which includes all of the 1st-party modules in one go).

### Modularity

The core module provides pretty much everything you'll need to work with dates. 
If you need extra functionality, there are official plugins that can be added in
as well:

* [The Timer][Timer] module provides a small but very useful replacement to 
    [setTimeout][setTimeout] and [setInterval][setInterval] methods, which 
    includes allowing stopping, starting and pausing timers.

* [The Intervals][Interval] module allows you to work out differences between 
    two dates, including getting the approximate time between two dates.

Each module can be embedded within Tempus as a single file. The 
[build page](/build.html) can make you a version of Tempus with any or all of 
these modules loaded in.

### Browser support

Tempus works in many popular browsers, to read more on browser support, please 
[visit the full docs page on Browser Support](/docs/browser-support)

### Using Tempus as a AMD/CommonJS module

For those of you who use CommonJS modules, or AMD style modules, such as 
RequireJS, Tempus does support these. 

If you want to read more on using AMD, then you can see the 
[full docs page on Using AMD modules with Tempus](/docs/browser-using-with-amd)

### Minifying Tempus

Tempus -- when fully uncompressed -- is in around 10 times the size of the fully
uncompressed version. You should always make sure your JavaScript assets as 
compressed as possible. For more information on building Tempus, please refer to
the [build documentation for browsers](/docs/browser-building-tempus)

[setInterval]: https://developer.mozilla.org/en/JavaScript/Reference/setInterval
[setTimeout]: https://developer.mozilla.org/en/JavaScript/Reference/setTimeout
[Timer]: /docs/module-timer
[Interval]: /docs/module-interval