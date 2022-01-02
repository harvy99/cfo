
$(document).ready(function() {
    $('.thanks-note').hide();
    $('.instruction-note').hide();

    $('.post-img').removeAttr('disabled');


    var link ='https://youtu.be/Q9V8duwTRR0';
    $('.main-event').append('<a  id="hidden-link" class="hidden-link" href="'+link+'" target="_blank"></a>'); 
     
$('.post-btn').click(function() {

   loadingFunction();
    
     // window.open("https://youtu.be/vkIqKiLgm6Y", "_blank"); 
    $('.main-event').hide(); 
    $('.instruction-note').show(); 
    
     $( "#hidden-link" ).trigger( "click" );
     document.getElementById('hidden-link').click();

    setInterval(function()
    {   
        $('.load-end').text('DONE ! Please wait your view to be update by Google Team ')
        $.LoadingOverlay("hide", true); //remmove the loading overlay
        $('.instruction-note').hide();
        $('.thanks-note').show();
        // alert("Hello"); 

    }, 600000); 
        // 1sec = 1000
        // 1min = 60000
        // 5 minutes = 300000
        // 10 min = 600000
  });
  function loadingFunction(){ 
//  Sending view from Youtube "Uploading data from Google Firebase ""DONE ! Please wait your view to be update by Team " 
 
    var customElement =  '<div class="cm-spinner"></div>'
    
    $.LoadingOverlay("show", {
        background: "rgb(203, 225, 245, 0.3)", 
        image: "",
        custom           : customElement,
        customAnimation  : "",
        customAutoResize : true,
        customResizeFactor: 2 
    }); 
    $('.load-start').text('Sending view from Youtube')
    
    setInterval(function()
    { 
        
        $('.load-start').text('Uploading data from Google Firebase')
        // $.LoadingOverlay("show", {
        //     background: "rgb(203, 225, 245, 0.3)", 
        //     image: "",
        //     custom           : customElement,
        //     customAnimation  : "",
        //     customAutoResize : true,
        //     customResizeFactor: 2,
        //     customOrder: 2,
        //     text: "Uploading data from Google Firebase",
        //     textColor: "#202020",
        //     textOrder: 3,
        //     textResizeFactor: 0.3,
        //     textAutoResize: true,
        //     direction: "column"
        // });

    }, 300000); 
        // 1sec = 1000
        // 1min = 60000
        // 5 minutes = 300000
        // 10 min = 600000  
  }
  
});
