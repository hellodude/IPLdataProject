const fs = require('fs');
const matches = JSON.parse(fs.readFileSync('../data-set/matches.json', 'utf8'));

const deliveries = JSON.parse(fs.readFileSync('../data-set/deliveries.json', 'utf8'));
const ipl = require('./ipl')

// ---------F-1
const matchesPerYear = ipl.matchesPlayedFun(matches)
//-------F-1 json
fs.writeFile('./../output/matchesPerYear.json', JSON.stringify(matchesPerYear), (err) => {
    if (err) {
        console.log(err);
        return;

    }
    console.log("matchesPerYear Created");
});
//---------F-2
const matchesWonPerYearTeam = ipl.matchesWonPerYear(matches)

// -----------F-2 json
fs.writeFile ('../output/matchesWonPerYearTeam.json',JSON.stringify(matchesWonPerYearTeam),(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("matchesWonPerYearTeam created");
});
// ---------F-3
const extraRuns = ipl.extraRunsPerTeamFun(matches, deliveries)

// ----------F-3 json 
fs.writeFile ('../output/extraRuns.json',JSON.stringify(extraRuns),(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("extraRuns created");
});
 // ---------F-4
const top10EconomicalBowler = ipl.topEconomicalBowler(matches, deliveries)

// // -----------F-4 json
fs.writeFile ('../output/top10EconomicalBowler.json',JSON.stringify(top10EconomicalBowler),(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("top10EconomicalBowler created");
});