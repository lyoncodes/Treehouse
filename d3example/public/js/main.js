import { hello, add } from './foo.js';
import { barchart } from './barchart.js';
import { flowchart } from './flowchart.js';
import { linechart } from './linechart.js';
import { circleMaker } from './circles.js';
import { piechart } from './piechart.js';
import { calcUSG, calcAP, calcEFG, calcTSP, calcPPP } from './foo.js'

console.log(hello());
const data = [
  {
    "season": "2012-2013",
    "astPer": calcAP(531, 553, 3167, 19855, 3009),
    "efg": calcEFG(553, 185, 1288),
    "tsp": calcTSP(1562, 1288, 321)
  },
  {
    "season": "2013-2014",
    "astPer": calcAP(457, 553, 2937, 19855, 3207),
    "efg": calcEFG(553, 218, 1304),
    "tsp": calcTSP(1695, 1304, 426)

  },
  {
    "season": "2014-2015",
    "astPer": calcAP(507, 590, 2925, 19855, 3175),
    "efg": calcEFG(590, 196, 1360),
    "tsp": calcTSP(1720, 1360, 398),
  },
  {
    "season": "2015-2016",
    "astPer": calcAP(512, 618, 2676, 19805, 3167),
    "efg": calcEFG(618, 229, 1474),
    "tsp": calcTSP(1879, 1474, 464),
  },
  {
    "season": "2016-2017",
    "astPer": calcAP(440, 661, 2694, 19930, 3243),
    "efg": calcEFG(661, 214, 1488),
    "tsp": calcTSP(2024, 1488, 545),
  },
  {
    "season": "2017-2018",
    "astPer": calcAP(481, 621, 2670, 19755, 3222),
    "efg": calcEFG(621, 227, 1415),
    "tsp": calcTSP(1962, 1415, 538),
  },
  {
    "season": "2018-2019",
    "astPer": calcAP(551, 681, 2838, 19855, 3470),
    "efg": calcEFG(681, 237, 1533),
    "tsp": calcTSP(2067, 1533, 513),
  },
];

//
// circleMaker();
//
barchart();
//
flowchart();
//
linechart();
//
piechart();