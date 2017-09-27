import React from 'react';
import ReactDOM from 'react-dom';
import LeagueTable from './LeagueTable';

const league = {
  "players" : [{"name":"Rod",
  "results":
  [{"date":"2017-01-04","points":4},
  {"date":"2017-02-15","points":2},
  {"date":"2017-02-22","points":3},
  {"date":"2017-04-26","points":2},
  {"date":"2017-06-21","points":2},
  {"date":"2017-06-28","points":1},
  {"date":"2017-08-02","points":2},
  {"date":"2017-08-09","points":1},
  {"date":"2017-08-30","points":3},
  {"date":"2017-09-20","points":3},
],
  "points":23,"position":1},{"name":"Twiggy","results":[{"date":"2017-08-09","points":3},{"date":"2017-08-02","points":3},{"date":"2017-07-20","points":3},{"date":"2017-07-04","points":1},{"date":"2017-06-21","points":3},{"date":"2017-05-17","points":2},{"date":"2017-05-10","points":3},{"date":"2017-04-12","points":3},{"date":"2017-01-04","points":1}],"points":22,"position":2},{"name":"Shaun","results":[{"date":"2017-08-09","points":3},{"date":"2017-07-05","points":2},{"date":"2017-07-04","points":3},{"date":"2017-05-31","points":2},{"date":"2017-05-17","points":3},{"date":"2017-02-15","points":1}],"points":14,"position":3},{"name":"Graham","results":[{"date":"2017-09-06","points":3},{"date":"2017-08-09","points":2},{"date":"2017-05-25","points":3},{"date":"2017-03-15","points":3},{"date":"2017-02-22","points":2}],"points":13,"position":4},{"name":"Mark","results":[{"date":"2017-07-05","points":3},{"date":"2017-05-25","points":2},{"date":"2017-05-17","points":1},{"date":"2017-04-26","points":1},{"date":"2017-04-12","points":1},{"date":"2017-03-22","points":2},{"date":"2017-03-15","points":1},{"date":"2017-02-22","points":1}],"points":12,"position":5},{"name":"Ash","results":[{"date":"2017-09-06","points":1},{"date":"2017-08-09","points":2},{"date":"2017-07-26","points":1},{"date":"2017-05-25","points":1},{"date":"2017-03-01","points":2},{"date":"2017-02-08","points":2},{"date":"2017-01-04","points":2}],"points":11,"position":6},{"name":"Nigel","results":[{"date":"2017-06-28","points":2},{"date":"2017-04-12","points":2},{"date":"2017-04-05","points":1},{"date":"2017-03-01","points":3}],"points":8,"position":7},{"name":"Neil","results":[{"date":"2017-09-20","points":2},{"date":"2017-08-30","points":2},{"date":"2017-08-23","points":3},{"date":"2017-07-05","points":1}],"points":8,"position":8},{"name":"Nobby","results":[{"date":"2017-05-31","points":1},{"date":"2017-03-29","points":3},{"date":"2017-01-04","points":3}],"points":7,"position":9},{"name":"Tom","results":[{"date":"2017-09-06","points":2},{"date":"2017-08-23","points":1},{"date":"2017-06-28","points":3}],"points":6,"position":10},{"name":"Place","results":[{"date":"2017-08-14","points":1},{"date":"2017-01-25","points":3},{"date":"2017-01-11","points":2}],"points":6,"position":11},{"name":"Bonnie","results":[{"date":"2017-07-12","points":1},{"date":"2017-05-10","points":1},{"date":"2017-04-05","points":2},{"date":"2017-03-29","points":2}],"points":6,"position":12},{"name":"Dave","results":[{"date":"2017-05-10","points":2},{"date":"2017-02-08","points":3}],"points":5,"position":13},{"name":"Trevor","results":[{"date":"2017-06-21","points":1},{"date":"2017-02-15","points":3}],"points":4,"position":14},{"name":"The","results":[{"date":"2017-05-31","points":3},{"date":"2017-03-01","points":1}],"points":4,"position":15},{"name":"David","results":[{"date":"2017-04-26","points":3}],"points":3,"position":16},{"name":"Nathan","results":[{"date":"2017-03-22","points":3}],"points":3,"position":17},{"name":"Daryl","results":[{"date":"2017-04-05","points":3}],"points":3,"position":18},{"name":"Phil","results":[{"date":"2017-03-15","points":2}],"points":2,"position":19},{"name":",","results":[{"date":"2017-07-20","points":2}],"points":2,"position":20},{"name":"Paul","results":[{"date":"2017-07-04","points":2}],"points":2,"position":21},{"name":"Daniel","results":[{"date":"2017-08-23","points":2}],"points":2,"position":22},{"name":"Out","results":[{"date":"2017-04-19","points":2}],"points":2,"position":23},{"name":"Placer!","results":[{"date":"2017-05-03","points":1}],"points":1,"position":24},{"name":"Long","results":[{"date":"2017-08-02","points":1}],"points":1,"position":25},{"name":"Cash","results":[{"date":"2017-08-30","points":1}],"points":1,"position":26},{"name":"Sorry","results":[{"date":"2017-04-19","points":1}],"points":1,"position":27},{"name":"!","results":[{"date":"2017-09-12","points":1}],"points":1,"position":28},{"name":"Lucky","results":[{"date":"2017-09-20","points":1}],"points":1,"position":29},{"name":"Place!","results":[{"date":"2017-03-15","points":1}],"points":1,"position":30},{"name":"Johnathon","results":[{"date":"2017-08-09","points":1}],"points":1,"position":31},{"name":"Well","results":[{"date":"2017-01-25","points":1}],"points":1,"position":32},{"name":"And","results":[{"date":"2017-03-08","points":0}],"points":0,"position":33}]

}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LeagueTable league={league} />, div);
});
