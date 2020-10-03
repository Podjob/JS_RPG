//сама игра, где вызываются ф-и рассчёта и печати информации
function stepTo(){
    
    if (step === null) {
        return;
    }
    var room = rooms[step];
    if (!room) {
        return;
    }
    
    var answer = document.getElementById('inp').value;
    document.getElementById('inp').value = '';
    if (!answer) {
        return;
    }
    answer = answer.toLowerCase().replace(' ', '');
    var isWayNotFound = true;
    for (var i = 0; i < room.ways.length; i++) {
        if (answer === room.ways[i].answer) {
            step = room.ways[i].step;
            isWayNotFound = false;
            break;
        }
    }
    if (isWayNotFound) {
        step = room.defaultStep;
    }
    calculateStats();
    printRoomInfo();
}

//печать информации о команате
function printRoomInfo(){
    if(step != null && rooms[step]){
        document.getElementById('Location').innerHTML = rooms[step].name;
        document.getElementById('Result').innerHTML = rooms[step].description;
        document.getElementById('image').src = rooms[step].image;
    }
    var room = rooms[step];
    var exits = [];
    var isNameUniq = true;
    for(var i = 0; i < room.ways.length; i++){
        var num = room.ways[i].step;
        for(var j = 0; j < exits.length; j++){
            if(rooms[num].name == exits[j]){
                isNameUniq = false;
            }
        }
        if(isNameUniq){
            exits.push(rooms[num].name); 
        }        
    }
    document.getElementById('Ways').innerHTML = exits.join(', ');
}

//рассчёт статов
function calculateStats(){
    //проверка ХП и местоположениеы
    if(character.hp <= 5 || character.stress > 90){
        return printDeathPage();
    } 
    switch(step){
        case 1: 
            if(character.hp < 100 && money > 50){
                character.hp += Math.round(5 + (character.knowledge * 0.01));
                character.money -= 50;
                printAbilities();
            }
            break;
        case 2: 
            if(character.hp < 100 && step == 1 && character.money >= 50){
            character.knowledge += 10;
            character.stress += 15;
            printAbilities();
            }
            break;
        case 3: 
            character.money += Math.round(100 + (character.knowledge * 0.1));
            printAbilities();
            break;
    }
    TotalSteps += 1;
    if(step != 1){
        character.hp -= Math.round(5 - (character.knowledge * 0.01));
    }
    if(character.stress >= 10 && character.hp > 0){
        character.stress -= 10;
        
    }
    printAbilities();
        //вызов сессии и рассчёт шагов
        if(TotalSteps % 40 == 0 && TotalSteps > 0){
            if(character.knowledge >= 200){
                showSession(true);
            } else {
                showSession(false);
            }
        }  
    }
    
function showSession(pass){
    if(pass){
        document.getElementById('SMS').style.display = 'flex';
        document.getElementById('SMS-TEXT').innerHTML = 'Вы сдали сессию(знания больше 200). Это победа Пацаны';
        character.money += 1000;
        printAbilities();
    } else {
        document.getElementById('SMS').style.display = 'flex';
        document.getElementById('SMS-TEXT').innerHTML = 'Вы не сдали сессию(знания меньше 200). Это поражение, начни заново';
        character.hp -= 200;
        character.hp -= 50;
        printAbilities();
    }
}

function setCharacter(){
    var str = '';
    for(var i = 0; i < characters.length; i++){
        var ch = characters[i];
        str += `<div class="character">
        <label><b>${ch.name}</b></label>
        <label>Здоровье: ${ch.hp}</label>
        <label>Деньги: ${ch.money}</label>
        <label>Знания: ${ch.knowledge}</label>
        <label>Стресс: ${ch.stress}</label>
        <button class="setChooseCharacter" data-number="${i}">Choose ${ch.name}</button>
        </div>`;
    }
    document.getElementById('chooseCharacter').innerHTML = str;
    var buttons = document.getElementsByClassName('setChooseCharacter');
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            document.getElementById('chooseCharacter').style.display = 'none';
            character = characters[this.dataset.number];
            printAbilities();
        });
    }
}

function printAbilities(){
    document.getElementById('HP').innerHTML = 'Здоровье студента: ' + character.hp + '%';
    document.getElementById('Money').innerHTML = 'Деньги студента: ' + character.money + ' рублей';
    document.getElementById('KnowLedge').innerHTML = 'Знания студента: ' + character.knowledge;
    document.getElementById('Stress').innerHTML = 'Стресс: ' + character.stress + '%';
    document.getElementById('TotalSteps').innerHTML = 'Кол-во ходов: ' + TotalSteps;
}

function printDeathPage(){
    document.getElementById('death').death.style.display = 'flex';
}