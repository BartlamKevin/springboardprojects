/*
ES5 Global Constants
var PI = 3.14;
PI = 42; // stop me from doing this!
*/
/* Write an ES2015 Version */
let PI = 3.14;
PI=42;

/*
1. What is the difference between var and let?
Var can be redeclared and redefined and you can acess hoisted variables through it.
Let cannot be redeclared but you can redefine it, it also is block scoped so it will stay inside of the braces of a function.

2. What is the difference between var and const?
Var can be redclared and redefined and you can acess hoisted variables through it.

Const cannot be redeclared or redefined and it is block scoped. 
If your const is defined as an object or array it's properties/items can be updated or removed.

3. What is the difference between let and const?
Let can be redefined while const cannot. 
If either is defined as an object or array you can update or remove or remove form the array/object,
however you risk risk losing the arry or object if you use let.

What is hoisting?
It's a how you describe how compiling js works. Variables are brought to the top of the scrope they are in which is "hoisting".
With var you can access the undefined variable before you declare it later on. Functions are also hoisted and can called before you define them.
Classes are also hoisted.
*/
