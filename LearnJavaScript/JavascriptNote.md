# Javascript 学习随记
* 一般用camelCase命名变量，即第一个单词首字母小写，随后单词首字母大写，like`firstName`
* 变量名只能用字母、下划线和美元符号，但不能以数字开头，且不能以关键字来命名，比如以`new`作为变量名是不可以的，但可以在new前加上_或$。
* 按照惯例，变量名以小写开头,而常数用大写例如`PI`.
* 在Javascript中，有类型的是值而不是变量
* `//` 表示单行注释，`//`后面可以跟注释内容  
  `/* */` 表示多行注释，`/*`后面可以跟注释内容，`*/`表示注释结束。
* typeof运算符可以用来判断变量的数据类型，返回值是字符串。
  例如：typeof "hello" // 输出"string"
* 输入string时一定要把内容用单引号或双引号括起来，否则会报错。
* 用`let`声明变量（赋值可以改变，且可以创建空变量），用`const`声明常量（赋值不可改变，且不能创建空变量），用`var`声明变量（尽量不用）。
* ·2**3`表示2的3次方，`2**3`的结果是8。
* x++表示先计算x的值，再加1.
* 用反撇号`编写模板字符串，用单引号和双引号都不行  
  like`let str = `hello ${name}, age ${age}`;`or`const myself = `I'm a ${firstName}, a ${job}!`
