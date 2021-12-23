const toggleMenu = document.getElementById('mySidenav');
var status = 0;
function openNav() {
  toggleMenu.style.width = "50%";
  status=1;
}

function closeNav() {
  toggleMenu.style.width = "0";
  status=0;
}
function myFunction(x) {
  x.classList.toggle("change");
  if(status==0){
  	openNav();
  }
  else{
  	closeNav();
  }
}