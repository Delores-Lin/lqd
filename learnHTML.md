# Web学习随记
## html文件路径的一些通用规则：

* 若引用的目标文件与 HTML 文件同级，只需直接使用文件名，例如：my-image.jpg。
* 要引用子目录中的文件，请在路径前面写上目录名，再加上一个正斜杠。例如：subdirectory/my-image.jpg。
* 若引用的目标文件位于 HTML 文件的上级，需要加上两个点。举个例子，如果 index.html 在 test-site 的一个子文件夹内，而 my-image.jpg 在 test-site 内，你可以使用../my-image.jpg 从 index.html 引用 my-image.jpg。
* 以上方法可以随意组合，比如：../subdirectory/another-subdirectory/my-image.jpg。
***
## HTML文档

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image" />
  </body>
</html>
```
* ```<!DOCTYPE html>```——文档类型。这是必不可少的开头。
* `<html></html>`——`<html> `元素。该元素包含整个页面的所有内容，有时候也称作根元素。里面也包含了 `lang` 属性，写明了页面的主要语种。
* `<head></head>`——`<head> `元素。所有那些你加到页面中，且不向用户展示的页面内容，都以这个元素为容器。
* `<meta charset="utf-8">`——该元素指明你的文档使用 UTF-8 字符编码
* `<title></title>`——`<title>` 元素。该元素设置页面的标题，显示在浏览器标签页上，也作为收藏网页的描述文字。
* `<body></body>`——`<body>` 元素。该元素包含期望让用户在访问页面时看到的全部内容
```
<img src="images/firefox-icon.png" alt="My test image" />
```
* `alt`是图像的描述内容，用于当图像不能被用户看见时显示,`alt` 文本应向用户完整地传递图像要表达的意思。
***
## 标题
HTML 包括六个级别的标题， `<h1>–<h6>`
## 段落
`<p>`元素是用来指定段落的。通常用于指定常规的文本内容
## 列表
* `<ul>` 无序列表
* `<ol>` 有序列表  
列表的每个项目用一个列表项目（List Item）元素 `<li>` 包围。  

like

><samp>
><p>At Mozilla, we're a global community of</p>
>
><ul>
>  <li>technologists</li>
>  <li>thinkers</li>
>  <li>builders</li>
></ul>
><p>working together…</p>
><samp>

## 链接
* 将文本包含在` <a> `元素内
* 为此 ` <a> `元素添加一个` href `属性
* 把属性的值设置为所需网址

like
```
<a href="https://www.pexels.com/photo/wooden-pier-against-mountains-and-sunset-sky-2690807/">原网站</a>
```
## 描述列表
* `<dl>` 定义列表
* `<dt>` 定义标题
* `<dd>` 定义描述
* 一个属于可以有多个描述
like
```
<dl>
  <dt>内心独白</dt>
  <dd>
    戏剧中，某个角色对自己的内心活动或感受进行念白表演，这些台词只面向观众，而其他角色不会听到。
  </dd>
  <dt>语言独白</dt>
  <dd>
    戏剧中，某个角色把自己的想法直接进行念白表演，观众和其他角色都可以听到。
  </dd>
  <dt>旁白</dt>
  <dd>
    戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
  </dd>
  <dd>
    写作中，指与当前主题相关的一段内容，通常不适于直接置于内容主线中，因此置于附近的其他位置（通常位于主线内容旁边一个文本框内）。
  </dd>
