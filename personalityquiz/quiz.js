// JavaScript source code

/*eslint eqeqeq: "ignore"*/

quizPoints = [];

/*
personalityTypes = [
    //"Bold",     //0     1, 3, 15, 21, 33, 35, 47, 49
    //"Brave",    //1     2, 22, 27, 31, 39, 42
    //"Calm",     //2     4, 5, 13, 43, 46, 48, 49
    //"Docile",   //3     1, 2, 29, 43
    //"Hardy",    //4     7, 8, 16, 27, 32, 34, 40, 48
    //"Hasty",    //5     22, 30, 31, 34, 40, 45
    //"Impish",   //6     11, 12, 15, 28, 36
    //"Jolly",    //7     6, 19, 24, 38, 45, 50
    //"Lonely",   //8     9, 18, 19, 26, 28, 37
    //"Naive",    //9    11, 17, 21, 24, 30
    //"Quiet",    //10    4, 7, 23, 35, 36, 42
    //"Quirky",   //11    3, 12, 17, 25, 44, 46
    //"Rash",     //12    8, 9, 18, 20, 44
    //"Relaxed",  //13    14, 23, 26, 29, 32, 37, 50
    //"Sassy",    //14    6, 13, 20, 25, 33, 41, 47
    //"Timid"     //15    5, 10, 14, 16, 38, 39, 41
];
*/

