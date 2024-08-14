const json_data = require("./data.json")

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function cityByPopulition(data){
//     let no = 300000;
    
//     let filterCities = data.filter((e)=>{
//         return e.population > no;
//     })

//     const cityNameArr = filterCities.map((e)=>{
//         return e.city;
//     })
//     console.log("🚀 ~ cityNameArr ~ cityNameArr:", cityNameArr)

//     console.log(filterCities.length);
//     let largeNames = cityNameArr.filter((e)=>{
//         return e.length > 5;
//     })
//     console.log("🚀 ~ largeNames ~ largeNames:", largeNames)

// }


// cityByPopulition(json_data)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function cityByLargeName(data, no){
//     let largeNames = data.filter((e)=>{
//         return e.city.length > no;
//     })
//     let largeNameArr = largeNames.map(e=>{
//         return e.city
//     })
//     return largeNameArr
// }


// console.log(cityByLargeName(json_data, 5));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function sortByPopulationFunc(data, min, max){
    
//     let sortByPopulation = data.filter((e) => {
//         return (e.population > min && e.population < max) ;
//     })

//     let sortByPopulationArr = sortByPopulation.map((e) => {
//         return e.city ;
//     })

//     return sortByPopulationArr ;

// }

// console.log(sortByPopulationFunc(json_data, 3000, 300000));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function getCityByStateWise(data, state){
//     let filter_cities = data.filter((e)=>{
//         return e.state_name == state;
//     })
//     let cityNameArr = filter_cities.map(e=>{
//         return e.city
//     })
//     return cityNameArr;
// }

// console.log("🚀 ~ getCityByStateWise ~ getCityByStateWise:", getCityByStateWise(json_data, "Bihar"))



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function getPopulationByStateWise(data, state){

//     let filter_cities = data.filter((e)=>{
//         return e.state_name == state ;
//     })

//     let PopulationArr = filter_cities.map((e)=>{
//         return e.population ;
//     })

//     let ToptalPopulation = PopulationArr.reduce((a,b)=>{
//         return a+b ;
//     })

//     return `${state} - ${ToptalPopulation}`;

// }

// console.log("🚀 ~ getPopulationByStateWise ~ getPopulationByStateWise:", getPopulationByStateWise(json_data, "Bihar"))


