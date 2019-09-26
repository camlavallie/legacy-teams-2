import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment>
    <img src={spinner}
    style={{ width: '75px', margin: 'auto', display: 'block', paddingTop:'100px' }} 
    alt='Loading...'
    />
  </Fragment>
);