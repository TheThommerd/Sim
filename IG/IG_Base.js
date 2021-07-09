document.write(`
<!DOCTYPE html>
<head><meta name="viewport" content="width=device-width, height=device-height"></head> 
<body onload="load()">
     <style>
.flash {
   animation-name: flash;
    animation-duration: 1.0s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-play-state: running;
}
@keyframes flash {
    from {color: #fbfbfb;}
    to {color: black;}
}
.row4{ 
display: none;
}
.tableborder{
display: none;
}
	body {
	font-family: Arial, sans-serif;
	font-size: 12px;
	color: #222;
	margin:0px;
	padding:0px;
	background-color:#E1E1E1;
	}
        #frame001 {
	    margin: auto;
	    background-image: url("IG_background.png");
 	    background-repeat: no-repeat;
            border-radius: 5px;
            background-color: #fbfbfb;
	    background-position: center top;
	    background-size: 950px 172px;
            border: none;
            height: 1500px;
            width: 950px;
        }
        .buttons001 {
            background-color: #188F1F;
            color: white;
            width: 120px;
            height: 30px;
            border-radius: 5px;
        }
        .buttons003 {
	    border-color: white;
    	    border-width: 1px;
           background-color: #232223;
            color: white;
	    font-weight: bold;
            width: 500px;
            height: 40px;
        }
        .buttons004 {
            background-color: limegreen;
            color: white;
            width: 120px;
            height: 40px;
            border-radius: 5px;
 	   visibility: hidden;
        }
        .buttons009 {
            background-color: #188F1F;
            color: white;
            width: 120px;
            height: 30px;
            border-radius: 5px;
        }
        .buttons005 {
            background-color: #A20714;
            color: white;
            width: 120px;
            height: 40px;
            border-radius: 5px;
 	   visibility: hidden;
        }
        .buttons007 {
            background-color: #232223;
            color: white;
            width: 120px;
            height: 30px;
            border-radius: 5px;
        }
        .buttons008 {
            background-color: #188F1F;
            color: white;
            width: 120px;
            height: 30px;
            border-radius: 5px;
        }
        .buttons006 {
            background-color: #188F1F;
            color: white;
            width: 120px;
            height: 30px;
            border-radius: 5px;
        }
        .buttons002 {
            background-color: #232223;
            color: white;
            width: 70px;
            height: 30px;
            border-radius: 5px;
        }
        #font001 {
            text-align: center;
            font-size: large;
            color: black;
        }
        #player001 {
	    position: relative;
	    top : 20px;
 	    left: -265px;
            font-size: 110%;
	    font-weight: bold;
            color: white;
        }
        #player002 {
	    position: relative;
	    top : -3px;
 	    left: 260px;
            font-size: 110%;
	    font-weight: bold;
            color: white;
        }
        #score001 {
	    position: relative;
	    top : -60px;
 	    left: -115px;
            font-size: 190%;
	    font-weight: bold;
            color: white;
        }
        #time001 {
	   position: relative;
	    top : -140px;
            font-size: 200%;
	    font-weight: bold;
            color: black;
        }
        #message002{
	   position: relative;
	    top : -130px;
        }
        #message003{
	   position: relative;
	    top : -140px;
        }
        #message004{
	   position: relative;
	    top : -140px;
        }
        #message006{
	   position: relative;
	    top : -140px;
        }
        #JTE{
	   position: relative;
	    top : -130px;
            background-color: #232223;
            color: white;
            width: 120px;
            height: 30px;
            border-radius: 5px;
        }
        #score002 {
	   position: relative;
	    top : -97px;
 	    left: 110px;
            font-size: 190%;
	    font-weight: bold;
            color: white;
        }
        .smaller {
            text-align: center;
            font-size: 80%;
            color: black;
        }
        #record001 {
	    position: relative;
	    top : -37px;
 	    left: -425px;
            text-align: center;
            font-size: 80%;
            color: white;
	    font-weight: bold;
        }
        #record002 {
	    position: relative;
	    top : -57px;
 	    left: 415px;
            text-align: center;
            font-size: 80%;
            color: white;
	    font-weight: bold;
        }
        #twitter001 {
	    position: relative;
	    top : -135px;
 	    left: -425px;
            text-align: center;
            font-size: 60%;
            color: white;
	    font-weight: bold;
        }
        #twitter002 {
	    position: relative;
	    top : -155px;
 	    left: 415px;
            text-align: center;
            font-size: 60%;
            color: white;
	    font-weight: bold;
        }
        #faction001 {
	    position: relative;
	    top : -167px;
 	    left: -390px;
            text-align: center;
            font-size: 65%;
            color: white;
	    font-weight: bold;
        }
        #faction002 {
	    position: relative;
	    top : -167px;
 	    left: 390px;
            text-align: center;
            font-size: 65%;
            color: white;
	    font-weight: bold;
        }
        #message005 {
	   position: relative;
	    top : -150px;
            text-align: center;
            font-size: 90%;
            color: black;
        }
        #message001 {
            text-align: center;
            font-size: 90%;
            color: white;
        }
        #qu001 {
            text-align: center;
            font-size: 100%;
            color: white;
	    font-weight: bold;
        }
        #qu002 {
            text-align: center;
            font-size: 100%;
            color: white;
	    font-weight: bold;
        }
        #round001 {
	   position: relative;
	    top : 0px;
 	    left: 0px;
            text-align: center;
            font-size: 100%;
            color: white;
	    font-weight: bold;
        }
        #round002 {
	   position: relative;
	    top : -132px;
 	    left: -5px;
            font-size: 90%;
            color: white;
	    font-weight: bold;
        }
        #select{
	   position: relative;
 	    left: 0px;
        }
        #choose{
	   position: relative;
 	    left: 0px;
            background-color: #188F1F;
            color: white;
            width: 150px;
            height: 30px;
            border-radius: 5px;
        }
	input {
  	width: 30%;
  	font-size: 16px;
	}
    #chart{
        position:relative;
        width:100px;
        height:100px;
        top:0;
        left:275px;
	font-weight: bold;
  	font-size: 13px;
    }
ul.aligner  { 
  margin: 0; 
  padding: 0; 
  margin-left: 250px; 
  list-style: none; 
              width: 700px;
margin-block-end: 4em;
font-size: 13px
} 
ul.aligner li input { 
  margin-right: 1px;
  text-align: left;
   width: 10%;
} 
ul.aligner li { 
  display:inline-block;
   text-align: left; 
   width: 350px;
} 
ul.aligner li label { 
  margin-left: ; 
  text-align: left;
}
body:fullscreen {
  overflow: scroll !important;
}
body:-ms-fullscreen {
  overflow: scroll !important;
}
body:-webkit-full-screen {
  overflow: scroll !important;
   zoom: 0.4;
}
body:-moz-full-screen {
overflow: scroll !important;
scale: 0.4;
transform-origin: top center;
}
 .goFS{
   display : none;
 }
@media (max-width: 767px) {
 .goFS{
 display: inline-block;
   background-color: #A20714;
   color: white;
   width: 100px;
   height: 30px;
   border-radius: 5px;
 }
}
@media (min-width: 800px) {
 #frame001{
	-moz-transform: scale(1.4);
	-moz-transform-origin: top center;
 }
}
    </style>
<audio id="myAudio">
  <source src="https://files.jcink.net/uploads2/fantasymts/Ding_Sound_Effect.mp3" type="audio/mpeg">
</audio>
<audio id="myAudio2">
  <source src="https://files.jcink.net/uploads2/fantasymts/Wrong_Buzzer_Sound_Effect.mp3" type="audio/mpeg">
</audio>
	<button id="goFS" class="goFS">Go fullscreen</button>
    <div id="frame001"><div id="font001"><text id="qu002">QUESTION </text><text id="qu001">0</text><p id="message001">Enter your name and twitter.</p><text id="player001">CHALLENGER</text><br><text id="player002">OPPONENT</text><br><text id="record001">0-0</text><br><text id="record002">0-0</text><br><text id="score001">0</text><br><text id="score002">0</text><br><text id="twitter001">@Challenger</text><br><text id="twitter002">@Opponent</text><br><text id="round002">ROUND <text id="round001">1</text></text><br><text id="faction001">ROOKIE</text><text id="faction002">UNKNOWN</text><br><text><text id="time001"></text></text><br><button id=JTE onclick=JTE()>Repeat Question</button><button id=submit class=buttons008 onclick=checker() hidden>Submit</button><br><p id="message005"></p><p id="message002"></p><p id="message003"></p><p id="message006"></p><p id="message004"></p><div id=chart></div>
<form id="save-later-form-IG"><input name="3" value="CHALLENGER" type="text" id="naam" required hidden></input><input name="4" value="@Challenger" type="text" id="twitt" required hidden></input><input name="PasswordR2" value="wachtwoordR2" type="text" id="passwordsaverR2" required hidden></input><input name="PasswordR3" value="wachtwoordR3" type="text" id="passwordsaverR3" required hidden></input><input name="PasswordEight" value="wachtwoordEight" type="text" id="passwordsaverEight" required hidden></input><input name="PasswordQuarter" value="wachtwoordQuarter" type="text" id="passwordsaverQuarter" required hidden></input><input name="PasswordSemi" value="wachtwoordSemi" type="text" id="passwordsaverSemi" required hidden></input><input name="PasswordChampion" value="wachtwoordChampion" type="text" id="passwordsaverChamp" required hidden></input><input name="AnsweredQuestions_IG" value="0" type="number" id="AnsweredQuestions_IG" required hidden><input name="CorrectQuestions_IG" value="0" type="number" id="CorrectQuestions_IG" required hidden><input name="PossiblePoints_IG" value="0" type="number" id="PossiblePoints_IG" required hidden><input name="TotalPoints_IG" value="0" type="number" id="TotalPoints_IG" required hidden></input><input name="Wins_IG" value="0" type="number" id="wins_IG" required hidden><input name="Losses_IG" value="0" type="number" id="losses_IG" required hidden><input name="TKOs_IG" value="0" type="number" id="TKOs_IG" required hidden><input name="TKOd_IG" value="0" type="number" id="TKOd_IG" required hidden><input name="KOs_IG" value="0" type="number" id="KOs_IG" required hidden><input name="KOd_IG" value="0" type="number" id="KOd_IG" required hidden></form><button type="submit" id="save" hidden>Save</button></div>
<script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script>
<script src="lib/1. DC.js" charset="utf-8"></script>
<script src="lib/2. Star Wars.js" charset="utf-8"></script>
<script src="lib/3 pointer.js" charset="utf-8"></script>
<script src="lib/3. Wizarding World.js" charset="utf-8"></script>
<script src="lib/4. Star Trek.js" charset="utf-8"></script>
<script src="lib/5 pointer.js" charset="utf-8"></script>
<script src="lib/5. Marvel.js" charset="utf-8"></script>
<script src="lib/6. Middle Earth.js" charset="utf-8"></script>
<script src="lib/7. Mixed Bag.js" charset="utf-8"></script>
<script src="lib/8. Heroes & Villains.js" charset="utf-8"></script>
<script src="lib/9. Scores & Soundtracks.js" charset="utf-8"></script>
<script src="lib/10. Who Said It.js" charset="utf-8"></script>
<script src="lib/11. Jurassic Park.js" charset="utf-8"></script>
<script src="lib/12. Transformers.js" charset="utf-8"></script>
<script src="lib/13. AlienPredator.js" charset="utf-8"></script>
<script src="lib/14. Planet of the Apes.js" charset="utf-8"></script>
<script src="lib/15. Animated.js" charset="utf-8"></script>
<script src="lib/16. Swashbuckling.js" charset="utf-8"></script>
<script src="lib/17. Teenage Mutant Turtles.js" charset="utf-8"></script>
<script src="lib/18. Graphic Novels.js" charset="utf-8"></script>
<script src="lib/19. Dystopian Future Time Travel.js" charset="utf-8"></script>
<script src="lib/20. Superman.js" charset="utf-8"></script>
<script src="lib/21. Batman.js" charset="utf-8"></script>
<script src="lib/22. X-Men.js" charset="utf-8"></script>
<script src="lib/23. Spider-Man.js" charset="utf-8"></script>
<script src="//unpkg.com/string-similarity/umd/string-similarity.min.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="competitorlistIG.js"></script>
<script src="new_recordIG.js"></script>
<script src="IG.js"></script>
</body>
</html>
`);

