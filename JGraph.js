/**  written in javascript and uses P5JS **/
var parentObj = []
let plotNumber = 0
var plottedPlotNumber = 0
class JGraph {
    constructor(graphType, divId) {
        this.graphType = graphType
        this.divId = divId
        this.backgroundColor =  0
        parentObj[plotNumber] = this
        plotNumber++
    }
    plot() {
        new p5(this.bargraph, this.divId)
        
    }
    set background (backgroundColor) {
        this.backgroundColor = backgroundColor
    }
    get background() {
        return this.backgroundColor
    }

    bargraph (p) {
    p.setup = function () {
        p.createCanvas(400, 400)
        p.background(parentObj[plottedPlotNumber].background)
        console.log(parentObj[plottedPlotNumber].background)
        plottedPlotNumber++;        
    }
    p.draw = function () {
        
        p.rect(0, 0, p.width/2, p.height/2)
    }
}
}

bar = new JGraph('bar','JGraph')
bar.background = "#ffff00"
bar.plot()
bar2 = new JGraph('bar','JGraph2')
bar2.plot()