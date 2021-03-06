# JavaScriptDemo
这是JavaScript练手小例子
一、jQuery的引入
-----------

  **1、通过百度的CDN**
  

```
<script src="http://libs.baidu.com/jquery/2.1.4/jquery.min.js"></script>
```

  **2、下载jQuery.js文件**，然后`<script src="../js/jQuery.js"></script>`引入
  注意事项：jQuery文件如果放在../../resources/文件夹下，则加载不出来，可能是因为resource文件夹
  禁止外部访问。

二、jQuery的简单例子
-------------

  

```
  /*文档就绪事件处理器*/
    $(document).ready(function(){
        /*事件处理函数：所有的事件函数都在文档自身的“文档就绪事件处理器”内部进行定义*/
        $("button").click(function(){
            /*内部调用css方法修改css属性*/
            $("p").css("background-color","yellow");
        });
    });
```

三、jQuery基本语法
------------


  

**1、jQuery名称冲突问题：**

   jQuery使用$符号作为jQuery的简介方式。但是某些JavaScript库中的函数
    （比如Prototype）同样使用\$符号。jQuery使用名为noConflict()的方法来解决该问题。
    var jq=jQuery.noConflict()，帮助我们使用自己的名称（比如jq）来代替\$符号。
    

**2、jQuery使用原则：**
        a.把所有的jQuery代码置于事件处理函数中
        b.把所有事件处理函数放置于文档就绪事件处理器中
        c.把jQuery代码置于单独的.js文件中
        d.如果存在名称冲突，则重命名jQuery库
    **3、jQuery常用事件**
        a.\$(selector).ready(function)
            文档的就绪事件，当HTML文档就绪可用
        b.\$(selector).click(function)
            被选中元素点击事件
        c.\$(selector).dblclick(function)
            被选中元素双击事件
        d.\$(selector).focus(function)
            被选中元素聚焦事件
        e.\$(selector).mouseover(funtion)
            被选元素的鼠标悬停事件
        f.\$(selector).blur(function)
            被选中元素失去焦点时触发的事件（form验证很有用）
        g.\$(selector).change(function)
            被选中元素失去改变时触发事件（form验证很有用）
        h.\$(selector).submit(function)
            提交表单时触发事件，改事件只适用于表单元素（form验证很有用）
        ......
    **4、jQuery效果**
        a.\$(selector).hide()
              隐藏被选中的元素
        b.\$(selector).show()
              显示被选中的元素
        c.\$(selector).toggle()
              切换（在隐藏和显示之间）被选元素
        d.\$(selector).slideDown()
              向下滑动（显示）被选中元素
        e.\$(selector).slideUp()
              向上滑动（隐藏）被选中元素
        f.\$(selector).slideToggle()
              交替向上和向下滑动
        g.\$(selector).fadeIn()/fadeOut()
              淡入淡出被选中元素
        h.\$(selector).fadeTo()
              把被选元素淡出为给定的不透明度
        i.\$(selector).animate()
              对元素执行自定义动画
        ......

四、jQuery HTML操作（重要）
-------------------

   jQuery包含很多供改变和操作HTML的强大函数
    **1、改变HTML内容**
        语法：\$(selector).html(content)
        html()函数改变所匹配的HTML元素的内容(innerHTML)
    **2、添加HTML内容**
        a.在尾部追加内容（同一行）
        语法：\$(selector).append(content)
        b.在HTML元素内预置内容
        语法：\$(selector).prepend(content)
        c.在所有匹配元素之后插入HTML内容(下一行)
        语法：\$(selector).after(content)
        d.在所有匹配的元素之前插入HTML内容
        语法：\$(selector).before(content)

五、jQuery CSS操作
--------------

   jQuery拥有三种供css操作的重要函数:
    \$(selector).css(name,value)
    \$(selector).css({properties})
    \$(selector).css(name)
    **1、函数css(name,value)操作实例**
    

```
$("p").css("background-color","yellow");
```
   **2、函数css({properties})同时为所有匹配元素的一系列css属性设置值**
    

```
$("p").css({"background-color":"yellow","font-size":"200%"});
```
   **3、函数css(name)返回指定的css属性的值：**
    

```
$(this).css("background-color");
```

六、jQuery Size操作
---------------

   jQuery拥有两种供尺寸操作的函数：
  

```
  $(selector).height(value)
  $(selector).width(value)
```

