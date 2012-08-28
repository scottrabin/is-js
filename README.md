is.js
=====

Installing
----------
Cloning: `git clone https://github.com/scottrabin/is-js.git is-js`

NPM: `npm install is-js`

Usage
-----

<table>
	<tr>
		<th colspan="2">Basic type checking</th>
	</tr>
    <tr>
        <td><code>is.string(s)</code></td>
        <td>Determines if the argument is a string</td>
    </tr>
    <tr>
        <td><code>is.number(n)</code></td>
        <td>Determines if the argument is a number</td>
    </tr>
    <tr>
        <td><code>is.bool(b)</code></td>
        <td>Determines if the argument is a boolean (true or false)</td>
    </tr>
    <tr>
        <td><code>is.fn(f)</code></td>
        <td>Determines if the argument is a function</td>
    </tr>
    <tr>
        <td><code>is.array(a)</code></td>
        <td>Determines if the argument is an array</td>
    </tr>
    <tr>
        <td><code>is.object(o)</code></td>
        <td>Determines if the argument is an object. Since nearly all Javascript types inherit from <code>Object</code>, this will most likely return <code>true</code> for anything but numbers, strings, booleans, and <code>null</code>/<code>undefined</code>. This function can be used to determine if arbitrary properties can be set on the given object.</td>
    </tr>
	<tr>
		<td><code>is.regex(r)</code></td>
		<td>Determines if the argument is a regular expression object</td>
	</tr>
    <tr>
        <td><code>is.element(e)</code></td>
        <td>Determines if the argument is an HTMLElement. Does not return <code>true</code> for <code>window</code> or <code>document</code>.</td>
    </tr>
	<tr>
		<th colspan="2">Specialized type checking</th>
	</tr>
	<tr>
		<td><code>is.numeric(n)</code></td>
		<td>Determines if the argument is a number-like value; numbers (i.e. values that return <code>true</code> from <code>is.number(n)</code>) will return true, as well as any string representation of a number. See <a href="http://scottrabin.com/is-js/test.html">the test page for <code>is.numeric</code> to see what strings are accepted as numeric.</td>
	</tr>
	<tr>
		<td><code>is.hash(h)</code></td>
		<td>Determines if the argument is a hash, or key/value pair object that is not an <code>Array</code>, <code>function</code>, or user-defined object.</td>
	</tr>
	<tr>
		<th colspan="2">Collection properties</th>
	</tr>
	<tr>
		<td><code>is.inside(collection, value)</code></td>
		<td>Determines if the specified <code>value</code> is contained within the given <code>collection</code>. If <code>collection</code> is an array, <code>is.inside</code> will check to see if <code>value</code> is an element in the array. If <code>collection</code> is an object, <code>is.inside</code> will check if any property directly on the object is equal to the specified <code>value</code>.</td>
	</tr>
	<tr>
		<td><code>is.set(variable)</code></td>
		<td>Determines if the specified variable is <code>undefined</code> or <code>null</code>.</td>
	</tr>
	<tr>
		<td><code>is.empty(collection)</code></td>
		<td>Determines if the specified collection is empty, or is otherwise falsy. If <code>collection</code> is an array, <code>is.empty</code> checks that the array has no elements. If <code>collection</code> is an object, <code>is.empty</code> checks that the object has no properties declared directly on the object. If <code>collection</code> is neither an array or object, <code>is.empty</code> checks if the given value is falsy; this includes <code>null</code>, <code>false</code>, and empty strings.</td>
	</tr>
</table>

Testing
-------

See the unit tests page at <a href="http://scottrabin.com/is-js/test.html">scottrabin.com/is-js/test.html</a>.

License
-------

is.js is released under the MIT License. See <a href="http://raw.github.com/scottrabin/is-js/master/MIT-LICENSE.txt">MIT-LICENSE.txt</a> for more details.
