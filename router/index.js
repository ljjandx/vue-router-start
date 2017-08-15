// 当把 vue-router.js 引入页面之后，该文件会在全局提供一个VueRouter构造函数
// 我们要做的是：使用该构造函数去创建我们的路由容器，配置路由表
//    路由表：根据不同的请求路径映射到具体的组件
;(function(window, VueRouter, Home){
  const router = new VueRouter({
    // 使用routes选项配置路由表
    // routers是一个数组
    // 数组中存储一个一个的对象
    // 对象中通过path和component来配置路由映射关系
    routes: [{ 
      path: '/',
      component: Home,
    },
    {
      path: '/foo',
      component: {
        template: '<div>foo</div>'
      }
    },
    {
      path: '/bar',
      component: {
        template: '<div>bar</div>'
      }
    }]
  })

  window.router = router;
})(window, VueRouter, Home)
