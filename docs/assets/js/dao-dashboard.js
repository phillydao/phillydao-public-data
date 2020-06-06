// submenu dropdown
$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});

// hide the submenu when the main menu button is clicked
$('.dropdown-toggle.btn.btn-dao-menu').on("click", function(e){
    $('.dropdown-submenu a.test').next('ul').hide();
});

// handle tag switching for collapsible table icons
$(function(){
  $('tr').on('click', function(e){
    var trow = $(e.currentTarget);
    if(trow.attr('aria-expanded') === 'true') {
      $(this).attr('aria-expanded', 'false');
    } else {
      $(this).attr('aria-expanded', 'true')
    }
  })
});

function fix_rowspanning() {
  if ($(window).width() > 550) {
    $("tspan:contains('____')").removeAttr('x');
    $("tspan:contains('____')").attr('dy','0');
    $("tspan:contains('____')").text(function(){return $(this).text().replace("____", "");}); 

  } else {
    $("tspan:contains('____')").text(function(){return $(this).text().replace("____", "");}); 
  }
}

// remove rowspanning labels on charts (preceded by xxxx) and then remove the xxxx; this is a hack for the covid faceted plots
$(window).on("load", function() {fix_rowspanning();});

$(window).resize(function() {setTimeout(()=>  {fix_rowspanning();}, 5)});