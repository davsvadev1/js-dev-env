import './index.css';

import numeral from 'numeral';
// var numeral = require('numeral');
const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome curse!`); // eslint-disable-line no-console
