$(document).ready(function () {
		$('.it1').click(function(){
			/*$('.quest-answer').slideUp('slow');*/
			$('.it11').slideToggle(1000);
		});
		$('.it2').click(function(){
			$('.it22').slideToggle(1000);
		});
		$('.it3').click(function(){
			$('.it33').slideToggle(1000);
		});
		$('.it4').click(function(){
			$('.it44').slideToggle(1000);
		});
		$('.it5').click(function(){
			$('.it55').slideToggle(1000);
		});
		});
	var moveup=document.querySelector('.moveup');
	var itemContainer=document.querySelector('.container');
		function scrollup(){
			window.scrollTo(0,0);
		}
	window.onscroll=function(){
		if(document.documentElement.scrollTop>500){
			moveup.style.display="inline"
			moveup.style.animationName="moveup";
	
		}
		else if(document.documentElement.scrollTop>400){
			itemContainer.style.marginTop="0px";
	
		}
               
			else{
		
			moveup.style.display="none";
			itemContainer.style.marginTop="";
			}
		}
		var click=document.getElementById('open');
  var show=document.getElementById('show');
  function red(){
    show.style.display="block";
    click.setAttribute('class','fa fa-times fa-3x');
    change.setAttribute('onclick','yellow()');
    click.style.animationName="listo";
    document.documentElement.style.position="fixed";
     document.documentElement.style.width="100%";
     document.querySelector('label').style.color="white";
}
function yellow(){
   show.style.display="none";
    click.setAttribute('class','fa fa-bars-staggered fa-2x');
    change.setAttribute('onclick','red()');
    click.style.animationName="listoo";
    document.documentElement.style.position="";
    document.querySelector('label').style.color="";
}
	