AFRAME.registerComponent("bowl",{
    init:function(){
        this.throwBowl()
    },

    throwBowl:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key === 'z'){
                var bowl = document.createElement("a-entity")
                bowl.setAttribute("geometry",{
                    primitive:"sphere",
                    radius:0.5
                })
                bowl.setAttribute("material","color","black")
                var cam=document.querySelector("#camera")
                var scene = document.querySelector("#scene")
                pos=cam.getAttribute("position")
                bowl.setAttribute("position",{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                })
                var camera = document.querySelector("#camera").object3D 
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)
                bowl.setAttribute("velocity",direction.multiplyScalar(-10))
                scene.appendChild(bowl)
            }
        })
    }
})