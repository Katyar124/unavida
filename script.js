let Si=document.getElementById('Si');
Si.addEventListener("click",function(e){
  alert("Bueno, pues yo si quiero una vida contigo"); 
} );

let No=document.getElementById('No');
No.addEventListener("mousemove",function(e){
  let x = Math.round( Math.random() *93 );
  let y = Math.round( Math.random() *93 );
  No.style.left = x+"%";
  No.style.top = y+"%";
} );