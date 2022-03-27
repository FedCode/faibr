$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
// FILE UPLOAD FUNCTION JS

 $(document).ready(function() {
	 
  if (window.File && window.FileList && window.FileReader) {
    $(".filesup").on("change", function(e) {
		
      var files = e.target.files,
	  //var filetitle = file.name,
	
        filesLength = files.length;
		var fileName = $('.filesup')[0].files[0].name;
		var fileSize = $('.filesup')[0].files[0].size;
		var fileSizeKb = fileSize/1024;
		var filesSizecut = Math.trunc( fileSizeKb );
		var fileSizeName = "KB";
		var extension = $('.filesup').val().split('.').pop();
        for (var i = 0; i < filesLength; i++) {
        var f = files[i]
        var fileReader = new FileReader();
        fileReader.onload = (function(e) {
          var file = e.target;
          $("<div class=\"fil-container\" id=\"filecontainer\"><span class=\"pip\">" + 
            "<img class=\"imageThumb\" id=\"thumbImage\"src=\"" + e.target.result + "\" title=\"" + file.name + "\"/><span id=\"upfileName\"></span>" +
            "<span class=\"remove\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span> </div>" + 
            "</span>").insertAfter("#insert-after");
          $(".remove").click(function(){
            $(this).parent(".pip").remove();
			 //$(".file-uploadCrad").removeClass('file-uploaded')
          });
		  // get file name
		 // console.log(filesSizecut);
		  document.getElementById("upfileName").innerHTML = fileName + "<br>" + filesSizecut + "  " + fileSizeName;
			if (['bmp', 'gif', 'png', 'jpg', 'jpeg', 'svg'].indexOf(extension) > -1) {
				//console.log('validated');
				
			} else {
				//alert('invalid extension');
				 document.getElementById("thumbImage").src = "images/doc-icon.png";
				
			}
		  		   
            //$(this).parent(".pip").remove();
        
          // Old code here
          /*$("<img></img>", {
            class: "imageThumb",
            src: e.target.result,
            title: file.name + " | Click to remove"
          }).insertAfter("#files").click(function(){$(this).remove();});*/
          
        });
        fileReader.readAsDataURL(f);
      }
      console.log(files);
    });
  } else {
    alert("Your browser doesn't support to File API")
  }
});


// TEXTAREA AUTOGROW FUNCTION JS
function auto_grow(element) {
       element.style.height = "5px";
        element.style.height = (element.scrollHeight)+"px";
 }


// MOBILE FUNCTION FOR CHAT
$(document).ready(function() {
   $('.contacts-list li > a').click(function() {
        $('body').addClass("active");
        $(this).addClass("Done");
    });
	
	
	 $('.show-sidebar-btn').click(function() {
        $('body').removeClass("active");
        $(this).addClass("active-one");
     });
	
	
});

$('.click').click(function (e) {
    $(this).siblings('.notification-list').fadeToggle(100);
});

$('.notification-pdrop').blur(function (e) { 
    $('.notification-list').fadeOut(100);
});





//COMPANY DASHBAORD VIEW MORE JS

$(".show-more").click(function () {
if($(".text").hasClass("show-more-height")) {
	$(this).text("View Less");
} else {
	$(this).text("View More");
	
}

$(".text").toggleClass("show-more-height");
});


//COMPANY DASHBAORD SEARCH SLIDER JS
$(document).ready(function(){
  $('.slick-slider').slick({
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
	autoplaySpeed: 2000,
    dots:false,
    centerMode:true,
	responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,

      }

    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:false,
        infinite: true,
		centerMode:false,

      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        infinite: true,
        autoplay: true,
		centerMode:false,
        autoplaySpeed: 2000,
      }
    }]
  });
});

// JOB TYPE RADIO BUTTON JS
$(document).ready(function(){
    $('.message-list-inline input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".salary-box").not(targetBox).hide();
        $(targetBox).show();
    });

	
	//$('.radio-custom').change(function(){
        //var inputValue = $(this).attr("value");
        //var targetBox = $("." + inputValue);
       // $(".view-status-cards").not(targetBox).hide();
        //$(targetBox).show();
    //});
});
function valueChanged() {
  if($('.radio-custom').is(":checked"))   
    $(".view-status-cards").show();
  else
    $(".view-status-cards").hide();
};



///UPLOAD COMPNAY PROFILE IMAGE
 $(document).ready(function() {
        
var readURL = function(input) {
if (input.files && input.files[0]) {
	var reader = new FileReader();

	reader.onload = function (e) {
		$('.profile-pic').attr('src', e.target.result);
	}

	reader.readAsDataURL(input.files[0]);
}
}


	$(".file-upload").on('change', function(){
	readURL(this);
	});

	$(".upload-button").on('click', function() {
	$(".file-upload").click();
	});
});

   // I make all the changes here, firstly I select the main div then select input area where placeholder
   // is present then based on length I update the placeholder value
/*    let a = document.getElementById("choices-multiple-remove-button")
a.addEventListener('change', () => {
   let b = document.getElementsByClassName('choices__inner')[0]
   b = b.querySelector("input.choices__input")
   if(a.length)
      b.setAttribute('placeholder', "")
   else b.setAttribute('placeholder', "select value")
}) */

$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});