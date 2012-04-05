---
layout: api
title: now
permalink: now/index.html
filename: api/now.md
---

`Tempus.now` is exactly the same as `Date.now`. 
It takes no arguments, and merely returns the milliseconds since epoch

{% capture code %}
var now = new Tempus.now( );
console.log(now); // 1300000000000
{% endcapture %}{% include code.html %}