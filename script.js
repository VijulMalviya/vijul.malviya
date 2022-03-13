window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
    document.getElementById("NavigationBar").style.backgroundColor = "white";
  } else {
    document.getElementById("NavigationBar").style.backgroundColor = "transparent";
  }
}