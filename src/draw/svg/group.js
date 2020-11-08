// let _groupItem = (name) => {
//     return {
//         [name]: Object.keys(polygon).filter(t => t.indexOf(name) === 0)
//     }
// }

// let _groupItem = (keys, name) => {
//     return {
//         [name]: keys.filter(t => t.indexOf(name) === 0)
//     }
// }
// let _group = (props) => {
//     return props.map(t => _groupItem(t))
// }

const groupConfig = {
    group: ['axis', 'edge', 'radius', 'vertex', 'center', 'excircle', 'grid', 'polar', 'fractal', 'animation', 'transform'],
    other: 'shape'
}
const _group = (options) => {
    let keys = Object.keys(options)
    let g = []
    groupConfig.group.forEach(t => {
        let tKeys = keys.filter(key => key.indexOf(t) === 0)
        keys = keys.filter(key => key.indexOf(t) !== 0)
        g.push({
            [t]: tKeys
        })
    })
    g.unshift({
        [groupConfig.other]: keys
    })
    return g
}

const optionsConfig = {
    color: ["red", "blue", "black", "green", "yellow", "pink", "gray", "purple", 'lime'],
    shape: ['circle', 'rect', 'line', 'polygon'],
    linecap: ['butt', 'round', 'square', 'inherit'],
    linejoin: ['arcs', 'bevel', 'miter', 'miter-clip', 'round'],
    fractalType: ['midSeg', 'zoom', 'reproduce'],
    animationName: ['rotate', 'twinkle'],
    transformName: ['scale', 'translate', 'rotate', 'skew'],
    sort: ['normal', 'neighborSwap', 'intervalSort', 'misplaced', 'paritySort', 'shuffle']
}


const _options = (options) => {
    let keys = Object.keys(options)
    let opt = {}
    let regs = Object.keys(optionsConfig)
    regs.forEach(reg => {
        keys.filter(t => (new RegExp(reg, 'i')).test(t)).forEach(t => {
            opt[t] = optionsConfig[reg]
        })
    })
    return opt
}

export default {
    _group,
    _options
}