import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import NowWhat from './NowWhat';
import createStore from '../store';
import { createMuiTheme } from '@material-ui/core/styles';;


const store = createStore();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});

const HomePage = () => (

        <NowWhat />

);

export default HomePage;