</dl>
```
## 引用
* `<blockquote>` 块引用（引用一个段落，多个段落，一个列表等）
* `<q>` 短引用
* 应在`<site>`属性里用URL来只想引用的资源  
>like  块引用
><samp>
><blockquote cite="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote">
>  <p>
>    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
>    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an extended quotation.
>  </p>
></blockquote>
></samp>

行内引用

><samp>
><q cite="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/q"
>    >intended for short quotations that don't require paragraph breaks.</q
>  >
></samp>

cite 还可以既用来显示URL，还可以是其他信息。  
like  

><samp>
>According to the
>  <a href="/zh-CN/docs/Web/HTML/>Element/blockquote">
>    <cite>MDN blockquote page</cite></a
>  >:
></samp>

这样就可以包含所引用资源的标题（用斜体表示），并提供链接。
## 缩略语
* `<abbr>` 缩略语元素
* `title` 属性可以用来提供完整的解释
like
><samp>
><p>
>  我们使用
>  <abbr title="超文本标记语言（Hyper text Markup Language）">HTML</abbr>来组织网页文档。
></p>
><p>
>  第 33 届<abbr title="夏季奥林匹克运动会">奥运会</abbr>将于 2024 年 8月在法国巴黎举行。
></p>
></samp>
## 标记联系方式
* `<address>` 联系信息元素
* 用于提供联系信息，如电话号码、地址、电子邮件等
like
><samp>
><address>
><p>
>Delores<br>
>student<br>
>China<br>
>12345678900
></p>
></address>
></samp> 
## 上标和下标
* `<sup>` 上标元素
* `<sub>` 下标元素
## 展示计算机代码
* ` <code>`：用于标记计算机通用代码。
* `<pre>`：用于保留空白字符（通常用于代码块）——如果文本中使用了缩进或多余的空白，浏览器将忽略它，你将不会在呈现的页面上看到它。但是，如果你将文本包含在
* ` <pre></pre> `标签中，那么空白将会以与你在文本编辑器中看到的相同的方式渲染出来。
* `<var> `：用于标记具体变量名。
* `<kbd>`：用于标记输入电脑的键盘（或其他类型）输入。
* `<samp>`：用于标记计算机程序的输出。
## 标记时间和日期
* `<time>` 时间元素
* `datetime` 属性可以用来提供日期和时间
>like
><samp>
><p>
>  今天是
>  <time datetime="2021-09-15">2021 年 9 月 15 日</time>
>  。
></p>
></samp>
## 用于构建内容的HTML元素
* `<header>`：页眉。
* `<nav>`：导航栏。
* `<main>`：主内容。主内容中还可以有各种子内容区段，可用`<article>`、`<section>` 和 `<div>` 等元素表示。
* `<aside>`：侧边栏，经常嵌套在`<main>` 中。
* `<footer>`：页脚。
* `<aside>` 元素表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。其通常表现为侧边栏或者标注框（call-out boxes）。
* `<span>` :是一个内联的（inline）无语义元素，最好只用于无法找到更好的语义元素来包含内容时，或者不想增加特定的含义时。
  ```
  What is a span element?The answer is <span>this is a span element.</span>
  ```
* `<div>`：一个块级（block）无语义元素，用于将内容分组。
* `<br> `可在段落中进行换行；`<br> `是唯一能够生成多个短行结构（例如邮寄地址或诗歌）的元素。
* `<hr>` 元素在文档中生成一条水平分割线，表示文本中主题的变化（例如话题或场景的改变）。一般就是一条水平的直线。
<hr>

像这样⬆类似于md中的👇

***
## HTML验证
*用 [Markup Validation Service](https://validator.w3.org/#validate_by_uri+with_options) 验证 HTML 代码*
## 图片
* `<img>` 元素用于在 HTML 文档中插入图片。
* `src` 属性指定了图片的 URL。
* `alt` 属性提供图片的替代文本，当图片不能显示时，它将被显示。
* `width` 和 `height` 属性可以设置图片的宽度和高度。*（加宽度和高度是为了让网页为图片预留空间，防止图片比文本晚加载出来时改变文本位置，分散用户的注意力，影响观感）*
* `align` 属性可以设置图片的对齐方式。
* `title` 属性可以提供图片的标题。
* `figure` 和 `figcaption` 元素可以用来创建图片的标题和描述。`figcaption`中包含描述内容。
  like
  ```html
  <figure>
    <img src="images/firefox-icon.png" alt="My test image">
    <figcaption>My test image</figcaption>
  </figure>
  ```
  `figure` 元素不仅可以包含多个 `img` 元素，也可以包含其他元素，如视频、图表、代码等。`figcaption` 元素可以包含多个描述。
## 视频
* `<video>` 元素用于在 HTML 文档中插入视频。
* `src` 属性指定了视频的 URL。
* `controls` 属性可以添加播放、暂停、音量控制等控件。
* `<source>` 元素可以用来提供不同格式的视频文件。`type` 属性指定了视频的 MIME 类型。帮助浏览器快速switch到最佳的格式。
* `<with>` 和 `<height>` 属性可以设置视频的宽度和高度。
* `<autoplay>` 属性可以让视频自动播放。
* `<loop>` 属性可以让视频循环播放。
* `<muted>` 属性可以让视频开始播放时默认静音。
* `<poster>` 属性可以设置视频的封面图片。
* `<preload>` 属性可以指定视频的预加载策略。包括 `auto`(浏览器在页面加载后开始加载视频)、`metadata`(只加载视频元数据，不加载视频)、`none`(不加载视频，直到用户点击播放按钮才开始加载视频)。
* `<track>` 元素可以用来提供字幕或其他文本轨道。
* 通常使用WebVTT格式的字幕文件。  
  要让其与 HTML 媒体一起显示，你需要做如下工作：
  1. 将其保存为 .vtt 文件，放在服务器可以提供服务的地方（见下文），例如和 HTML 文件放在同一文件夹。
  2. 在 HTML 页面中，使用 `<track> `标签链接 .vtt 文件，`<track>` 标签需放在` <audio> `或` <video>` 标签当中，同时需要放在所有` <source> `标签之后。使用` kind `属性来指明是 `subtitles`、`captions` 还是 `descriptions`。然后，使用 `srclang` 来告诉浏览器你是用什么语言来编写的 `subtitles`。最后，添加 `label`，以帮助读者在查找时识别语言。  
  
like
  ```html
  <video controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <track src="subtitles.vtt" kind="subtitles" srclang="en" label="English">
    <p>Your browser doesn't support HTML5 video. Here is a <a href="video.mp4">link to the video</a> instead.</p>
  </video>
  ```
## 音频
* `<audio>` 元素用于在 HTML 文档中插入音频。使用方式和`<video>` 类似。不支持`with/height`和`poster`属性。
## iframe元素
* `<iframe>` 元素用于在 HTML 文档中嵌入另一个 HTML 文档。
* `src` 属性指定了嵌入文档的 URL。
* `width` 和 `height` 属性可以设置嵌入文档的宽度和高度。
* `sandbox` 属性可以限制嵌入文档的能力。
* `border: none;` 可以去掉边框。
* `allowfullscreen` 属性可以让嵌入文档全屏显示。
* 用iframe嵌入视频等时要注意URL前有无`https：`否则无法正常显示（至少B站是这样）
## 矢量图形
* `<svg>` 元素用于在 HTML 文档中插入矢量图形。

## 响应式图片
* `<picture>` 元素用于在 HTML 文档中插入响应式图片。`<picture>` 元素是包含多个 `<source> `元素的容器，它提供了多个不同的资源供浏览器选择，然后还有至关重要的 `<img>` 元素。
* `<srcset>`定义了浏览器可选择的图片集合以及每个图片的大小，每张图片信息的设置和前一个用逗号隔开，每个设置要写：
  1. 一个文件名(elva-fairy-480w.jpg)
  2. 一个空格  
  3. 图片的固有宽度（以像素为单位）（480w）。**注意单位时w，不是px。 **图片的固有尺寸是它的真实大小，以可通过检查你电脑上的图片文件找到。 
*` sizes` 定义了一组媒体条件（例如屏幕宽度）并且指明当某些媒体条件为真时，什么样的图片尺寸是最佳选择
* `<source> `元素包含一个 media 属性，这一属性包含一个媒体条件，这些条件决定哪张图片会显示——第一个条件为真的图片会显示。
* `srcset` 属性包含要显示图片的路径。
* 在任何情况下，你都必须紧贴着` </picture>` 前面提供一个`<img> `元素以及它的 `src` 和 `alt` 属性，否则不会有图片显示。
## 表格
* `<table></table>`中包含表格的所有内容，添加在HTML的`<body>`中。
* `<tr></tr>`元素创建一行。
* `<td></td>`元素创建单元格。
* `<th></th>`元素创建表头。
* 可以在每一个`<td>``<th>`元素中用style属性来设置单元格的样式。
* 使用 `<col>`可以定义表格的列的样式，对于不需要采取任何样式的列也需要添加一个空的`<col>`元素,不然后面的样式会应用在前一列上。
* 通过`<span>`可以将样式应用到多列。
* `<col>`必须包含在`<colgroup>`元素中，`<colgroup>`元素必须包含在`<table>`元素中。
* `<colspan>`属性设置单元格横跨的列数。
* `<rowspan>`属性设置单元格纵向跨的行数。   
* `<caption>`元素用来为表格添加标题。
* `<thead> `元素必须包住表格中作为表头的部分。一般是第一行，往往都是每列的标题，但是不是每种情况都是这样的。如果你使用了` <col>/<colgroup> `元素，那么 `<thead> `元素就需要放在它们的下面。
* `<tfoot>` 元素需要包住表格中作为表脚的部分。一般是最后一行，往往是对前面所有行的总结，比如，你可以按照预想的方式将`<tfoot>`放在表格的底部，或者就放在 `<thead>` 的下面。(浏览器仍将它呈现在表格的底部)
* `<tbody> `元素需要包住表格内容中不在表头或表尾的其他部分。它可以出现在表头的下方，或者有时出现在表脚下方，这取决于你如何安排它。
* `<scope>`属性可以设置表头的作用范围。可以添加在 <th> 元素中，以告诉屏幕阅读器该表头的类型——它是所在行的表头，还是所在列的表头。`<th scope="row">` 告诉屏幕阅读器这是一个行的表头。`<th scope="col">` 告诉屏幕阅读器这是一个列的表头。
* `<id>` 和`<headers>`属性可以用来创建表格的关联。
  * 为每个 <th> 元素添加一个唯一的 id 。
  * 为每个 <td> 元素添加一个 headers 属性。每个单元格的 headers 属性需要包含它从属于的所有标题的 id，之间用空格分隔开。

<samp>
    <body>
    <h1>My spending record</h1>
    <table>
        <thead>
        <caption>How I chose to spend my money</caption>
        </thead>
        <tr>
            <th scope="col">Purchase</th>
            <th scope="col">Location</th>
            <th scope="col">Date</th>
            <th scope="col">Evaluation</th>
            <th scope="col">Cost (€)</th>
        </tr>
        <tfoot>
        <tr>
            <td colspan="4">SUM</td>
            <td>118</td>
        </tr>
        </tfoot>
        <tr>
            <th scope="row">Haircut</th>
            <td>Hairdresser</td>
            <td>12/09</td>
            <td>Great idea</td>
            <td>30</td>
        </tr>
        <tr>
            <td id="lassagna">Lasagna</td>
            <td headers="location lassagna">Restaurant</td>
            <td headers="date lassagna">12/09</td>
            <td headers="evaluation lasagna">Regrets</td>
            <td headder="cost lassagna">18</td>
        </tr>
        <tr>
            <td scope="row">Shoes</td>
            <td>Shoeshop</td>
            <td>13/09</td>
            <td>Big regrets</td>
            <td>65</td>
        </tr>
        <tr>
            <tds cope="row">Toothpaste</td>
            <td>Supermarket</td>
            <td>13/09</td>
            <td>Good</td>
            <td>5</td>
        </tr>
    </table>

</body>

</html>
</samp>

