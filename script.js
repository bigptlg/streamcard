$(document).ready(function(){
    
  $("#menuIcon").click(function(){
    $("header").toggleClass("menu");
  });
    
    function darkMode(){

    $("body").toggleClass("dark");

    if ($("body").hasClass("dark")) {
      $("#daMode").removeClass("fa-solid fa-moon");
      $("#daMode").addClass("fa-solid fa-sun");
      localStorage.setItem("darkModeAtivado", "true");
    } else {
      $("#daMode").removeClass("fa-solid fa-sun");
      $("#daMode").addClass("fa-solid fa-moon");
      localStorage.setItem("darkModeAtivado", "false");
    }

  };

  if(localStorage.getItem("darkModeAtivado") === "true"){
    darkMode();
  }
  
  $("#daMode").click(darkMode);

});
