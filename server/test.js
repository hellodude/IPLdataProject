const fs = require('fs');
const matches = JSON.parse(fs.readFileSync("./data-set/matches.json"));
const deliveries = JSON.parse(fs.readFileSync('./data-set/deliveries.json'));

console.log(deliveries)
// let matchesPerYear = matches.reduce((acc,curr) => {

//             if(!acc[curr['season']]){
//                 acc[curr['season']] = 1;
//             }else{
//                 acc[curr['season']] += 1
//             }

//             return acc
// },{})

// //console.log(matchesPerYear)


// let matchesWonPerYearPerTeam = matches.reduce((acc,curr) => {
        
//         if(curr['winner'] == ""){

//         }
//             if(!acc[curr['winner']]){

//                 acc[curr['winner']] = { 2008: 0 ,2009:0, 2010:0, 2011:0, 2012 : 0, 2013:0, 2014:0, 2015:0, 2016:0, 2017:0}
//             }else{
//                 if(!acc[curr['winner']][curr['season']]){
//                     acc[curr['winner']][curr['season']] = 1
//                 }else{
//                     acc[curr['winner']][curr['season']] += 1
//                 }
//             }


//             return acc
        
        
        
//     },{});

// //console.log(matchesWonPerYearPerTeam)


// let matchesIdSeason = matches.filter((curr) => {
//     if(curr['season'] == 2016 ){
//         return curr
//     }
// }).map((item) => item['id'])

// let extraRuns = deliveries.reduce((acc,curr) => {
//     if (matchesIdSeason.includes(curr['match_id'])){
//         if(!acc[curr['bowling_team']]){
//             acc[curr['bowling_team']]  = parseInt(curr['extra_runs']);       
//         }else{
//             acc[curr['bowling_team']] = parseInt(acc[curr['bowling_team']]) + parseInt(curr['extra_runs']);
//         }
//     }

//     return acc
// },{})

// //console.log(extraRuns)

// let matchesId = matches.filter((curr) => {
//     if(curr['season'] == 2015 ){
//         return curr
//     }
// }).map((item) => item['id'])



// let economicalBowler = deliveries.reduce((acc,curr) =>{

//         if(matchesId.includes(curr['match_id'])){

//             if(!acc.hasOwnProperty(curr['bowler'])){
//                 acc[curr['bowler']] = {runs:0 , balls:0}
//                 acc[curr['bowler']]['runs'] = parseInt(curr['total_runs']) - parseInt(curr['legbye_runs']) -parseInt(curr['bye_runs'])
//             }
//             else{
//                 acc[curr['bowler']]['runs'] =  parseInt(acc[curr['bowler']]['runs']) + parseInt(curr['total_runs']) - parseInt(curr['legbye_runs']) -parseInt(curr['bye_runs'])
//             }
//             acc[curr['bowler']]['balls'] += 1
//         }

//         return acc;
// },{})

// let formatArray = Object.entries(economicalBowler)
// //console.log(formatArray);

// let economy = formatArray.reduce((accEco,currEco) => {

//             accEco[currEco[0]] = currEco[1].runs/(currEco[1].balls/6)

//             return accEco
// },{})

// let ecoArray = Object.entries(economy);

// //console.log(ecoArray);

// let sortEco = ecoArray.sort((x,y) => {

//     if((x[1] - y[1]) > 0){
//         return 1
//     }else{
//         return -1
//     }
// })

// console.log(sortEco.slice(0,10))

// const fetch = require("node-fetch");

// Promise.all([fetch('https://jsonplaceholder.typicode.com/users')
// .then(resp => resp.json())
// .then(data  => display(data))],

// [fetch('https://jsonplaceholder.typicode.com/albums')
// .then(resp => resp.json())
// .then(data  => albumsDisplay(data))])


// function display(data){

//     console.log(data);


// }

// function albumsDisplay(data){
//     console.log(data)
//}