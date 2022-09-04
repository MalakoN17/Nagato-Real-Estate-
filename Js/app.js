    // window.location.href = '/loadingPage/loading.html'
// DOM //
let signIn = document.querySelector(".sign-in");
let closeContainer = document.querySelector(".x-img");
let openHomeBtn = document.querySelector(".open-btn");
let homeContainer = document.querySelector(".close-container");
let propertySearch = document.querySelector(".home-search-input");
let sortPriceBtn = document.querySelector(".sort-by-price");
let searchBtn = document.querySelector(".search-btn");
let sellProperties = document.querySelector(".properties-sell")
let loadMoreBtn = document.querySelector(".load-btn");


// array of the contains the data
let dataArray = [];
// axios of the API that has data of real estate
// import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://realtor16.p.rapidapi.com/forsale',
    params: {location: 'santa monica', type: 'single_family,condos'},
    headers: {
      'X-RapidAPI-Key': '5de0722db1msh3b14a48dea3e7a1p15c8bajsn2288cf021295',
      'X-RapidAPI-Host': 'realtor16.p.rapidapi.com'
    }
  };
  


// function that show all the api data for the user
function showData(web){
  console.log(web);
  web.forEach(data => {
    homeContainer.innerHTML += ` <div class="Home-container bg-light col-md-3">
    <div>
    <img  src="${data.photos[0].href}" alt="" width: "100%"; />
    </div>
    <div class:"details-container">
      <h3 class="fw-bold col-12">price: ${data.list_price} $</h3>
      <h3 class="">${data.location.address.city}</h3>
      <address>line: ${data.location.address.line}</address>
      <h3 class="">${data.location.address.state}</h3>
      <a href="https://www.realtor.com/realestateandhomes-detail/${data.permalink}" class="btn btn-primary">Click here for more info</a>
    </div>
  </div>`
  
});  
}
showData(dataArray)
// call to the axios
// axios.request(options).then(function (response) {
// 	dataArray = response.data.home_search.results;
//   console.log('API call',dataArray);
// showData(dataArray)
// })

let currentContainer = 6;
// event on the btn to load more properties
loadMoreBtn.addEventListener('click', function(){
    let allProperties = document.querySelectorAll(".Home-container");
  for (let i = currentContainer; i < currentContainer+6; i++) {
    if(allProperties[i]){
      allProperties[i].style.display = 'block';
    }
  }
  currentContainer += 6;
  if(currentContainer >= allProperties.length){
    loadMoreBtn.style.display = 'none'
  }
  console.log(currentContainer);
})

// function that filter by adders
function searchFun(arr){
  homeContainer.innerHTML = ''
  let searchFilter = arr.filter(function(obj){
    return obj.location.address.line.toLowerCase().indexOf(propertySearch.value)>-1
  })
  loadMoreBtn.style.display = 'block'
  showData(searchFilter);
return searchFilter;

}
// event on the search btn
searchBtn.addEventListener("click", function(){
  searchFun(dataArray)
  if(searchFun(dataArray).length == 0){
    alert("address not found")
    showData(dataArray)
  }
})
// function that sort by price
function sortByPrice(dataArray){
  homeContainer.innerHTML = ""
  dataArray.sort(function(a,b){
    if(a.list_price>b.list_price){
      return 1 
    }if(a.list_price<b.list_price){
      return -1
    }
  })
  loadMoreBtn.style.display = 'block'
  showData(dataArray)
}
// event on the btn that sort by price
sortPriceBtn.addEventListener("click", function(){
  sortByPrice(dataArray)
})
// graph object //
let optionsGraph = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight'
},
title: {
  text: 'The growth of the company value in the last year',
  align: 'left'
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'],
    opacity: 0.5
  },
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Des'],
}
};
// show on the graph obj
let chart = new ApexCharts(document.querySelector("#chart"), optionsGraph);
chart.render();

