---
layout: docs
title: Developing with TDD
permalink: developing-with-tdd/index.html
filename: docs/developing-with-tdd.md
breadcrumbs: [docs]
---

Tempus is written using [Test Driven Development][TDD] principles, to ensure the
code is reliable, that it doesn't break (no regressions) and to prove the code 
does what it says it will do. As of writing this, Tempus has over 5000 
tests (or "assertions") which ensure that every facet of its functionality is 
covered.

Many of the most popular frameworks in use today are developed using [TDD][TDD]
as a principle, or at least have [Unit Tests][Unit Tests] to ensure the code 
quality.

## QUnit Crash Course

Tempus uses the [QUnit][QUnit] library to as an automated 
[unit testing][Unit Tests] suite. It is thoroughly recommended to read up on 
[QUnit][QUnit] and explore it yourself before developing on Tempus, but here is 
a crash course in how it works:

Lets start with a simple example. We want a function called `addNumbers` which 
adds two numbers together. So we know that if we put `1` and `1` into the 
function, it should return two. We can write a test for this **before** we write
the code:

{% capture code %}
QUnit.test('addNumbers() adds two numbers together', function () {

    equal(addNumbers(1, 1), 2, 'addNumbers(1, 1) returns 2');

});
{% endcapture %}{% include code.html %}

