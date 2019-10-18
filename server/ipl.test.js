const IPL  = require("./ipl.js");

// ----------------------------F-1 testcase
test('Matches played per year',() => {
    expect(IPL.matchesPlayedFun).toBeDefined()
})
const matchesData = [{'season':'2014'},{'season':'2015'},{'season':'2014'},{'season':'2013'}]
test('test value',() => {
    expect(IPL.matchesPlayedFun(matchesData)).toEqual({'2015':1,'2013':1,'2014':2})
})

test('Empty value passed ',() => {
    expect(IPL.matchesPlayedFun([])).toEqual('value passed is empty')
})

// --------------------------- F-2 testcase
test('Matches played per year',() => {
    expect(IPL.matchesWonPerYear).toBeDefined()
})
const matchesWinningTeam = [{'winner':'Sunrisers Hyderabad','season': '2017' },{'winner':'Sunrisers Hyderabad','season': '2014' },{'winner':'Sunrisers Hyderabad','season': '2013' },{'winner':"Kolkata Knight Riders",'season': '2017' },{'winner':"Kolkata Knight Riders",'season': '2014' }]

test('test value',() => {
    expect(IPL.matchesWonPerYear(matchesWinningTeam)).toEqual({'Sunrisers Hyderabad':{ '2017':1,'2014':1,'2013':1},'Kolkata Knight Riders':{'2017':1,'2014':1}})
})
test('Empty value passed ',() => {
    expect(IPL.matchesWonPerYear([])).toEqual('value passed is empty')
})

// ------------------------F-3 testcase
test('Matches played per year',() => {
    expect(IPL.extraRunsPerTeamFun).toBeDefined()
})

const matchesIdSeasons = [{'id':'1','season':'2017'},{'id':'2','season':'2016'},{'id':'3','season':'2016'},{'id':'4','season':'2016'},{'id':'5','season':'2015'}]
const matchesIdExtraRuns = [{'match_id':'1','bowling_team':'Sunrisers Hyderabad','extra_runs':'0'},{'match_id':'1','bowling_team':'Sunrisers Hyderabad','extra_runs':'1'},{'match_id':'2','bowling_team':'Sunrisers Hyderabad','extra_runs':'1'},{'match_id':'2','bowling_team':'Sunrisers Hyderabad','extra_runs':'0'},{'match_id':'2','bowling_team':'Sunrisers Hyderabad','extra_runs':'1'},{'match_id':'3','bowling_team':'Royal Challengers Bangalore','extra_runs':'1'},{'match_id':'3','bowling_team':'Royal Challengers Bangalore','extra_runs':'0'},{'match_id':'3','bowling_team':'Royal Challengers Bangalore','extra_runs':'1'},{'match_id':'3','bowling_team':'Royal Challengers Bangalore','extra_runs':'1'},{'match_id':'3','bowling_team':'Royal Challengers Bangalore','extra_runs':'0'},{'match_id':'4','bowling_team':'Mumbai Indians','extra_runs':'1'},{'match_id':'4','bowling_team':'Mumbai Indians','extra_runs':'0'},{'match_id':'5','bowling_team':'Rising Pune Supergiant','extra_runs':'1'}]

test('test value',() => {
    expect(IPL.extraRunsPerTeamFun(matchesIdSeasons,matchesIdExtraRuns)).toEqual({'Sunrisers Hyderabad':2,'Royal Challengers Bangalore':3,'Mumbai Indians': 1 })
})

test('Empty value passed ', () => {
    expect(IPL.extraRunsPerTeamFun([], [])).toEqual('value passed is empty')
})

// --------------------F-4 testCase
test('Is function defined or not',() => {
    expect(IPL.topEconomicalBowler).toBeDefined()
})

const matchesIdSeason2016 = [{'id':'1','season':2015},{'id':'2','season':2015}]
const matchesRunsBalls = [{'match_id':'1','bowler':'TS Mills','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'TS Mills','total_runs':'2','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'TS Mills','total_runs':'4','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'TS Mills','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'TS Mills','total_runs':'2','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'TS Mills','total_runs':'2','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},
                            {'match_id':'1','bowler':'SR Watson','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'SR Watson','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'SR Watson','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'SR Watson','total_runs':'6','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'SR Watson','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'SR Watson','total_runs':'2','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'2'},{'match_id':'1','bowler':'SR Watson','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},
                            {'match_id':'1','bowler':'YS Chahal','total_runs':'6','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'YS Chahal','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'YS Chahal','total_runs':'4','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'YS Chahal','total_runs':'6','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'YS Chahal','total_runs':'6','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'YS Chahal','total_runs':'2','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},
                            {'match_id':'1','bowler':'TM Head','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'TM Head','total_runs':'2','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'TM Head','total_runs':'3','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'TM Head','total_runs':'4','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'TM Head','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'TM Head','total_runs':'4','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},
                            {'match_id':'1','bowler':'R Ashwin','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'R Ashwin','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'R Ashwin','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'R Ashwin','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'R Ashwin','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'1','bowler':'R Ashwin','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},
                            {'match_id':'2','bowler':'A Choudhary','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'A Choudhary','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'A Choudhary','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'A Choudhary','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'A Choudhary','total_runs':'2','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'A Choudhary','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},
                            {'match_id':'2','bowler':'S Aravind','total_runs':'2','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'S Aravind','total_runs':'3','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'S Aravind','total_runs':'2','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'S Aravind','total_runs':'6','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'S Aravind','total_runs':'4','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'S Aravind','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},
                            {'match_id':'2','bowler':'A Nehra','total_runs':'2','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'A Nehra','total_runs':'3','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'A Nehra','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'A Nehra','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'A Nehra','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'A Nehra','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},
                            {'match_id':'2','bowler':'BCJ Cutting','total_runs':'2','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'BCJ Cutting','total_runs':'2','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'BCJ Cutting','total_runs':'2','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'BCJ Cutting','total_runs':'4','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'BCJ Cutting','total_runs':'2','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'BCJ Cutting','total_runs':'2','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},
                            {'match_id':'2','bowler':'Rashid Khan','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'Rashid Khan','total_runs':'2','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'Rashid Khan','total_runs':'4','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'Rashid Khan','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'Rashid Khan','total_runs':'2','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},{'match_id':'2','bowler':'Rashid Khan','total_runs':'1','bye_runs':'0','legbye_runs':0,'noball_runs':'0','wide_runs':'0'},
                            ]

test('check for top 10 bowler',() =>{
    expect(IPL.topEconomicalBowler(matchesIdSeason2016,matchesRunsBalls)).toEqual([['R Ashwin',6],['A Choudhary',7],['A Nehra',9],['Rashid Khan',11],['TS Mills',12],['SR Watson',13],['BCJ Cutting',14],['TM Head',15],['S Aravind',18],['YS Chahal',25]])
})


test('Empty value passed ', () => {
    expect(IPL.topEconomicalBowler([], [])).toEqual('value passed is empty')
})