const pokemon = [
    //0
    bulbasaur = {
        name: "Bulbasaur",
        pType: {
            a: pTypes.lonely,
            b: pTypes.docile
        },
        value: 0
    },
    //1
    charmander = {
        name: "Charmander",
        pType: {
            a: pTypes.docile,
            b: pTypes.brave
        },
        value: 0
    },
    //2
    squirtle = {
        name: "Squirtle",
        pType: {
            a: pTypes.quirky,
            b: pTypes.bold
        },
        value: 0
    },
    //3
    chikorita = {
        name: "Chikorita",
        pType: {
            a: pTypes.calm,
            b: pTypes.quiet
        },
        value: 0
    },
    //4
    cyndaquil = {
        name: "Cyndaquil",
        pType: {
            a: pTypes.timid,
            b: pTypes.calm
        },
        value: 0
    },
    //5
    totodile = {
        name: "Totodile",
        pType: {
            a: pTypes.jolly,
            b: pTypes.sassy
        },
        value: 0
    },
    //6
    treeko = {
        name: "Treeko",
        pType: {
            a: pTypes.quiet,
            b: pTypes.hardy
        },
        value: 0
    },
    //7
    torchic = {
        name: "Torchic",
        pType: {
            a: pTypes.hardy,
            b: pTypes.rash
        },
        value: 0
    },
    //8
    mudkip = {
        name: "Mudkip",
        pType: {
            a: pTypes.rash,
            b: pTypes.lonely
        },
        value: 0
    },
    //9
    turtwig = {
        name: "Turtwig",
        pType: {
            a: pTypes.bold,
            b: pTypes.timid
        },
        value: 0
    },
    //10
    chimchar = {
        name: "Chimchar",
        pType: {
            a: pTypes.naive,
            b: pTypes.impish
        },
        value: 0
    },
    //11
    piplup = {
        name: "Piplup",
        pType: {
            a: pTypes.impish,
            b: pTypes.quirky
        },
        value: 0
    },
    //12
    snivy = {
        name: "Snivy",
        pType: {
            a: pTypes.calm,
            b: pTypes.sassy
        },
        value: 0
    },
    //13
    tepig = {
        name: "Tepig",
        pType: {
            a: pTypes.relaxed,
            b: pTypes.timid
        },
        value: 0
    },
    //14
    oshawott = {
        name: "Oshawott",
        pType: {
            a: pTypes.bold,
            b: pTypes.impish
        },
        value: 0
    },
    //15
    chespin = {
        name: "Chespin",
        pType: {
            a: pTypes.timid,
            b: pTypes.hardy
        },
        value: 0
    },
    //16
    fennekin = {
        name: "Fennekin",
        pType: {
            a: pTypes.naive,
            b: pTypes.quirky
        },
        value: 0
    },
    //17
    froakie = {
        name: "Froakie",
        pType: {
            a: pTypes.lonely,
            b: pTypes.rash
        },
        value: 0
    },
    //18
    rowlet = {
        name: "Rowlet",
        pType: {
            a: pTypes.lonely,
            b: pTypes.jolly
        },
        value: 0
    },
    //19
    litten = {
        name: "Litten",
        pType: {
            a: pTypes.sassy,
            b: pTypes.rash
        },
        value: 0
    },
    //20
    popplio = {
        name: "Popplio",
        pType: {
            a: pTypes.bold,
            b: pTypes.naive
        },
        value: 0
    },
    //21
    pikachu = {
        name: "Pikachu",
        pType: {
            a: pTypes.brave,
            b: pTypes.hasty
        },
        value: 0
    },
    //22
    vulpix = {
        name: "Vulpix",
        pType: {
            a: pTypes.relaxed,
            b: pTypes.quiet
        },
        value: 0
    },
    //23
    eevee = {
        name: "Eevee",
        pType: {
            a: pTypes.jolly,
            b: pTypes.naive
        },
        value: 0
    },
    //24
    meowth = {
        name: "Meowth",
        pType: {
            a: pTypes.quirky,
            b: pTypes.sassy
        },
        value: 0
    },
    //25
    psyduck = {
        name: "Psyduck",
        pType: {
            a: pTypes.relaxed,
            b: pTypes.lonely
        },
        value: 0
    },
    //26
    machop = {
        name: "Machop",
        pType: {
            a: pTypes.brave,
            b: pTypes.hardy
        },
        value: 0
    },
    //27
    cubone = {
        name: "Cubone",
        pType: {
            a: pTypes.lonely,
            b: pTypes.impish
        },
        value: 0
    },
    //28
    phanpy = {
        name: "Phanpy",
        pType: {
            a: pTypes.relaxed,
            b: pTypes.docile
        },
        value: 0
    },
    //29
    skitty = {
        name: "Skitty",
        pType: {
            a: pTypes.hasty,
            b: pTypes.naive
        },
        value: 0
    },
    //30
    shinx = {
        name: "Shinx",
        pType: {
            a: pTypes.hasty,
            b: pTypes.brave
        },
        value: 0
    },
    //31
    munchlax = {
        name: "Munchlax",
        pType: {
            a: pTypes.relaxed,
            b: pTypes.hardy
        },
        value: 0
    },
    //32
    riolu = {
        name: "Riolu",
        pType: {
            a: pTypes.sassy,
            b: pTypes.bold
        },
        value: 0
    },
    //33
    axew = {
        name: "Axew",
        pType: {
            a: pTypes.hardy,
            b: pTypes.hasty
        },
        value: 0
    },
    //34
    magnemite = {
        name: "Magnemite",
        pType: {
            a: pTypes.quiet,
            b: pTypes.bold
        },
        value: 0
    },
    //35
    bellsprout = {
        name: "Bellsprout",
        pType: {
            a: pTypes.quiet,
            b: pTypes.impish
        },
        value: 0
    },
    //36
    mareep = {
        name: "Mareep",
        pType: {
            a: pTypes.relaxed,
            b: pTypes.lonely
        },
        value: 0
    },
    //37
    sentret = {
        name: "Sentret",
        pType: {
            a: pTypes.jolly,
            b: pTypes.timid
        },
        value: 0
    },
    //38
    poochyena = {
        name: "Poochyena",
        pType: {
            a: pTypes.brave,
            b: pTypes.timid
        },
        value: 0
    },
    //39
    aron = {
        name: "Aron",
        pType: {
            a: pTypes.hardy,
            b: pTypes.hasty
        },
        value: 0
    },
    //40
    budew = {
        name: "Budew",
        pType: {
            a: pTypes.timid,
            b: pTypes.sassy
        },
        value: 0
    },
    //41
    gible = {
        name: "Gible",
        pType: {
            a: pTypes.quiet,
            b: pTypes.brave
        },
        value: 0
    },
    //42
    klink = {
        name: "Klink",
        pType: {
            a: pTypes.docile,
            b: pTypes.calm
        },
        value: 0
    },
    //43
    deino = {
        name: "Deino",
        pType: {
            a: pTypes.quirky,
            b: pTypes.rash
        },
        value: 0
    },
    //44
    flabebe = {
        name: "Flabebe",
        pType: {
            a: pTypes.jolly,
            b: pTypes.hasty
        },
        value: 0
    },
    //45
    espurr = {
        name: "Espurr",
        pType: {
            a: pTypes.calm,
            b: pTypes.quirky
        },
        value: 0
    },
    //46
    grubbin = {
        name: "Grubbin",
        pType: {
            a: pTypes.sassy,
            b: pTypes.bold
        },
        value: 0
    },
    //47
    rockruff = {
        name: "Rockruff",
        pType: {
            a: pTypes.hardy,
            b: pTypes.calm
        },
        value: 0
    },
    //48
    zubat = {
        name: "Zubat",
        pType: {
            a: pTypes.hardy,
            b: pTypes.calm
        },
        value: 0
    },
    //49
    caterpie = {
        name: "Caterpie",
        pType: {
            a: pTypes.jolly,
            b: pTypes.relaxed
        },
        value: 0
    }
];

