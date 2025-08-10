let ships=[]
let evaled=[]
let names=["Current","New","Old"]
let numbs=["0","1","2","3","4","5","6","7","8","9"]

var Fly_101 = '{"name":"Fly","level":1,"model":1,"size":1.05,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-65,-60,-50,-20,10,30,55,75,60],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,10,30,25,30,18,15,0],"height":[0,6,8,12,20,20,18,15,0],"propeller":true,"texture":[4,63,10,1,1,1,12,17]},"OI1l1":{"section_segments":12,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,0,20,30,60],"z":[0,0,0,0,0]},"width":[0,13,17,10,5],"height":[0,18,25,18,5],"propeller":false,"texture":[7,9,9,4,4]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-15,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"error":2.5},"propeller":false,"texture":[3,3,10,3]}},"wings":{"main":{"length":[60,20],"width":[100,50,40],"angle":[-10,10],"position":[0,20,10],"doubleside":true,"offset":{"x":0,"y":10,"z":5},"bump":{"position":30,"size":20},"texture":[11,63]}},"typespec":{"name":"Fly","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"shape":[1.368,1.368,1.093,0.965,0.883,0.827,0.791,0.767,0.758,0.777,0.847,0.951,1.092,1.667,1.707,1.776,1.856,1.827,1.744,1.687,1.525,1.415,1.335,1.606,1.603,1.578,1.603,1.606,1.335,1.415,1.525,1.687,1.744,1.827,1.856,1.776,1.707,1.667,1.654,0.951,0.847,0.777,0.758,0.767,0.791,0.827,0.883,0.965,1.093,1.368],"lasers":[{"x":0,"y":-1.365,"z":-0.21,"angle":0,"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"spread":0,"error":2.5,"recoil":0}],"radius":1.856}}';
ships.push(Fly_101);
var Spectator_601 = '{"name":"Spectator","level":6,"model":1,"size":0.025,"zoom":0.075,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"vertical":true,"texture":[6]}},"typespec":{"name":"Spectator","level":6,"model":1,"code":601,"specs":{"shield":{"capacity":[1e-30,1e-30],"reload":[1000,1000]},"generator":{"capacity":[1e-30,1e-30],"reload":[1,1]},"ship":{"mass":1,"speed":[200,200],"rotation":[1000,1000],"acceleration":[1000,1000]}},"shape":[0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001],"lasers":[],"radius":0.001}}';
ships.push(Spectator_601);
var A_Speedster_609 = '{"name":"A-Speedster","level":6,"model":9,"size":1.5,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":165,"speed":[90,130],"rotation":[40,70],"acceleration":[90,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-95,0,0,70,65],"z":[0,0,0,0,0,0]},"width":[0,10,40,20,20,0],"height":[0,5,30,30,15,0],"texture":[6,11,5,63,12],"propeller":true,"laser":{"damage":[38,84],"rate":1,"type":2,"speed":[150,205],"recoil":50,"number":1,"error":0}},"OI1l1":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"IIIO0":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"ll0I1":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":[4],"bump":{"position":10,"size":30}}},"typespec":{"name":"A-Speedster","level":6,"model":9,"code":609,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":165,"speed":[90,130],"rotation":[40,70],"acceleration":[90,120]}},"shape":[3,2.914,2.408,1.952,1.675,1.49,1.349,1.263,1.198,1.163,1.146,1.254,1.286,1.689,2.06,2.227,2.362,2.472,2.832,3.082,3.436,3.621,3.481,2.48,2.138,2.104,2.138,2.48,3.481,3.621,3.436,3.082,2.832,2.472,2.362,2.227,2.06,1.689,1.286,1.254,1.146,1.163,1.198,1.263,1.349,1.49,1.675,1.952,2.408,2.914],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[38,84],"rate":1,"type":2,"speed":[150,205],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.16,"y":-0.277,"z":1.35,"angle":-10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.16,"y":-0.277,"z":1.35,"angle":10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.621}}';
ships.push(A_Speedster_609);
var A_Speedster_New_610 = '{"name":"A-Speedster-New","level":6,"model":10,"size":1.6,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":175,"speed":[90,130],"rotation":[60,85],"acceleration":[90,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-95,0,0,70,65],"z":[0,0,0,0,0,0]},"width":[0,10,40,20,20,0],"height":[0,5,30,30,15,0],"texture":[6,11,5,63,12],"propeller":true,"laser":{"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"recoil":50,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"cannons":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,17,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"winglets":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":[4],"bump":{"position":10,"size":30}}},"typespec":{"name":"A-Speedster-New","level":6,"model":10,"code":610,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":175,"speed":[90,130],"rotation":[60,85],"acceleration":[90,140]}},"shape":[3.2,3.109,2.569,2.082,1.786,1.589,1.439,1.348,1.278,1.24,1.222,1.338,1.372,1.801,2.197,2.375,2.52,2.637,3.021,3.288,3.665,3.862,3.713,2.645,2.28,2.244,2.28,2.645,3.713,3.862,3.665,3.288,3.021,2.637,2.52,2.375,2.197,1.801,1.372,1.338,1.222,1.24,1.278,1.348,1.439,1.589,1.786,2.082,2.569,3.109],"lasers":[{"x":0,"y":-3.2,"z":0,"angle":0,"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.238,"y":-0.296,"z":1.44,"angle":-10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.238,"y":-0.296,"z":1.44,"angle":10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.862}}';
ships.push(A_Speedster_New_610);
var Speedster_Legacy_611 = '{"name":"Speedster Legacy","level":6,"model":11,"size":1.5,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-95,0,0,70,65],"z":[0,0,0,0,0,0]},"width":[0,10,40,20,20,0],"height":[0,5,30,30,15,0],"texture":[6,11,5,63,12],"propeller":true,"laser":{"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"recoil":50,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,15,15,10,0],"height":[0,10,15,12,0],"texture":[4]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"cannons":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"winglets":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":[4],"bump":{"position":10,"size":30}}},"typespec":{"name":"Speedster Legacy","level":6,"model":11,"code":611,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"shape":[3,2.914,2.408,1.952,1.675,1.49,1.349,1.263,1.198,1.163,1.146,1.254,1.286,1.689,2.06,2.227,2.362,2.472,2.832,3.082,3.436,3.621,3.481,2.48,2.138,2.104,2.138,2.48,3.481,3.621,3.436,3.082,2.832,2.472,2.362,2.227,2.06,1.689,1.286,1.254,1.146,1.163,1.198,1.263,1.349,1.49,1.675,1.952,2.408,2.914],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.16,"y":-0.277,"z":1.35,"angle":-10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.16,"y":-0.277,"z":1.35,"angle":10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.621}}';
ships.push(Speedster_Legacy_611);
var Spectator_623 = '{"name":"Spectator","level":6,"model":23,"size":0.8,"zoom":0.8,"specs":{"shield":{"capacity":[69,69],"reload":[400,400]},"generator":{"capacity":[420,420],"reload":[100,100]},"ship":{"mass":70,"speed":[200,200],"rotation":[200,200],"acceleration":[200,200]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,20,30,40,20,20,40,40,40,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"texture":[12,5,63,4,4,63,4,4,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":15},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,13,0],"height":[0,10,15,5,0],"texture":[9]},"laser":{"section_segments":10,"offset":{"x":70,"y":10,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,5,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[3,4,10,3],"propeller":true}},"wings":{"top":{"offset":{"x":0,"y":50,"z":5},"length":[30],"width":[70,30],"angle":[90],"position":[0,50],"texture":[4],"bump":{"position":10,"size":15}},"side_joins":{"offset":{"x":0,"y":30,"z":-3},"length":[100],"width":[100,40],"angle":[0],"position":[-50,50],"texture":[4],"bump":{"position":10,"size":10}}},"typespec":{"name":"Spectator","level":6,"model":23,"code":623,"specs":{"shield":{"capacity":[69,69],"reload":[400,400]},"generator":{"capacity":[420,420],"reload":[100,100]},"ship":{"mass":70,"speed":[200,200],"rotation":[200,200],"acceleration":[200,200]}},"shape":[1.6,1.582,1.552,1.313,1.138,1.009,0.919,0.75,0.688,0.708,0.733,1.157,1.297,1.359,1.392,1.431,1.696,1.975,2.192,2.258,1.661,1.429,1.58,1.628,1.705,1.835,1.705,1.628,1.58,1.429,1.661,2.258,2.192,1.975,1.696,1.431,1.392,1.359,1.297,1.157,0.733,0.708,0.688,0.75,0.919,1.009,1.138,1.313,1.552,1.582],"lasers":[],"radius":2.258}}';
ships.push(Spectator_623);
let p1name=""
let p2name=""

