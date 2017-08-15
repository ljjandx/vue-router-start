;(function(window,Navbar,Sidebar,Home){
  /**
 * 根组件
 */
// 模板中的内容必须有一个根节点，所以在外面加了一个div，可以不加id="app"
const template = `
<div id="app">
  <app-navbar></app-navbar>

  <div class="container-fluid">
    <div class="row">
      <app-sidebar></app-sidebar>
      <!-- 这里不能写死，应该根据路由的切换显示不同的组件内容 -->
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</div>
`

    const App = {
      template,
      components: {
        AppNavbar: Navbar,
        AppSidebar: Sidebar,
        AppHome: Home
      }
    };

    // App放到全局里
    window.App = App;

})(window,Navbar,Sidebar,Home)
