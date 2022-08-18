AFRAME.registerComponent('car-model', {
    schema:{
        modelRef: {type: 'string', default: './assets/car/scene.gltf'}
    },
    init: function(){
        this.el.setAttribute('gltf-model', this.data.modelRef)
        const position = {x: 0, y: 3, z: 80}
        const rotation = {x: 0, y: -100, z: 0}
        this.el.setAttribute('position', position)
        this.el.setAttribute('rotation', rotation)
        this.el.setAttribute('scale', '0.5, 0.5, 0.5')
    }
})
