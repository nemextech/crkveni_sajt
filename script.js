function padajuci(){
  var x = document.getElementById("padajuci-meni");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
$('.carousel').carousel({
  interval: 1000 * 2
});