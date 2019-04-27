import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style.js';
import { GlobalIconFont } from './static/iconfont/iconfont';

import App from './App';

const app = (
  <Fragment>
    <GlobalStyle></GlobalStyle>
    <GlobalIconFont></GlobalIconFont>
    <App />
  </Fragment>
)

ReactDOM.render(app, document.getElementById('root'));