usedQs = [];
qNum = 0;
//const qMax = questions.length;
const qMax = 13;

function nextQuestion(n) {
    if (qNum <= qMax) {
        divQuestion.textContent = questions[n].q;
        divAnswer.innerHTML = "";
        for (var a in questions[n].a) {
            //console.log(questions[n].a[a]);
            answer = document.createElement("div");
            divAnswer.append(answer);
            answer.textContent = questions[n].a[a].text;
            answer.onclick = answerClick(questions[n].a[a].points, n);
        }
    }
    else {
        results();
    }
}

function answerClick(points, n) {
    return function () {
        choose(points);
        while (usedQs.includes(n) && qNum < qMax) {
            n = Math.floor(Math.random() * questions.length);
        }
        qNum++;
        usedQs.push(n);
        document.getElementById("prog").value = qNum-1;
        nextQuestion(n);
    };
}

function choose(points) {
    console.log(points);
    for (var n in points) {
        quizPoints[points[n]][1]++;
    }
}

function begin() {
    divQuestion = document.getElementById("question");
    divAnswer = document.getElementById("answers");
    divResults = document.getElementById("results");
    document.getElementById("begin").style.display = "none";
    divQuestion.style.display = "block";
    divAnswer.style.display = "flex";
    document.getElementById("prog").max = qMax;
    quizPoints = [];
    for (var i = 0; i < 16; i++) {
        quizPoints = quizPoints.concat([[pTypes[i], 0]]);
    }
    var n = Math.floor(Math.random() * questions.length);
    usedQs[0] = n;
    qNum = 1;
    nextQuestion(n);
}

function results() {
    divQuestion.style.display = "none";
    divAnswer.style.display = "none";
    for (var i = quizPoints.length - 1; i >= 0; i--) {
        for (var l = 0; l < pokemon.length; l++) {
            if (i == pokemon[l].pType.a || i== pokemon[l].pType.b) {
                pokemon[l].value += quizPoints[i][1];
            }
        }
    }
    
    pokemon.sort(function (a, b) { return a.value - b.value; });
    quizPoints.sort(function (a, b) { return a[1] - b[1]; });
    for (i = pokemon.length - 1; i >= pokemon.length - 16; i--) {
        result = document.createElement("span");
        result.textContent = pokemon[i].name + ": " + pokemon[i].value;
        divResults.append(result);
        result = document.createElement("div");
        divResults.append(result);
        result.style.width = (pokemon[i].value + 1) / (pokemon[pokemon.length - 1].value + 1) * 500 + "px";
    }
    document.getElementById("you").textContent = pokemon[pokemon.length - 1].name;
    divResults.style.display = "block";
}