
// --------------------------f-1
fetch("../output/matchesPerYear.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    display(data);

  });

function display(data) {
  let keys = Object.keys(data);
  let values = Object.values(data);
  Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Matches played Per Year'
    },
    subtitle: {
      text: 'Source: IPL Data'
    },
    xAxis: {
      categories: keys,
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Matches Played'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Matches Played Per Year',
      data: values

    }
    ]
  });
}

// ---------------------------F-2

fetch("../output/matchesWonPerYearTeam.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (dataMatchesWonPerYear) {
    displayMatchesWonPerYear(dataMatchesWonPerYear)

  });

function displayMatchesWonPerYear(dataMatchesWonPerYear) {

  let dataMatchesArray = Object.entries(dataMatchesWonPerYear)

  let seriess = Object.keys(dataMatchesWonPerYear).reduce((acc, crr) => {
    let temp = {}
    temp["name"] = crr
    temp["data"] = Object.values(dataMatchesWonPerYear[crr])
    acc.push(temp)
    return acc
  }, [])

  let yearValues = dataMatchesArray.reduce((listTeam, currentTeamObj) => {

    listTeam.push(currentTeamObj[1])

    return listTeam
  }, [])
  let yearKeys = Object.keys(yearValues[0])



  Highcharts.chart('container1', {
    chart: {
      type: 'bar'
    },
    title: {
      text: ' Number of matches won of per team per year in IPL'
    },
    xAxis: {
      categories: yearKeys
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Team won matches'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: seriess
  });
}
// ---------------------------F-3
fetch("../output/extraRuns.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (dataExtraRuns) {
    displayExtraRuns(dataExtraRuns);

  });

function displayExtraRuns(dataExtraRuns) {
  let keys = Object.keys(dataExtraRuns);
  let values = Object.values(dataExtraRuns);
  Highcharts.chart('container2', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Extra Runs Given per Team in 2016'
    },
    subtitle: {
      text: 'Source: IPL Data'
    },
    xAxis: {
      categories: keys,
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Runs Conceded'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} runs</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Extra Runs Given',
      data: values

    }
    ]
  });
}
// ----------------------------F-4
fetch("../output/top10EconomicalBowler.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (dataTopBowler) {
    displayTopBowler(dataTopBowler);

  });

function displayTopBowler(dataTopBowler) {

  let keys = dataTopBowler.reduce((acc, curr) => {

    acc.push(curr['bowler'])
    return acc
  }, [])
  let economyBowler = dataTopBowler.reduce((acc, curr) => {

    acc.push(curr['economy'])
    return acc
  }, [])





  Highcharts.chart('container3', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Top 10 Economical Bowler'
    },
    subtitle: {
      text: 'Source: IPL Data'
    },
    xAxis: {
      categories: keys,
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Economy Rate'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} runs</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Economy Of Bowler',
      data: economyBowler
    }
    ]
  });
}