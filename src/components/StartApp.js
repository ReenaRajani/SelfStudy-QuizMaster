import React from 'react';

const startButtonStyle = {
  fontSize: '20px',
  height: '60px'
}

class StartApp extends React.Component {
  render() {
    return (
      <button style={startButtonStyle}> Start Quiz</button>
    )
  }
}

export default StartApp;
