const testPath = {
  color: '#00ffff',
  combine: false,
  data: [
    [[0, 0], [100, 100]],
    [[200, 0], [300, 100]],
  ],
  path: [
    'M0,0c0,0 100,100 100,100',
    'M200,0c0,0 100,100 100,100',
  ],
  opacity: 1,
  thickness: 5,
};

const testPath2 = [
  {
    color: '#1cff0c',
    combine: false,
    data: [
      [[374, 143], [414, 125], [414, 125], [440, 119], [454, 117]],
    ],
    opacity: 1,
    path: [
      'M374,143c13,-6 26,-15 40,-18c13,-3 27,-6 40,-8',
    ],
    thickness: 5,
  },
];

'M (374 143) C 387 137 400 128 (414 125) C 427 122 (441 119) (454 117)';

const testPath3 = [{
  color: '#6aff00',
  combine: false,
  data: [
    [[350, 98], [368, 110], [374, 112], [379, 113], [385, 113], [391, 113], [398, 110], [405, 105], [411, 100], [416, 95], [419, 91], [420, 89], [421, 88], [421, 87]],
  ],
  opacity: 1,
  path: [
    'M350,98c6,4 12,8 18,12c15,9 32,0 43,-10c3,-2 10,-9 10,-13',
  ],
  thickness: 5,
},
];

'M (350 98) C 356 102 362 106 (368 110) C 383 119 400 110 (411 100) C 414 98 (421 91) (421 87)';
