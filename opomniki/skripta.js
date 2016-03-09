window.addEventListener('load', function() {
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			if(cas == 0) {
				console.log("Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!");
			} else {
				cas--;
				
			}
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
    
    var izvediPrijavo = function(event) {
		var uporabnisko_ime=document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnisko_ime;
	
		document.querySelector(".pokrivalo").style.visibility = "hidden";
		
 	}
	
	document.querySelector("#prijavniGumb").addEventListener('click',izvediPrijavo);  
    
});