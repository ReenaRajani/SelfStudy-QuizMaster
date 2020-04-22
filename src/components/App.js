import React, {Component} from 'react';

const AppStyle = {
  margin: '5px',
  padding: '5px'
}

const AppIntroStyle = {
  fontStyle: 'italic',
  fontSize: '20px'
}

const headerStyle = {
  border: '3px solid grey',
  borderRadius: '4px',
  textAlign: 'center',
  fontStyle: 'italic'
}

const startQuizStyle = {
  border: '1px solid black'
}

class App extends Component {
  render() {
    return (
      <div style={AppStyle}>
        <header style={headerStyle}>
          <h1> Learn Thru Quiz</h1>
        </header>
        <p style={AppIntroStyle}>
          Do you want to Test your skills, You are in the right path then.. click the start now button to begin
        </p>
      </div>
    )
  }
}

export default App;
