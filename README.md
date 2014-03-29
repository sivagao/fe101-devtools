# FE101 - DevTools

##CopyRight
『今天我讲devtools， 一个开发者工具， 应该算是很简单很轻松了。 大家只要熟悉这个工具的信息架构IA, 功能点，完成一些常见任务的流程就行了。 如果遇到不熟悉的点（譬如jQuery的API, 譬如网络HTTP知识）， 后续的课程会有介绍，不用担心。』

在本节课程只做功能展示使用。同时，通过这节课的学习，会把大家前几节课的知识点顺带复习下。 同时这节课的效果是非常明显的 - 譬如修改一些文案啊，改下图标按钮的大小背景色啊，做一些增加工作效率的小插件小脚本啊。 都会很方便和简单。

好了， 在大家听完前面三巨头的讲解的HTML. CSS, JS后， 大家会很好奇自己在编辑器中写的代码， 到最终的浏览器上看到的样子，这中间发生了那些事情，从哪里可以看到当前的状态。
那么今天通过学习强大的DevTools（Chrome浏览器提供的开发者工具）， 来一探究竟吧。

为了让大家有个直观的印象，首先来个30秒的小动画，欢乐一下！
这段的意思大概就是『用elements面板来解决html和css问题，用console和debugger来解决js相关的问题， 用network面板来解决网络相关的问题』 - 等学完了这课，大家再回来看下就更加明晰了。
好了， 看完视频， 大家对devtools稍微熟悉了。

 在介绍高大上的Devtools之前， 我们也来看看兄弟工具张什么样子（问下大家都装了chrome吧， ）
