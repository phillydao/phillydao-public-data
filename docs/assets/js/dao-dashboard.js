// submenu dropdown
$(document).ready(function(){
  $('a.drop-menu-head').on("click", function(e){
    $(this).parent().parent().find('.dropdown-menu').hide();
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
  
  if (!sessionStorage.getItem('shown-modal')){
   $('#notices').modal('toggle'); 
   sessionStorage.setItem('shown-modal', 'true');
  }
  
$(document).click(function(){
  $(".drop-menu-item").hide();
});

/* Clicks within the dropdown won't make
   it past the dropdown itself */
$(".drop-menu-item").click(function(e){
  e.stopPropagation();
});

  //ACCORDION
var style = document.createElement("style");
style.type = "text/css";

document.body.appendChild( style );
	$(".accordion-toggle").addClass("closed");
	$(".accordion-description").hide();//hide description

	//toggle click
	$(".accordion-toggle").click(function() {
		if ($(this).nextAll(".accordion-description").first().is(":hidden")) {
			$(this).nextAll(".accordion-description").first().slideDown("fast");
			$(this).removeClass("closed").addClass("opened");
		} else {
			$(this).removeClass("opened").addClass("closed");
			$(this).nextAll(".accordion-description").first().slideUp("fast");

		}
	});

	$(".toggle_btn").click(function() {
		$(this).parents(".accordion-description").slideUp("fast");
		$(this).parents(".accordion-description").prevAll(".accordion-toggle").removeClass("opened").addClass("closed");
     });

// BACK TO TOP
    // browser window scroll (in pixels) after which the "back to top" link is shown
   	var offset = 300,
   	//duration of the top scrolling animation (in ms)
   	scroll_top_duration = 700,
   	//grab the "back to top" link
   	$back_to_top = $('a.scrollToTop');

   	//hide or show the "back to top" link
   	$(window).scroll(function(){
   		( $(this).scrollTop() > offset ) ?
   			$back_to_top.addClass('cd-is-visible') :
   			$back_to_top.removeClass('cd-is-visible');
   	});

   	//smooth scroll to top
   	$back_to_top.on('click', function(event){
   		event.preventDefault();
   		$('body,html').animate({
   			scrollTop: 0 ,
   		 	}, scroll_top_duration
   		);
   	});
});

// hide the submenu when the main menu button is clicked
$('.dropdown-toggle.btn.btn-dao-menu').on("click", function(e){
    $('.dropdown-submenu a.test').next('ul').hide();
});

// function to copy text for COPY LINK button
async function copy_link(text_var) {
  const url_text = location.protocol+'//'+location.host+location.pathname.concat("#", text_var)
  
  try {
    await navigator.clipboard.writeText(url_text);
    alert("Copied url: ".concat(url_text))
  } catch (err) {
    console.error("Failed to copy", err)
  }

}

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

var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function scrollTableToLastColumn(e) {
  var scrollTo = $(e).find('.tbl .tr:first .td:last').first()
  var position = scrollTo.position().left
  $(e).scrollLeft(position)  
}

function handleTableParentRowToggle(e) {
  if(e.target.closest('.tr').classList.contains('has-child-rows')){
    const parentRow = e.target.closest('.dao-expandable-parent')
    const tbl = e.target.closest('.tbl')
    if(!!parentRow){
      const childSelector = parentRow.getAttribute('data-dao-table-row-target')
      const parent = $(parentRow)
      parent
        .siblings(`.dao-expandable-child[data-dao-parent-id="${childSelector}"]`)
        .toggleClass('hidden')
      // if this is the root parent, collapse all descendants  
      if(!parent.attr('data-dao-parent-id')) {
        if(parent.attr('aria-expanded') == 'true') {
          const category = parent.attr('data-dao-category')
          parent
            .siblings(`[data-dao-category=${category}]`)
            .addClass('hidden')
            .attr('aria-expanded', 'false')
        }
      } 
      parent.attr('aria-expanded', (i, attr) => {
        return attr == 'true' ? 'false' : 'true'
      })
    }
  }
}

function initTables(els) {
  const initAttr = '__dao-tbl-init'
  
  const init = (tblContainer) => {
    $(tblContainer).click(handleTableParentRowToggle)
    tblContainer.setAttribute(initAttr, true)
  }
  els.forEach((e) => {
    if(!e.getAttribute(initAttr)){
      init(e)
    }
    scrollTableToLastColumn(e)
  })
}

$(window).on('load', () => {
  const tableContainers = () => {
    return document.querySelectorAll('.tbl-container') 
  }
  initTables(tableContainers())
  $('ul.nav-tabs li a[role="tab"]').click(() => {
    setTimeout(() => initTables(tableContainers()), 900)
  })
})
