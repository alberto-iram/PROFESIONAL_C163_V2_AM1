AFRAME.registerComponent("wire-fence", {
    init: function () {
      //Posición inicial x
      posX = -20;
      //Posición inicial z
      posZ = 85;
  
      for (var i = 0; i < 10; i++) {
        //Crear una entidad wire-fence
        var wireFence1 = document.createElement("a-entity");
        
  
        //Establecer las posiciones x, y, z
        posX = posX + 5;
        posY = 2.5;
        posZ = posZ - 10;
  
        //Escala 
        var scale = { x: 2, y: 2, z: 2 };
  
        //Establecer el ID
        wireFence1.setAttribute("id", "wireFence1" + i);
        
        //Establecer la posición
        wireFence1.setAttribute("position", { x: posX, y: 2.5, z: -35 });
        
        //Establecer la escala
        wireFence1.setAttribute("scale", scale);
       
        //Establecer el modelo
        wireFence1.setAttribute(
          "gltf-model",
          "./models/barbed_wire_fence/scene.gltf"
        );
  
  

        //Establecer el cuerpo físico
        wireFence1.setAttribute("static-body", {});
       
        var sceneEl = document.querySelector("#scene");
        //Añadir la entidad a la escena
        sceneEl.appendChild(wireFence1);
        
  
      }
    },
  });
