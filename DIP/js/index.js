function sizeTriangles(){
  var w = window.innerWidth;
  var h = window.innerHeight;

  var leftTriangle = document.getElementById('left-triangle');
  var rightTriangle = document.getElementById('right-triangle');
  var topTriangle = document.getElementById('top-triangle');
  var bottomTriangle = document.getElementById('bottom-triangle');

  leftTriangle.setAttribute("points", "0,0 0,"+h+", "+w/2+", "+h/2);

  topTriangle.setAttribute("points", "0,0 " +w+",0 "+w/2+","+h/2);

  rightTriangle.setAttribute("points", w/2+","+h/2+" "+w+",0 "+w+","+h);

  bottomTriangle.setAttribute("points", "0,"+h+" "+w/2+","+h/2+" "+w+","+h);
}

sizeTriangles();
window.addEventListener('resize', function(event){
  sizeTriangles();
});

document.getElementById('menu').addEventListener('click', function(event){
  if(event.target.getAttribute('data-open') === 'true'){
    event.target.innerHTML = "TEST";
    event.target.setAttribute('data-open', 'false');
  }
  else{
    event.target.innerHTML = "CLOSE";
    event.target.setAttribute('data-open', 'true');
  }
  var menu = document.querySelector('.menu-overlay');
  if(menu.classList.contains('active')){
    menu.classList.remove('active');      
  }
  else{
    menu.classList.add('active');
  }
  
})

