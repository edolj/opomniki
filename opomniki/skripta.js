window.addEventListener('load', function() {
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		var i=0;
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			if(cas == 0) {
				var naziv = opomnik.querySelector(".naziv_opomnika").innerHTML;
				alert("Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!");
				document.querySelector("#opomniki").removeChild(opomnik);
			} else {
				casovnik.innerHTML = cas-1;
			}
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
    
    // funkcija
    var izvediPrijavo = function(event) {
		var uporabnisko_ime=document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnisko_ime;
	
		document.querySelector(".pokrivalo").style.visibility = "hidden";
		
 	}
	
	document.querySelector("#prijavniGumb").addEventListener('click',izvediPrijavo);  
     
    // funkcija 
    var dodajOpomnik = function(event) {
    	var naziv = document.querySelector("#naziv_opomnika").value;
    	var cas = document.querySelector("#cas_opomnika").value;
    	
    	document.querySelector("#naziv_opomnika").innerHTML = "";
    	document.querySelector("#cas_opomnika").innerHTML = "";
    	
    	document.querySelector("#opomniki").innerHTML=<div class='opomnik'>
          		<div class='naziv_opomnika'>NAZIV_OPOMNIKA</div>
          		<div class='cas_opomnika'> Opomnik čez <span>CAS_OPOMNIKA</span> sekund.</div>
				</div>
			;    	
    }
    
    document.querySelector(".shadow").addEventListener('click',dodajOpomnik);
    
});