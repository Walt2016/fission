import config from '../config'
let {
    env,
    center
} = config
let {
    width,
    height
} = env

import Polygon from '../entity/Polygon'
import UI from '../ui'
import Group from '../svg/group'
let dataModel = {
    // 全局
    o: [width / 2, height / 2],
    r: 100,
    n: 6,
    angle: 0,
    fill: false,
    color: "red",
    lineWidth: 1,
    opacity: 0.5,
    dashLine: false,
    dashArray: [5, 5],
    dashAnimation: false,
    linejoin: 'arcs',
    sort: 'normal',
    segType: 'equiangular',
    api: 'svg',



    // 半径
    radiusShow: false,
    radiusLineWidth: 1,
    radiusColor: 'red',
    radiusOpacity: 1,
    radiusDashLine: false,
    radiusDashArray: [5, 5],
    radiusDashAnimation: false,
    radiusLinecap: 'butt',
    radiusClosed: true,
    radiusBroken: false,
    rediusMarkerArrow: false,
    radiusWaveform: 'line',
    radiusRadiusRatio: 1,
    radiusController: false,
    radiusAngleOffset: 0,
    radiusOrient: true,
    radiusRecycleIndex: 0,
    radiusSplitNum: 0,


    // 边
    edgeShow: true,
    edgeLineWidth: 1,
    edgeColor: 'red',
    edgeOpacity: 1,
    edgeDashLine: false,
    edgeDashArray: [5, 5],
    edgeLinejoin: 'arcs',
    edgeDashAnimation: false,
    edgeAnimationTwinkle: false,
    edgeText: false,
    edgeTextColor: 'red',
    edgeTextFontSize: 12,
    edgeClosed: true,
    edgeBroken: false,
    edgeWaveform: 'line',
    edgeRadiusRatio: 1,
    edgeControlPoint: false,
    edgeControlLink: false,
    edgeAngleOffset: 0,
    edgeOrient: true,
    edgeRecycleIndex: 0,
    edgeSplitNum: 0,

    // edgeColorful: false,


    // 中心点
    centerShow: false,
    centerFill: true,
    centerColor: 'red',
    centerRadius: 8,
    centerShape: 'circle',
    centerOpacity: 0.5,
    centerLineWidth: 1,
    centerDashLine: false,
    centerDashArray: [5, 5],
    centerDashAnimation: false,

    // 顶点
    vertexShow: false,
    vertexFill: true,
    vertexColor: 'red',
    vertexRadius: 5,
    vertexShape: 'circle',
    vertexOpacity: 0.5,
    vertexLineWidth: 1,
    vertexDashLine: false,
    vertexDashArray: [5, 5],
    vertexDashAnimation: false,
    vertexAnimationTwinkle: false,
    vertexText: false,
    vertexTextColor: 'red',
    vertexTextFontSize: 12,
    vertexColorful: false,
    vertexColorfulOpacity: 0.5,

    // 旁切圆
    excircleShow: false,
    excircleFill: false,
    excircleLineWidth: 1,
    excircleOpacity: 0.5,
    excircleDashLine: false,
    excircleDashArray: [5, 5],
    excircleDashAnimation: false,
    excircleColor: 'red',

    // 内切圆
    incircleShow: false,
    incircleFill: false,
    incircleLineWidth: 1,
    incircleOpacity: 0.5,
    incircleDashLine: false,
    incircleDashArray: [5, 5],
    incircleDashAnimation: false,
    incircleColor: 'red',


    // 网格坐标
    gridShow: false,
    gridLineWidth: 1,
    gridOpacity: 0.5,
    gridDashLine: true,
    gridDashArray: [5, 5],
    gridDashAnimation: false,
    gridInterval: 100,
    gridColor: 'black',
    gridRotate: 0,

    // 极坐标
    polarShow: false,
    polarLineWidth: 1,
    polarOpacity: 0.5,
    polarDashLine: true,
    polarDashArray: [5, 5],
    polarDashAnimation: false,
    polarInterval: 100,
    polarColor: 'black',



    // 分形
    fractalUse: false,
    fractalType: 'midSeg',
    fractalLevel: 3,
    fractalOffset: 0.5,
    fractalTimerUse: false,
    fractalTimerDelay: 500,
    fractalColorful: false,
    fractalColorfulOpacity: 0.5,

    // 动画
    animationUse: false,
    animationName: 'rotate',
    animationDuration: 1,
    animationIterationCount: 'infinite',

    // 变形
    transformUse: false,
    transformName: 'scale',
    transformPropA: 2,
    transformPropB: 2,

    // 坐标轴
    axisXShow: false,
    axisXLineWidth: 1,
    axisXColor: 'black',
    axisXOpacity: 0.5,
    axisXDashLine: false,
    axisXDashArray: [5, 5],
    axisXDashAnimation: false,
    axisXSticks: true,
    axisXArrow: true,

    axisYShow: false,
    axisYLineWidth: 1,
    axisYColor: 'black',
    axisYOpacity: 0.5,
    axisYDashLine: false,
    axisYDashArray: [5, 5],
    axisYDashAnimation: false,
    axisYSticks: true,
    axisYArrow: true,

    // 背景
    patternUse: false,
    // patternUnits: 'objectBoundingBox',
    patternName: 'chequer',
    patternColor1: 'red',
    patternColor2: 'red',
    patternSize: 10,
    patternOffset: 0,
    patternSkewX: 0,
    patternOpacity: 1,

    // 连接线
    linkShow: false,
    linkLineWidth: 1,
    linkColor: 'black',
    linkOpacity: 0.5,
    linkDashLine: true,
    linkDashArray: [5, 5],
    linkDashAnimation: false,
    linkWaveform: 'line',
    linkRadiusRatio: 1,
    linkControlPoint: false,
    linkControlLink: false,
    linkAngleOffset: 0,
    linkOrient: true,
    linkRecycleIndex: 0,
    linkSplitNum: 0,

    // 曲线
    curveShow: false,
    curveRadiusRatio: 1,
    curveControlPoint: false,
    curveControlLink: false,
    curveAngleOffset: 0,
    curveOrient: true,
    curveRecycleIndex: 0,
    curveSplitNum: 0,
    // 波浪形
    waveShow: false,
    waveRadiusRatio: 1,
    waveControlPoint: false,
    waveControlLink: false,
    waveAngleOffset: 0,
    waveOrient: true,
    waveRecycleIndex: 0,
    waveSplitNum: 0,

    // 锯齿形
    sawtoothShow: false,
    sawtoothRadiusRatio: 1,
    sawtoothControlPoint: false,
    sawtoothControlLink: false,
    sawtoothAngleOffset: 0,
    sawtoothOrient: true,
    sawtoothRecycleIndex: 0,
    sawtoothSplitNum: 0,

    // 半圆
    semicircleShow: false,
    semicircleSweepFlag: true,
    semicircleRecycleIndex: 0,
    semicircleSplitNum: 0,

    // 椭圆弧
    ellipticalShow: false,
    ellipticalSweepFlag: true,
    ellipticalRadiusRatio: 1,
    ellipticalXAxisRotation: 0,
    ellipticalLargeArcFlag: false,
    ellipticalRecycleIndex: 0,
    ellipticalSplitNum: 0,

    // 渐变
    gradientUse: false,
    gradientColor1: 'red',
    gradientColor2: 'blue',
    gradientType: 'linearGradient',

    // 格子
    chequerUse: false,
    chequerSize: 10,
    chequerColor1: 'red',
    chequerColor2: 'green',
    chequerBorderRadius1: 1,
    chequerBorderRadius2: 1,

    // 条纹
    stripeUse: false,
    stripeSize: 10,
    stripeColor1: 'red',
    stripeColor2: 'green',
    stripeRadio: 0.2,
    stripeSkewX: 0,

    diagonalStripeUse: false,
    diagonalStripeSize: 10,
    diagonalStripeColor1: 'red',
    diagonalStripeOffset: 0


}

