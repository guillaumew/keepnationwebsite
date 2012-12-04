var nbclick=0;
var intervalclick=10;
var beginning;
var end;
var userLang = (navigator.language) ? navigator.language : navigator.userLanguage; 
var finalscore1;
var finalscore2;
var waittime;
var move=false;
var score1;
var score2;
var score3;
var score4;
var splittime;
var firstclose=true;

$(function() {
    $(document).ready(function() {
    	beginning=new Date();
    	
    	//Langues
    	
    	if(userLang.substring(0,2)=='fr'){
			document.getElementById("titremenu1").innerHTML = "Contact";
			document.getElementById("titremenu2").innerHTML="Produit";
			document.getElementById("titremenu3").innerHTML="Equipe";
			document.getElementById("titremenu4").innerHTML="Board";
			document.getElementById("titremenu5").innerHTML="Bonus";
			document.getElementById("imgbutton").src="img/cliquezici.png";
			document.getElementById("titre6").innerHTML="On recrute !";
			document.getElementById("txt6-1").innerHTML="Nous avons besoin de <b>ninjas du code</b>. <br>Envoyez-nous votre candidature par <a href='mailto:contact@keepnation.com'>mail</a> <br> ou<br>";
			document.getElementById("txt0").innerHTML="Jouez avec nous ! Cliquez sur le bouton bleu pour dévérouiller le contenu.";
			
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
			document.getElementById("txt3-31").innerHTML="<b>Guillaume Wolf</b> <i> (ou Seppy)</i><br>Directeur Produit<br>";
			document.getElementById("txt3-32").innerHTML="Se revendique geek, mais n'a jamais vu le dernier Star War. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;";
			document.getElementById("txt3-41").innerHTML="<b>Vous</b> <i> (ou CodeKiller)</i> - Poste technique<br>";
			document.getElementById("txt3-42").innerHTML="Nous recrutons ! Envoyez-nous votre candidature par <a href='mailto:contact@keepnation.com'>mail</a>";
			document.getElementById("txt3-51").innerHTML="<b>Frédéric Leroy</b> <i> (ou Fred)</i><br>Directeur technique<br>";
			document.getElementById("txt3-52").innerHTML="Se prend pour Dieu, mais en toute humilité...";
			
			document.getElementById("titreele4").innerHTML="Notre board :";
			document.getElementById("txt4-1").innerHTML="<b>Nom : </b>Jules Minvielle<br><b>Position : </b>CEO Surikate";
			document.getElementById("txt4-2").innerHTML="<b>Nom : </b>Thomas Pasquet <br><b>Position : </b>Fondateur Beezik / Bee Ad";
			document.getElementById("txt4-3").innerHTML="<b>Nom : </b>Jean Canzoneri<br><b>Position : </b>Fondateur Beezik / Bee Ad";
			
			finalscore1 = "<img src='img/win.jpg'> <br />Score final : ";
			finalscore2 =  " secondes <br /> <input type='button' value='Rejouer ?' onClick='document.location.reload(true)'>";
			
			achievement12 = " secondes.";
			achievement11 = "Vous avez dévérouillé le contenu sur l'équipe. <br>Score :";
			achievement21 = "Vous avez dévérouillé le contenu sur le board. <br>Score :";
			achievement31 = "Vous avez dévérouillé le contenu sur le produit. <br>Score :";
			achievement41 = "Vous avez dévérouillé le bonus. <br>Score :";

			
		}
		else{
			document.getElementById("titremenu1").innerHTML = "Contact";
			document.getElementById("titremenu2").innerHTML="Product";
			document.getElementById("titremenu3").innerHTML="Team";
			document.getElementById("titremenu4").innerHTML="Advisors";
			document.getElementById("titremenu5").innerHTML="Bonus";
			document.getElementById("imgbutton").src="img/clickhere.png";
			document.getElementById("titre6").innerHTML="We're hiring!";
			document.getElementById("txt6-1").innerHTML="We need your <b>tech skills</b>. Shoot us a <a href='mailto:contact@keepnation.com'>mail</a> <br>or<br>";
			document.getElementById("txt0").innerHTML="Play with us! Click on the blue button to unlock contant.";
			
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
			document.getElementById("txt3-21").innerHTML="<b>Emilien Eychenne</b><i>(aka Milou)</i><br>Managing Director<br>";
			document.getElementById("txt3-22").innerHTML="A self proclamed athlete who goes to McDonald's every other day.";
			document.getElementById("txt3-31").innerHTML="<b>Guillaume Wolf</b> <i>(aka Geeyom)</i><br>Head of Product<br>";
			document.getElementById("txt3-32").innerHTML="Says he's a geek but still hasn't watched the latest Star War epsiode. &nbsp;";
			document.getElementById("txt3-41").innerHTML="<b>You</b> <i>(aka Tech Ninja)</i> - Technical position<br>";
			document.getElementById("txt3-42").innerHTML="We're hiring! Shoot us a <a href='mailto:contact@keepnation.com'>mail</a> to apply to our company.";
			document.getElementById("txt3-51").innerHTML="<b>Frédéric Leroy</b><i> (aka Fred)</i><br>CTO<br>";
			document.getElementById("txt3-52").innerHTML="Pretends he's a god, while still being humble...";
			
			document.getElementById("titreele4").innerHTML="Board of advisors:";
			document.getElementById("txt4-1").innerHTML="<b>Name: </b>Jules Minvielle<br><b>Position : </b>CEO Surikate";
			document.getElementById("txt4-2").innerHTML="<b>Name: </b>Thomas Pasquet <br><b>Position : </b>Fonder Beezik / Bee Ad";
			document.getElementById("txt4-3").innerHTML="<b>Name: </b>Jean Canzoneri<br><b>Position : </b>Fonder Beezik / Bee Ad";
			
			achievement12 = " seconds.";
			achievement11 = "Well done! You unlock content on team. <br>Your score: ";
			achievement21 = "Well done! You unlock content on advisors. <br>Your score: ";
			achievement31 = "Well done! You unlock content on our product. <br>Your score: ";
			achievement41 = "Well done! You unlock our bonus. <br>Your score: ";
			
			finalscore1 = "<img src='img/win.jpg'> <br />Final score: ";
			finalscore2 =  " seconds <br /> <input type='button' value='Play agin?' onClick='document.location.reload(true)'>";
		}
    	
     });	
    
    var button = document.getElementById("clickbutton");
	button.addEventListener("click", addclick, false);
	document.getElementById("contact").addEventListener("click", contactclick, false);
	document.getElementById("product").addEventListener("click", prodclick, false);
	document.getElementById("team").addEventListener("click", teamclick, false);
	document.getElementById("board").addEventListener("click", boardclick, false);
	document.getElementById("bonus").addEventListener("click", bonusclick, false);
});    
   
   
   function addclick(){
   		updateclick();
   		var button = document.getElementById("clickbutton");
   		
   		if(nbclick==intervalclick){
   			teamclick();
   			document.getElementById("teamlocked").style.visibility="hidden";
   			button.style.width="150px";
   			button.style.height="30px";
   			document.getElementById("imgbutton").style.width="150px";
   			movebutton(false);
   			var date1 = new Date();
   			score1 = Math.round((date1-splittime)/100)/10;
   			achievement(achievement11 + score1 + achievement12);
		}else if(nbclick>intervalclick && nbclick<2*intervalclick){
			movebutton(false);
		}
   		else if(nbclick==2*intervalclick){
   			boardclick();
   			document.getElementById("boardlocked").style.visibility="hidden";
   			button.removeEventListener("click", addclick, false);
   			waittime=1500;
   			waitandclose();
   			var date2 = new Date();
   			score2 = Math.round((date2-splittime)/100)/10;
   			achievement(achievement21 + score2 + achievement12);
   		}
   }
   function newcontent(idcontent){
   		closeall();
   		$("#"+idcontent).show('slow');
   }
   function achievement(message){
  		document.getElementById("txt7").innerHTML = message;
  		$("#achievement").animate({ right:"0px"}, 2000 );
  		setTimeout(function() {
   			$("#achievement").animate({ right:"-500px"}, 1000 );
   		},4000);
   		firstclose=true;
  }
   function closeall(){
   		$('#elecontact').hide('slow');
   		$('#eleproduct').hide('slow');
   		$('#eleteam').hide('slow');
   		$('#eleboard').hide('slow');
   		$('#elebonus').hide('slow');
   		document.getElementById("elebonus").innerHTML ="";
   		if(firstclose){
   			splittime = new Date();
   			firstclose=false;
   		}
   }
   function prodclick(){
   		newcontent("eleproduct");
   }
   function teamclick(){
   		newcontent("eleteam");
   }
   function boardclick(){
   		newcontent("eleboard");
   }
   function bonusclick(){
   		newcontent("elebonus");
   		document.getElementById("elebonus").innerHTML = 
   			"<iframe src='http://player.vimeo.com/video/2619976?badge=0&autoplay=1' width='500' height='385' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"
   			+"<img src='img/closeX.png' class='close' onclick='closeall();'>";
   }
   function contactclick(){
   		newcontent("elecontact");
   }
   function movebutton(how){
   		var button = document.getElementById("clickbutton");
 		var xpos = Math.round((Math.random()*(window.innerWidth-500))+500);
		var ypos = Math.round((Math.random()*(window.innerHeight-400))-100);
		if(how){
			$("#clickbutton").animate({ left: xpos+"px", top:ypos+"px"}, 500 );
		}
		else{
			button.style.left=xpos+"px";
			button.style.top=ypos+"px";
		}
   }
   function waitandclose(){
   		var button = document.getElementById("clickbutton");
   		movebutton(move);
   		button.style.background= "-webkit-linear-gradient(top, #1F6BFF, #092B7D)";
   		button.style.background= "-moz-linear-gradient(top, #1F6BFF, #092B7D)";
   		button.style.background= "-ms-linear-gradient(top, #1F6BFF, #092B7D)";
   		button.style.background= "-o-linear-gradient(top, #1F6BFF, #092B7D)";
   		button.addEventListener("click", waitandclick, false);
   		setTimeout(function() {
   			waitandclose(waittime);
   		},waittime);
   }
   function waitandclick(){
   		var button = document.getElementById("clickbutton");
   		button.removeEventListener("click", waitandclick, false);
   		button.style.background="#33AA33";
   		updateclick();
   		if(nbclick==3*intervalclick){
   			prodclick();
   			document.getElementById("prodlocked").style.visibility="hidden";
   			waittime=1000;
   			move=true;
   			var date1 = new Date();
   			score3 = Math.round((date1-splittime)/100)/10;
   			achievement(achievement31 + score3 + achievement12);
   		}
   		else if(nbclick==4*intervalclick){
   			bonusclick();
   			var totaltime=end-beginning;
   			document.getElementById("bonuslocked").style.visibility="hidden";
   			document.getElementById("clickele").style.top="50px";
   			var date1 = new Date();
   			score4 = Math.round((date1-splittime)/100)/10;
   			achievement(achievement41 + score4 + achievement12);
   			var totalscore = score1 + score2 + score3 + score4;
   			document.getElementById("clickele").innerHTML = finalscore1 + Math.round(totalscore*10)/10 + finalscore2;

   		}
   }
   function updateclick(){
   		nbclick++;
   		var newsize=Math.round(nbclick*175/intervalclick)+"px";
   		$("#gauge").animate({ width: newsize}, 150 );
   }
  function showhelp(){
  		$('#pleaseplay').show('slow');
  		setTimeout(function() {
   			$('#pleaseplay').hide('slow');
   		},2500);
  }