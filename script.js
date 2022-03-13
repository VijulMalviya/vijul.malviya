window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
    document.getElementById("NavigationBar").style.backgroundColor = "white";
  } else {
    document.getElementById("NavigationBar").style.backgroundColor = "transparent";
  }
}

function openportfolio(evt, sectionname) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(sectionname).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();