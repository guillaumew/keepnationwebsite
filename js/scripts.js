var userLang = (navigator.language) ? navigator.language : navigator.userLanguage;
var navi ;
var nbrttclick=0;
var clickeffect=false;
var totalpoints=0;
var bonusunlocked=false;
var bonus3unlocked=false;
var hasseencontact=false;
var hasseenteam=false;
var hasseenproduct=false;
var hasseenboard=false;
var achiev1locked=true;
var achiev2locked=true;
var achiev3locked=true;
var prodnotclosedyet=0;
var numberofprodclockset=0;
var collected = [];
var notifications=0;
var sponsoffer = [] ;
var sponsopointer=0;
var sponsor2 = [];
var imgachievements=["img/four.jpg","img/chrono.jpg","img/konami.jpg"];

// KONAMI

function goKonami() {
	if(achiev3locked){
 		achievement(achievement3, 50,"achiev3img",3);
 		achiev3locked=false;
 	}
}
var intId;
function killKonami() {

  intId = setInterval(initEvent,500);
}

function initEvent(){
  document.onkeydown = checkKeycode;
  clearInterval(intId);
}

var oldKey = 0;
var chaine = "";
function checkKeycode(e) {
  var keycode;

  if (window.event) keycode = window.event.keyCode;
  else if (e) keycode = e.which;

  if (keycode == 38) {
  	if (oldKey!=38) {
  	 chaine = "38";
  	}else{
  	 chaine = chaine+"-"+keycode;
  	}
  }else{
  	chaine = chaine+"-"+keycode;

  	if (keycode==65) {
  		if (chaine=="38-38-40-40-37-39-37-39-66-65") {
  			goKonami();
  			chaine = "";
  		}
  	}
  }

  oldKey = keycode;
}

initEvent();

// FIN DE KONAMI

