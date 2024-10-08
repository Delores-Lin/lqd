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
* 层叠
  * 当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则。
* 优先级
  * 一个元素选择器不是很具体，则会选择页面上该类型的所有元素，所以它的优先级就会低一些。
  * 一个类选择器稍微具体点，则会选择该页面中有特定 `class` 属性值的元素，所以它的优先级就要高一点。
* 继承
  * 继承是 CSS 中一个重要的概念，它允许元素继承父元素的样式。
  * 继承的优先级比元素选择器低，所以***有些***元素如果没有设置样式，则会继承父元素的样式。
* 伪类和伪元素的优先级高于元素选择器。
* 控制继承
  * `inherit` 设置该属性会使子元素属性和父元素相同。实际上，就是“开启继承”。例如：`color: inherit;`
  * `initial` 设置该属性会使属性值恢复到默认值。
  * `unset` 设置该属性会使属性值恢复到自然值。如果属性是自然继承那么就是 inherit，否则和 initial 一样
  * `revert` 设置该属性会使属性值恢复到浏览器的默认样式。
  * `revert-layer` 将应用于选定元素的属性值重置为在上一个层叠层中建立的值。
  * `all`属性可以用于同时将这些继承值中的一个应用于（几乎）所有属性。它的值可以是其中任意一个（inherit、initial、unset 或 revert）。这是一种撤销对样式所做更改的简便方法，以便回到之前已知的起点。例如：`all: initial;`
### 控制继承
* `inherit` 设置该属性会使子元素属性和父元素相同。实际上，就是“开启继承”。例如：`color: inherit;`
* `initial` 设置该属性会使属性值恢复到默认值。
* `unset` 设置该属性会使属性值恢复到自然值。如果属性是自然继承那么就是 inherit，否则和 initial 一样
* `revert` 设置该属性会使属性值恢复到浏览器的默认样式。
* `revert-layer` 将应用于选定元素的属性值重置为在上一个层叠层中建立的值。
* `unset` 属性可以用于撤销对样式所做更改，以便回到之前已知的起点。例如：`color: unset;`
## 层叠层
* 层叠层的创建顺序决定了同意来源内层的优先权顺序。
* 创建层叠层
  * 使用`@layer`规则创建层叠层。后面跟一个或多个层的名称来声明层。若没有提供层名称则将创建一个新的匿名层。例如：`@layer a , b , c;//则创建了顺序为 a > b > c 的层叠层。`
* ```
  @layer a {
   /* 层 a 的样式 */
   }
  ```
  可以像a层中添加样式。
* 已声明的层在后面重新声明并不会改变层的顺序
* 使用`@import`将样式表导入具名层和匿名层。例如：`@import url("style.css") layer(b);`,如果`@import`语句包含层，那么这些层会成为该具名层或匿名层的子层。
* 层叠层的优先级（执行顺序）
  1. 层叠层普通样式的声明顺序
  2. 未分层普通样式
  3. 内联普通样式（使用在元素内使用style属性设置的样式）
  4. 动画样式
  5. 未分层重要样式（使用`!important`声明的样式）
  6. 已分层倒序重要样式
  7. 内联重要样式
  8. 过度样式
## 盒模型
* block外部显示类型：
  *  盒子会产生换行。
  *  width 和 height 属性可以发挥作用。
  *  内边距、外边距和边框会将其他元素从当前盒子周围“推开”。
  *  如果未指定 width，方框将沿行向扩展，以填充其容器中的可用空间。在大多数情况下，盒子会变得与其容器一样宽，占据可用空间的 100%。
* inline外部显示类型：
  *  盒子不会产生换行。
  *  width 和 height 属性不起作用。
  *  内边距、外边距和边框会被应用但不会将其他元素从当前盒子周围“推开”。
  *  水平方向的内边距、外边距和边框会把内容和其他元素分开。
* 在行内元素中用`display: block/inline/block-flex/inline-flex`可以改变其显示类型。
* CSS替代盒模型
  * `box-sizing: border-box;` 改变盒模型，使得内边距、边框和内容的宽度计算包含在盒子的宽度中。
* `display:inline-block;` 使元素具有块级元素的行为，但具有行内元素的宽高属性。
## 背景与边框
### 背景
* `background-color` 设置元素的背景颜色。
* `background-image` 设置元素的背景图像。
* `background-repeat`设置背景图像的重复方式。
  * `no-repeat` 不重复。
  * `repeat-x` 水平方向重复。
  * `repeat-y` 垂直方向重复。
  * `repeat` 水平和垂直方向都重复。
