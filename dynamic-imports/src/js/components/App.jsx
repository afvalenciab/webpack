import React from 'react';
import logo from '../../assets/images/platzi.png';
import video from '../../assets/video/que-es-core.mp4';

import '../../assets/less.less';
import '../../assets/sass.scss';
import '../../assets/stylus.styl';

const App = () => {

  const handleClick = async () => {
    const { alerta } = await import('./alert.js');
    alerta('Omg, este módulo se cargo dinamicamente');
  };

  return (
    <main>
      <img src={logo} width={40} alt=""/>
      <video src={video} controls poster={logo} width={500}></video>
      <div>
        Que linda aplicacion hecha en React.js
      </div>
      <p className="sass">Esto es Sass</p>
      <p className="less">Esto es less</p>
      <p className="stylus">Esto es stylus</p>
      <button type="button" onClick={handleClick}>Click to dynamic import alert</button>
    </main>
  );
};

export default App;
