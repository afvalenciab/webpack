import React from 'react';
import logo from '../../assets/images/platzi.png';
import video from '../../assets/video/que-es-core.mp4';

const App = () => {
  return (
    <main>
      <img src={logo} width={40} alt=""/>
      <video src={video} controls poster={logo} width={500}></video>
      <div>
        Que linda aplicacion hecha en React.js
      </div>
    </main>
  );
};

export default App;
