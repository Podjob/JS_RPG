var rooms = [
    {   
        name: 'Коридор',
        description: 'Перед тобой дверь в столовую, в аудиторию и в художественную аудиторию. Куда пойдешь?',
        ways: [
            { way: 'Столовая', step: 1},  
            { way: 'Аудитория', step: 2}, 
            { way: 'Художка', step: 3}
        ],
        image: 'https://avatars.mds.yandex.net/get-zen_doc/1362552/pub_5d53c49f46f4ff00ad95d29f_5d552f0e06cc4600ae5120f4/scale_1200'
    },
    {   
        name: 'столовая',
        description: 'Тут текст про столовую нахрен, полтос за еду',
        ways: [
            { way: 'Столовая', step: 1},  
            { way: 'Коридор', step: 0}
        ],
        image: 'https://salo-sila.ru/wp-content/uploads/2016/10/shkolnaya_stolovaya.jpg'
    },
    {   
        name: 'аудитория',
        description: 'Ты находишься в аудитории. Будешь учиться(знания + 10) или уйдёшь?',
        ways: [
            { way: 'Аудитория', step: 2},  
            { way: 'Коридор', step: 0} 
        ],
        image: 'https://vignette.wikia.nocookie.net/stalker/images/1/11/Ss_admin_12-14-19_09-51-32_%28jupiter%29.jpg/revision/latest/top-crop/width/300/height/300?cb=20191214120344&path-prefix=ru'
    },
    {   
        name: 'Художественная аудитория',
        description: 'Ты поработал натурщиком. Хочешь поработать ещё?(з/п 100 рублей)',
        ways: [
            { way: 'Художка', step: 3},  
            { way: 'Коридор', step: 0} 
        ],
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