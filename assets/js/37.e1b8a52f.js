(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{461:function(t,_,a){"use strict";a.r(_);var s=a(15),v=Object(s.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_0x1-集合约束与无约束优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0x1-集合约束与无约束优化"}},[t._v("#")]),t._v(" 0x1.集合约束与无约束优化")]),t._v(" "),a("p",[t._v("集合约束优化问题：")]),t._v(" "),a("p",[t._v("如下形式的优化问题\n𝑚𝑖𝑛𝑖𝑚𝑖𝑧𝑒 𝑓(𝒙)\nsubject to 𝒙∈Ω")]),t._v(" "),a("p",[t._v("其中𝑓: ℝ^𝑛^→ℝ成为目标函数或价值函数，是一个实值函数。𝒙是一个𝑛维向量，Ω是ℝ^𝑛^的一个子集，成为约束集或可行域。")]),t._v(" "),a("h1",{attrs:{id:"_0x2-极小点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0x2-极小点"}},[t._v("#")]),t._v(" 0x2.极小点")]),t._v(" "),a("p",[t._v("∀𝑥∈𝛿(𝑥^∗^,𝜀)\\{𝑥^∗^}，$𝑓(𝑥)≥𝑓(𝑥^∗)，𝑥^∗$称为==局部极小点==。")]),t._v(" "),a("p",[t._v("∀𝑥∈Ω\\{𝑥^∗^}，𝑓(𝑥)≥𝑓(𝑥^∗^)，𝑥^∗^称为==全局极小点==。")]),t._v(" "),a("p",[t._v("如果将上述的≥替换为＞，则称为==严格局部极小点==和==严格全局极小点==。")]),t._v(" "),a("h1",{attrs:{id:"_0x3-局部极小点的条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0x3-局部极小点的条件"}},[t._v("#")]),t._v(" 0x3.局部极小点的条件")]),t._v(" "),a("h2",{attrs:{id:"_1-定义6-2："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义6-2："}},[t._v("#")]),t._v(" 1.定义6.2：")]),t._v(" "),a("p",[t._v("对于向量𝒅∈ℝ^𝑛^， 𝒅≠𝟎和约束集中的某个点𝒙，如果存在一个实数𝑎~0~>0，使得所有的𝑎∈[0,𝑎~0~]，𝒙+𝑎𝒅仍然在约束集内，即𝒙+𝑎𝒅∈Ω，则称𝒅为𝒙处的==可行方向==。")]),t._v(" "),a("h2",{attrs:{id:"_2-方向导数𝒅-⊺-𝛻𝑓-𝒙-："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-方向导数𝒅-⊺-𝛻𝑓-𝒙-："}},[t._v("#")]),t._v(" 2.方向导数𝒅^⊺^ 𝛻𝑓(𝒙)：")]),t._v(" "),a("p",[t._v("𝑑为𝑛元实值函数𝑓: ℝ^𝑛^→ℝ在𝒙∈ Ω处的可行方向，则函数𝑓在𝒙点沿𝑑方向的方向导数为:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20210623093717.png",alt:"image-20210513080608649"}})]),t._v(" "),a("p",[t._v("导数>0，表示在该局部，函数单调递增。\n导数<0，表示在该局部，函数单调递减。\n导数=0，表示在该点，函数处于临界点。")]),t._v(" "),a("p",[t._v("由此可见，"),a("strong",[t._v("当d是一个单位向量（|| d || = 1）时，函数f的值在x处沿方向d的增长率可以用内积<▽f(x),d>表示")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_3-定理6-1（一阶必要条件）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-定理6-1（一阶必要条件）"}},[t._v("#")]),t._v(" 3.定理6.1（"),a("strong",[t._v("一阶必要条件")]),t._v("）")]),t._v(" "),a("p",[t._v("点不为内点时（如边界点）用这个判断是否满足局部极小点的一阶条件。")]),t._v(" "),a("p",[t._v("多元实值函数𝑓在约束集Ω一阶连续可微，即𝑓∈𝐶^1^，约束集Ω是ℝ^𝑛^的子集。如果𝒙^∗^是𝑓在约束集Ω上的局部极小点，则对于𝒙^∗^处的任意可行方向𝒅，都有\n𝒅^⊺^ 𝛻𝑓(𝒙^∗^ )≥0\n成立。")]),t._v(" "),a("h2",{attrs:{id:"_4-推论6-1（内点一阶必要条件）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-推论6-1（内点一阶必要条件）"}},[t._v("#")]),t._v(" 4.推论6.1（"),a("strong",[t._v("内点一阶必要条件")]),t._v("）")]),t._v(" "),a("p",[t._v("点为内点时用这个判断是否满足局部极小点的一阶条件。")]),t._v(" "),a("p",[t._v("多元实值函数𝑓在约束集Ω一阶连续可微，即𝑓∈𝐶^1^，约束集Ω是ℝ^𝑛^的子集。如果𝒙^∗^是𝑓在约束集Ω上的局部极小点，且是Ω的内点，则有\n𝛻𝑓(𝒙^∗^ )=0\n成立。")]),t._v(" "),a("h2",{attrs:{id:"_5-定理6-2（二阶必要条件）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-定理6-2（二阶必要条件）"}},[t._v("#")]),t._v(" 5.定理6.2（"),a("strong",[t._v("二阶必要条件")]),t._v("）")]),t._v(" "),a("p",[t._v("多元实值函数𝑓在约束集Ω二阶连续可微，即𝑓∈𝐶^2^，约束集Ω是ℝ^𝑛^的子集。如果𝒙^∗^是𝑓在约束集Ω上的局部极小点， 𝒅是𝒙^∗^点的可行方向，且𝒅^⊺^ 𝛻𝑓(𝒙^∗^ )=0，则有\n𝒅^⊺^ 𝐹(𝑥^∗^ )𝒅≥0\n其中𝐹为函数𝑓的==Hessian矩阵(黑塞矩阵)==。")]),t._v(" "),a("h2",{attrs:{id:"_6-推论6-2（内点二阶必要条件）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-推论6-2（内点二阶必要条件）"}},[t._v("#")]),t._v(" 6.推论6.2（内点二阶必要条件）")]),t._v(" "),a("p",[t._v("多元实值函数𝑓在约束集Ω二阶连续可微，即𝑓∈𝐶^2^，约束集Ω是ℝ^𝑛^的子集。如果𝒙^∗^是𝑓在约束集Ω上的局部极小点， 且是Ω的内点，则有\n𝛻𝑓(𝒙^∗^ )=𝟎\n且对于所有方向𝒅有，\n𝒅^⊺^ 𝐹(𝒙^∗^ )𝒅≥0")]),t._v(" "),a("h2",{attrs:{id:"_7-定理6-3（内点二阶充分条件）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-定理6-3（内点二阶充分条件）"}},[t._v("#")]),t._v(" 7.定理6.3（内点二阶充分条件）")]),t._v(" "),a("p",[t._v("多元实值函数𝑓在约束集Ω二阶连续可微，即𝑓∈𝐶^2^，约束集Ω是ℝ^𝑛^的子集。如果𝒙^∗^是𝑓在约束集Ω的一个内点，且有\n𝛻𝑓(𝒙^∗^ )=𝟎\n且对于所有方向𝒅有，\n𝒅^⊺^ 𝐹(𝒙^∗^ )𝒅>0\n则𝒙^∗^是函数𝑓的一个"),a("strong",[t._v("严格局部极小点")]),t._v("。")])])}),[],!1,null,null,null);_.default=v.exports}}]);