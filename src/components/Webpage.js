import React from 'react';
import FillerText from './FillerText';

export default class Webpage extends React.Component {
   render() {
    return(
      <div className="webpage">
      <title>The world's coolest webpage</title>
      <FillerText />
      <FillerText />
      </div>
      )
   }

}