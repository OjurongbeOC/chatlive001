$(document).ready(function () {
		$('.it1').click(function(){
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
    click.setAttribute('class','fa fa-bars fa-2x');
    change.setAttribute('onclick','red()');
    click.style.animationName="listoo";
    document.documentElement.style.position="";
    document.querySelector('label').style.color="";
}
/* checkout feature */
var paymoney=document.querySelectorAll('#paymoney');
    	var payco=document.querySelector('.payco');
    	var atp=document.querySelector('#atp');
    	var paybtn=document.querySelector('#paybtn');
    	var Cardnumber=document.querySelector('#Cardnumber');
    	var cvv=document.querySelector('#cvv');
    	ExpiryDate.value="09/24";
    	Cardnumber.value="1428234834833491";
    	cvv.value="475";
    	Cardnumber.addEventListener('keypress',function() {
    		alert(Cardnumber.value.length.slice(0,-1));
    	})
        for(let u=0;u<paymoney.length;u++){
        paymoney[u].addEventListener('click',function(){
        	var amtpay=paymoney[u].nextElementSibling.innerHTML.slice(0,-4);
        	payco.style.display="flex";
        	atp.innerHTML=amtpay;
        	paybtn.innerHTML="Pay "+amtpay;
    });
    }
    function payclose() {
    	alert('Transaction not Completed');
    	payco.style.display="";
    }
    function paycomplete() {
    	alert('Transaction Completed Successfully');
    	window.location="https://wa.me/message/JULUS3DEOW5WB1";
    	payco.style.display="";
}
/* read more trick */
var reader=document.querySelectorAll('.reader');
for(let r=0;r<reader.length;r++){
	reader[r].addEventListener('click', function () {
		window.location="index.html";
	})
	}