* `background-size` 设置背景图像的尺寸。
  * `auto` 保持原图大小。
  * `cover` 保持背景图像完整覆盖元素。
  * `contain` 保持背景图像完整包含元素。
* `background-position` 设置背景图像的位置。它可以使用一到四个值进行定义。  
  * 如果使用两个非关键字值，第一个值表示水平位置，第二个值表示垂直位置。  
  * 如果仅指定一个值，则第二个值默认是 center。  
  * 如果使用三个或四个值，则长度百分比值是前面关键字值的偏移量。  
  * 用坐标系统定位，方框左上角为`(0,0)`。
* 渐变背景
  * `linear-gradient()` 函数用于创建线性渐变。
  * `radial-gradient()` 函数用于创建放射性渐变。
  * `repeating-linear-gradient()` 函数用于创建重复的线性渐变。
  * `repeating-radial-gradient()` 函数用于创建重复的放射性渐变。
  * `conic-gradient()` 函数用于创建圆锥渐变。
  * `to` 关键字用于定义渐变的方向。  
    * 例如：`background: linear-gradient(to bottom, red, blue);`表示从上到下渐变。
* `background-attachment` 设置背景图像是否随元素内容滚动。
  * `scroll` 背景图像随元素内容滚动。
  * `fixed` 背景图像固定。
  * `local` 背景图像相对于元素定位。
* `background` 简写属性，用于设置背景颜色、背景图像、背景重复、背景尺寸和背景位置。
  * background-color 只能在最后一个逗号之后指定。
background-size 值只能立即包含在 background-position 之后，用“/”字符分隔，例如：center/80%。[更多](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background)
* 用rgba()函数设置背景颜色的透明度。第四个值表示透明度，取值范围为0~1。
## 边框
* `border-radius` 设置元素的圆角半径。
## 书写模式
* `writing-mode`属性用于设置文本的书写方向。
  * `horizontal-tb` 水平书写模式。
  * `vertical-rl` 垂直书写模式，从右到左。
  * `vertical-lr` 垂直书写模式，从左到右。
* 在切换书写模式的同时，也在高边块和内联文本的方向。块维度指的总是块在页面书写模式下的显示方向。而内联维度指的总是文本方向。
* 横向书写模式下，映射到`width`的属性被称作内联尺寸（`inline-size`）——内联维度的尺寸。而映射`height`的属性被称为块级尺寸（`block-size`），这是块级维度的尺寸。
* `margin-top`属性的映射是`margin-block-start`——总是指向块级维度开始处的边距。
* `padding-left`属性映射到 `padding-inline-start`，这是应用到内联开始方向（这是该书写模式文本开始的地方）上的内边距。
* `border-bottom`属性映射到的是`border-block-end`，也就是块级维度结尾处的边框。
* ![横向](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Handling_different_text_directions/horizontal-tb.png)
  ![纵向](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Handling_different_text_directions/vertical.png)
* 一些属性的取值是一些物理值（如`top`、`right`、`bottom`和`left`）。这些值同样拥有逻辑值映射（`block-start`、`inline-end`、`block-end`和`inline-start`）。
## 溢出
* `overflow`属性用于控制元素内容溢出元素框时的行为。默认值为`visible`，即内容不会溢出。
  * `hidden` 内容溢出元素框时隐藏。
  * `scroll` 内容溢出元素框时显示滚动条。  
  * `overflow-x` 和 `overflow-y` 属性分别用于控制水平和垂直方向的溢出。
  * `overflow-auto` 内容溢出时自动显示滚动条。
## CSS单位
* CSS有四种基本单位：长度单位、角度单位、时间单位和频率单位。
### 长度单位
  * 绝对长度单位：像素（px）***【常用】***、厘米（cm）、英寸（in）、毫米（mm）、点（pt）、分（pc）。
  * 相对长度单位：  
    * `em`、`rem`：相对于父元素和根元素的字体大小。
      * `em`的每一个连续的嵌套层都会不断变大，而`rem`始终不变
    * `vh`、`vw`：相对于视窗的高度和宽度。
  * `line-height`：相对于字体大小的行高。
    * 对于单行文本，将`line-height`设置为容器的height，可以时间垂直居中。


