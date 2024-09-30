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
## 类型转换
### 用`Number()`函数将字符串转换为数字。
  * `undefined`转换为`NaN`
  * `null`转换为`0`
  * `true`转换为`1`
  * `false`转换为`0`
### 用`String()`函数将数字转换为字符串。
### 用`Boolean()`函数转换为布尔值。
* 5 falsy values: `null`, `undefined`, `0`, `NaN`, `''` (empty string)
* 包含0的字符串"0"或" "布尔值为true。
* 
* 在if语句中，JavaScript会尝试将（）内的任何值强制转换为布尔值（即`true`或`false`），然后进行判断。
* 如果if语句只有一行，内容可以不用花括号{}括起来。

* `prompt()`函数可以让用户输入字符串，并返回输入的字符串。
* switch语句可以用来根据不同的条件执行不同的代码块。
  like`switch(day){case 1: console.log("Monday");break;   
  case 2: console.log("Tuesday"); break; default: console.log("Invalid day");}`
* 三元运算符可以用来简化if语句。
  like`let result = a > b? "a is greater than b" : "b is greater than a";`  
  其中`?`表示条件为真时的返回值，`:`表示条件为假时的返回值。
* 在代码第一句写上`"use strict";`可以启用严格模式，限制一些不安全的操作。如果前面有任何代码，那么严格模式将不会被激活。
## 数据类型
* 其中原始数据类型
  * `number`
  * `bigint`
  * `string`
  * boolean
  * `null`
  * `undefined`
  * `symbol`
* 复杂数据类型
  * `object`learn
