var m=document.getElementById("menus");
var s=document.getElementById("snav");
var n=document.getElementById("container");
s.style.width="0px";
function menus(){
    if(s.style.width=="0px"){
        s.style.width="200px";
        n.style.visibility="hidden";
    }
    else{
        s.style.width="0px";
        n.style.visibility="visible";
    }
}
function form()
{
  document.getElementById("as_left").style.visibility="hidden";
  document.getElementById("as_right").style.visibility="hidden";
  document.getElementById("slider").style.visibility="hidden";
  document.getElementById("container").style.position="sticky";
  document.getElementById("U").style.visibility="visible";
  document.getElementById("FC").style.visibility="hidden";
  document.getElementById("LOG").style.visibility="hidden";
}
function LOGS()
{
  document.getElementById("as_left").style.visibility="hidden";
  document.getElementById("as_right").style.visibility="hidden";
  document.getElementById("slider").style.visibility="hidden";
  document.getElementById("container").style.position="sticky";
  document.getElementById("LOG").style.visibility="visible";
  document.getElementById("FC").style.visibility="hidden";
  document.getElementById("U").style.visibility="hidden";
}
function Facu(){
  document.getElementById("as_left").style.visibility="hidden";
  document.getElementById("as_right").style.visibility="hidden";
  document.getElementById("slider").style.visibility="hidden";
  document.getElementById("container").style.position="sticky";
  document.getElementById("U").style.visibility="hidden";
  document.getElementById("LOG").style.visibility="hidden";
  document.getElementById("FC").style.visibility="visible";
}
function STU(){
  document.getElementById("as_left").style.visibility="hidden";
  document.getElementById("as_right").style.visibility="hidden";
  document.getElementById("slider").style.visibility="hidden";
  document.getElementById("container").style.position="sticky";
  document.getElementById("U").style.visibility="hidden";
  document.getElementById("FC").style.visibility="hidden";
  document.getElementById("LOG").style.visibility="hidden";
  document.getElementById("ST").style.visibility="visible";
}
function MAPS()
{
  document.getElementById("as_left").style.visibility="hidden";
  document.getElementById("as_right").style.visibility="hidden";
  document.getElementById("slider").style.visibility="hidden";
  document.getElementById("container").style.position="sticky";
  document.getElementById("MAP11").style.visibility="visible";
}
function FILTER(){
  var input, filter, ul, li, a, i, Value;
  input = document.getElementById("input");
  filter = input.value.toUpperCase();
  ul = document.getElementById("names");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      Value = a.textContent || a.innerText;
      if (Value.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}