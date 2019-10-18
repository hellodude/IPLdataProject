const fs = require('fs');
const matches = JSON.parse(fs.readFileSync('.','utf8'));

const deliveries = JSON.parse(fs.readFileSync('./data-set/deliveries.json'));



//-----------------------F-1
function matchesPlayedFun(matches) {
    if (matches.length == 0) {
        return "value passed is empty";
    }
    const matchesPlayed = matches.reduce((sumOfMatches, perMatches) => {
        if (sumOfMatches.hasOwnProperty(perMatches.season)) { sumOfMatches[perMatches.season] += 1 } else { sumOfMatches[perMatches.season] = 1 }
        return sumOfMatches
    }, {})
    return matchesPlayed
}
module.exports.matchesPlayedFun = matchesPlayedFun


// -------------------F-2
function matchesWonPerYear(matches) {
    if (matches.length == 0) {
        return "value passed is empty"
    }
    const matchesWin = matches.reduce(function (matchesWinList, currentMatches) {
        if (currentMatches['winner'] != '') {
            if (!matchesWinList[currentMatches['winner']]) {

                matchesWinList[currentMatches['winner']] = { '2008': 0, '2009': 0, '2010': 0, '2011': 0, '2012': 0, '2013': 0, '2014': 0, '2015': 0, '2016': 0, '2017': 0 };

            }
            if (!matchesWinList[currentMatches['winner']][currentMatches['season']]) {
                ++matchesWinList[currentMatches['winner']][currentMatches['season']];
            } else {
                ++matchesWinList[currentMatches['winner']][currentMatches['season']];
            }
        }
        return matchesWinList;
    }, {});
    return matchesWin;

}
module.exports.matchesWonPerYear = matchesWonPerYear

// --------------------F-3

function extraRunsPerTeamFun(matches, deliveries) {
    if (matches.length == 0 || deliveries.length == 0) {
        return "value passed is empty"
    }
    let matchesId = matches.filter((currentMatchesSeason) => currentMatchesSeason['season'] == 2016).map((currentMatchesId) => currentMatchesId.id);
    let extraRunsDel = deliveries.reduce(function (extraRunList, currentExtraRuns) {
        if (matchesId.includes(currentExtraRuns['match_id'])) {
            if (!extraRunList[currentExtraRuns['bowling_team']]) {
                extraRunList[currentExtraRuns['bowling_team']] = parseInt([currentExtraRuns['extra_runs']]);
            } else {
                extraRunList[currentExtraRuns['bowling_team']] = parseInt(extraRunList[currentExtraRuns['bowling_team']]) + parseInt([currentExtraRuns['extra_runs']]);

            }
        }
        return extraRunList
    }, {});
    return extraRunsDel

}
module.exports.extraRunsPerTeamFun = extraRunsPerTeamFun


//  // --------------------------F-4

function topEconomicalBowler(matches, deliveries) {
    if (matches.length == 0 || deliveries.length == 0) {
        return "value passed is empty"
    }
    let matchesId2015 = matches.filter((season) => season['season'] == '2015').map((idMatch) => idMatch.id);
    let totalRunsBalls = deliveries.reduce(function (runsBallsList, currentRunsBall) {
        if (matchesId2015.includes(currentRunsBall['match_id'])) {
            if (!runsBallsList[currentRunsBall['bowler']]) {
                runsBallsList[currentRunsBall['bowler']] = { "runs": 0, "balls": 0 }
            }
            runsBallsList[currentRunsBall['bowler']]["runs"] += parseInt(currentRunsBall['total_runs']) - parseInt(currentRunsBall["legbye_runs"]) - parseInt(currentRunsBall["bye_runs"]);
            if (currentRunsBall['wide_runs'] == 0 && currentRunsBall['noball_runs'] == 0)
                ++runsBallsList[currentRunsBall['bowler']]['balls'];


        }
        return runsBallsList;
    }, []);

    let economicalList = Object.entries(totalRunsBalls).reduce((economicalBowler, currentBowler) => {
        obj = { 'bowler': currentBowler[0], 'economy': (currentBowler[1].runs) / (currentBowler[1].balls / 6) }
        economicalBowler.push(obj);
        return economicalBowler;
    }, []);

    let topEconomical = economicalList.sort((a, b) => a.economy - b.economy).slice(0, 10)
    return topEconomical

}
module.exports.topEconomicalBowler = topEconomicalBowler