let VOCABULARY  = [
    {text: "You",       icon: "\u004e", key: "O"},
    {text: "Me",        icon: "\u004f", key: "E"},
    {text: "Wait",      icon: "\u0048", key: "T"},
    {text: "Yes",       icon: "\u004c", key: "Y"},
    // 2
    {text: "No",        icon: "\u004d", key: "N"},
    {text: "Hello",     icon: "\u0045", key: "H"},
    {text: "Sorry",     icon: "\u00a1", key: "S"},
    {text: "My ship",   icon: "\u0061", key: "M"},
    // 3
    {text: "Attack",    icon: "\u0049", key: "A"},
    {text: "Follow Me", icon: "\u0050", key: "F"},
    {text: "Good Game", icon: "\u00a3", key: "G"},
    {text: "Leave",     icon: "\u00b3", key: "L"},
    // 4
    {text: "Stats",     icon: "\u0078", key: "K"},
    {text: "Hmm",       icon: "\u004b", key: "Q"},
    {text: "Lucky",     icon: "\u2618", key: "U"},
    {text: "Ping",      icon: "\u231b", key: "P"},
    // 5
    {text: "Discord",   icon: "\u007b", key: "D"},
    {text: "Idiot",     icon: "\u0079", key: "I"},
    {text: "Lag",       icon: "\u0069", key: "J"},
    {text: "Spectate",  icon: "\u0059", key: "W"}
  ];
