/**
 * 入口文件
 * 作用：实例化Vue应用程序，配置入口节点、路由等信息
 */
;(function(window,Vue,App,router){
  new Vue({
    el: '#app',
    template: '<App/>', //实例的template会把作用到的dom节点替换掉
    // 引用组件App，可以使用单标签<App/>
    data: {
      title: 'hello'
    },
    components: {
      App
    },
    router
  })

})(window,Vue,App,router)
