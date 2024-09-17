# CSS学习随记
## css基础知识
* `padding`（内边距）：是指内容周围的空间。在下面的例子中，它是段落文本周围的空间。  
详见：[padding语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding#%E8%AF%AD%E6%B3%95)
* `border`（边框）：是紧接着内边距的线。 
* `margin`（外边距）：是围绕元素边界外侧的空间。  
详见：[margin语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin#%E8%AF%AD%E6%B3%95)
![photo](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics/box-model.png)
 >注意：`margin`和`padding`一样
  >* 当只指定一个值时，该值会统一应用到全部四个边的内边距上。
  >* 指定两个值时，第一个值会应用于上边和下边的内边距，第二个值应用于左边和右边。
  >* 指定三个值时，第一个值应用于上边，第二个值应用于右边和左边，第三个则应用于下边的内边距。
  >* 指定四个值时，这些值依次作为上边、右边、下边和左边的内边距（顺时针方向）。
* `width`：元素的宽度
* `background-color`：元素内容和内边距底下的颜色
* `color`：元素内容（通常是文本）的颜色
* `text-shadow`：为元素内的文本设置阴影
* `display`：设置元素的显示模式
* `background-color`：设置背景颜色
```html
html {
  background-color: #00539f;
}
```
* `text-shadow`：对元素的文本内容施加阴影。它的四个值是：
  * 第一个像素值设置阴影与文本的水平偏移量：它横移的距离。
  * 第二个像素值设置阴影与文本的垂直偏移量：它向下移动的距离。
  * 第三个像素值设置阴影的模糊半径。一个更大的值会产生一个更模糊的阴影。
  * 第四个值设置阴影的基色。
  
  like
  ```
  text-shadow: 3px 3px 1px black;
  ```
***
## 选择器
* CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。选择器所选择的元素，叫做“选择器的对象”。
### 选择器列表
* 将多个选择器组合起来，在它们之间加上一个逗号，变为选择器列表。两个选择器之间可以另起一行更显眼。
* 将多个选择器组合成选择器列表后，只要有一个选择器无效，整个规则都会失效。
### 类型选择器
* 类型选择器（Type Selector）用于选取特定类型的 HTML 元素。类型选择器对大小写不敏感。
### 全局选择器
* 全局选择器（Universal Selector）用于选取所有 HTML 元素。
* `*` 符号是全局选择器的简写。
```css
* {
  /* 全局样式 */
}
```
### 类选择器
* 类选择器以`.`开头，后面跟着类名。能建立一个指向应用一个类的特定元素。
```
span.highlight {
  background-color: yellow;
}
h1.highlight {
  background-color: pink;
}
```

### ID选择器
* ID选择器以`#`开头，后面跟着 ID 名。可以在 ID 前面加上类型选择器，只指向元素和 ID 都匹配的类。
### 属性选择器
* 存否和值选择器  
  用于选取带有特定属性的 HTML 元素。  
  如：
  1. `li[href] {color:red;}`所有带有 href 属性的 `li`元素都会被选中.
  2.  `li[href="https://www.example.com"] {color:red;}`指向 https://www.example.com 的 li 元素 ，另一部分用空格隔开的值的不会被选中如`<i class="a b">`
  3. `a[href~="https://"] {color:red;}` 指向以 `https://` 开头的 a 元素，若另一部是分用空格隔开的值的类也会被选中，如：`<li class~=“a b”>` 
`li[class|="a"] {color:red;}`匹配带有一个名为attr的属性的元素，其值可正为value，或者开始为value，后面紧随着一个连字符。如:`<li class|="a-value">`
* 子字符串匹配选择器
  |选择器	|示例	|描述|
  |---|---|---|
  |`[attr^=value]`|`li[class^="box-"]`|匹配带有一个名为attr的属性的元素，其值开头为value子字符串。|
  |`[attr$=value]`|`li[class$="-box"]`|匹配带有一个名为attr的属性的元素，其值结尾为value子字符串|
  |`[attr*=value]`|`li[class*="box"]`|匹配带有一个名为attr的属性的元素，其值的字符串中的任何地方，至少出现了一次value子字符串。|
  
  具体用法与存否和值选择器相似
* 匹配属性值时，在闭合括号前使用`i`值可忽略大小写。如：`li[class ="a" i]{color:red;}` 
### 伪类和伪元素
* 伪类开头为冒号的关键字（`:active`、`:hover`、`:focus`等）是选择器的一种，它用于选择处于特定状态的元素.例如：
```
article p:first-child {
  font-size: 120%;
  font-weight: bold;
  }
```
这样就会将文章中的第一个段落设置为粗体，字号增加。除此之外还有`:last-child`,`:only-child`,`:invalid`,`:nth-child`,`:nth-last-child`,`:empty`,`:target`,`:enabled`,`:disabled`,`:checked`,`:not()`等伪类。
* 用户行为伪类，只会在用户以某种方式和文档交互的时候应用。
  * `:hover`——上面提到过，只会在用户将指针挪到元素上的时候才会激活，一般就是链接元素。
  * `:focus`——只会在用户使用键盘控制，选定元素的时候激活。
* 伪元素是 CSS 的一种抽象机制，允许我们创建一些看起来像元素的东西，但实际上并不是元素。伪元素开头为双冒号`::`例如：
  * `::before`和`::after`——在元素内容前或后插入内容。
  * `::first-line`和`::first-letter`——选择元素的第一行或第一个字母。
  * `::selection`——选择用户当前选中了的文本。
```
p::first-line {
  text-transform: uppercase;
  font-weight: bold;
}
```
这样就会将段落的第一行设置为大写，加粗。
* 伪类和伪元素的组合
  * 伪类和伪元素可以组合使用，例如：`a:hover::before`。
* 更多伪类和伪元素请参考[伪类和伪元素](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#%E7%94%9F%E6%88%90%E5%B8%A6%E6%9C%89before_%E5%92%8Cafter_%E7%9A%84%E5%86%85%E5%AE%B9)和[MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)
* 伪元素和`content`属性一起用，可以用CSS将内容插入到文档中，例如：
```
p::before {
  content: "This is a ";
}
```
### 关系选择器
* 后代选择器: ` ` 选择器可以选择作为某元素后代的元素。
  ```
div span {
  /* 选择 div 元素后代中的 span 元素 */
}
  ```
* 子元素选择器: `>` 选择器可以选择作为某元素直接子元素的元素。
  ```
div > span {
  /* 选择 div 元素直接子元素中的 span 元素 */
}
  ```
* 相邻兄弟选择器: `+` 选择器可以选择紧跟在另一个元素后的元素。
  ```
h1 + p {
  /* 选择紧跟在 h1 元素后的 p 元素 */
}
  ```
* 通用兄弟选择器: `~` 选择器可以选择作为某元素所有兄弟元素的元素。
  ```
h1 ~ p {
  /* 选择 h1 元素后面的所有 p 元素 */
}
  ```
### 伪类和伪元素的优先级
* 伪类和伪元素的优先级高于元素选择器。