var React = require('react'),
    Reflux = require('reflux');

var Player = {
  Views: {},
  Actions: Reflux.createActions(["play", "pause", "previous", "next", "volume"]),
  Stores: {}
};

Player.Stores.PlayerStore = Reflux.createStore({
  listenables: Player.Actions,
  onPrevious: function() {
    console.log("previous");
  }
});

Player.Views.Buttons = {
  PlayButton: React.createClass({
    render: function() {
      return (
        <button type="button" className="play btn btn-default btn-circle btn-lg" aria-label="Play" onClick={this.props.onClick}>
          <span className="glyphicon glyphicon-play" aria-hidden="true"></span>
        </button>
      );
    }
  }),
  PauseButton: React.createClass({
    render: function() {
      return (
        <button type="button" className="pause btn btn-default btn-circle btn-lg" aria-label="Pause" onClick={this.props.onClick}>
          <span className="glyphicon glyphicon-pause" aria-hidden="true"></span>
        </button>
      );
    }
  })
};

Player.Views.Player = React.createClass({
  getInitialState: function() {
    return {
      playing: 0
    };
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
  handlePlayPause: function() {
    if (this.state.playing === 0)
      this.setState({playing:1});
    else
      this.setState({playing:0});
  },
  render: function() {
    return (
      <div>
        <div id="player-controls">
          <button type="button" className="previous btn btn-default btn-circle" aria-label="Previous" onClick={Player.Actions.previous}>
            <span className="glyphicon glyphicon-step-backward" aria-hidden="true"></span>
          </button>
          {this.state.playing ? <Player.Views.Buttons.PauseButton onClick={this.handlePlayPause} /> : <Player.Views.Buttons.PlayButton onClick={this.handlePlayPause} />}
          <button type="button" className="next btn btn-default btn-circle" aria-label="Next" onClick={Player.Actions.next}>
            <span className="glyphicon glyphicon-step-forward" aria-hidden="true"></span>
          </button>
        </div>
        <div id="currently-playing">
          <div className="cover"></div>
          <div id="artist-image" className="over" data-toggle="tooltip" data-placement="right" title="Artist Name"></div>
          <div className="playing-options repeat-shuffle over">
            <button type="button" className="repeat btn" aria-label="Repeat" onClick={Player.Actions.next} data-toggle="button tooltip" data-placement="bottom" aria-pressed="false" autoComplete="off" title="Repeat">
              <span className="glyphicon glyphicon-repeat" aria-hidden="true"></span>
            </button>
            <button type="button" className="shuffle btn" aria-label="Shuffle" onClick={Player.Actions.next} data-toggle="button tooltip" data-placement="top" aria-pressed="false" autoComplete="off" title="Shuffle">
              <span className="glyphicon glyphicon-random" aria-hidden="true"></span>
            </button>
          </div>
          <div id="song-info" className="over">
            <div id="current-song">
              <h4>Song Title</h4>
            </div>
            <div id="current-album">
              <h5>Album - Genre - Playlist</h5>
            </div>
            <div id="song-progress">
              <div className="time-now"><h5>00:00:00</h5></div>
              <div className="tracker">
                <div className="tracker-wrapper">
                  <div className="bar total-time-bar"></div>
                  <div className="bar time-now-bar"></div>
                </div>
              </div>
              <div className="total-time"><h5>00:00:00</h5></div>
            </div>
          </div>
          <div className="playing-options play-list over">
            <button type="button" className="playlist btn btn-lg" aria-label="Playlist" onClick={Player.Actions.next} data-toggle="button tooltip" data-placement="left" aria-pressed="false" autoComplete="off" title="Playlist">
              <span className="glyphicon glyphicon-list" aria-hidden="true"></span>
            </button>
          </div>
        </div>
        <div id="volume-control">
          <button type="button" className="shuffle btn btn-default btn-circle" aria-label="Volume" onClick={Player.Actions.volume} aria-pressed="false" title="Volume">
            <span className="glyphicon glyphicon-volume-up" aria-hidden="true"></span>
          </button>
          <div className="tracker">
            <div className="bar available"></div>
            <div className="bar volume"></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Player;
