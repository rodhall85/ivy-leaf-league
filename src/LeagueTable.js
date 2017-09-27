import React, { Component } from 'react';
import logo from './logo.svg';
import './LeagueTable.css';

class PlayerScore extends Component {
  render() {
    return (
      <div className="player-score">
        {this.props.points}
      </div>
    );
  }
}

class PlayerRow extends Component {
  render() {
    let playerPoints = [];
    this.props.leagueDates.map(date => {
      let points = '';

      //console.log(this.props.player);
      this.props.player.results.map(result => {
        if (result.date === date) {
          points = result.points;
        }
      });

      playerPoints.push(<PlayerScore points={points}/>)
    });

    return (
      <tr className={`player-row ${this.props.bgClassType}`}>
        <th>{this.props.player.name}</th>
        <th>{playerPoints}</th>
        <th>{this.props.player.points}</th>
      </tr>
    )
  }
}

class HeaderRow extends Component {
  render() {
    let dates = [];
    this.props.leagueDates.map(leagueDate => {
      dates.push(<div className='league-date' key={leagueDate}>{'-'}</div>)
    });

    return (
      <tr className='header-row'>
        <th>Player</th>
        <th>{dates}</th>
        <th>Total</th>
      </tr>
    )
  }
}
class LeagueTable extends Component {
  render() {
    const leagueDates = getLeagueDates(this.props.league);

    let rows = [];
    this.props.league.players.map(player => {
      let bgClassType = 'odd';
      if (player.position % 2 === 0) {
        bgClassType = 'even';
      }

      rows.push(<PlayerRow bgClassType={bgClassType} leagueDates={leagueDates} player={player} key={player.position} />);
    });


    return (
      <table>
        <thead><HeaderRow league={this.props.league} leagueDates={leagueDates} /></thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

function getLeagueDates(league) {
    const allLeagueDates = league.players.map(player =>
      player.results.map(result =>
        result.date
      )
    );
    const mergedLeagueDates = allLeagueDates.reduce((a,b) =>
      a.concat(b)
    );
    const uniqueLeagueDates = [...new Set(mergedLeagueDates)];

    return uniqueLeagueDates.sort();
  }

export default LeagueTable;
