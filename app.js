const fs = require('fs');
const matches = JSON.parse(fs.readFileSync('./data-set/matches.json','utf8'));

const deliveries = JSON.parse(fs.readFileSync('./data-set/deliveries.json','utf8'));


// F-1
// function ab(matches) {
// const matchesPlayed = matches.reduce(function (sumOfMatches, perMatches) {
//   if (sumOfMatches.hasOwnProperty(perMatches.season)) { sumOfMatches[perMatches.season] += 1 } else { sumOfMatches[perMatches.season] = 1 }
//   return sumOfMatches ;
// }, {});
//    return matchesPlayed;
// }
// //console.log(matchesPlayed);
// module.exports.ab=ab;

// F-2

// const matchesWin = matches.reduce(function (matchesWinList, currentMatches) {
//     if(currentMatches['winner'] != ''){
    
//         if(!matchesWinList[currentMatches['winner']]){
            
//             matchesWinList[currentMatches['winner']] = {'2008':0,'2009':0,'2010':0,'2011':0,'2012':0,'2013':0,'2014':0,'2015':0,'2016':0,'2017':0};

//         }
//             if(!matchesWinList[currentMatches['winner']][currentMatches['season']]){
//                 ++matchesWinList[currentMatches['winner']][currentMatches['season']];
//             }else{
//                 ++matchesWinList[currentMatches['winner']][currentMatches['season']];
//             }
//         }   
    
//     return matchesWinList;
// },{});
// console.log(matchesWin);





// // F-3


// let matchesId = matches.filter((item) => item['season'] == 2016).map((item) => item.id);
// let extraRunsDel  = deliveries.reduce(function(acc,curr){
//     if(matchesId.includes(curr['match_id'])){
//         if(!acc[curr['bowling_team']]){
//             acc[curr['bowling_team']]  = parseInt([curr['extra_runs']]);
//         }else{
//             acc[curr['bowling_team']] = parseInt(acc[curr['bowling_team']]) + parseInt([curr['extra_runs']]);

//         }
//     }
//     return acc;
// },{});
// console.log(extraRunsDel);

// //F-4

// let matchesId2015 = matches.filter((item) => item['season'] == '2015').map((item) => item.id);

// let totalRuns  = deliveries.reduce(function(acc,curr){
//     if(matchesId2015.includes(curr['match_id'])){
//         if(!acc[curr['bowler']]){
//             acc[curr['bowler']] = {"runs":0,"balls":0}
//         }
//         acc[curr['bowler']]["runs"]  += parseInt(curr['total_runs'])-parseInt(curr["legbye_runs"])-parseInt(curr["bye_runs"]);
//         if(curr['wide_runs'] == 0 && curr['noball_runs'] == 0)
//                 ++acc[curr['bowler']]['balls'];
       

//     }
//     return acc;
// },[]);
// console.log(totalRuns)
// let economicalList =  Object.entries(totalRuns).reduce((economicalBowler,currentBowler) =>{ 
//         //obj = {'bowler':currentBowler[0], 'economy':(currentBowler[1].runs)/(currentBowler[1].balls/6)}
//         currentBowler[0]
//         return economicalBowler;
// }, {}) ;

// economicalList.sort((a,b)=>a.economy-b.economy);
// console.log(economicalList.slice(0,10));


// const matchesSeasonId = matches.reduce((listIdMatches,currentObject) => {
//                 obj = {'id': currentObject['id'],'season':currentObject['season']}
//                 listIdMatches.push(obj)
//                 return listIdMatches
// },[])



// const economical = deliveries.reduce((acc,curr) => {

//     acc.push(curr)
//     return acc
        
//     },[] )


// console.log();

var matchesId = matches.filter(obj => obj.season == '2013').map(obj => obj.id)
var totalRuns = deliveries.reduce((sumRuns,curobj)=>{

        if(matchesId.includes(curobj.match_id)){
            if(sumRuns[curobj['batsman']]){
                sumRuns[curobj['batsman']] = {runs:curobj.total_runs}
            }else{
                sumRuns[curobj['batsman']] = sumRuns[curobj['batsman']['runs']] + curobj.total_runs
                console.log()
            }
        }

        return sumRuns
},{})
console.log(totalRuns)