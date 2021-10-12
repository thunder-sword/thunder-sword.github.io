(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{455:function(a,t,s){"use strict";s.r(t);var _=s(15),r=Object(_.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_0x1-梯度方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0x1-梯度方法"}},[a._v("#")]),a._v(" 0x1.梯度方法")]),a._v(" "),s("h2",{attrs:{id:"_1-回顾水平集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-回顾水平集"}},[a._v("#")]),a._v(" 1.回顾水平集")]),a._v(" "),s("p",[a._v("水平集概念：")]),a._v(" "),s("p",[a._v("$𝐿_𝑐={𝒙:𝑓(𝒙)=𝑐,𝒙∈ℝ^𝑛}$")]),a._v(" "),s("p",[a._v("如下图所示元素：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20210623093739.png",alt:"image-20210518113441575"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20210623093740.png",alt:"image-20210518113643335"}})]),a._v(" "),s("p",[a._v("𝐿~𝑐~中点𝒙处的梯度𝛻𝑓(𝒙)与𝐿~𝑐~中过𝒙的曲线在𝒙处的切线正交。")]),a._v(" "),s("p",[a._v("梯度方向𝛻𝑓(𝑥)就是==函数𝑓在𝒙处增加最快的方向==。")]),a._v(" "),s("p",[a._v("$\\frac{𝜕𝑓}{𝜕𝑑} (𝑥)=<𝛻𝑓(𝑥),𝑑>$")]),a._v(" "),s("p",[a._v("基于梯度方法的迭代搜索公式：")]),a._v(" "),s("p",[a._v("$𝑥^{(𝑘+1)}=𝑥^{(𝑘)}−𝑎_𝑘 𝛻𝑓(𝑥^{(𝑘)})$")]),a._v(" "),s("h1",{attrs:{id:"_0x2-最速下降法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0x2-最速下降法"}},[a._v("#")]),a._v(" 0x2.最速下降法")]),a._v(" "),s("p",[a._v("最速下降法是==梯度方法的一种具体体现==，其理念为再每次迭代中选择合适的步长a~k~，使得目标函数值能够得到最大程度的减小。而普通的梯度方法是步长固定的或者不确定的。")]),a._v(" "),s("p",[a._v("迭代公式：")]),a._v(" "),s("p",[a._v("$𝑥^{(𝑘+1)}=𝑥^{(𝑘)}−𝑎_𝑘 𝛻𝑓(𝑥^{(𝑘)})$")]),a._v(" "),s("p",[a._v("$𝑎_𝑘={arg\\ min\\atop  {𝑎≥0}⁡}𝑓(𝑥^{(𝑘)}−𝑎𝛻𝑓(𝑥^{(𝑘)} ))$")]),a._v(" "),s("p",[a._v("解释：")]),a._v(" "),s("p",[a._v("x代表一个点，即(0,0,0)等坐标源点到x的向量。")]),a._v(" "),s("p",[a._v("每次都会以上一个下降向量为基准，正交得到下一次的下降向量，并尝试得到可以最大减小函数值的步长，最后形成“锯齿状”的搜索路径。")]),a._v(" "),s("p",[a._v("终止条件：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20210623093741.png",alt:"image-20210520083052511"}})]),a._v(" "),s("p",[a._v("例子：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20210623093742.png",alt:"image-20210520083105844"}}),s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20210623093743.png",alt:"image-20210520083152594"}}),s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20210623093744.png",alt:"image-20210520083211489"}}),s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20210623093745.png",alt:"image-20210520083251719"}})]),a._v(" "),s("h2",{attrs:{id:"_1-命题8-1-相邻向量垂直"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命题8-1-相邻向量垂直"}},[a._v("#")]),a._v(" 1.命题8.1(相邻向量垂直)")]),a._v(" "),s("p",[a._v("利用最速下降法搜索函数𝑓:ℝ^𝑛^→ℝ的极小点，迭代过程产生的序列为{𝑥^(𝑘)^}~𝑘=0~^∞^ 。那么𝑥^(𝑘+1)^−𝑥^(𝑘)^与𝑥^(𝑘+2)^−𝑥^(𝑘+1)^正交对于所有的𝑘≥0都成立。")]),a._v(" "),s("p",[a._v("即：每次迭代寻找极小值的方向向量都是依次正交的。")]),a._v(" "),s("p",[a._v("证明：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20210623093746.png",alt:"image-20210520082709026"}})]),a._v(" "),s("p",[a._v("说明：上述$φ_k(a_k)=𝑓(𝑥^{(𝑘)}−𝑎_k𝛻𝑓(𝑥^{(𝑘)} ))$")]),a._v(" "),s("h2",{attrs:{id:"_2-命题8-2-函数值单调递减"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命题8-2-函数值单调递减"}},[a._v("#")]),a._v(" 2.命题8.2(函数值单调递减)")]),a._v(" "),s("p",[a._v("利用最速下降法搜索函数𝑓:ℝ^𝑛^→ℝ的极小点，迭代过程产生的序列为{𝑥^(𝑘)^}~𝑘=0~^∞^  。如果𝛻𝑓(𝑥^(𝑘)^)≠0，那么𝑓(𝑥^(𝑘+1)^)<𝑓(𝑥^(𝑘)^)")]),a._v(" "),s("p",[a._v("即：每次迭代寻找极小值后得到的函数值都是小于上一个点函数值，即搜索序列单调递减。")]),a._v(" "),s("p",[a._v("证明：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20210623093747.png",alt:"image-20210520084252997"}})]),a._v(" "),s("h1",{attrs:{id:"_0x3-梯度方法性质分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0x3-梯度方法性质分析"}},[a._v("#")]),a._v(" 0x3.梯度方法性质分析")]),a._v(" "),s("p",[a._v("目标函数设定为二次型函数\n$$\n\\begin{align*}\n𝑉(𝒙)&=𝑓(𝒙)+\\frac12𝒙^{∗⊺} 𝑄𝒙^∗\n\\\n&=\\frac12(𝒙−𝒙^∗)^⊺ 𝑄(𝒙−𝒙^∗)\n\\end{align*}\n$$\n其中𝑄是对称正定矩阵。")]),a._v(" "),s("h2",{attrs:{id:"_1-1-引理8-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-引理8-1"}},[a._v("#")]),a._v(" 1-1.引理8.1")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20210623093748.png",alt:"image-20210525110321441"}})]),a._v(" "),s("h2",{attrs:{id:"_1-2-定理8-1-x必收敛至极小点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-定理8-1-x必收敛至极小点"}},[a._v("#")]),a._v(" 1-2.定理8.1(x必收敛至极小点)")]),a._v(" "),s("p",[a._v("定理8.1")]),a._v(" "),s("p",[a._v("{𝒙^(𝑘)^}表示梯度方法产生迭代点序列， 𝒙^(𝑘+1)^=𝒙^(𝑘)^−𝑎~𝑘~ 𝒈^(𝑘)^。𝛾~𝑘~按照引理8.1里的方式定义，且假定对于所有𝑘， 𝛾~𝑘~>0。那么当且仅当\n$$\n∑_{𝑘=0}^\\infty𝛾_𝑘=\\infty\n$$\n时， {𝒙^(𝑘)^}在任意初始值𝒙^(0)^下都收敛到极小点𝒙^∗^。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20210623093749.png",alt:"image-20210525110340382"}})]),a._v(" "),s("h2",{attrs:{id:"_2-1-引理8-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-引理8-2"}},[a._v("#")]),a._v(" 2-1.引理8.2")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/ithundersword/BlogImages/raw/master/images/blog/PicGo/20210623093750.png",alt:"image-20210525110358206"}})]),a._v(" "),s("h2",{attrs:{id:"_2-2-定理8-2-最速任意均收敛"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-定理8-2-最速任意均收敛"}},[a._v("#")]),a._v(" 2-2.定理8.2(最速任意均收敛)")]),a._v(" "),s("p",[a._v("对于最速下降法，对于任意的初始点𝑥^(0)^，都有𝑥^(𝑘)^→𝑥^∗^。")]),a._v(" "),s("h2",{attrs:{id:"_3-定理8-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-定理8-3"}},[a._v("#")]),a._v(" 3.定理8.3")]),a._v(" "),s("p",[a._v("对于步长固定梯度法，当且仅当\n$$\n0<𝑎<\\frac2{𝜆_{𝑚𝑎𝑥} (𝑄)}\n$$\n时， 𝑥^(𝑘)^→𝑥^∗^。")]),a._v(" "),s("h2",{attrs:{id:"_4-定理8-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-定理8-4"}},[a._v("#")]),a._v(" 4.定理8.4")]),a._v(" "),s("p",[a._v("利用最速下降法求解二次型函数的极小点，在任意第𝑘次迭代，都有\n$$\n𝑉(𝑥^{(𝑘+1)})≤\\frac{𝜆_{𝑚𝑎𝑥} (𝑄)−𝜆_{𝑚𝑖𝑛} (𝑄)}{𝜆_{𝑚𝑎𝑥} (𝑄) } 𝑉(𝑥^{(𝑘)} )\n$$\n$𝑟=\\frac{𝜆_{𝑚𝑎𝑥} (𝑄)}{𝜆_{𝑚𝑖𝑛} (𝑄) }=\\big||𝑄|\\big|||𝑄^{−1} ||$称为矩阵𝑄的条件数。\n$$\n𝑉(𝑥^{(𝑘+1)} )≤(1−\\frac{1}{𝑟})𝑉(𝑥^{(𝑘)} )\n$$\n因子(1−1/𝑟)称为==收敛率==。")]),a._v(" "),s("h2",{attrs:{id:"_5-定理8-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-定理8-5"}},[a._v("#")]),a._v(" 5.定理8.5")]),a._v(" "),s("p",[a._v("已知序列{𝑥^(𝑘)^}收敛到𝑥^∗^，如果")]),a._v(" "),s("p",[a._v("​\t‖𝒙^(𝑘+1)^−𝒙^∗^ ‖=𝑂(‖𝒙^(𝑘)^−𝒙^∗^ ‖^𝑝^)")]),a._v(" "),s("p",[a._v("那么，序列的收敛阶数（如果存在）至少为𝑝。")]),a._v(" "),s("h2",{attrs:{id:"_6-引理8-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-引理8-3"}},[a._v("#")]),a._v(" 6.引理8.3")]),a._v(" "),s("p",[a._v("对于最速下降法而言，如果对于所有𝑘，𝒈^(𝑘)^≠0，那么当且仅当𝒈^(𝑘)^是矩阵𝑄的一个特征向量时，𝛾~𝑘~=1。")]),a._v(" "),s("h2",{attrs:{id:"_7-定理8-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-定理8-6"}},[a._v("#")]),a._v(" 7.定理8.6")]),a._v(" "),s("p",[a._v("最速下降法在求解目标函数𝑓的极小点时，产生一个收敛的迭代点序列{𝒙^(𝑘)^}，该序列在最坏的情况下收敛阶数为1。也就是说存在一个目标函数𝑓和某个点𝒙^(0)^，能够使得{𝒙^(𝑘)^}的收敛阶数为1。")])])}),[],!1,null,null,null);t.default=r.exports}}]);