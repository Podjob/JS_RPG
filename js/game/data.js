var rooms = [
    {   
        name: 'коридор',
        description: 'Перед тобой дверь в столовую, в аудиторию и в художественную аудиторию. Куда пойдешь?',
        ways: [
            { answer: 'встоловую', step: 1},
            { answer: 'ваудиторию', step: 2},
            { answer: 'художка', step: 3},
            { answer: 'столовая', step: 1},
            { answer: 'аудитория', step: 2},
            { answer: 'художественнаяаудитория', step: 3},   
        ],
        defaultStep: 0,
        image: 'https://avatars.mds.yandex.net/get-zen_doc/1362552/pub_5d53c49f46f4ff00ad95d29f_5d552f0e06cc4600ae5120f4/scale_1200'
    },
    {   
        name: 'столовая',
        description: 'Тут текст про столовую нахрен, полтос за еду',
        ways: [
            { answer: 'да', step: 1},
            { answer: 'нет', step: 0},
            { answer: 'хочу', step: 1},
            { answer: 'нехочу', step: 0}, 
        ],
        defaultStep: 1,
        image: 'https://salo-sila.ru/wp-content/uploads/2016/10/shkolnaya_stolovaya.jpg'
    },
    {   
        name: 'аудитория',
        description: 'Ты находишься в аудитории. Будешь учиться(знания + 10) или уйдёшь?',
        ways: [
            { answer: 'да', step: 2},
            { answer: 'нет', step: 0},
            { answer: 'уйти', step: 0},   
        ],
        defaultStep: 2,
        image: 'https://vignette.wikia.nocookie.net/stalker/images/1/11/Ss_admin_12-14-19_09-51-32_%28jupiter%29.jpg/revision/latest/top-crop/width/300/height/300?cb=20191214120344&path-prefix=ru'
    },
    {   
        name: 'Художественная аудитория',
        description: 'Ты поработал натурщиком. Хочешь поработать ещё?(з/п 100 рублей)',
        ways: [
            { answer: 'да', step: 3},
            { answer: 'нет', step: 0},   
        ],
        defaultStep: 3,
        image: 'https://ic.pics.livejournal.com/skosolapoff/21786214/349617/349617_600.jpg'
    }
]

var characters = [
    {
        name: 'Girl',
        hp: 80,
        money: 800,
        knowledge: 15,
        stress: 15
    },
    {
        name: 'Boy',
        hp: 100,
        money: 500,
        knowledge: 10,
        stress: 10
    },
    {
        name: 'Pokemon',
        hp: 450,
        money: 12800,
        knowledge: 3,
        stress: -1000
    }
];
var step = 0;
var character = {

};