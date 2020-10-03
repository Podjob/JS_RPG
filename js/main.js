var step = 0;


//document.getElementById('ChooseFemale').addEventListener('click', ChooseFemale);
//document.getElementById('ChooseMale').addEventListener('click', ChooseMale);
//document.getElementById('ChoosePokemon').addEventListener('click', ChoosePokemon);
var TotalSteps = 0;

var btn = document.getElementById('Step');
btn.addEventListener('click', stepTo);
setCharacter();
printRoomInfo();