![An image of a passing test"](/img/developing-with-tdd-first-test.png)

We've just written a QUnit.test(). The first argument of QUnit.test() is the 
description of the test that we're running, and the second argument is the 
test function.

Inside the test function, we're using a method called `equal`. `equal` takes 3 
arguments: The _code result_, the _expected result_ and a _description_. The 
_code result_ (in this case `addNumbers(1, 1)`) should evaluate to what the 
_expected result_ (in this case `2`) is. The description just tells us what is
happening when the test is run. So this test says that the return value of 
`addNumbers(1, 1)` is equal to `2`. If it doesn't equal `2`, the test will fail, 
and it will tell us why, what was returned and what was expected. If it does 
equal two, the test will pass and we can move on. Right now it is failing 
because we haven't written any code. So lets write the method:

{% capture code %}
function addNumbers(a, b) {
    return a + b;
}
{% endcapture %}{% include code.html %}

The test now passes. Great! But it would also pass if addNumbers looked like 
this:

{% capture code %}
function addNumbers(a, b) {
    return 2;
}
{% endcapture %}{% include code.html %}

This is because addNumbers will _always_ return `2`. The best way to ensure this
doesn't happen is to write more tests. When writing tests, try to pretend that 
you're not the one writing the final code - instead the person writing the code 
is the laziest developer you've ever met. Let's call this developer Vlad. Now 
when Vlad writes code, he just wants the test to pass, so you need to make sure 
you write tests that Vlad can only get passing if he does his job. Lets try:

{% capture code %}
QUnit.test('addNumbers() adds two numbers together', function () {

    equal(addNumbers(1, 1), 2, 'addNumbers(1, 1) returns 2');
    equal(addNumbers(2, 2), 4, 'addNumbers(2, 2) returns 4');
    equal(addNumbers(2, 8), 10, 'addNumbers(2, 8) returns 10');
    equal(addNumbers(6, 4), 10, 'addNumbers(6, 4) returns 10');
    equal(addNumbers(443, 1), 444, 'addNumbers(443, 1) returns 444');
    equal(addNumbers(0, 1), 1, 'addNumbers(0, 1) returns 1');

});
{% endcapture %}{% include code.html %}

Vlad is going to have a hard time being lazy and getting this test to pass, 
without actually writing what he is meant to. So this is a good test. You could 
write a piece of code like this:

{% capture code %}
QUnit.test('addNumbers() adds two numbers together', function () {
    var numA = Math.random(), numB = Math.random();
    equal(addNumbers(numA, numB), numA + numB, 'addNumbers(A, B)===A+B');
});
{% endcapture %}{% include code.html %}

This test would really trip Vlad up, but it is also not very easy for you to 
look at, you can't be sure it is doing its job, and it violates a pretty big 
principle of TDD - having parameters which are always the same. The trick is to 
write test code that is simple enough for anyone to read, while having good 
enough coverage that the function doesn't one day do something different that 
the tests didn't spot.

### Writing descriptions

It is important to write descriptions in tests to ensure the tests are as clear 
as possible. It doesn't have any bearing on the functionality but it is still 
important to give a consistent style In writing your test descriptions, there 
are two common styles: declarative and imperitive.

Declarative means to write something in a manner of what you expect to happen. 
So a declartive sentence is 'addNumbers should add two numbers together'. This 
is ok, it says what you expect to happen, but Tempus uses Imperative instead:

Imperative is to write it as if that is what will happen. It's a subtle 
difference, but here is that same description in imperative style: 'addNumbers 
will add two numbers together', or 'addNumbers adds to numbers together'. It 
gives a harder line as to what the test is proving, it is proving that this will 
absolutely happen, not 'should' or 'might', definitely will absolutely do this.

It is important that you write in an imperative style, and describe exactly what
the function will output, because when a test fails, we want to see what it was
meant to do, which allows us to more easily find out why it hasn't done that.

It is also massively important that you describe the test not only in the test's
title, but also in each assertion.

Look at the following two tests:

{% capture code %}
QUnit.test('isTrue() returns true', function () {
    equal(isTrue(), true, 'isTrue()===true');

    ok(isTrue());
});
{% endcapture %}{% include code.html %}

The latter is more succinct, but that is bad, because succint tests don't give 
us much when they fail. Look at the difference between each one failing:

![An image of two failing tests"](/img/developing-with-tdd-test-fail.png)

The first one fails, and gives you the resulting output, the expected output, 
and red text saying "isTrue()===true". The second, however, just gives you red 
text saying "failed". The second test is awful because it tells you absolutely 
nothing about where to go from here.

The moral of the story is, if your failing tests just say "failed", then you 
absolutely need to improve the tests to give you more information.

## How Tempus Tests

Tempus of course uses QUnit to run tests. Each of the main test files are split 
into different categories, all inside the `/test/` folder. For example, 
`tempus.test.creation.js` tests all the different ways you can make new dates 
with Tempus, while `tempus.test.monthMethods.js` will test all the different 
methods which do month operations. It is important to put your tests in the 
right location, so they're easier to find.

Tempus' test suite also includes a simple code coverage tool, to ensure that 
there is atleast one test for every method in the library. It is really easy to 
use and, provided you do it right, can be very useful in spotting weak test 
coverage. If you're writing a test, to use the code coverage tool, simply do 
the following:

{% capture code %}
covers(Tempus.prototype, 'Tempus', 'myMethod', 'AnotherMethod');
QUnit.test('myMethod and AnotherMethod should do this and that', function () {
{% endcapture %}{% include code.html %}

So right above every `Qunit.test` sits the `covers` method, which requires a 
minimum of 3 arguments. The first argument is the object that has those methods 
in it, which will usually be `Tempus.prototype`. The second is the name of that
object, which serves like a comment, usually it'll be `'Tempus'`. The third 
argument onwards is the methods that you're covering with the test below, so 
this test will mark `Tempus.prototype.myMethod` and 
`Tempus.prototype.AnotherMethod` as done.

### Running tests in Tempus

Tempus tests are pretty easy to run. You can just go to your command line and 
run `grunt` where Tempus is, and this will run the tests in PhantomJS (provided 
you have it installed), and then in NodeJS.

If you don't want to run tests like that, then you can open the "index.html" 
file in the `tests/` directory, and open that in a web browser.

PhantomJS is fake browser that runs inside of the command line. It's good for 
running tests quickly to check if there are any glaring errors, and is great as 
a way to quickly check code before you commit it, but I want to re-iterate that 
it is a fake browser. By fake I mean that no user will ever use this browser to 
browse the web (unless they're crazy), and therefore it can give false positives
or negatives to otherwise bad or good tests. You should typically test in at 
least a couple of other real browsers, such as Firefox or Chrome. PhantomJS is
there merely as a quick sanity check.

Before a release, Tempus will be tested in a huge variety of browsers, on lots 
of different platforms. We don't expect every developer to do the same, but if 
you do we'll like you that much more. To see the full list of browser targets, 
just look at the [browser support docs](/docs/browser-support).

Because we're testing code that deals with the Date object, tests are also run 
in different timezones. If you have the ability to set this up on your machine 
to run tests, then please do so.

[TDD]: http://google.com
[Unit Tests]: http://google.com
[QUnit]: http://google.com