let map = ""
for (let i=0; i<79; i++) {
  map=map+"                                                                                \n";
}
map=map+"                                                                                ";

this.options = {
  root_mode: "",
  map_name: "Ranked Dueling V0.1",
  custom_map: map,
  vocabulary: VOCABULARY,
  starting_ship:800,
  ships: ships,
  reset_tree:true,
  map_size: 120
};

initDuel = (p1in,p2in) => {
  startDuel(p1in,p2in);
};

function startDuel(p1input, p2input) {
  let activeDuelers=0;
  p1name=p1input;
  p2name=p2input;
  for (let i=0; i<game.ships.length; i++) {
    if (game.ships[i].name == p1name) {
      game.ships[i].set({x:100,y:0,ship:611});
      activeDuelers+=1;
    }
    else if (game.ships[i].name == p2name) {
      game.ships[i].set({x:-100,y:0,ship:611});
      activeDuelers+=1;
    }
    else {
      game.ships[i].set({x:0,y:0,ship:623});
    }
  }
  if (activeDuelers==2) {
    echo("duel started")
  }
}

var center = {
  id: "center",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/Eman-Bman/starblast-ranked-dueling/refs/heads/main/RDPNG2.png"
};

var spec_button = {
  id: "spec",
  position: [76, 1, 3.5, 5.5],
  clickable: true,
  shortcut: "1",
  visible: true,
  components: [
    {type: "box", position: [0, 25, 100, 75], fill: "hsla(42, 89%, 57%, 0.25)"},
    {type: "round", position: [17.5, 30, 65, 65], fill: "hsla(0,0%,0%,0.5)"},
    {type: "text", position: [0, 25, 100, 75], align: "center", value: "\u{1d7cf}", color: "hsla(42, 89%, 57%, 1)"},
    {type: "box", position: [0, 0, 100, 25], fill: "hsla(42, 89%, 57%, 1)"},
    {type: "text", position: [0, 1, 100, 23], align: "center", value: "SPECTATE", color: "hsla(0, 0%, 0%, 1.00)"},
  ]
};

