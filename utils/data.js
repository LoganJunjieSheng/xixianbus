function getRouteList() {
  var data = [
    {
      lineid: "E1A",
      moring_night: '0',
      stops: [{
        "stopid": "0",
        "stopname": "曲江新开门南路转盘",
        "time": "7:20",
        "longitude": "34.2113036627",
        "latitude": "109.0005777381"
      },
      {
        "stopid": "1",
        "stopname": "电视塔",
        "time": "7:40",
        "longitude": "34.2032500000",
        "latitude": "108.9518320000"
      },
      {
        "stopid": "2",
        "stopname": "西咸集团",
        "time": "8:23",
        "longitude": "34.3293700000",
        "latitude": "108.7578930000"
      },
      {
        "stopid": "3",
        "stopname": "西咸人才大厦",
        "time": "8:28",
        "longitude": "34.3188390000",
        "latitude": "108.7840900000"
      },
      {
        "stopid": "4",
        "stopname": "西咸大厦",
        "time": "8:38",
        "longitude": "34.3393640000",
        "latitude": "108.7922190000"
      }
      ]
    },
    {
      lineid: "E1B",
      moring_night: '1',
      stops: [{
        "stopid": "0",
        "stopname": "西咸大厦",
        "time": "17:20",
        "longitude": "34.3393640000",
        "latitude": "108.7922190000"
      },
      {
        "stopid": "1",
        "stopname": "西咸人才大厦",
        "time": "17:25",
        "longitude": "34.3188390000",
        "latitude": "108.7840900000"
      },
      {
        "stopid": "2",
        "stopname": "西咸集团",
        "time": "17:35",
        "longitude": "34.3293700000",
        "latitude": "108.7578930000"
      },
      {
        "stopid": "3",
        "stopname": "电视塔",
        "time": "18:20",
        "longitude": "34.2032500000",
        "latitude": "108.9518320000"
      },
      {
        "stopid": "4",
        "stopname": "曲江新开门南路转盘",
        "time": "18:35",
        "longitude": "34.2113036627",
        "latitude": "109.0005777381"
      }
      ]
    },
    {
      lineid: "E2A",
      moring_night: '0',
      stops: [{
        "stopid": "0",
        "stopname": "行政中心",
        "time": "7:45"
      },
      {
        "stopid": "1",
        "stopname": "西咸大厦",
        "time": "8:25"
      },
      {
        "stopid": "2",
        "stopname": "西咸人才大厦",
        "time": "8:35"
      },
      {
        "stopid": "3",
        "stopname": "西咸集团",
        "time": "8:40"
      }
      ]
    },
    {
      lineid: "E2B",
      moring_night: '1',
      stops: [{
        "stopid": "0",
        "stopname": "西咸集团",
        "pmtime": "17:20"
      },
      {
        "stopid": "1",
        "stopname": "西咸人才大厦",
        "pmtime": "17:25",
      },
      {
        "stopid": "2",
        "stopname": "西咸大厦",
        "pmtime": "17:40",
      },
      {
        "stopid": "3",
        "stopname": "行政中心",
        "pmtime": "18:20",
      }
      ]
    }
  ]
  return data;
}
module.exports = {
  getRouteList: getRouteList
}

