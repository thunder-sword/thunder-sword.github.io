(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{448:function(t,a,s){"use strict";s.r(a);var r=s(15),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_0x3-算符优先分析方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0x3-算符优先分析方法"}},[t._v("#")]),t._v(" *0x3.算符优先分析方法")]),t._v(" "),s("p",[t._v("算符优先分析法的思想源于表达式的分析，是利用相邻终结符号之间的关系来寻找可归约串。")]),t._v(" "),s("p",[t._v("将句型中的终结符号当作“算符”，借助于算符之间的优先关系确定规约子串，分析过程是自下而上的归约过程，不是一种严格的规范归约。")]),t._v(" "),s("h2",{attrs:{id:"定义："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义："}},[t._v("#")]),t._v(" 定义：")]),t._v(" "),s("p",[t._v("文法G中没有"),s("code",[t._v("P→...QR...")]),t._v("的产生式\nP,Q,R属于非终结符\n即，不存在具有相邻非终结符的产生式")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103026.png",alt:"image-20210923165804443"}})]),t._v(" "),s("h3",{attrs:{id:"例子："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子："}},[t._v("#")]),t._v(" 例子：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103027.png",alt:"image-20210923164432364"}})]),t._v(" "),s("h3",{attrs:{id:"注意："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意："}},[t._v("#")]),t._v(" "),s("strong",[t._v("注意：")])]),t._v(" "),s("ul",[s("li",[t._v("a,b之间未必有优先关系,在优先表中，空白部分是一种错误关系")]),t._v(" "),s("li",[t._v("相同的终结符之间的优先关系不一定是对称的")]),t._v(" "),s("li",[t._v("如果有a = b,不一定有b = a(不具对称性)")]),t._v(" "),s("li",[t._v("如果有a < b,不一定有b> a(不具对称性)，因为只定义相邻运算符之间的优先关系，a,b相邻时，不一定b,a相邻。")]),t._v(" "),s("li",[t._v("如果有a<b, b<c不一定有a <c")])]),t._v(" "),s("h1",{attrs:{id:"_0x4-算符优先关系表的自动构造算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0x4-算符优先关系表的自动构造算法"}},[t._v("#")]),t._v(" 0x4.算符优先关系表的自动构造算法")]),t._v(" "),s("h2",{attrs:{id:"_1-firstvt集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-firstvt集"}},[t._v("#")]),t._v(" 1.FirstVT集")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103028.png",alt:"image-20210923164548096"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103029.png",alt:"image-20210923164612239"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103030.png",alt:"image-20210923164623257"}})]),t._v(" "),s("h3",{attrs:{id:"例子：-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子：-2"}},[t._v("#")]),t._v(" 例子：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103031.png",alt:"image-20210923164830830"}})]),t._v(" "),s("h3",{attrs:{id:"伪代码："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#伪代码："}},[t._v("#")]),t._v(" 伪代码：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103032.png",alt:"image-20210923164902495"}})]),t._v(" "),s("h2",{attrs:{id:"_2-lastvt集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-lastvt集"}},[t._v("#")]),t._v(" 2.LastVT集")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103033.png",alt:"image-20210923164927935"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103034.png",alt:"image-20210923164951641"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103035.png",alt:"image-20210923165002945"}})]),t._v(" "),s("h3",{attrs:{id:"例子：-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子：-3"}},[t._v("#")]),t._v(" 例子：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103036.png",alt:"image-20210923165019443"}})]),t._v(" "),s("h2",{attrs:{id:"_3-构造优先关系表的算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-构造优先关系表的算法"}},[t._v("#")]),t._v(" 3.构造优先关系表的算法")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103037.png",alt:"image-20210923165049491"}})]),t._v(" "),s("h3",{attrs:{id:"例子：-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子：-4"}},[t._v("#")]),t._v(" 例子：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103038.png",alt:"image-20210923165104003"}})]),t._v(" "),s("h3",{attrs:{id:"伪代码：-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#伪代码：-2"}},[t._v("#")]),t._v(" 伪代码：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103039.png",alt:"image-20210923165130366"}})]),t._v(" "),s("h2",{attrs:{id:"_4-算符优先分析过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-算符优先分析过程"}},[t._v("#")]),t._v(" 4.算符优先分析过程")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103040.png",alt:"image-20210923165902764"}})]),t._v(" "),s("h3",{attrs:{id:"例子：-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子：-5"}},[t._v("#")]),t._v(" 例子：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103041.png",alt:"image-20210923165941306"}})]),t._v(" "),s("h3",{attrs:{id:"注意要点："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意要点："}},[t._v("#")]),t._v(" 注意要点：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103042.png",alt:"image-20210923170316014"}})]),t._v(" "),s("h3",{attrs:{id:"总结归约的策略："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结归约的策略："}},[t._v("#")]),t._v(" 总结归约的策略：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103043.png",alt:"image-20210923170347584"}})]),t._v(" "),s("h3",{attrs:{id:"优缺点："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优缺点："}},[t._v("#")]),t._v(" 优缺点：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20211012103044.png",alt:"image-20210923170359081"}})]),t._v(" "),s("h2",{attrs:{id:"_5-算符优先分析中的错误处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-算符优先分析中的错误处理"}},[t._v("#")]),t._v(" 5.算符优先分析中的错误处理")]),t._v(" "),s("p",[t._v("使用算符优先分析法时，可在两种情况下发现语法错误：")]),t._v(" "),s("ol",[s("li",[t._v("若栈顶终结符号与下一个输入符号之间不存在任何优先关系")]),t._v(" "),s("li",[t._v("若找到某一可归约串，但不存在任一产生式，其右部与其匹配。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);