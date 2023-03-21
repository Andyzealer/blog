## MVVM
Model层代表数据模型，View代表UI组件，ViewModel是View和Model层的桥梁，数据会绑定到viewModel层并自动将数据渲染到页面中，视图变化的时候会通知viewModel层更新数据。以前是操作DOM结构更新视图，现在是数据驱动视图。
## 响应式原理
采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter和getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
### Observer 
Observer的核心是通过Object.defineProprtty()来监听数据的变动，这个函数内部可以定义setter和getter，每当数据发生变化，就会触发setter。这时候Observer就要通知订阅者，订阅者就是Watcher
### Watcher 
Watcher订阅者作为Observer和Compile之间通信的桥梁，主要做的事情是：
* 在自身实例化时往属性订阅器(dep)里面添加自己  
``` todo: Dep() ```
* 自身必须有一个update()方法
* 待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调
### Compile 
Compile主要做的事情是解析模板指令，将模板中变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加鉴定数据的订阅者，一旦数据有变动，收到通知，更新试图
## 生命周期
## Diff算法
https://juejin.cn/post/6994959998283907102
虚拟DOM算法操作真实DOM，性能高于直接操作真实DOM，虚拟DOM和虚拟DOM算法是两种概念。虚拟DOM算法 = 虚拟DOM + Diff算法
## computed 和 watch
computed有缓存
## data为什么是一个函数
引用同一个地址，会互相影响；函数return对象，每一个对象是新的地址不会相互影响
## nextTick
DOM更新循环结束后执行延迟回调，再修改数据之后使用$nextTick，则可以在回调中获取更新后的DOM。
### 原因
Vue在更新DOM时是异步执行的。只要侦听到数据变化，Vue将开启1个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个watcher被多次触发，只会被推入到队列中-次。这种在缓冲时去除重复数据对于避免不必要的计算和DOM操作是非常重要的。nextTick方法会在队列中加入一个回调函数，确保该函数在前面的dom操作完成后才调用；
### 原理
异步调用callback
## keep-alive
keep-alive组件的缓存也是基于VNode节点的而不是直接存储DOM结构。它将满足条件（pruneCache与pruneCache）的组件在cache对象中缓存起来，在需要重新渲染的时候再将vnode节点从cache对象中取出并渲染。
## 插槽
## v-model