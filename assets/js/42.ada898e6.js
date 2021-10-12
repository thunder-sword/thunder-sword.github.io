(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{456:function(t,a,_){"use strict";_.r(a);var v=_(15),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_0x1-概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_0x1-概述"}},[t._v("#")]),t._v(" 0x1.概述")]),t._v(" "),_("p",[t._v("线性规划研究的是一类在==线性约束==条件下求解==线性目标函数==极值的问题。")]),t._v(" "),_("p",[t._v("单纯形法被誉为20世纪对科学发展和工程实践影响最大的十种算法之一。")]),t._v(" "),_("h1",{attrs:{id:"_0x2-标准模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_0x2-标准模型"}},[t._v("#")]),t._v(" 0x2.标准模型")]),t._v(" "),_("p",[t._v("线性规划的标准模型为：\n𝑚𝑖𝑛𝑖𝑚𝑖𝑧𝑒 𝒄^⊺^ 𝒙\nsubject to 𝐴𝒙=𝒃\n𝒙≥𝟎\n其中，𝑐∈ℝ^𝑛^， 𝑏∈ℝ^𝑚^， 𝐴∈ℝ^𝑚×𝑛^。")]),t._v(" "),_("h1",{attrs:{id:"_0x3-二维线性规划"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_0x3-二维线性规划"}},[t._v("#")]),t._v(" 0x3.二维线性规划")]),t._v(" "),_("p",[t._v("𝑚𝑎𝑥𝑖𝑚𝑖𝑧𝑒 𝒄^⊺^ 𝒙\nsubject to 𝐴𝒙≤𝒃\n𝒙≥𝟎")]),t._v(" "),_("p",[t._v("其中，$x=[x_1,x_2]^T,c^T=[1,5]\\,A=\\begin{bmatrix}\n5&6\\3&2\\end{bmatrix},b=\\begin{bmatrix}30\\12\\end{bmatrix}$")]),t._v(" "),_("p",[t._v("于是，可以在二维坐标轴中画出可行域，从可行域中选择最佳的点来取得结果。")]),t._v(" "),_("h1",{attrs:{id:"_0x3-超几何线性规划"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_0x3-超几何线性规划"}},[t._v("#")]),t._v(" 0x3.超几何线性规划")]),t._v(" "),_("p",[t._v("约束集𝐴𝒙≤𝒃, 𝒙≥𝟎是凸多面体。")]),t._v(" "),_("p",[t._v("目标函数的等值面是超平面簇。")]),t._v(" "),_("p",[t._v("凸多面体和超平面的交是什么？临界的超平面是什么？\n凸多面体的支撑超平面。")]),t._v(" "),_("h2",{attrs:{id:"_1-线性规划的标准型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-线性规划的标准型"}},[t._v("#")]),t._v(" 1.线性规划的标准型")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20210623093829.png",alt:"image-20210608105828708"}})]),t._v(" "),_("p",[t._v("其中，𝒚称为==剩余变量==。剩余变量对目标函数没有任何贡献。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20210623093830.png",alt:"image-20210608105840893"}})]),t._v(" "),_("p",[t._v("其中，𝒚称为==松弛变量==。松弛变量对目标函数没有任何贡献。")]),t._v(" "),_("h1",{attrs:{id:"_0x4-基本解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_0x4-基本解"}},[t._v("#")]),t._v(" 0x4.基本解")]),t._v(" "),_("p",[t._v("线性规划的标准模型为：\n𝑚𝑖𝑛𝑖𝑚𝑖𝑧𝑒 𝒄^⊺^ 𝒙\nsubject to 𝐴𝒙=𝒃\n𝒙≥𝟎\n其中，𝑐∈ℝ^𝑛^， 𝑏∈ℝ^𝑚^， 𝐴∈ℝ^𝑚×𝑛^。𝑟𝑎𝑛𝑘(𝐴)=𝑚， 𝑚<𝑛。")]),t._v(" "),_("h2",{attrs:{id:"分块矩阵求解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分块矩阵求解"}},[t._v("#")]),t._v(" 分块矩阵求解")]),t._v(" "),_("p",[t._v("考虑方程组𝐴𝒙=𝒃，将𝐴写为分块儿矩阵𝐴=[𝐵,𝐷]， 𝐵是一个𝑚×𝑚的非奇异矩阵。 𝐷是一个𝑚×(𝑛−𝑚)的矩阵。")]),t._v(" "),_("p",[t._v("求解方程𝐵𝒙~𝐵~  =𝒃得，𝒙~𝐵~=𝐵^−1^𝑏。")]),t._v(" "),_("p",[t._v("令x为n维向量，它的前m个元素等于x~B~，其余元素为零，即x=[x~B~^T^,0^T^]^T^，那么x是方程Ax=b的一个解。")]),t._v(" "),_("h2",{attrs:{id:"定义15-1-基本解-基变量-基本列向量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#定义15-1-基本解-基变量-基本列向量"}},[t._v("#")]),t._v(" 定义15.1 基本解 基变量 基本列向量")]),t._v(" "),_("p",[t._v("[x~B~^T^,0^T^]^T^是𝐴𝒙=𝒃在基𝐵下的==基本解==，向量𝒙~𝐵~中的元素称为==基变量==，𝐵中的列向量称为==基本列向量==。")]),t._v(" "),_("ul",[_("li",[t._v("==退化的基本解==，如果基本解中的某些基变量为零，那么这个基本解称为退化的基本解。")]),t._v(" "),_("li",[t._v("==可行解==，满足Ax=b，x≥0的向量x称为可行解。")]),t._v(" "),_("li",[t._v("==基本可行解==，既是可行解，也是基本解。")]),t._v(" "),_("li",[t._v("==退化的基本可行解==，是基本可行解并且是退化的基本解。")])]),t._v(" "),_("p",[t._v("基本解的个数为:\n$$\nC_n^m=\n\\begin{pmatrix}\nn\\m\n\\end{pmatrix}\n=\\frac{n!}{m!(n-m)!}\n$$\n例子：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20210623093831.png",alt:"image-20210608113211566"}})]),t._v(" "),_("h2",{attrs:{id:"定义15-2-最优可行解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#定义15-2-最优可行解"}},[t._v("#")]),t._v(" 定义15.2 最优可行解")]),t._v(" "),_("p",[t._v("对于任何满足约束条件𝐴𝒙=𝒃, 𝒙≥𝟎的向量𝒙，如果它能够使目标函数𝒄^⊺^𝒙取得极小值，那么就将其称为==最优可行解==。")]),t._v(" "),_("p",[t._v("有最优可行解一定有最优基本可行解")]),t._v(" "),_("h2",{attrs:{id:"定理15-1-线性规划基本定理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#定理15-1-线性规划基本定理"}},[t._v("#")]),t._v(" 定理15.1 线性规划基本定理")]),t._v(" "),_("p",[t._v("线性规划基本定理。对于线性规划的标准型，有如下两个命题：")]),t._v(" "),_("ul",[_("li",[t._v("如果存在==可行解==，那么一定存在==基本可行解==。")]),t._v(" "),_("li",[t._v("如果存在==最优可行解==，那么一定存在==最优基本可行解==。")])]),t._v(" "),_("h2",{attrs:{id:"定理15-2-几何视角下的线性规划"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#定理15-2-几何视角下的线性规划"}},[t._v("#")]),t._v(" 定理15.2 几何视角下的线性规划")]),t._v(" "),_("p",[t._v("回顾概念：")]),t._v(" "),_("p",[t._v("凸集：对于任何x，y∈θ，和任意实数α，0<α<1，如果由αx+(1-α)y∈θ，则称集合θ⊂ℝ^𝑛^为凸集。换言之，如果集合中任意两点的连线上的点在该集合内，则称该集合为凸集。")]),t._v(" "),_("p",[t._v("极点：几点并不在集合中其他两点的连线上。")]),t._v(" "),_("p",[t._v("Ω表示由所有可行解组成的凸集，即集合中的所有n维向量x满足：\n$$\nAx=b,x\\ge0\n$$\n其中，A∈ℝ^𝑚×𝑛^，𝑚<𝑛。那么，x是Ω的极点当且仅当x是Ax=b，x≥0的基本可行解。")])])}),[],!1,null,null,null);a.default=r.exports}}]);