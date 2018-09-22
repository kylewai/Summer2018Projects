import React, { Component } from 'react';

import './App.css';

class App extends Component {

  render() {
    return (
      <YoutubePage />
    );
  }
}
function YoutubePage() {
  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <Logo />
              </td>
              <td>
              </td>
              <td>
                <SearchBar />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className = "home-body">
        <table>
          <tbody className = "what">
            <tr>
                <td>
                  <img className= "ad-thumbnail" src = {'ad.svg'} alt = "WorldCup!"></img>
                </td>
                <td>
                  <img className = "sad-thumbnail" src = {'ad.svg'} alt = "Ad here"></img>
                </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <ChannelVids />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>);
}

function ChannelVids(){
  const videos = [
    <Video key = "1" />,
    <Video key = "2"/>,
    <Video key = "3"/>,
    <Video key = "4"/>,
    <Video key = "5"/>
  ]
  return (
    <div>
      <ChannelList />
      <ul style = {{padding: '0px 0px 20px 0px', marginTop: '0px', marginBottom: '0px'}}>{videos}</ul>
    </div>
  );
}

function ChannelList(){
  return (<div className = "channel">
      <p className= "channel-name"><img className= "channel-logo" src = "circular-arrow.svg" alt = "icon"></img> <strong>Channel Name</strong></p>
  </div>);
}

function Video(){
  return (<li className= "video-container">
    <img className= "vid-thumbnail" src = "worldcup.svg" alt = "WorldCup!"></img>
    <p className= "video-title"><strong>90 in 90: England vs. Belgium</strong></p>
    <p className= "video-spec">Fox Soccer</p>
  </li>);
}

function Logo(){
  return (<a href = "https://youtube.com">
    <img className= "youtube-logo" src = "youtube.svg" alt = "Youtube Home"></img>
  </a>
  );
}

function SearchBar(){
  return (<div className="search-bar">
    <input type="text" className="search-txt" placeholder = "Search"></input>
      <button className = "search-btn">Search</button>
  </div>
);
}

export default App;
