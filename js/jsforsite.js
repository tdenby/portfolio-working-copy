function myFunction() {
  var x = document.getElementById("navigation_links");
  if (x.className === "nav_links") {
    x.className += " responsive";
  } else {
    x.className = "nav_links";
  }
}

document.querySelector("#hamburger").addEventListener("click", function() {
  console.log("press hamburger menu");
  if (document.getElementById("home").classList.contains("nav_item") == true){
    document.getElementById("navigation_links").style.height = "300px";
    document.getElementById("home").classList.remove("nav_item");
    document.getElementById("about").classList.remove("nav_item");
    document.getElementById("works").classList.remove("nav_item");
    document.getElementById("contact").classList.remove("nav_item");
  }
  else {
    document.getElementById("navigation_links").style.height = "auto";
    document.getElementById("home").classList.add("nav_item");
    document.getElementById("about").classList.add("nav_item");
    document.getElementById("works").classList.add("nav_item");
    document.getElementById("contact").classList.add("nav_item");
  }
//	var x = document.getElementById("navigation_links");
// if (x.className === "nav_links") {
//   x.className += " responsive";
// } else {
//   x.className = "nav_links";
//  }
});