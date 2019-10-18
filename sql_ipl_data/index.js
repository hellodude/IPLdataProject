const { Client } = require('pg')

const client = new Client({
    user: 'mountblue',

    host: 'ipl-1.c3xodypxb4ts.ap-south-1.rds.amazonaws.com',

    database: 'ipl',

    password: 'mountblue!011q2w',

    port: 5432
})

// client.connect()
// .then(() => console.log("Connected Successfully"))
// .then(() => client.query("select distinct season,count(season) from matches group by season") )
// .then(result => console.table(result.rows))
// .catch(e => console.log(e))
// .finally(() => client .end());


// client.connect()
// .then(() => console.log("Connected Successfully"))
// .then(() => client.query("select winner,season,count(season) from matches group by season,winner order by season") )
// .then(result => console.table(result.rows))
// .catch(e => console.log(e))
// .finally(() => client .end());


// client.connect()
// .then(() => console.log("Connected Successfully"))
// .then(() => client.query("select bowling_team,sum(extra_runs) from deliveries where match_id in (select id from matches where season = '2016' ) group by bowling_team") )
// .then(result => console.table(result.rows))
// .catch(e => console.log(e))
// .finally(() => client .end());


client.connect()
.then(() => console.log("Connected Successfully"))
.then(() => client.query("select bowler,(sum(total_runs - bye_runs - legbye_runs)*6.0)/count(case when wide_runs = '0' AND noball_runs = '0' then 1 else 0 end) as economy from deliveries where match_id in (select id from matches where season = '2015' ) group by bowler order by economy limit 10") )
.then(result => console.table(result.rows))
.catch(e => console.log(e))
.finally(() => client .end());