## 运算符
* `**`表示乘方运算符。
* `%`表示取余运算符。
* `++``--`自增，自减运算符，可以用在变量前，也可以用在变量后，但需要立即使用自增后的值时只能用前置形式。
* `,`运算符可以用来分隔表达式，每个表达式都运行了，但只有最后一个结果会被返回。优先级非常低
## 字符串比较
* 按字符（母）逐个比较(Unicode编码顺序)，遇到不同字符即返回结果，两个字符串同时用完则判定相等，否则为基数的字符串更大。例如`'Z>A'`,`'Glow>Glee'`,`'Bee>Be'`
* 三个等号（`===`）将会返回的是布尔值（即true或false），而不是赋值。且不执行强制类型转换。  
同理`！==`是严格的不等于，不执行强制类型转换。
* 两个等号（`==`）将执行强制类型转换，然后再进行比较。 
* 对于`==`的比较，JavaScript执行以下规则：
  ![photo](https://i.sstatic.net/7OVKq.png) 
* 相同数据类型相比较不执行强制类型转换。
* `undefined`和`null`在"=="运算中不执行强制类型转换且相等，但不会等于任何其他值，但在'> < <= >='运算中会执行强制类型转换。`NaN`不等于任何值。
***因此为了使得代码更加简洁，避免产生bug，建议使用三个等号。***
## 条件语句
* if语句
* `?`运算符
  * 例如`let result = condition ? value1 : value2;`如果结果为真，则返回`value1`，否则返回`value2`。
  * `?`运算符可以套娃
  * `?`运算符可以用来简化if语句。
* `||`代表OR
  * 操作数为布尔值时，只要有一个操作数为真，则返回真。不是布尔值则会转化为布尔值处理，多用于if语句中。
  * **寻找第一个真值** 处理每一个操作数时，都转化为布尔值，若结果为真，则返回这个操作数的初始值，若全为假则返回最后一个操作数的初始值。
    * **短路求值** 例如`true||alert("hello")`不会弹出提示框，`false||alert("hello")`会弹出提示框。
* `&&`代表AND
  * 操作数为布尔值时，只有两个操作数都为真，才返回真。不是布尔值则会转化为布尔值处理。
  * **寻找第一个假值** 处理每一个操作数时，都转化为布尔值，若结果为假，则返回这个操作数的初始值，若全为真则返回最后一个操作数的初始值。
  * `&&`在`||`之前执行。
* `!`代表NOT
  * `!!`可以用来将某个值转化为布尔值。
  * 优先级高于`&&`和`||`
* `??`空值合并运算符
  * `a ?? b`如果`a`不为`null`和`undefined`，则返回`a`，否则返回`b`。
  * 优先级与`||`相同。
* JS禁止将`??`与`!!`和`&&`连用，除非使用括号明确指定优先级。
## function
* `function name(params){}`用来定义函数，`name`是函数名，`params`是函数参数。（）内可以写函数体，用`return`语句返回值。
* 在函数中声明的变量只在函数内可见。
* 函数对外部变量拥有全部的访问的权限，也可以修改外部变量，但如果函数内声明了同名变量，那么函数会屏蔽外部变量。
* 如果一个函数被调用，但参数未被提供，那么相应值会变成`undefined`。
* 可以先给函数声明中的参数赋值，即指定默认值，在参数值未被传递时使用。
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
* `return`语句用来结束函数，并返回一个值。***单行函数可以省略`return`关键字。***空值的`return`会返回`undefined`。
* `return`与返回值之间不能添加新行，JS会默认在一行`return`后面添加一个分号。
* 箭头函数（Arrow Function）是ES6新增的函数，可以用来简化函数定义。
  `const add = (a, b) => a + b;`
* 当return一个函数后，这个函数就已经执行完毕，不能再执行。
* 严格模式下，函数声明在所在代码块内的任何位置都可见，但在代码块外不可见。
* 而函数表达式在代码被执行时才创建，并仅从那一刻开始可用。
### 箭头函数
* `let func = (a,b,c) => a+b+c;`
* 如果只有一个参数，可以省略圆括号；如果没有参数，括号为空，但需要保留括号。
* 如果表达式有多行，那么需要用`{}`包裹起来，且需要包含`return`才能返回值。
## 交互
* `alert()`函数可以用来弹出一个警告框。
* `prompt()`函数可以用来让用户输入内容，并返回输入内容为字符串。  
  `result = prompt(title,[default value]);`第一个值是显示给用户的文本，第二个值是可选值，指定input框的默认值。
  * 如果用户点击取消，或按下Esc键，则返回`null`。
* `confirm()`函数可以用来弹出一个确认框，点击确认返回`true`，点击取消返回`false`。
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
* `concat()`可以用来合并多个列表，返回一个新的列表。例如：`const newlist = list1.concat(list2, list3);`
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
  * 对象最后一个值应以逗号结尾。
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
### for循环
  ```
  for(let i=0; i<5; i++){
    console.log(i);
  }
  ```
  其中`let i=0`声明了一个变量`i`，`i<5`是一个条件，`i++`是一个递增语句，表示`i`的值加1。之间用`;`分隔。
  * for循环可以用来遍历列表。
## break和continue语句
* continue语句可以跳过当前循环的剩余语句，直接进入下一次循环。
* break语句可以退出循环。
* 内联变量声明只在循环中可见
  like
  ```
  for(let i=0; i<5; i++){
    if(i===3)break;//退出循环
    console.log(i);}
  ```
  cintinue使用方式同理
* break 和 continue 不可以用在'?'的右边，会报错。
### 标签
  * 标签是循环之前带有冒号的标识符
  * `break<labelName>`语句跳出循环至标签处
  * 跳转至下面的标签是无效的
  * break指令必须在代码块内
### while循环
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
#### do-while循环
* 可以将条件检查移至循环体下面
```
do{
  //循环体
}while(condition);
```
### "swtich"语句
* 语法：
  ```
  switch(expression){
    case value1:
      //code block
      break;
    case value2:
      //code block
      break;
    default:}
    ```
  * 按顺序将`value`与`expression`比较，如果**严格相等**则执行相应`case`下的`code block`，知道遇到最近的`break`语句。
  * 没有符合的`case`则执行`default`代码块（如果`default`存在）。
  * 共享同一段代码的case可以被分为同一组
  ```
  case1:
  case2:
  //code block
  break;
  ```
## 正式搭建网页
* `document.querySwlwctor()`可以用来获取网页中的元素。在其后面加上`.textContent`可以获取元素的文本内容。加上`.value`可以获取输入框的值。
* `Math.random()`可以用来生成一个0~1之间的随机数。
* Math.floor()可以用来取整。`Math.floor(-0.123)//-1`
* `Math.trunc()`可以用来去除小数部分。`Math.trunc(-0.123)//-0`