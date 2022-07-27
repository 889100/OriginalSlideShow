let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
  "https://static.retrip.jp/spot/55eddb4c-3dbb-4085-8062-c59ff2ecd822/images/f75bf8cf-07e9-4a31-add9-039aa41710c8_m.jpg",
  "https://img-cdn.guide.travel.co.jp/article/29/33371/3A34DAB33E834350912D93104DE4E23B_L.jpg",
  "https://caede-kyoto.com/wp/wp-content/uploads/2019/02/%E4%BA%AC%E9%83%BD-%E5%88%9D%E5%A4%8F-%E9%A2%A8%E6%99%AF.jpg",
  "https://d1d37e9z843vy6.cloudfront.net/jp/images/4581319/5672365fc1e0cb234017dfe885eb217440ebb565.jpeg",
  ];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 5000);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
