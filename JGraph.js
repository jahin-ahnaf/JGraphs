/**  written in javascript and uses P5JS **/
var parentObj = []
let plotNumber = 0
var plottedPlotNumber = 0
class JGraph {
    constructor(graphType, divId , dataX , dataY) {

        //check for valid data
        if(dataX.length != dataY.length) {
            console.log("dataX and dataY must be the same length")
            return
        }
        
        this.divId = divId
        this.graphType = graphType 
        this.dataX = dataX
        this.dataY = dataY

        this.backgroundColor = 0
        this.canvas_width = 400
        this.canvas_height = 400
        this.isVertical = true
        this.fillColor = 255
        this.labelColor = '#00fff0'
        this.strokeColor = '#f0ff00'

        this.roundness = 0
        this.roundedCornerLeftTop = 0
        this.roundedCornerLeftBottom = 0
        this.roundedCornerRightTop = 0
        this.roundedCornerRightBottom = 0


        parentObj[plotNumber] = this
        plotNumber++
    }
    plot() {

        if (this.graphType = "bar") new p5(this.bargraph, this.divId)
        else console.log("Graph type not supported")
    }

    // set (i) background color
    set background(backgroundColor) { this.backgroundColor = backgroundColor }
    get background() { return this.backgroundColor }

    // set (ii) width and height
    set width(canvas_width) { this.canvas_width = canvas_width }
    get width() { return this.canvas_width }
    set height(canvas_height) { this.canvas_height = canvas_height }
    get height() { return this.canvas_height }

    // set and get fill color for graph
    set fillC(fillColor) { this.fillColor = fillColor }
    get fillC() { return this.fillColor }

    // set and get stroke color for graph
    set strokeC(strokeColor) { this.strokeColor = strokeColor }
    get strokeC() { return this.strokeColor }

    //set and get labelColor
    set labelC(labelColor) { this.labelColor = labelColor }
    get labelC() { return this.labelColor }

    // set and get rounded corners
    set roundedCorners(roundness) { this.roundness = roundness }
    get roundedCorners() { return this.roundness }

    //set and get rounded corner leftTop
    set roundedCornerLeftTop(roundness) { this.leftTopRoundness = roundness }
    get roundedCornerLeftTop() { return this.leftTopRoundness }

    //set and get rounded corner leftBottom
    set roundedCornerLeftBottom(roundness) { this.leftBottomRoundness = roundness }
    get roundedCornerLeftBottom() { return this.leftBottomRoundness }

    // set and get rounded corner rightTop
    set roundedCornerRightTop(roundness) { this.rightTopRoundness = roundness }
    get roundedCornerRightTop() { return this.rightTopRoundness }

    // set and get rounded corner rightBottom
    set roundedCornerRightBottom(roundness) { this.rightBottomRoundness = roundness }
    get roundedCornerRightBottom() { return this.rightBottomRoundness }

    // set and get ifVertical
    set ifVertical(isVertical) { this.isVertical = isVertical }
    get ifVertical() { return this.isVertical }

    // function for bar graph
    bargraph(p) {

        let index = plottedPlotNumber;
        plottedPlotNumber++;

        p.setup = function () {
            p.createCanvas(parentObj[index].width, parentObj[index].height) 
        }
        p.draw = function () {
            p.background(parentObj[index].background) 
            
                p.translate(p.width*0.05, p.height*0.95)
                p.scale(1,-0.9);
           
           
            p.fill(255)
            
            let barWidth = p.width / parentObj[index].dataX.length;

            // calculate bar height using min and max of dataY
            let minY = Math.min(...parentObj[index].dataY)
            let maxY = Math.max(...parentObj[index].dataY)
           
            if(parentObj[index].roundedCornerLeftTop == 0) parentObj[index].roundedCornerLeftTop = parentObj[index].roundness;
            if(parentObj[index].roundedCornerLeftBottom == 0) parentObj[index].roundedCornerLeftBottom = parentObj[index].roundness;
            if(parentObj[index].roundedCornerRightTop == 0) parentObj[index].roundedCornerRightTop = parentObj[index].roundness;
            if(parentObj[index].roundedCornerRightBottom == 0) parentObj[index].roundedCornerRightBottom = parentObj[index].roundness;

            for (let i = 0; i < parentObj[index].dataX.length; i++) {

                let barHeight = p.map(parentObj[index].dataY[i], 0, maxY, 0, p.height)

                p.fill(parentObj[index].fillC)
                p.stroke(parentObj[index].strokeC)

                p.rect( i * barWidth , 0 , barWidth/2 , barHeight , parentObj[index].roundedCornerLeftBottom , parentObj[index].roundedCornerRightBottom , parentObj[index].roundedCornerRightTop , parentObj[index].roundedCornerLeftTop)

                p.fill(parentObj[index].labelC)
                p.noStroke()
                p.push()
                p.translate( i * barWidth + barWidth/4 - 15,  barHeight + 5)
                
                p.scale(1,-1)
                p.text(parentObj[index].dataX[i], 0, 0)

                p.pop()
                p.stroke(255)

            }
            p.strokeWeight(2)
            p.line(-15, 0, p.width*0.9 , 0)
            p.line(-10, -5, -10 , p.height)
            p.strokeWeight(1)
        }
    }

}