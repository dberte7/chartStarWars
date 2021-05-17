let characters = [];
let filmNum = [];
let num = [];

const characterChart = async () => {
    const res = await fetch("https://swapi.dev/api/people/")
    const data = await res.json()
    console.log(data)
    console.log(data.results[0].name)
    console.log(data.results[0].films.length)
    return data;
}

const getChara = (info) => {
    for (let i = 0; i < info.results.length; i++) characters.push(info.results[i].name)
    return characters
}

console.log(characters);

const getFilmNum = (info) => {
    for (let i = 0; i < info.results.length; i++) num.push(info.results[i].films.length)
    filmNum.push(num)
    return filmNum
};

console.log(filmNum);

const printChart = (x, y, z) => {
    var option = {
        axisY: {
        onlyInteger: true,
        type: Chartist.FixedScaleAxis,
        ticks: z
    }
}

new Chartist.Bar('#chart1', {
    labels: x,
    series: y
    }, option);
}

// new Chartist.Bar('#chart2', {
//     labels: [1, 2, 3, 4],
//     series: [[5, 2, 8, 3]]
// });

characterChart().then(data => {
    getChara(data)
    getFilmNum(data)
}).then(()=> printChart(characters, filmNum, num));