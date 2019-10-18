const fs = require('fs')
const deliveries = JSON.parse(fs.readFileSync('./data-set/deliveries.json','utf-8'))


var count = 0;
const uniqueTeams = deliveries.reduce((acc,curr) => {
        
        if(!acc.hasOwnProperty(curr.batting_team)) {
            acc[curr['batting_team']] = {}
        }
        if(!acc[curr['batting_team']].hasOwnProperty(curr['batsman'])){
                   if (curr['batsman_runs'] == 6){
            
                        acc[curr['batting_team']][curr['batsman']]= 1;
                   }
        }else{
            if (curr['batsman_runs'] == 6){
                acc[curr['batting_team']][curr['batsman']] =  parseInt(acc[curr['batting_team']][curr['batsman']]) + 1;

            }
        }
        return acc
},{})
console.log(uniqueTeams)

uniqueTeams.sort((a,b) => {
    if(a>b)
        return 1
    else
        return -1
})
console.log(uniqueTeams);




