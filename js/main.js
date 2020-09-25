(function($) {

	"use strict";

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

    const chk = document.getElementById('chk');

    var container_with_toggle = localStorage.getItem('theme');
    container_with_toggle = (container_with_toggle === "1") ? true : false;

    if(container_with_toggle){
      $('.theme-toggle').addClass('light');
      $('.checkbox').attr('Checked','Checked'); 
    }
    
    chk.addEventListener('change', () => {
      var container_with_toggle = localStorage.getItem('theme');
      container_with_toggle = (container_with_toggle === "1") ? true : false;
  
      if (container_with_toggle) {
        localStorage.setItem("theme", 0);
        $('.checkbox').attr('Checked','Checked'); 
     } else {
        localStorage.setItem("theme", 1);
     }
     $('.theme-toggle').toggleClass('light');
 });

})(jQuery);

