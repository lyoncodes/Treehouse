import { hello, add } from './foo.js';
import { barchart } from './barchart.js';
import { circleMaker } from './circles.js';
import { calcUSG, calcAP, calcEFG, calcTSP } from './foo.js'

console.log(hello());

const data = [
  {
    "season": "2012-13",
    "astPer": calcAP(531, 553, 3167, 19855, 3009),
    "efg": calcEFG(553, 185, 1288),
    "tsp": calcTSP(1562, 1288, 321),
    "usg": calcUSG(1288, 321, 243, 19855, 3167, 6715, 1608, 1203)
  },
  {
    "season": "2013-14",
    "astPer": calcAP(457, 553, 2937, 19855, 3207),
    "efg": calcEFG(553, 218, 1304)
  },
  {
    "season": "2014-15",
    "astPer": calcAP(507, 590, 2925, 19855, 3175),
    "efg": calcEFG(590, 196, 1360)
  },
  {
    "season": "2015-16",
    "astPer": calcAP(512, 618, 2676, 19805, 3167),
    "efg": calcEFG(618, 229, 1474)
  },
  {
    "season": "2016-17",
    "astPer": calcAP(440, 661, 2694, 19930, 3243),
    "efg": calcEFG(661, 214, 1488)
  },
  {
    "season": "2017-18",
    "astPer": calcAP(481, 621, 2670, 19755, 3222),
    "efg": calcEFG(621, 227, 1415)
  },
  {
    "season": "2018-19",
    "astPer": calcAP(551, 681, 2838, 19855, 3470),
    "efg": calcEFG(681, 237, 1533)
  },
];
console.log(data);
//
circleMaker();
//
barchart();