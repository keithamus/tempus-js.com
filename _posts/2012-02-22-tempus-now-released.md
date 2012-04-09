---
layout: blog_post
title: Tempus is now released
author: keithamus
---

It gives me great pleasure to announce that the Tempus javascript library has 
been released, [in front of a live LNUG audience](http://lnug.org). You can 
see the presentation here:

<div class="embed video">
    <iframe src="http://player.vimeo.com/video/37814062?title=0&amp;byline=0&amp;portrait=0" width="400" height="225" frameborder="0">
    </iframe>
</div>

> Tempus is designed to be a full replacement to the `Date` class inside 
> Javascript, to solve the  frustration of missing features and broken 
> functionality. Tempus  offers over 230 methods ranging from string methods to
> date maths  and assertion functions to iterater functions, all packed into a
> tiny __4.5kb__ (minified and gzipped) package.

Tempus began development in September 2011 as a general purpose date library, 
to make it easy to deal with dates in a consistent format, and to provide 
common functionality that meets the level found in other languages.

The native Date library in Javascript has seen very little improvement over the 
last 5 iterations of Javascript, there are still quirks which haunt the 
specification, and when compared to other languages, we can really see just how
lacking the Date object really is. Tempus attempts to alleviate this...

The long plan for Tempus is to stabilise the library, pair down functionality 
until the best possible API is available, and then attempt to approach adopting 
the set of functionality in some manner to the Javascript standards commitee, 
ECMAScript. This goal is a few years off; but building up traction and a strong 
community is the first goal to this. If jQuery & friends can do this with 
querySelectorAll, then Tempus can do it for Date.