var nbclick=0;
var intervalclick=10;
var beginning;
var end;
var userLang = (navigator.language) ? navigator.language : navigator.userLanguage; 
var finalscorefr1;
var finalscorefr2;
var finalscoreen1;
var finalscoreen2;
var waittime;
var move=false;

$(function() {
    $(document).ready(function() {
    	beginning=new Date();
    	
    	//Langues
    	
    	if(userLang=='fr'){
			document.getElementById("titremenu1").innerHTML = "Contact";
			document.getElementById("titremenu2").innerHTML="Produit";
			document.getElementById("titremenu3").innerHTML="Equipe";
			document.getElementById("titremenu4").innerHTML="Board";
			document.getElementById("titremenu5").innerHTML="Bonus";
			document.getElementById("imgbutton").src="img/cliquezici.png";
			document.getElementById("titre6").innerHTML="On recrute !";
			document.getElementById("txt6-1").innerHTML="Nous avons besoin de <b>ninjas du code</b>. <br>Envoyez-nous votre candidature par <a href='mailto:contact@keepnation.com'>mail</a> <br> ou<br>";
			
			
			document.getElementById("titreele1").innerHTML="D�couvrez-vous !";
			document.getElementById("txt1-1").innerHTML="Soyez le premier � �tre tenu inform� de notre lancement en nous donnant votre e-mail :";
			document.getElementById("txt1-2").innerHTML="Vous pouvez aussi nous suivre sur vos r�seaux sociaux pr�f�r�s :";
			document.getElementById("txt1-3").value="Rejoignez la beta";
			document.getElementById("txt1-4").innerHTML="Keep Nation est un service qui permet d'ajouter une couche de gamification dans les applications afin de r�compenser les utilisateurs fid�les.";
			
			document.getElementById("titreele2").innerHTML="Une solution pour vous :";
			document.getElementById("titre2-1").innerHTML="Internautes / Mobinautes";
			document.getElementById("txt2-1").innerHTML="Relevez des d�fis, gagnez des badges, cumulez vos points, passez des niveaux et transformez vos points en cadeaux g�niaux.";
			document.getElementById("titre2-2").innerHTML="D�veloppeurs / Editeurs d'applications";
			document.getElementById("txt2-2").innerHTML="Fid�lisez vos utilisateurs, augmentez votre r�tention & d�veloppez votre viralit�.";
			document.getElementById("titre2-3").innerHTML="Annonceurs";
			document.getElementById("txt2-3").innerHTML="Touchez des utilisateurs cibl�s, de mani�re non intrusive et dans un moment de prime time �motionnel.";
			
			document.getElementById("titreele3").innerHTML="La dream team :";
			document.getElementById("txt3-11").innerHTML="<b>Xavier Mariani</b> <i> (ou Xav')</i><br>Pr�sident<br>";
			document.getElementById("txt3-12").innerHTML="Se prend pour un homme de go�t mais porte toujours des chaussettes bariol�es...";
			document.getElementById("txt3-21").innerHTML="<b>Emilien Eychenne</b> <i> (ou Milou)</i><br>Directeur G�n�ral<br>";
			document.getElementById("txt3-22").innerHTML="Voudrait �tre sportif mais ne peut pas se passer de son Mcdo du Dimanche !";
			document.getElementById("txt3-31").innerHTML="<b>Guillaume Wolf</b> <i>(ou Seppy)</i><br>Directeur Produit<br>";
			document.getElementById("txt3-32").innerHTML="Se revendique geek, mais n'a jamais vu le dernier Star War. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;";
			document.getElementById("txt3-41").innerHTML="<b>Vous</b> <i> (ou CodeKiller)</i> - Poste technique<br>";
			document.getElementById("txt3-42").innerHTML="Nous recrutons ! Envoyez-nous votre candidature par <a href='mailto:contact@keepnation.com'>mail</a>";
			
			document.getElementById("titreele4").innerHTML="Notre board :";
			document.getElementById("txt4-1").innerHTML="<b>Nom : </b>Jules Minvielle<br><b>Position : </b>CEO Surikate";
			document.getElementById("txt4-2").innerHTML="<b>Nom : </b>Thomas Pasquet <br><b>Position : </b>Fondateur Beezik / Bee Ad";
			document.getElementById("txt4-3").innerHTML="<b>Nom : </b>Jean Canzoneri<br><b>Position : </b>Fondateur Beezik / Bee Ad";
			
			finalscorefr1 = "<img src='img/win.jpg'> <br />Score final : ";
			finalscorefr2 =  " secondes <br /> <input type='button' value='Rejouer ?' onClick='document.location.reload(true)'>";
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
			
			document.getElementById("titreele1").innerHTML="Meet Keep Nation!";
			document.getElementById("txt1-1").innerHTML="Be the first to know about our launch by giving your email address:";
			document.getElementById("txt1-2").innerHTML="You can also follow us on your favorite social networks:";
			document.getElementById("txt1-3").value="Join the beta";
			document.getElementById("txt1-4").innerHTML="KeepNation is a service that uses gamification in order to reward with real presents the best users of an app.";
			
			document.getElementById("titreele2").innerHTML="A solution that fits you";
			document.getElementById("titre2-1").innerHTML="Web surfers";
			document.getElementById("txt2-1").innerHTML="Win presents by browsing your favorite applications!";
			document.getElementById("titre2-2").innerHTML="App publishers";
			document.getElementById("txt2-2").innerHTML="Win the loyalty of your users and monetize your application.";
			document.getElementById("titre2-3").innerHTML="Advertisers";
			document.getElementById("txt2-3").innerHTML="Engage with the most active in an innovative way.";
			
			document.getElementById("titreele3").innerHTML="Our dream team :";
			document.getElementById("txt3-11").innerHTML="<b>Xavier Mariani</b> <i>(aka Xav)</i><br>Pr�sident<br>";
			document.getElementById("txt3-12").innerHTML="Thinks of himself as a fashion addict, but wears unsuited socks.";
			document.getElementById("txt3-21").innerHTML="<b>Emilien Eychenne</b><i>(aka Milou)</i><br>Directeur G�n�ral<br>";
			document.getElementById("txt3-22").innerHTML="A self proclamed athlete who goes to McDonald's every other day.";
			document.getElementById("txt3-31").innerHTML="<b>Guillaume Wolf</b> <i>(aka Geeyom)</i><br>Head of Product<br>";
			document.getElementById("txt3-32").innerHTML="Says he's a geek but still hasn't watched the latest Star War epsiode. &nbsp;";
			document.getElementById("txt3-41").innerHTML="<b>You</b> <i>(aka Tech Ninja)</i> - Technical position<br>";
			document.getElementById("txt3-42").innerHTML="We're hiring! Shoot us a <a href='mailto:contact@keepnation.com'>mail</a> to apply to our company.";
			
			document.getElementById("titreele4").innerHTML="Board of advisors:";
			document.getElementById("txt4-1").innerHTML="<b>Name : </b>Jules Minvielle<br><b>Position : </b>CEO Surikate";
			document.getElementById("txt4-2").innerHTML="<b>Name : </b>Thomas Pasquet <br><b>Position : </b>Fonder Beezik / Bee Ad";
			document.getElementById("txt4-3").innerHTML="<b>Name : </b>Jean Canzoneri<br><b>Position : </b>Fonder Beezik / Bee Ad";
			
			finalscoreen1 = "<img src='img/win.jpg'> <br />Final score: ";
			finalscoreen2 =  " seconds <br /> <input type='button' value='Play agin?' onClick='document.location.reload(true)'>";
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
		}else if(nbclick>intervalclick && nbclick<2*intervalclick){
			movebutton(false);
		}
   		else if(nbclick==2*intervalclick){
   			boardclick();
   			document.getElementById("boardlocked").style.visibility="hidden";
   			button.removeEventListener("click", addclick, false);
   			waittime=1500;
   			waitandclose();
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
   		document.getElementById("elebonus").innerHTML ="";
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
   		button.style.background= "-webkit-linear-gradient(top, #3e779d, #65a9d7)";
   		button.style.background= "-moz-linear-gradient(top, #3e779d, #65a9d7)";
   		button.style.background= "-ms-linear-gradient(top, #3e779d, #65a9d7)";
   		button.style.background= "-o-linear-gradient(top, #3e779d, #65a9d7)";
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
   			waittime=750;
   			move=true;
   		}
   		else if(nbclick==4*intervalclick){
   			end=new Date();
   			bonusclick();
   			var totaltime=end-beginning;
   			document.getElementById("bonuslocked").style.visibility="hidden";
   			document.getElementById("clickele").style.top="50px";
   			if(userLang == 'fr'){ 
   				document.getElementById("clickele").innerHTML = finalscorefr1 + Math.round(totaltime/100)/10 + finalscorefr2;
   			}else{
   				document.getElementById("clickele").innerHTML = finalscoreen1 + Math.round(totaltime/100)/10 + finalscoreen2;
   			}
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