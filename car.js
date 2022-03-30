AFRAME.registerComponent("car", {
  schema: {
    modelRef: { type: "string", default: "project151.glb" }
  },
  init: function() {
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: 0, y: 5, z: 80 };
    const rotation = { x: 0, y: -100, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  }
});