var switch_button = {
  id: "switch",
  position: [72, 1, 3.5, 5.5],
  clickable: true,
  shortcut: "2",
  visible: true,
  components: [
    {type: "box", position: [0, 25, 100, 75], fill: "hsla(42, 89%, 57%, 0.25)"},
    {type: "round", position: [17.5, 30, 65, 65], fill: "hsla(0,0%,0%,0.5)"},
    {type: "text", position: [0, 25, 100, 75], align: "center", value: "\u{1d7d0}", color: "hsla(42, 89%, 57%, 1)"},
    {type: "box", position: [0, 0, 100, 25], fill: "hsla(42, 89%, 57%, 1)"},
    {type: "text", position: [0, 1, 100, 23], align: "center", value: "SWITCH", color: "hsla(0, 0%, 0%, 1.00)"},
  ]
};

this.tick = function(game) {
  if (game.step == 60) {
    customBg();
    echo("REQUEST");
  }
  if (game.step%30 == 2) {
    updateScoreboard(evaled)
  }
  if (game.step%5 == 2) {
    for (let i=0; i<game.ships.length; i++) {
      if (game.ships[i].crystals>=720) {
        game.ships[i].set({crystals:719});
      }
    }
  }
  if (game.step%60===0)
  {
    for (var i=0;i<game.ships.length;i++)
    {
      var ship = game.ships[i];
      if (ship.custom.new === false) {
        if (!ship.custom.spec_button_installed)
        {
          ship.custom.spec_button_installed = true;
          ship.setUIComponent(spec_button);
        }
        if (!ship.custom.switch_button_installed)
        {
          ship.custom.switch_button_installed =true;
          ship.setUIComponent(switch_button);
        }
        if (ship.shield >= 100||ship.type==601) {
          sendUI(game.ships[i], {
          id: "shiptype",
          position: [69.75,0,16,16],
          visible: true,
          components: [
          {type: "text",position:[0,0,100,50],value:(""),color:"#cde"},
          ]
          });
        } else {
          sendUI(game.ships[i], {
          id: "shiptype",
          position: [69.75,0,16,16],
          visible: true,
          components: [
          {type: "text",position:[0,0,100,50],value:("\u274C"),color:"#cde"},
          ]
          });
        }
      }
    }
  }
};

customBack = () => {
  customBg();
};

function customBg() {
  game.removeObject();
  
  game.setObject({
  id: "center",
  type: center,
  position: {x:0,y:0,z:0},
  rotation: {x:3.141592,y:0,z:0},
  scale: {x:120,y:120,z:1}
  }) ;
}

eloRecieve = (jsontext) => {
  try {
    evaled = JSON.parse(jsontext);
    echo(evaled);
  } catch (e) {
    console.error("Invalid JSON:", e);
    evaled = {};
  }
}

function showKeys(ship) {
  for (let i = 1; i<10; i++) {
    sendUI(ship, {
    id: `${i}`,
    position: [35+((i-1)%3)*10,35+Math.floor((i-1)/3)*10,10,10],
    clickable: true,
    visible: true,
    components: [
    { type:"box",position:[0,0,100,100],fill:`hsla(40, 100%, 50%, 0.5)`,stroke:"#CDE",width:2},
    { type: "text",position: [0,25,100,50],color: "#FFF",value: `${i}`},
    ]
    });
  }
  sendUI(ship, {
  id: `0`,
  position: [45,65,10,10],
  clickable: true,
  visible: true,
  components: [
  { type:"box",position:[0,0,100,100],fill:`hsla(40, 100%, 50%, 0.5)`,stroke:"#CDE",width:2},
  { type: "text",position: [0,25,100,50],color: "#FFF",value: `0`},
  ]
  });
  sendUI(ship, {
  id: `back`,
  position: [35,65,10,10],
  clickable: true,
  visible: true,
  components: [
  { type:"box",position:[0,0,100,100],fill:`hsla(40, 100%, 50%, 0.5)`,stroke:"#CDE",width:2},
  { type: "text",position: [0,25,100,50],color: "#FFF",value: `BACK`},
  ]
  });
  sendUI(ship, {
  id: `submit`,
  position: [55,65,10,10],
  clickable: true,
  visible: true,
  components: [
  { type:"box",position:[0,0,100,100],fill:`hsla(40, 100%, 50%, 0.5)`,stroke:"#CDE",width:2},
  { type: "text",position: [0,25,100,50],color: "#FFF",value: `SUBMIT`},
  ]
  });
  sendUI(ship, {
  id: `passtxt`,
  position: [45,20,10,10],
  clickable: true,
  visible: true,
  components: [
  { type: "text",position: [0,25,100,50],color: "#FFF",value: `ENTER PASSCODE:`},
  ]
  });
}

