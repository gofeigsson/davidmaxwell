//PARALLAX EFFECT DIV 1
const parallax = document.getElementById("one");
window.addEventListener("scroll", function() 
{
let offset = window.pageYOffset; 
parallax.style.backgroundPositionY = offset * 0.6 + "px";
});

$(document).ready(function(){
    $("button").click(function(){
      $("p").hide();
    });
  });
//GALLERY FOR POLAROID PAINTINGS


    // Get the modal
    var modal = document.getElementById('myModal');
    
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = $('.myImg');
    var modalImg = $("#img01");
    var captionText = document.getElementById("caption");
    $('.myImg').click(function(){
        modal.style.display = "block";
        var newSrc = this.src;
        modalImg.attr('src', newSrc);
        captionText.innerHTML = this.alt;
    });
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
   
    feather.replace();