// debugger
// let polygon = new Polygon(dataModel, draw)
// let polygon = new Polygon(dataModel, "svg")
let polygon = new Polygon(dataModel)
let group = Group._group(polygon)
let options = Group._options(polygon)

// polygon.draw(ctx)
// polygon.drawSVG()
polygon.draw()
let timmer
let v = Math.random()
let ui = new UI.Form({
    el: "#ui-container",
    data: polygon,
    options,
    group,
    btns: [{
            text: "apply",
            name: 'submit',
            click: (e) => {
                console.log(e)
                // polygon.redrawSVG(e)
                polygon.redraw(e)
                timmer && clearTimeout(timmer)
            }
        },
        // {
        //     text: 'rotate',
        //     name: 'rotate',
        //     click: (e) => {
        //         polygon.redrawSVG(e)
        //         let edge = document.querySelector("[name='angle']")
        //         let btn = document.querySelector("[name='rotate']")
        //         timmer && clearTimeout(timmer)
        //         timmer = setTimeout(() => {
        //             edge.value = Number(edge.value) + Number(edge.getAttribute("step"))
        //             if (edge.value > 360) {
        //                 edge.value = 0
        //             }
        //             btn.click()
        //         }, 17)
        //     }
        // },
        {
            text: 'reset',
            name: 'reset'

        },
        // {
        //     text: 'move',
        //     name: 'move',
        //     click: (e) => {
        //         // debugger
        //         polygon.redrawSVG(e)
        //         let o = document.querySelector("[name='o']")
        //         let btn = document.querySelector("[name='move']")
        //         console.log(o.value)
        //         let [x, y] = o.value.split(",").map(t => Number(t))
        //         console.log(x, y)
        //         timmer && clearTimeout(timmer)
        //         timmer = setTimeout(() => {
        //             x += v
        //             y += v
        //             o.value = [x, y].map(t => +Number(t).toFixed(2))
        //             btn.click()
        //         }, 17)
        //     }

        // }
    ]
})
console.log(ui)