七、jQuery Ajax
-------------

   **A.jQuery Ajax概述**
   
   1、Ajax是一种创建快速动态网页的技术，其通过在后台与服务器交换少量数据的方式，允许网页进行异步更新。
            这意味着有可能在不重载整个页面的情况下，对网页的一部分进行更新。
     2、jQuery提供了供Ajax开发的丰富函数库，通过jQuery Ajax，使用HTTP GET和HTTP POST，都可以从远程服务器上请求TXT，HTML，XML或者JSON。而且可以直接把远程数据载入网页的被选HTML元素中。
    **B.jQuery函数（写得很少，做的很多）**
        1、jQuery的load函数是一种简单的（但很强大的）Ajax函数。语法如下
        

```
$(selector).load(url,data,callback)
```
   

 - url是请求地址；

   

 - data是要发送的数据（可选）；

  

 - callback是请求完成后的回调函数。


      **2、Low Level AJAX 底层AJAX**
            \$.ajax(options)是底层级AJAX函数的语法。\$.ajax提供了比高层级函数更多的功能，但是同时也更难使用。
            option参数设置的是name|value对，定义url数据、密码、数据类型、过滤器、字符集、超时以及错误函数

八、jQuery AJAX请求
---------------
   a.\$(selector).load(url,data,callback)
        把远程数据加载到被选的元素中
    b.\$.ajax(options)
        把远程数据加载到XMLHTTPRequest对象中
    c.\$.get(url,data,callback,type)
        使用HTTP GET来加载远程数据
    d.\$.post(url,data,callback,type)
        使用HTTP POST来加载远程数据
    e.\$.getJSON(url,data,callback)
        使用HTTP GET来加载远程JSON数据
    f.\$.getScript(url,callback)
        加载并执行远程的JavaScript文件
    参数说明：(selector) jQuery元素选择器
    (url)被加载数据的url地址
    (data)发送到服务器的数据的键值对
    (callback)当数据被加载时，所执行的函数
    (type)被返回的数据的类型(html,xml,json,jsonp,script,text)
    (options)完整AJAX请求的所有键值对选项

九、jQuery选择器
-----------

   0、\$("tagname") element选择器 选择所有带有指定标签名的元素
    1、\$("#id") #选择器 选择符合指定id的元素
    2、\$("body *") *选择器 选择body下的所有元素
    3、\$(".class") .选择器 选择符合的类选择器
    4、\$(":animated") :animated选择器 选择当前的动画元素
    5、\$(":button") :button选择器 选择type="button"的`<button>`元素和`<input>`元素
    6、\$("p:contains(is)") :contains选择器 选择所有包含"is"的`<p>`元素
    7、\$("p:eq(1)") :eq选择器 选择第二个`<p>`元素 选取带有指定index值的元素
    8、\$("tr:even") :even选择器 选择偶数下标的`<tr>`元素（可以用来改变列表呈现数据时交替改变背景色体现层次感）
    9、\$(":file") :file选择器 选择类型为file的`<input>`元素，可以在：前面加上其他如id原则器等加以限定
    10、\$("p:first") :first选择器 选择第一个`<p>`元素
    11、\$("tr:gt(2)") :gt(index)选择器 选择下标值大于index的所有tr元素,index从0开始
    12、\$(":image") :image选择器 选择所有type="image"的`<input>`元素
    13、\$(":input") :input选择器 选择所有`<input>`元素
    14、\$("p:last") :last选择器 选择最后一个`<p>`元素
    15、\$("tr:lt(2)") :lt选择器 选择前两个`<tr>`元素 选取带有小于指定index值的元素
    16、\$("tr:odd") :odd选择器 选择每个相隔（奇数）的`<tr>`元素
    17、\$(":password") :password选择器 选择type="password"的`<input>`元素
    18、\$(":submit") :submit选择器 选择type="submit"的`<input>或<button>`元素
    19、\$(":text") :text选择器 选择type="text"的`<input>`元素
    20、\$("body:visible") :visible选择器 选择body下的所有可见元素
    21、\$("body [id!=main_header]") [attribute!=value]选择器 选择body下id不等于main_header的所有元素 选择属性不等于相应值的元素
    22、\$("[id&=header]") [attribute&=value]选择器 选择所有带有id属性值且以header结尾的元素
    23、\$([id=header]") [attribute=value]选择器 选择所有id属性为header的元素
    24、\$([id]") [attribute]选择器 选择所有带有id属性的元素

十、回顾jQuery
----------

   **1、jQuery是一个JavaScript库**
    **2、jQuery不是一门编程语言**
    **3、jQuery库包含的特性**
        a.HTML元素选取
        b.HTML元素操作
        c.css操作
        d.HTML事件函数
        e.JavaScript特效和动画
        f.HTML DOM遍历和修改
        g.AJAX
        h.Utilities
