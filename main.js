document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Header1").onclick = function() {
      this.style.color = 'orange'
    }
  })
 $( document ).ready(function() {
  $( "#Fade").click(function() {
    $ ( "#Fade").fadeOut( "slow", function() {
    });
  });
});