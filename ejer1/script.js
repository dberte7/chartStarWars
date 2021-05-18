let movies = [];

let release = [];

let years = [];

const filmChart = async () => {
  const res = await fetch("https://swapi.dev/api/films/")
  const data = await res.json()
  return data
}

const getMovies = (info) => {
  for (let i = 0; i < info.results.length; i++) movies.push(info.results[i].title)
}

const printChart = (x, y, z) => {
  var option = {
    axisY: {
    onlyInteger: true,
    type: Chartist.FixedScaleAxis,
    ticks: z
    }
  }
  // Initialize a Line chart in the container with the ID chart1
  new Chartist.Line('#chart1', {
    labels: x,
    series: y
  }, option);
}

const getReleaseDate = (info) => {
  for (let i = 0; i < info.results.length; i++) {
    years.push(parseInt(info.results[i].release_date))
  };
  release.push(years)
  return release
}

filmChart().then(data => {
  getMovies(data);
  getReleaseDate(data)
}).then(()=>printChart(movies, release, years))
