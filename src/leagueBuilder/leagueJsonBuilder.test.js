const chai = require('chai');
const expect = chai.expect;

describe('league json builder', () => {
  let posts = require('../examplePosts');
  let leagueJsonBuilder;

  beforeEach(() => {
    leagueJsonBuilder = require('./leagueJsonBuilder');
  });

  describe('get results', () => {
    let league;
    const expectedLeague = require('../exampleLeague');

    it('should build the results json', () => {
      league = leagueJsonBuilder.build(posts);
      expect(league).to.deep.equal(expectedLeague);
    });

    it('should manage player aliases', () => {
      posts[0].message = '1st Daz 2nd Bonita 3rd Rodders';
      league = leagueJsonBuilder.build(posts);
      expect(league).to.deep.equal(expectedLeague);
    });

    it('should allow for mixed case on player names', () => {
      posts[0].message = '1st daryl 2nd bonnie 3rd rod';
      league = leagueJsonBuilder.build(posts);
      expect(league).to.deep.equal(expectedLeague);
    });
  });
});
