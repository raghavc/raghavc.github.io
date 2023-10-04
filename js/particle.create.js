var particle_config = {
    particles: {
        number: {
            "value": 80,
            "density": {
            "enable": true,
            "value_area": 600
            }
        },
        "color": {
            "value": "white"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#27ae60"
            },
            "polygon": {
                "nb_sides": 9
            },
        },

        "opacity": {
            "value": 1,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3
            ,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },

          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#8e8e8e",
            "opacity": 0.4,
            "width": .5
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          },
   


    },     
    

    "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },

    retina_detect: true
}



    
    var color_pairs = 
    [
      ["#1ecbe1", "#1EE196"],
      ["#EF3310", "#EFA310"],
      ["#21DE6B", "#94DE21"],
      ["#2252DD","#22DDAD"],
      ["#98F00F", "#F0D70F"]

    ]

    selected_pair = color_pairs[Math.floor(Math.random() * color_pairs.length)]
    particle_config.particles.color.value = selected_pair
    particlesJS("particles", particle_config)
    const selected_index = [Math.round(Math.random())]

    if (selected_index != 0)
    {
      temp = selected_pair[0]
      selected_pair[0] = selected_pair[1]
      selected_pair[1] = temp
    }
    
    document.addEventListener("DOMContentLoaded", function() {
      var elements = document.querySelectorAll('a');
      var count = 0;
      [].forEach.call(elements, function(value){
        value.style.color = count % 2 == 0 ? selected_pair[0] : selected_pair[1]
        count++;
      });
   });