（Firefox, 两年前特别火的Firebug, IE(其实新版IE的开发者工具还挺不错的），Opera的。
大家会发现它们大同小异， 顶部的菜单栏有各种ICON可以切换不同的功能面板， 主体部分分为两块， 左侧一般是全局预览，右侧是选中信息的详情。

我们就是用通过它， 来完成对Elements - (html, style), sources()等方方面面来辅助开发！
想知道HTML是怎么被解析，结合CSS后怎么被渲染，结合JS后怎么被执行来响应大家的交互和后端来数据通信。
讲了这么多，大家肯定听的头都大了。 一个工具怎么实现那么多的功能还能保持良好的可用性的呢？
当前我们这节课的重点是Elements面板（），这个是建议（所有同学都学会），能完成相应的小练习，然后在日常工作是可以灵活运用。
然后快速的过一下Resource, Network，接着Script和Console，涉及到js简单的脚本编程，通过debugger等快速实现小功能（这章建议，非工程的同学简单了解，知道大致的流程。 建议其他岗的工程师们能对照学习，看看和自己开发上异同。）


好， 我们就直接呼出它，开始今天的课程！如何进入呢？ 大体上有两种方法，
1 通过快捷键 - 对于的快捷键是cmd+opt+i
2 通过UI按钮进入（譬如在网页上右键菜单选择审查元素，在chrome的菜单项Tools -> DevTools开发者工具）


外围边角
那么现在出现在我们眼前的就是今天课程的主角，DevTools了。 可以发现，因为版本升级的原因， 截图中的样子和我浏览器中打开的差别乍一看差别很大， 但其是主体功能和UI元素是大致相同的。
（我们先看一下这Section要学会的知识点： checklist， 读一遍。）
好我们一个个来完成
1 关闭打开Devtools, 结合Tips点。
等等
最后一个， emulation，看看mobile agent， 我们希望看看我们的网页在移动浏览器上的显示效果， 怎么做呢？ - Chrome提供了Emulation功能（之前是在settings选项中， 因为移动开发的越来越流行被抽取来了） 。 
(这里非常多的仿真机型可以选择， 我们选， 发现窗口大小已经改变了，然后刷新下看是否在移动端也基本可用， 我们发现鼠标cursor变化了， 代表当前是支持touch事件的， 我们swipeleft，swiperight， 左右拖动， 嗯工作正常。)
大家试着在新窗口用手机仿真访问下我们豌豆荚的www官网，看看效果吧。 非常不错的体验吧！



  1. 关闭 DevTools

  2. 不同的 Tab 对应不同的功能，通过鼠标切换功能模块

  3. 通过第三方插件扩展 DevTools 的功能

  4. 改变 DevTools 在页面中的悬停位置

  5. 调出 console 功能

  6. 通过「审查元素」快速查找/定位元素 - 在elements面板我们会细讲
  7. 记录当前页面的错误信息 - 在sources面部我们会接着细讲
  8. 配置 Settings，实现如修改 UA，模拟手机访问等功能




好看玩了，边边角角的小功能点，我们进入最最重要的Elements Panel的学习。
先大概介绍下，便于完成接下来的DOM操作和Style样式更新的两个练习。【解释DOM?】
大体介绍，然后逐点Tip讲解， 好了， 说了这多， 我进入练习，看能不能很好的解决问题。

元素（Elements）面板
DEMO - 废话少说，我们开始demo吧 （这里需要在re下稿子 - ） HTML 与 STYLE 两个

（下面的知识点最好结合demo去讲解）

在元素（Elements）面板中，可以看到整个页面的 DOM 树结构和每个元素的所有属性，同时也可以实时地修改这些元素及其属性，并可以实时看到修改后的效果。我们这里以 Google 简体中文首页为例，鼠标右键单击“ Google 搜索” 按钮，选择“审查元素”，您会看到如下的窗口界面（注：此处使用的内嵌工具窗口模式，如您的工具窗口为独立窗口模式，可通过点击窗口左下方的“停靠”下、 图标 将其变为内嵌模式）：
在工具窗口右侧，显示的是被选元素的样式信息，如有兴趣，可以尝试通过双击现有属性来修改该元素的 style 属性或应用的某个选择器中的属性值，也可以通过取消勾选的方式去掉一些属性，同时观察页面的实时变化。那怎样给现有的元素或者选择器增加一个属性值呢？不用着急，鼠标双击您所想修改的元素的 element.style 部分或者它应用的选择器的空白部分（如下图所示），即可添加属性。需要注意的是，添加任何属性都必须以分号结束。

 拖动工具窗口最右侧的滚动条，在展开的 Styles 模块下方还有 Metrics、Properties、Event Listeners 几大模块。Metrics 模块以图形方式展示出左侧面板中选中元素的盒模型并标出了各部分的详细数值，在调试页面布局问题时，这样的展示方式往往更直观、更清晰。

 向上拖动工具窗口中部的滚动条，找到“图片”元素，点击后，可看到在页面上相应的元素被选中，这时我们将工具窗口右侧的滚动条拖到最下方，展开 Event Listeners 中个各项，可看到这个链接（元素）的相关事件监听函数。通过 Event Listeners 项右侧的“齿轮”图标，您可以选择是只显示选中节点上的注册的事件，还是显示整个事件流中所有注册的事件。

点击工具窗口左下角的放大镜图标 可进入“审查模式”，选中后，放大镜变为蓝色，这时随鼠标在主窗口的页面中的移动，你会看到相应的元素被高亮标识出来，点击后，工具窗口会显示选中元素的 DOM 节点信息。另外值得注意的一点是，在 Google Chrome 浏览器开发人员工具里，所有脚本和样式表是按语法着色的，调试起来更加清晰。



  1. 展示当前页面中被渲染的元素列表

  2. 含有箭头的元素表明，该元素含有子元素。当子元素被展开时箭头向下，收起时箭头向右

  3. 这是一个面包屑，自左而右的包括了选中元素的各级父元素，hover 到对应的节点时在窗口中高亮显示对应的模块

  4. 将元素列表与样式信息分开的一条竖线，我们可以移动这条竖线。

  5. 展示元素样式与其他信息

  6. 选中元素的最终样式

  7. 展示该元素从浏览器默认叠层样式表中继承而来的样式

  8. 展示用户样式表附加的样式，包括从页面 css 文件、 JavaScript 脚本或 DevTools 中获取的样式

  9. 展示用户样式表附加的样式，包括从页面 css 文件、 JavaScript 脚本或 DevTools 中获取的样式

  10. 模拟用户操作，通过勾选对应的选项可以查看该元素在用户操作行为下的样式，例如选中 hover 时将会将该元素的样式切换为 hover 的状态

  11. 调整图片色值的展示方式，默认状态为 as authored，可以调整为「十六进制」、「红绿蓝」或以「色相、饱和度、明度」等三种格式

  12. 可视化元素的盒模型，清晰的展示元素的 margin、border 和 padding 等属性


TODO: (挂掉的资源，超大的图片，cookie呀) - 来个demo（先侦察，改链接，等）


看了那多么elements的feature后， 我们接着进入resources面板的学习
在资源面板中，可以查看到请求的资源情况，包括CSS、JS、图片等内容，同时还可以查看到存储相关的如Cookies、HTML5的Database和LocalStore等，你可以对存储的内容编辑和删除。
What: The resources panel shows resources associated with the page

Why: Viewing the page's resources is essential for debugging. You might also be curious as to what information other websites store in localStorage, cookies, or any other data storage mechanism. Additionally, certain resources, such as localStorage can be modified via the developer tools.
TODO: 例子（挂掉的handler - addEvent， 发现错误，debugger！）

进入sources面板的学习
在脚本面板里，您可以方便的调试 JavaScript 代码。下面的图中标注了在脚本面板里的几个主要功能：
单步调试，不进入函数体内部
② 单步调试，进入函数体内部
③ 跳出当前函数

设置断点后按 F5 刷新，页面会在执行到断点语句处停下，您可以在右侧添加所需观察的变量，来进行跟踪变量值的变化，也可查看堆栈调用情况及全局变量和函数的信息，也可以将鼠标移到感兴趣的变量名上直接查看此变量当前的值。


  1. The Sources Panel. If you do not see as many scripts as you expect, refresh the page with the Sources panel open.
  2. 此窗格可以隐藏,auto-hidden或固定。点击小右上角的图标使得在这些状态之间切换。此窗格可以调整大小

  3. The Sources tab within the left-hand side pane; you'll likely have this tab open most of the time. The resources it lists are separated by sub-domain, and you can expect to see CSS, JavaScript and HTML within the tab.
  4. The Content Scripts tab (not active in the screenshot) may at first display many oddly named scripts. These are in fact Chrome extensions that loaded on the page. This is useful for debugging actual extensions. Otherwise, you can avoid seeing them by opening your page in an incognito window; most extensions are disabled by default in incognito mode.
  5. 主内容窗格中显示选中的脚本的内容。选择多个脚本创建一个选项卡式界面类似于一个IDE。

  6. 此窗格包含sub-panels,提供有用的JavaScript调试工具。顶部的面板图标单步调试代码。 - This pane contains sub-panels that provide useful JavaScript debugging utilities. At the top of the pane are the icons to step through your code.
  7. Watch Expressions does exactly that, it 'watches' expressions you have typed in. If you find yourself wanting to know the value of the this keyword at the various stages of a JavaScript program, you can watch the this keyword to see its different values over time. Click the add button to add an expression, and if an expression doesn't update, hit the small refresh button next to the add button.
  8. XHR断点时使我们停止正在执行Ajax请求JavaScript代码。通常我们可以通过控制 - 当URL包含的字段中（特定API）的时候, 使得JavaScript中断，以便于我们一步步debug来看看前后端的数据处理。

  9. 事件监听器断点允许您为特定事件设置断点。截图只列出了分类好的顶级类别。如鼠标类别事件下包括：单击，双击，鼠标移入，移出等事件。
  10. 如果你遇到被压缩的 JavaScript 代码，可以用『Pretty Print』来美化 JavaScript 代码。


TODO: (方便的执行一些snippet， 看效果， 引入jQuery， 看颜色表，完好常规任务的snippet - app 页面添加packagename preview）

Console 面板


  1. console.log writes the provided values to the console. There's no need to concatenate values together; console.log supports multiple arguments of different types and writes each of them to the console. When you execute a command, you see the output in the immediately following line.
  2. You may occasionally see "[native code]" when attempting to view a native function's definition.
  3. You can write functions and execute them. Be aware that pressing the enter key executes the code you typed into the console instead of inserting a new line. Hold shift+enter to insert a new line.
  4. An example of an array. Notice the colors are different for different types of values.
  5. An example of a large array with 303 elements. Notice how the elements are grouped together; this prevents the console from being flooded with large amounts of data.
  6. $0 is a shortcut to return the currently selected element in theElements panel. Right-clicking on an element in the console gives you an option to view that element in the Elements panel.
  7. Errors stand out from other console entries thanks to their red color and icon.
  8. We can access anything in the page's scope, including thewindow object. In the screenshot, I created a newWebKitCSSMatrix object.
  9. You can also style console entries using CSS.
  10. The console provides code completion. Try typing in "window." and see the vast amount of properties you can choose from!


TODO: （看数据提交， GET, POST, 看响应， 改动提交数据，preserve log，看ga统计请求等）

Network面板
网络标签页对于分析网站请求的网络情况、查看某一请求的请求头和响应头还有响应内容很有用，特别是在查看Ajax类请求的时候，非常有帮助。
每个水平的棒状图示代表一个资源占用网络的时间，而在每个棒状图示的左侧颜色较浅的部分代表延迟时间（Latency），即从向服务器发出请求到服务器第一次响应之间的时长。鼠标移至棒状图示上，可看到每个部分所花销的精确时间。图中蓝色和红色的两条垂直线分别代表 DOMContent 加载完成和 Load 事件被触发的时间点。

Timeline:
时间轴面板为您的网页及网络应用程序做了一个详细的性能分析，告诉您载入页面的时间究竟花在哪些地方。从加载资源到解析 JavaScript 脚本、计算样式表及页面渲染的所有步骤，您都可以在这里看到它们消耗的时间和内存。打开时间轴面板，您会看到这样的界面：


『今天的课程，大家可以跟着我做出效果来， 但是可能会对背后的知识点不是很了解， 没关系的。 到后续的课程中， 会一步步的有介绍的， 同时， 今天的devtools知识一定会在日后帮助大家不少忙的』