function hideKeys(ship) {
  const uis=["0","1","2","3","4","5","6","7","8","9","submit","back","passtxt","passent"]
  for (let i=0; i<uis.length; i++) {
    echo(uis[i])
    sendUI(ship, {
    id: `${uis[i]}`,
    position: [1,1,1,1],
    clickable: false,
    visible: false,
    components: [
    { type: "text",position: [0,25,100,50],color: "#FFF",value: ``},
    ]
    });
  }
  ship.custom.new=false
}

function numRec(ship,num) {
  if(!ship.custom.pass) {
    ship.custom.pass=""
  }
  if (num=="-1") {
    ship.custom.pass=ship.custom.pass.slice(0, -1)
  } else {
    ship.custom.pass=ship.custom.pass+`${num}`
  }
  if ((ship.custom.pass).length>4){
    ship.custom.pass=ship.custom.pass.slice(0, -1)
  } else {
    sendUI(ship, {
    id: `passent`,
    position: [40,23,20,10],
    clickable: true,
    visible: true,
    components: [
    { type: "text",position: [0,25,100,100],color: "#FFF",value: `${ship.custom.pass}`},
    ]
    });
  }
}

function submit(ship) {
  const data=[[0,0,0,0,0,6235]]
  for (let i=0; i<data.length; i++) {
    if (data[i][5]==Number(ship.custom.pass)) {
      echo("passed")
      hideKeys(ship)
    }
  }
}

function convertJsonToArray(jsonText) {
  try {
    const data = JSON.parse(jsonText);
    const result = [];

    for (const userId in data) {
      const { globalname, gamename, kills, deaths, elo, pass } = data[userId];
      result.push([userId, globalname, gamename, kills, deaths, elo, pass]);
    }

    return result;
  } catch (e) {
    console.error("Invalid JSON:", e);
    return [];
  }
}

function specFunc(ship) {
  if (ship.type == 601) {
    ship.set({type:611, shield: 999, crystals:720, stats: 66666666})
  } else {
    if (ship.shield >= 100) {
      ship.set({type:601, stats: 66666666, crystals:0})
    }
  }
}

function switchFunc(ship) {
  if (ship.type != 611 && ship.type != 601) {
    ship.set({type: ship.type+1, stats: 66666666})
  } else if (ship.type == 611){
    ship.set({type: 609})
  }
}

var sendUI = function(ship, UI) {
  if (ship !== null && typeof ship.setUIComponent == "function") {
    if (UI.visible || UI.visible === null) ship.setUIComponent(UI);
    else ship.setUIComponent({id: UI.id, position: [0,0,0,0], visible: false});
  }
};

let _scoreboard_defaults = {
    components: [
        { type: "box", position: [0, 0, 100, 8], fill: "hsla(0, 100%, 50%, 0.25)" },
        { type: "box", position: [62, 0, 7, 8], fill: "hsla(0, 100%, 50%, 1)" },
        { type: "box", position: [70, 0, 7, 8], fill: "hsla(0, 100%, 50%, 1)" },
        { type: "box", position: [78, 0, 22, 8], fill: "hsla(0, 100%, 50%, 1)" },
        { type: "text", position: [2, 1, 98, 6], value: "𝗣𝗹𝗮𝘆𝗲𝗿𝘀", color: "hsla(0, 100%, 50%, 1)", align: "left" },
        { type: "text", position: [62, 0, 7, 8], value: "𝗞", color: "hsla(0, 0%, 0%, 1.00)", align: "center" },
        { type: "text", position: [70, 0, 7, 8], value: "𝗗", color: "hsla(0, 0%, 0%, 1.00)", align: "center" },
        { type: "text", position: [78, 0.5, 22, 7], value: "𝗘𝗟𝗢", color: "hsla(0, 0%, 0%, 1.00)", align: "center" },
    ]
}

