 $("#lineargauge1").wijlineargauge({
                width: 900,
                height: 70,
                value: nbclick,
                max: intervalclick*4,
                min: 0, 
                animation: {
                    enabled: true,
                    duration: 400,
                    easing: ">"
                },
                pointer: {
                	visible:false,
                    shape: "rect",
                    length: 0.6,
                    style: {
                        fill: "#1E395B",
                        stroke: "#7BA0CC",
                        "stroke-width": 1,
                        opacity: 1
                    }
                },
                tickMajor: {
                    position: "inside",
                    offset: -9,
                    interval: intervalclick,
                    factor: 5,
                    style: {
                        fill: "#1E395B",
                        stroke: "none",
                        width: 2
                    }
                },
                tickMinor: {
                    position: "inside",
                    offset: -10,
                    visible: false,
                    interval: 1,
                    factor: 4,
                    style: {
                        fill: "#1E395B",
                        stroke: "none",
                        width: 1
                    }
                }
           });
    });
$("#lineargauge1").wijlineargauge({
   			value: nbclick,
   			ranges: [{
                    startValue: 0,
                    endValue: nbclick,
                    startDistance: 0.85, //A ratio value determine the location of the range at start value.
                    endDistance: 0.85, //A ratio value determine the location of the range at end value.
                    startWidth: 0.5,
                    endWidth: 0.5,
                    style: {
                        fill: "90-#3DA1D8-#3A6CAC",
                        opacity: 1,
                        stroke: "none"
                    }
                }]
   		});