
function tes() {
	var element = document.body;
			element.classList.toggle("bg-dark");
			element.classList.toggle("text-light");
			element.style.transition = "all 1s";
      
  var love= document.getElementById("jumbo");
  love.classList.toggle("dark-light");
 
  love.style.transition = "all 1s";
}




 
  $(window).on('load'), function(){
    $('#loading').hide();
  }