---
layout: api
title: arrIndexOf
permalink: arrIndexOf/index.html
filename: api/arrIndexOf.md
---

While many browsers, include `Array.prototype.indexOf`,  namely Microsoft
Internet Explorer 6, 7 & 8 do not. Because of this,  we cannot depend on its
existence, and it is therefore easier to use a custom helper function.

It is worth noting that `arrIndexOf` is not a to-spec  replacement of
`Array.prototype.indexOf`. It is not as strict,  does not include the fromIndex
argument, and it does not coerce the  `length` attribute into a number. If you
require a to spec implimentation of `Array.prototype.indexOf`, do not use this.

[For more information about `Array.prototype.indexOf`, see the  MDN Article]
(https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf)