$(document).ready(function() {
	beginning=new Date();
	if(navigator.appName == 'Microsoft Internet Explorer'){
		navi="IE";
	}

	document.getElementById("titreele8").innerHTML = " POINTS : " + totalpoints;
	
	
	//Langues
	
	if(userLang.substring(0,2)=='fr'){
		document.getElementById("titremenu1").innerHTML = "Contact";
		document.getElementById("titremenu2").innerHTML="Produit";
		document.getElementById("titremenu3").innerHTML="Equipe";
		document.getElementById("titremenu4").innerHTML="Board";
		document.getElementById("titre6").innerHTML="On recrute !";
		document.getElementById("txt6-1").innerHTML="Nous avons besoin de <b>ninjas du code</b>. <br>Envoyez-nous votre candidature par <a href='mailto:contact@keepnation.com'>mail</a> <br> ou<br>";		
		document.getElementById("titreele1").innerHTML="Rejoignez-nous !";
		document.getElementById("txt1-1").innerHTML="Soyez le premier à être tenu informé de notre lancement en nous donnant votre e-mail :";
		document.getElementById("txt1-2").innerHTML="Vous pouvez aussi nous suivre sur vos réseaux sociaux préférés :";
		document.getElementById("txt1-3").value="Rejoignez la beta";
		document.getElementById("txt1-4").innerHTML="Rejoins l'aventure pour changer la face du mobile ! Si tu maîtrises le RoR et l'univers du mobile, tu nous intéresses.";
		
		document.getElementById("titreele2").innerHTML="Une solution pour vous :";
		document.getElementById("titre2-1").innerHTML="Internautes / Mobinautes";
		document.getElementById("txt2-1").innerHTML="Relevez des défis, gagnez des badges, cumulez vos points, passez des niveaux et transformez vos points en cadeaux géniaux.";
		document.getElementById("titre2-2").innerHTML="Développeurs / Editeurs d'applications";
		document.getElementById("txt2-2").innerHTML="Fidélisez vos utilisateurs, augmentez votre rétention & développez votre viralité.";
		document.getElementById("titre2-3").innerHTML="Annonceurs";
		document.getElementById("txt2-3").innerHTML="Touchez des utilisateurs ciblés, de manière non intrusive et dans un moment de prime time émotionnel.";
		
		document.getElementById("titreele3").innerHTML="La dream team :";
		document.getElementById("txt3-11").innerHTML="<b>Xavier Mariani</b> <i> (ou Xav')</i><br>Président<br>";
		document.getElementById("txt3-12").innerHTML="Se prend pour un homme de goût mais porte toujours des chaussettes bariolées...";
		document.getElementById("txt3-21").innerHTML="<b>Emilien Eychenne</b> <i> (ou Milou)</i><br>Directeur Général<br>";
		document.getElementById("txt3-22").innerHTML="Voudrait être sportif mais ne peut pas se passer de son Mcdo du Dimanche !";
		document.getElementById("txt3-31").innerHTML="<b>Guillaume Wolf</b> <i> (ou Seppy)</i><br>Head of Marketing<br>";
		document.getElementById("txt3-32").innerHTML="Se revendique geek, mais n'a jamais vu le dernier Star Wars. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;";
		document.getElementById("txt3-41").innerHTML="<b>Vous</b> <i> (ou CodeKiller)</i> - Poste technique<br>";
		document.getElementById("txt3-42").innerHTML="Nous recrutons ! Envoyez-nous votre candidature par <a href='mailto:contact@keepnation.com'>mail</a>";
		document.getElementById("txt3-51").innerHTML="<b>Frédéric Leroy</b> <i> (ou Fred)</i><br>Directeur technique<br>";
		document.getElementById("txt3-52").innerHTML="Se prend pour Dieu, mais en toute humilité...";
		
		document.getElementById("titreele4").innerHTML="Notre board :";
		document.getElementById("txt4-1").innerHTML="<b>Nom : </b>Jules Minvielle<br><b>Position : </b>CEO Surikate";
		document.getElementById("txt4-2").innerHTML="<b>Nom : </b>Thomas Pasquet <br><b>Position : </b>Fondateur Beezik / Bee Ad";
		document.getElementById("txt4-3").innerHTML="<b>Nom : </b>Jean Canzoneri<br><b>Position : </b>Fondateur Beezik / Bee Ad";
		
		document.getElementById("titreele8-1").innerHTML="Récompenses";
		document.getElementById("titreele8-2").innerHTML="Objectifs";
		document.getElementById("txt8-1-1").innerHTML="Un petit feu d'artifice à chaque clic";
		document.getElementById("txt8-1-2").innerHTML="Une surprise !";
		document.getElementById("txt8-1-3").innerHTML="Une photo de la team !";
		document.getElementById("txt8-2-1").innerHTML="Consulter tous les onglets du menu";
		document.getElementById("txt8-2-2").innerHTML="Lire la page produit pendant 30 secondes";
		document.getElementById("txt8-2-3").innerHTML="Code Konami";
		document.getElementById("txt8-3-1").innerHTML="Cliquer pour acheter";
		document.getElementById("txt8-3-2").innerHTML="A réaliser";
		document.getElementById("txt8-3-3").innerHTML="Cliquer pour collecter";
		document.getElementById("txt8-3-4").innerHTML="Obtenu";
		document.getElementById("txt8-4").innerHTML="Vous avez besoin de plus de points";
		
		finalscore1 = "<img src='img/win.jpg'> <br />Score final : ";
		finalscore2 =  " secondes <br /> <input type='button' value='Rejouer ?' onClick='document.location.reload(true)'>";
		
		textcollect = "Rendez-vous sur l'<a href='#' onclick='showaward();'>onglet des récompenses</a> pour collecter ces points et gagner des cadeaux.";
		achievement1 = "Bravo, vous avez consulté tous les onglets du menu. Vous gagnez 40 pts !<br>"+textcollect;
		achievement2 = "Bravo, vous avez lu la page produit. Vous gagnez 20 pts !<br>"+textcollect;
		achievement3 = "Bravo, vous avez fait le code Konami. Vous gagnez 50 pts !<br>"+textcollect;
		
		sponsoffer[1] = "<iframe src='fb.html' scrolling='no' frameborder='0' style='border:none; overflow:hidden; width:250px; height:35px;' allowTransparency='true'></iframe>";
		sponsor2 [1] = " pts ! Devenez fan de Keep Nation sur Facebook et nous vous offrons 100 pts.";
		sponsor1 = "Vous avez gagné ";
		sponsor2 [0] = " pts ! Si vous vous inscrivez à notre newsletter, nous vous offrons 100 pts.";
		sponsoffer[0] = "<form onsubmit=\"window.open( 'http://ymlp.com/subscribe.php?id=gjwyjqugmgj','signup_popup','scrollbars=yes,width=600,height=450'); return true;\" target=\"signup_popup\" action=\"http://ymlp.com/subscribe.php?id=gjwyjqugmgj\" method=\"post\">"
			+"<p>Votre adresse mail :</p>"
			+"<input size='35' name='YMP0' type='text' />"
			+"<input value='OK' type='submit' onclick='redeemsponsor();'/></form>";

	}
	else{
		document.getElementById("titremenu1").innerHTML = "Contact";
		document.getElementById("titremenu2").innerHTML="Product";
		document.getElementById("titremenu3").innerHTML="Team";
		document.getElementById("titremenu4").innerHTML="Advisors";
		document.getElementById("titre6").innerHTML="We're hiring!";
		document.getElementById("txt6-1").innerHTML="We need your <b>tech skills</b>. Shoot us a <a href='mailto:contact@keepnation.com'>mail</a> <br>or<br>";
		
		document.getElementById("titreele1").innerHTML="Join Keep Nation!";
		document.getElementById("txt1-1").innerHTML="Be the first to know about our launch by giving your email address:";
		document.getElementById("txt1-2").innerHTML="You can also follow us on your favorite social networks:";
		document.getElementById("txt1-3").value="Join the beta";
		document.getElementById("txt1-4").innerHTML="Be part of a the mobile disruption! If you master RoR and mobile, you're our man.";
		
		document.getElementById("titreele2").innerHTML="A solution that fits you";
		document.getElementById("titre2-1").innerHTML="Web surfers";
		document.getElementById("txt2-1").innerHTML="Win presents by browsing your favorite applications!";
		document.getElementById("titre2-2").innerHTML="App publishers";
		document.getElementById("txt2-2").innerHTML="Win the loyalty of your users and monetize your application.";
		document.getElementById("titre2-3").innerHTML="Advertisers";
		document.getElementById("txt2-3").innerHTML="Engage with the most active in an innovative way.";
		
		document.getElementById("titreele3").innerHTML="Our dream team :";
		document.getElementById("txt3-11").innerHTML="<b>Xavier Mariani</b> <i>(aka Xav)</i><br>CEO<br>";
		document.getElementById("txt3-12").innerHTML="Thinks of himself as a fashion addict, but wears unsuited socks.";
		document.getElementById("txt3-21").innerHTML="<b>Emilien Eychenne</b><i>(aka Milou)</i><br>co-CEO<br>";
		document.getElementById("txt3-22").innerHTML="A self proclamed athlete who goes to McDonald's every other day.";
		document.getElementById("txt3-31").innerHTML="<b>Guillaume Wolf</b> <i>(aka Geeyom)</i><br>Head of Marketing<br>";
		document.getElementById("txt3-32").innerHTML="Says he's a geek but still hasn't watched the latest Star Wars episode. &nbsp;";
		document.getElementById("txt3-41").innerHTML="<b>You</b> <i>(aka Tech Ninja)</i> - Technical position<br>";
		document.getElementById("txt3-42").innerHTML="We're hiring! Shoot us a <a href='mailto:contact@keepnation.com'>mail</a> to apply to our company.";
		document.getElementById("txt3-51").innerHTML="<b>Frédéric Leroy</b><i> (aka Fred)</i><br>CTO<br>";
		document.getElementById("txt3-52").innerHTML="Pretends he's a god, while still being humble...";
		
		document.getElementById("titreele4").innerHTML="Board of advisors:";
		document.getElementById("txt4-1").innerHTML="<b>Name: </b>Jules Minvielle<br><b>Position : </b>CEO Surikate";
		document.getElementById("txt4-2").innerHTML="<b>Name: </b>Thomas Pasquet <br><b>Position : </b>Fonder Beezik / Bee Ad";
		document.getElementById("txt4-3").innerHTML="<b>Name: </b>Jean Canzoneri<br><b>Position : </b>Fonder Beezik / Bee Ad";
		
		document.getElementById("titreele8-1").innerHTML="Awards";
		document.getElementById("titreele8-2").innerHTML="Achievements";
		document.getElementById("txt8-1-1").innerHTML="A small firework on each clic";
		document.getElementById("txt8-1-2").innerHTML="A surprise!";
		document.getElementById("txt8-1-3").innerHTML="A picture of our team";
		document.getElementById("txt8-2-1").innerHTML="Read all tabs.";
		document.getElementById("txt8-2-2").innerHTML="Read the product page during 30s.";
		document.getElementById("txt8-2-3").innerHTML="Konami Code";
		document.getElementById("txt8-3-1").innerHTML="Click and buy";
		document.getElementById("txt8-3-2").innerHTML="To achieve";
		document.getElementById("txt8-3-3").innerHTML="Click and collect";
		document.getElementById("txt8-3-4").innerHTML="Done";
		document.getElementById("txt8-4").innerHTML="You need more points";
		
		textcollect = "Go on the <a href='#' onclick='showaward();'>awards tab</a> to collect these points and win prizes.";
		achievement1 = "Well done! You read all tabs. You earn 40 pts!<br>"+textcollect;
		achievement2 = "Well done! You've been on the product page for 30s. You earn 20 pts!<br>"+textcollect;
		achievement3 = "Well done! You typed the Konami Code. You earn 50 pts!<br>"+textcollect;
		
		sponsor1 = "You just earned ";
		sponsor2 [0] = " pts! If you sign up to our newsletter, we'll give you 100 pts.";
		sponsoffer[0] = "<form onsubmit=\"window.open( 'http://ymlp.com/subscribe.php?id=gjwyjqugmgj','signup_popup','scrollbars=yes,width=600,height=450'); return true;\" target=\"signup_popup\" action=\"http://ymlp.com/subscribe.php?id=gjwyjqugmgj\" method=\"post\">"
			+"<p>Your email address:</p>"
			+"<input size='35' name='YMP0' type='text' />"
			+"<input value='OK' type='submit' onclick='redeemsponsor();'/></form>";
		sponsoffer[1] = "<iframe src='fb.html' scrolling='no' frameborder='0' style='border:none; overflow:hidden; width:250px; height:35px;' allowTransparency='true'></iframe>";
		sponsor2 [1] = " pts! like Keep Nation son Facebook and win 100 pts.";
		
	}
	
	var button = document.getElementById("contact");
	
	if (button.addEventListener){
		button.addEventListener("click", contactclick, false);
		document.getElementById("product").addEventListener("click", prodclick, false);
		document.getElementById("team").addEventListener("click", teamclick, false);
		document.getElementById("board").addEventListener("click", boardclick, false);
		document.getElementById("points").addEventListener("click", showaward, false);
		document.getElementById("acquire1").addEventListener("click", buy1, false);
		document.getElementById("acquire2").addEventListener("click", buy2, false);
		document.getElementById("acquire3").addEventListener("click", buy3, false);
	} else if (button.attachEvent) {
		button.attachEvent("onclick", contactclick);
		document.getElementById("product").attachEvent("onclick", prodclick);
		document.getElementById("team").attachEvent("onclick", teamclick);
		document.getElementById("board").attachEvent("onclick", boardclick);
		document.getElementById("points").attachEvent("onclick", showaward);
		document.getElementById("acquire1").attachEvent("onclick", buy1);
		document.getElementById("acquire2").attachEvent("onclick", buy2);
		document.getElementById("acquire2").attachEvent("onclick", buy2);
	}
	
	$(document).click(function(e){
		if(clickeffect){
			nbrttclick++;
			vanishingstars(e.pageX, e.pageY, 50, 8, nbrttclick,10,1);
		}	
   });
 });	
    
   
   function vanishingstars(x,y,length,nbr,uniqueid,size,iteration){
   		for (var i=0;i<nbr;i++){
			var theta=(2*i/nbr)* Math.PI + uniqueid ;
			var divid=uniqueid+"_"+i;
			var newdiv = document.createElement('div');
			newdiv.setAttribute('id',divid);
			newdiv.innerHTML="<img src='img/star.png' width="+size+">";
			document.getElementById("dummy").appendChild(newdiv);
			newdiv.style.left=x-size/2+10*Math.cos(theta)+"px";
			newdiv.style.top=y-size/2+10*Math.sin(theta)+"px";
			newdiv.style.width=size+"px";
			newdiv.style.height=size+"px";
			newdiv.style.position="fixed";
			$('#'+divid).css({zIndex: 1000});
			$("#"+divid).animate({ 
				left:x-size/2+ length*Math.cos(theta) +"px", 
				top:y-size/2+ length*Math.sin(theta) +"px" }, 
			1000 );
			$("#"+divid).hide('slow');
			if(iteration>1){
				vanishingstars(
					x-size/2+ length*Math.cos(theta),
					y-size/2+ length*Math.sin(theta),
					length/2,
					nbr,
					1000000*uniqueid+1000*iteration+i,
					size/2,
					iteration-1
				);
			}
		}
	}
   
   
   function newcontent(idcontent){
   		closeall();
   		$("#"+idcontent).show('slow');
   }
   function closeall(){
   		$('#elecontact').hide('slow');
   		$('#eleproduct').hide('slow');
   		$('#eleteam').hide('slow');
   		$('#eleboard').hide('slow');
   		$('#elebonus').hide('slow');
   		$('#elepoints').hide('slow');
   		document.getElementById("elebonus").innerHTML ="";
   		$("#sponsor").hide('slow');
   		prodnotclosedyet=0;
   }
   function closesponsor(){
   		$("#sponsor").hide('slow');
   }
   function prodclick(){
   		newcontent("eleproduct");
   		hasseenproduct=true;
   		checkhasseenall();
   		if(achiev2locked){
   			prodnotclosedyet=1;
   			numberofprodclockset++;
   			setTimeout(function() {
   				numberofprodclockset--;
   				if(prodnotclosedyet==1 && achiev2locked && numberofprodclockset==0){
   					achievement(achievement2, 20,"achiev2img",2);
   					achiev2locked=false;
   				}
   			},10000);
   		}
   }
   function teamclick(){
   		newcontent("eleteam");
   		hasseenteam=true;
   		checkhasseenall();
   }
   function boardclick(){
   		newcontent("eleboard");
   		hasseenboard=true;
   		checkhasseenall();
   }
   function bonusclick(){
   		newcontent("elebonus");
   		document.getElementById("elebonus").innerHTML = 
   			"<iframe src='http://player.vimeo.com/video/2619976?badge=0&autoplay=1' width='500' height='385' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"
   			+"<img src='img/closeX.png' class='close' onclick='closeall();'>";
   }
   function contactclick(){
   		newcontent("elecontact");
   		hasseencontact=true;
   		checkhasseenall();
   }
  function addpoints(points){
  		totalpoints=totalpoints+points;
  		document.getElementById("score").innerHTML = totalpoints + " pts";
  		document.getElementById("titreele8").innerHTML = " POINTS : " + totalpoints; 
  }
  function showaward(){
  		newcontent("elepoints");
  		notifications=0;
   		document.getElementById("notification").innerHTML=notifications+"";
   		$("#notification").hide("slow");
  		
  }
  function checkhasseenall(){
  		if(hasseencontact && hasseenboard && hasseenteam && hasseenproduct && achiev1locked){
  			achievement(achievement1, 40,"achiev1img",1);
  			achiev1locked=false;
  		}
  }
     function achievement(message, points,image,nb){
     	if(document.getElementById("achievement").style.visibility == "visible"){
     		document.getElementById("achievement").style.visibility = "hidden";
     		document.getElementById("achievement").style.right = "-500px";
     	}
     	document.getElementById("achievimg").src=imgachievements[nb-1];
   		document.getElementById("achievement").style.visibility = "visible";
  		document.getElementById("txt7").innerHTML = message;
  		$("#achievement").animate({ right:"0px"}, 2000 );
  		setTimeout(function() {
   			$("#achievement").animate({ right:"-500px"}, 1000 );
   			setTimeout(function() {
   				document.getElementById("achievement").style.visibility = "hidden";
   			},1000);
   		},6000);
   		var thecollectimage = document.getElementById(image);
   		thecollectimage.src="img/collect.png";
   		var button = document.getElementById("achiev"+nb);
   		if (button.addEventListener){
   			button.addEventListener(
   				"click",
   				function(event) { collect(points, thecollectimage,nb)},
   				false);
   		}else if(button.attachEvent){
   			button.attachEvent(
   				"onclick",
   				function(event) { collect(points, thecollectimage,nb)}
   				);
   		}
   		collected[nb]=false;
   		notifications++;
   		document.getElementById("notification").innerHTML=notifications+"";
   		$("#notification").show('fast');
   		$("#notification").animate({ bottom:"30px"}, 150 );
   		setTimeout(function() {
   			$("#notification").animate({ bottom:"20px"}, 150 );
   		},150);
  }
  function collect(points, collectimage,nb){
  		if(!collected[nb]){
  			addpoints(points);
  			collectimage.src="img/check.png";
  			collected[nb]=true;
  			sponsor(points);
  		}
  }
  function sponsor(points){
  		if(sponsopointer<sponsoffer.length){
	  		document.getElementById("txt9-1").innerHTML=sponsor1+points+sponsor2[sponsopointer];
  			document.getElementById("sponsoroffer").innerHTML=sponsoffer[sponsopointer];
  			$("#sponsor").show('slow');
  			sponsopointer++;
  		}
  }
  function redeemsponsor(){
  		addpoints(+100);
  		document.getElementById("sponsoroffer").innerHTML="Thank you! You just won 100 points!";
  }
  function buy1(){
  		if(!clickeffect){
	  		if(totalpoints>=20){
	  			clickeffect=true;
	  			addpoints(-20);
	  			document.getElementById("acquire1img").src="img/check.png";
	  		}else{
				notenoughpoints();
	  		}
	  	}else{
	  		//to do toggle ?
	  		//clickeffect=!clickeffect;
	  	}
  }
  function buy2(){
  		if(!bonusunlocked){
	  		if(totalpoints>=50){
	  			bonusunlocked=true;
	  			addpoints(-50);
	  			document.getElementById("acquire2img").src="img/check.png";
	  			bonusclick();
	  		}else{
				notenoughpoints();
	  		}
	  	}else{
	  		bonusclick();
	  	}
  }
  function buy3(){
  		if(!bonus3unlocked){
	  		if(totalpoints>=40){
	  			bonus3unlocked=true;
	  			addpoints(-40);
	  			document.getElementById("acquire3img").src="img/check.png";
	  			window.open('img/team1.jpg', '_blank');
  				window.focus();
	  		}else{
				notenoughpoints();
	  		}
	  	}else{
	  		window.open('img/team1.jpg', '_blank');
  			window.focus();
	  	}
  }
  function notenoughpoints(){
  		$("#errormessage").show('fast');
  		setTimeout(function() {
   			$("#errormessage").hide('slow');
   		},1000);
 		
  }