* 有些值接受数字，不添加任何单位。接受无单位数字的属性的一个例子是不透明度属性（`opacity`），它控制元素的不透明度（它的透明程度）。此属性接受 0（完全透明）和 1（完全不透明）之间的数字。
* 使用 RGB 与 alpha 参数的颜色只让你指定的颜色不透明。
* calc() 函数用于计算表达式的值。
* 百分比值是相对于父元素的宽度或高度的，而不是视窗的宽度或高度。
* HSL也用于指定颜色，接受三个值(色调、饱和度、亮度)。第四个值可以是alpha参数指定不透明度，对于旧版本CSS需要使用hsla()函数。
### 角度单位
  * `deg` 度，一个完整的圆是`360deg`。
  * `grad` 百分度，一个完整的圆是`400grad`。
  * `rad` 弧度，一个完整的圆是2π弧度约等于`6.2832rad`。
  * `turn` 圆周，一个完整的圆是`1turn`。
## 图片 媒体 表单
* `min-`和`max-`属性可以用来限制元素的最小和最大宽度或高度。
* `object-fit`属性用于控制图片的缩放方式。
  * `fill` 图片填充元素。(图片可能会变形)
  * `contain` 图片完全包含元素。(图片不会变形)
  * `cover` 图片完全覆盖元素。(图片不会变形，但多余的图像内容会被裁剪)
* 在一些浏览器中，表单元素默认不会继承字体样式。
* `font-family:inherit;` 继承父元素的字体。
* `float`属性用于设置元素的浮动方式。
  * `left` 元素向左浮动。
  * `right` 元素向右浮动。
  * `none` 元素不浮动。
  * `inline-start` 元素向内开始浮动。
  * `inline-end` 元素向内结束浮动。
  * `block-start` 元素向上开始浮动。
  * `block-end` 元素向下结束浮动。
## 样式化表格
* `table-layout`属性用于控制表格的布局方式。
  * `auto` 自动布局，单元格内容根据内容调整大小。
  * `fixed` 固定布局，单元格大小固定，内容自动换行。（常用，能直观地处理表的内容）
* `:nth-child()`伪类用于选择特定子元素。
  * `:nth-child(n)` 选择第n个子元素。
  * `:nth-child(even)` 选择偶数子元素。
  * `:nth-child(odd)` 选择奇数子元素。//和偶元素配合可以用来设置表格的斑马条纹。
  * `:nth-child(n+m)` 选择从第n个子元素开始的第m个子元素。
  * `:nth-child(-n)` 选择倒数第n个子元素。
  * `:nth-child(n of selector)` 选择第n个选择器匹配的元素。
* `border-collapse`属性用于合并相邻边框。
  * `collapse` 合并相邻边框。
  * `separate` 不合并相邻边框。
  * 设置边框时默认有间隔，设置`border-collapse: collapse;`可以合并边框。
* `caption-side`属性用于设置表格标题的位置。
  * `top` 标题在表格顶部。
  * `bottom` 标题在表格底部。
## 阴影
* `text-shadow`属性用于设置文本的阴影。
* `box-shadow`属性用于设置元素的阴影。
  * `h-shadow` 阴影水平偏移量。
  * `v-shadow` 阴影垂直偏移量。
  * `blur-radius` 模糊半径。
  * `spread-radius` 阴影扩散半径。
  * `color` 阴影颜色。
  * `inset` 关键字可以使阴影变成内阴影。(`text-shadow`只能设置外阴影)
  * 语法：`box-shadow: h-shadow v-shadow blur-radius spread-radius color;`颜色可以放在最开始，也可以放在最后。
## 滤镜
* `filter`属性用于设置滤镜。
  * `blur()` 将高斯模糊应用于元素，单位px。
  * `brightness()` 调整元素的亮度，0全黑，1原始颜色，大于1增加亮度。
  * `contrast()` 调整元素的对比度，0为原始对比度，大于1增加对比度。
  * `drop-shadow()` 沿元素的轮廓生成阴影效果，接受x、y、模糊半径、颜色，但不接受`inset`和`spread`.
  * `grayscale()` 将元素变成灰度,接受0~1的数值。
  * `hue-rotate()` 调整元素的色调，接受角度值。
  * `invert()` 反转元素,接受0~1的数值。
  * `opacity()` 调整元素的透明度，接受0~1的数值。
  * `saturate()` 调整元素的饱和度，0为原始饱和度，大于1增加饱和度。
  * `sepia()` 将元素变成深褐色,接受0~1的数值。
## 混合模式
*`background-blend-mode`属性用于设置背景的混合模式。
* `mix-blend-mode`属性用于设置元素的混合模式。
## background-clip
* `background-clip`属性用于设置背景的裁剪方式。
  * `border-box` 背景延伸至边框外。
  * `padding-box` 背景延伸至内边距外。
  * `content-box` 背景延伸至内容区外。
  * `text` 背景延伸至文本外。需要将color属性设置为transparent。
