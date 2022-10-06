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
function raspored(){
 onclick="location.href ='raspored_bogosluzenja.html'";
}
function ceremonija(){
  onclick="location.href ='ceremonije_i_obredi.html'";
 }