const updateScoreboard = (data) => {
  if (game.ships.length > 0) {
    // data is now an object: { userId: { globalname, gamename, kills, deaths, elo, pass }, ... }
    let players = [];

    for (let i = 0; i < game.ships.length; i++) {
      const ship = game.ships[i];
      const userData = data[ship.name]; // ship.name should match userId in your JSON

      if (userData) {
        // Use userData directly
        players.push([
          ship.name, // userId
          userData.globalname,
          userData.gamename,
          userData.kills,
          userData.deaths,
          userData.elo
        ]);
      } else {
        // Default values for users not in the JSON
        players.push([
          ship.name,
          ship.name,
          ship.name,
          0,
          0,
          "/join"
        ]);
      }
    }

    // Sort by elo (numerically), but push non-number elo ("/join") to the bottom
    players.sort((a, b) => {
      const eloA = typeof a[5] === "number" ? a[5] : -Infinity;
      const eloB = typeof b[5] === "number" ? b[5] : -Infinity;
      return eloB - eloA;
    });

    let playerComponents = players.map((item, index) => {
      let Y_OFFSET = (index + 1) * 9;
      let elo = item[5];
      let kills = item[3];
      let deaths = item[4];
      let id = item[2];

      return [
        { type: "box", position: [0, Y_OFFSET, 100, 8], fill: "hsla(0, 100%, 50%, 0.065)" },
        { type: "box", position: [62, Y_OFFSET, 7, 8], fill: "hsla(0, 100%, 50%, 0.1)" },
        { type: "box", position: [70, Y_OFFSET, 7, 8], fill: "hsla(0, 100%, 50%, 0.1)" },
        { type: "box", position: [78, Y_OFFSET, 22, 8], fill: "hsla(0, 100%, 50%, 0.1)" },
        { type: "text", position: [2, Y_OFFSET + 1, 55, 6], value: id, color: "hsla(0, 0%, 100%, 1)", align: "left" },
        { type: "text", position: [62, Y_OFFSET, 7, 8], value: kills, color: "hsla(0, 0%, 100%, 1)", align: "center" },
        { type: "text", position: [70, Y_OFFSET, 7, 8], value: deaths, color: "hsla(0, 0%, 100%, 1)", align: "center" },
        { type: "text", position: [78, Y_OFFSET + 1, 22, 6], value: elo, color: "hsla(0, 0%, 100%, 1)", align: "center" },
      ];
    });

    let outp = playerComponents.flat();

    game.setUIComponent({
      id: "scoreboard",
      clickable: false,
      visible: true,
      components: [
        ..._scoreboard_defaults.components,
        ...outp
      ]
    });
  } else {
    game.setUIComponent({
      id: "scoreboard",
      clickable: false,
      visible: true,
      components: [
        ..._scoreboard_defaults.components,
      ]
    });
  }
};


this.event = function(event,game) {
  let ship = event.ship;
  let killer = event.killer;
  let ast = event.asteroid;
  let component = event.id;
  switch (event.name) {
    case "ship_spawned":
      if (ship.custom.new !== false) {
        ship.custom.new = true
        showKeys(ship)
      }
      ship.set({x:0,y:0,type:601, stats: 66666666});
      break;
    case "ship_destroyed":
      echo(`DUEL: ${killer.name},${ship.name}`);
      break;
    case "ui_component_clicked":
      if (component == "spec") {
        specFunc(ship)
      } else if (component == "switch") {
        switchFunc(ship)
      } else if (numbs.includes(component)){
        numRec(ship,component)
      } else if (component == "back") {
        numRec(ship,"-1")
      } else if (component == "submit") {
        submit(ship)
      }
      break;
  }
};
