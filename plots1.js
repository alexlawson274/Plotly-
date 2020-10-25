//bubble chart 
var trace1 = {
  x: [123,
    136,
    149,
    164,
    180,
    198,
    218,
    240,
    264,
    290,
    320,
    352,
    387,
    425,
    468,
    515,
    566,
    623,
    685,
    753,
    ],
    
  y: [378,
    454,
    545,
    654,
    1627,
    1952,
    942,
    1130,
    88,
    106,
    127,
    152,
    785,
    2343,
    2811,
    1356,
    182,
    219,
    263,
    315
    ],
  mode: 'markers',
  marker:{
    size: [19,
      23,
      27,
      33,
      81,
      98,
      47,
      57,
      4,
      5,
      6,
      8,
      39,
      117,
      141,
      68,
      9,
      11,
      13,
      16,
      
         
      ]
  }
};

var data = [trace1];

var layout = {
  title: 'Most Frequently Occuring OTUs',
  showlegend: false,
  hoverlabel: "hola",
};

Plotly.newPlot('bar-plot', data, layout);