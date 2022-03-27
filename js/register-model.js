$(document).ready(function(){
 // multiselect form js 
var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
	removeItemButton: true,
	maxItemCount:9,
	searchResultLimit:9,
	renderChoiceLimit:9
}); 
var multipleCancelButton = new Choices('#choices-multiple-remove-button-one', {
	removeItemButton: true,
	maxItemCount:9,
	searchResultLimit:9,
	renderChoiceLimit:9
});


});

/* let a = document.getElementById("choices-multiple-remove-button")
a.addEventListener('change', () => {
   let b = document.getElementsByClassName('choices__inner')[0]
   b = b.querySelector("input.choices__input")
   if(a.length)
      b.setAttribute('placeholder', "")
   else b.setAttribute('placeholder', "select value")
}) */

/* let one = document.getElementById("choices-multiple-remove-button-one")
one.addEventListener('change',()=> {
let oneb = document.getElementsByClassName('choices__inner')[0]
oneb = oneb.querySelector("input.choices__input")
if(one.length)
    oneb.setAttribute('placeholder', "") 
else oneb.setAttribute('placeholder', "select value")
	
})
 */

let a1 = document.getElementsByClassName("first_filter")[0]
let b1 = document.getElementsByClassName("second_filter")[0]
let c = document.getElementsByClassName("third_filter")[0]

function clearValues(a, index){
a.addEventListener('change', (e) => {
//var txt = document.querySelector('.choices__input input').setAttribute('placeholder','$');;  
let b = document.getElementsByClassName('choices__inner')[index]
   b = b.querySelector("input.choices__input")
//console.log("Hello world" + txt)
 if(a.length)
 
  b.classList.add("mystyle")
 else  b.classList.remove("mystyle")
})
}
clearValues(a1, 0)
clearValues(b1, 1)
clearValues(c, 2) 


/*  const selectElement = document.querySelector('.first_filter');
 const selectPlace = document.querySelector('.choices__input');
 	  var slectvalue = document.getElementsByClassName('choices__input');

selectElement.addEventListener("change", function() {
	  var bbb = document.getElementsByClassName('choices__inner')[0]
	   bbb = bbb.querySelector("input.choices__input")
	 
	   //var getValuein = slectvalue.setAttribute("placeholder", slectvalue.getAttribute("rel"));
	   //.log(slectvalue);
//var  one = document.getElementsByClassName('choices__list')[index]
         if(selectElement.length > 0){
			     //bbb.removeAttr('placeholder');
			 bbb.classList.add("mystyle")
		 }  else {
			bbb.classList.remove("mystyle");
		 }
    
});  */






$(document).ready(function() {
   // Register form email vaidation
     $('#user-form').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
    },
    
    highlight: function(element, errorClass, validClass) { 
      $(element).nextAll('.form-control-feedback').show().removeClass('fa-check').addClass('fa-times');
      $(element).addClass(errorClass).removeClass(validClass);
      $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function(element) {
      $(element).nextAll('.form-control-feedback').show().removeClass('fa-times').addClass('fa-check');
   element.closest('.form-group').removeClass('has-error').addClass('has-success');
      $(element).remove();
    }
  });

// Password js  
$(".toggle-password").click(function() {
		$(this).toggleClass("fa-eye fa-eye-slash");
		var input = $($(this).attr("toggle"));
		if (input.attr("type") == "password") {
		input.attr("type", "text");
		} else {
		input.attr("type", "password");
		}
});
});