* 用`Number()`函数将字符串转换为数字。
* 用`String()`函数将数字转换为字符串。
* 5 falsy values: `null`, `undefined`, `0`, `NaN`, `''` (empty string)
* 在if语句中，JavaScript会尝试将（）内的任何值强制转换为布尔值（即`true`或`false`），然后进行判断。
* 如果if语句只有一行，内容可以不用花括号{}括起来。
* 三个等号（`===`）将会返回的是布尔值（即true或false），而不是赋值。且不执行强制类型转换。  
同理`！==`是严格的不等于，不执行强制类型转换。
* 两个等号（`==`）将执行强制类型转换，然后再进行比较。 
* 对于`==`的比较，JavaScript执行以下规则：
  ![photo](https://i.sstatic.net/7OVKq.png) 
***因此为了使得代码更加简洁，避免产生bug，建议使用三个等号。***
* `prompt()`函数可以让用户输入字符串，并返回输入的字符串。
* `&&`代表AND，`||`代表OR，`!`代表NOT。
* switch语句可以用来根据不同的条件执行不同的代码块。
  like`switch(day){case 1: console.log("Monday");break;   
  case 2: console.log("Tuesday"); break; default: console.log("Invalid day");}`
* 三元运算符可以用来简化if语句。
  like`let result = a > b? "a is greater than b" : "b is greater than a";`  
  其中`?`表示条件为真时的返回值，`:`表示条件为假时的返回值。
* 在代码第一句写上`"use strict";`可以启用严格模式，限制一些不安全的操作。如果前面有任何代码，那么严格模式将不会被激活。
## function
* `function name(params){}`用来定义函数，`name`是函数名，`params`是函数参数。（）内可以写函数体，用`return`语句返回值。
* 函数返回的一定是一个值（包括string、number、boolean、object等），如果没有返回值，则返回`undefined`。
  * Function Decoration
    ```
    function add(a, b) {
      return a + b;
    }
    const plus = add;
    console.log(plus(2, 3));
    ```
  * Function Expression
      ```
      const add = function(a,b){
        return a+b;
      }
      const plus = add;
      console.log(plus(2,3));
      ```
* `return`语句用来结束函数，并返回一个值。***单行函数可以省略`return`关键字。***
* 箭头函数（Arrow Function）是ES6新增的函数，可以用来简化函数定义。
  `const add = (a, b) => a + b;`
* 当return一个函数后，这个函数就已经执行完毕，不能再执行。
* prompt()函数可以让用户输入字符串，并返回输入的字符串。
## Array
* 列表（Array）是一种数据结构，可以用来存储一组值。
  列表的两种创建方法：
  ```
  const list = [1, 2, 3, 4, 5];
  const list2 = new Array(1, 2, 3, 4, 5);
  ```
  * 列表的索引从0开始，可以用方括号`[]`访问列表中的元素。  
  like
  ```
  console.log(list[0]);
  console.log(list[list.length-1]);
  ```
* 列表的长度可以通过`length`属性获取。  
  like`console.log(list.length);`
* 用`list[1]=2`可以修改列表中的元素。
* 用`const`声明列表时，可以改变列表中的一项，但不能替换整个数组，但用`list`声明时可以.
* 列表中可以包含不同类型的值，也可以包含列表。
* 用`push()`方法可以向列表末尾中添加元素，`push()`方法返回列表的新长度。  
  like
  `list.push(6);`
  `console.log(list.push(6))`则返回6。
* 用`unshift()`方法可以向列表头部添加元素，同理`unshift()`方法返回列表的新长度。  
* 用`pop()`方法可以删除列表中的最后一个元素。`pop()`方法返回删除的元素。
* 用`shift()`方法可以删除列表中的第一个元素。`shift()`方法返回删除的元素。
* `indexof`方法可以查找元素的索引，如果元素不存在，则返回`-1`。  
  like`console.log(list.indexOf(3));`
* `includes`方法可以判断列表中是否包含某个元素，如果包含，则返回`true`，否则返回`false`.用法同上。其不进行强制类型转换。
## Object
* 对象（Object）是一种数据结构，可以用来存储一组键值对。
  对象的两种创建方法：
  ```
  const obj = {name: "John", age: 30, city: "New York"};
  const obj2 = new Object({name: "John", age: 30, city: "New York"});
  ```
  * 对象中的键是字符串（也就是变量名），值可以是任意类型。
  * 键和值之间用冒号`:`分隔，键和值组成一对键值对，键值对之间用逗号`,`分隔。
  * 对象中的键可以是字符串、数字、布尔值，也可以是对象。
  * 对象中的值可以是任意类型。
  * 对象中的键是不可以重复的，如果重复了，后面的值会覆盖前面的值。
  * 对于对象来说，值的顺序是无序的，与列表不同。
  * 对象中的键可以用方括号`[]`访问，也可以用点`.`访问。在后面加上`=`可以给对象添加属性。
  * 对象中的属性可以用`delete`关键字删除。
  like
  ```
  console.log(obj["name"]);
  console.log(obj.age);
  ```
  与`.`不同的是`[]`内可以进行运算，可以用表达式来访问对象中的值,而`.`只能访问对象的属性。
  like
  ```
  console.log(obj["na" + "me"]);
  ```
  若在对象中不存在该属性，则返回`undefined`。
  * this关键字在对象的方法中代表当前对象,可以用`this.属性名`访问对象中的属性。  
    like
    ```
    const person = {
      name: "John",
      age: 30,
      greet: function() {
        console.log(`Hello, my name is ${this.name}`);
      }
    };
    person.greet(); // Output: Hello, my name is John
    ```
    `this.属性名=值`可以给对象添加属性。
## Loop
* for循环
  ```
  for(let i=0; i<5; i++){
    console.log(i);
  }
  ```
  其中`let i=0`声明了一个变量`i`，`i<5`是一个条件，`i++`是一个递增语句，表示`i`的值加1。之间用`;`分隔。
  * for循环可以用来遍历列表。
* continue语句可以跳过当前循环的剩余语句，直接进入下一次循环。
* break语句可以退出循环。
  like
  ```
  for(let i=0; i<5; i++){
    if(i===3)break;//退出循环
    console.log(i);}
  ```
  cintinue使用方式同理
* while循环
  ```
  let i=0;
  while(i<5){
    console.log(i);
    i++;
  }
  ```
  与for循环类似，`let i=0`声明了一个变量`i`，`i<5`是一个条件，`i++`是一个递增语句，之间用`;`分隔。
  * while循环可以用来遍历列表。
  * 当不确定要进行多少次循环时用while循环。