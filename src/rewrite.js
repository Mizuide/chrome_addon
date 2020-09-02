import axios from "axios";

let fet = axios.create({
  baseURL: 'https://note.com/api/'
})


let page = 2;
let magazineId = specificMagazine();

let API_GET = function(){
   return 'v1/layout/magazine/' + magazineId + '/section?page=' + page + '&include_details=true' 
  }

fetchAPI().then(res => setMaxCount(res)).then(() => fetchAPI()).then(res => console.log(res));

//document.body.style.backgroundColor = "blue";
// var divList = document.querySelectorAll("div");
// divList.forEach(function (div, index) { div.outerHTML = "い" });

function specificMagazine() {
  let path = location.pathname;
  let idString = path.split('/')[3];
  return idString;
}

function fetchAPI() {
  console.log('get通信')
  console.log(API_GET());
  return fet.get(API_GET()).catch(e => console.log(e));
}

function setMaxCount(response) {
// return new Promise(function(resolve,reject){
  let maxCount = response.data.data.section.total_count;
  page = maxCount;
  // resolve(maxCount);
// })
}