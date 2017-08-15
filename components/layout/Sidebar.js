;(function(window){
  const template = `
<div class="col-sm-3 col-md-2 sidebar">
  <ul class="nav nav-sidebar">
    <li class="active"><a href="#/">Home <span class="sr-only">(current)</span></a></li>
    <li><a href="#/foo">go foo</a></li>
    <li><a href="#/bar">go bar</a></li>
  </ul>
</div>
  `

  const Sidebar = {
    template
  };

  // Sidebar放到全局里
  window.Sidebar = Sidebar;

})(window)
