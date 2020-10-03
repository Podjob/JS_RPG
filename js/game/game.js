


function printWaysButtons(){
    var room = rooms[step];
    var str = '';
    for(var i = 0; i < room.ways.length; i++){
        str += `<button class="wayButton" data-number="${room.ways[i].step}">${room.ways[i].way}</button>`
    }
    document.getElementById('waysButtons').innerHTML = str;
    var buttons = document.getElementsByClassName('wayButton');
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            step = this.dataset.number;
            var chance = Math.random()*100;
            if(chance > 30){
                callMonster();
                console.log('suka');
            }
            calculateStats();
            printRoomInfo();
        });
    }
    
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
    printWaysButtons();
}

//рассчёт статов
function calculateStats(){
    //проверка ХП и местоположения
    if(step == 1 && character.hp < 100 && character.money >= 50){
        character.hp += Math.round(5 + (character.experiense * 0.01));
        character.money -= 50;
        printAbilities();
    }
    if(step == 2){
        character.experiense += 10;
        character.stress += 3;
        printAbilities();
    }
    if(step == 3){
        character.money += Math.round(100 + (character.experiense * 0.1));
        printAbilities();
    }
    if(step != 1){
        character.hp -= Math.round(5 - (character.experiense * 0.01));
    }
    if(character.stress >= 1 && character.hp > 0 && step != 2){
        character.stress -= 1;   
    }
    TotalSteps += 1;
    printAbilities();
        //вызов сессии и рассчёт шагов
    if(TotalSteps % 40 == 0 && TotalSteps > 0){
        if(character.experiense >= 200){
            showSession(true);
        } else {
            showSession(false);
        }
    }
    if(character.hp <= 5 || character.stress > 90){
        printDeathPage();
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
        <label>Знания: ${ch.experiense}</label>
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
    document.getElementById('Experiense').innerHTML = 'Опыт студента: ' + character.experiense;
    document.getElementById('Stress').innerHTML = 'Стресс: ' + character.stress + '%';
    document.getElementById('TotalSteps').innerHTML = 'Кол-во ходов: ' + TotalSteps;
}

function printDeathPage(){
    document.getElementById('SMS').style.display = 'flex';
    document.getElementById('SMS').style.background = 'red';
    document.getElementById('SMS-TEXT').innerHTML = 'ВЫ УМЕРЛИ';
}

function callMonster(){
    document.getElementById('monster').style.display = 'flex';
    var chance = Math.random()*100;
    if(chance > 60){
        setMonsterInfo(1);
    } else {
        setMonsterInfo(0);
    }
}

function setMonsterInfo(number){
    document.getElementById('monster-img').src = monsters[number].img;
    document.getElementById('monsterStats').innerHTML = monsters[number].stats;
    document.getElementById('monsterQuestion').innerHTML = monsters[number].question;
    document.getElementById('monsterText').innerHTML = monsters[number].text;
    document.getElementById('firstAnswer').innerHTML = monsters[number].answers[0];
    document.getElementById('secondAnswer').innerHTML = monsters[number].answers[1];
    document.getElementById('thirdAnswer').innerHTML = monsters[number].answers[2];
    document.getElementById('fourthAnswer').innerHTML = monsters[number].answers[3];
    var answerButtons = document.getElementsByClassName('answerButton');
    for(var i = 0; i < answerButtons.length; i++){
        answerButtons[i].addEventListener('click', function(){
            var chance = Math.random() * 100;
            if(chance > 25){
                document.getElementById('monster').style.display = 'none';
                if(character.money >= 3000){
                    character.money -= 3000;
                } else {
                    character.money = 0;
                }
                
                if(character.experiense >= 100){
                    character.experiense -= 100;
                } 
                printAbilities()
            } else {
                document.getElementById('monster').style.display = 'none';
                character.money += 3000;
                character.experiense += 100;
                printAbilities()  
            }
        });
    }
}