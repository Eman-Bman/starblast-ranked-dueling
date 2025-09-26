let teamNames = ["EOT","OP","SYN","LOS"];
let teamHues = [];
const keyNames=["1","2","3","4","5","6","7","8","9","BACK","0","SEND"];
for (let i=0; i<teamNames.length; i++) {
  teamHues.push(360/teamNames.length*i);
}
let teamcodes = ["62359680",-1];
let code = 0;
for (let i = 0; i<4; i++) {
  for (let j = 0; j<32; j++) {
    code = 0;
    while (teamcodes.includes(code) || String(code).length != 8) {
      code = Math.floor(Math.random()*100000000);
    }
    teamcodes.push(String(code));
    teamcodes.push(i);
  }
}
echo("CODES GENERATED");
echo(teamcodes);
const numberUni = ["\u{1d7ce}","\u{1d7cf}","\u{1d7d0}","\u{1d7d1}","\u{1d7d2}","\u{1d7d3}"];
this.options = {
  root_mode: "team",
  map_size: 80,
  soundtrack: "procedurality.mp3",
  max_players: 64,
  crystal_value: 2,
  lives: 4,
  maxtierlives: 0,
  friendly_colors: 4,
  hues: teamHues,
  map_name: "Protected Scrim V1",
  speed_mod: 1.2,
  release_crystal: true,
  healing_enabled: true,
  healing_ratio: 0.5
};

var sendUI = function (ship, UI) {
  if (ship !== null && typeof ship.setUIComponent == "function") {
    if (UI.visible || UI.visible === null) ship.setUIComponent(UI);
    else ship.setUIComponent({ id: UI.id, position: [0, 0, 0, 0], visible: false });
  }
};

function generateNew(teamNum) {
  let code = 0;
  while (teamcodes.includes(code) || String(code).length != 8) {
    code = Math.floor(Math.random()*100000000);
  }
  echo(code);
  teamcodes[teamcodes.length]=code;
  teamcodes[teamcodes.length]=teamNum;
}

function listCodes(teamNum) {
  for(let i=0; i<teamcodes.length; i++) {
    if (i%2===0) {
      if (teamcodes[i+1] == teamNum) {
        echo(teamcodes[i])
        echo(teamNum);
      }
    }
  }
}

function admin(ship) {
  for (let i=0; i<teamNames.length; i++) {
    sendUI(ship, {
      id: `passLog${i}`,
      position: [76-(teamNames.length*4)+i*4, 1, 3.5, 5.5],
      clickable: true,
      visible: true,
      components: [
        { type: "box", position: [0, 25, 100, 75], fill: `hsla(${teamHues[i]}, 89%, 57%, 0.25)` },
        { type: "round", position: [17.5, 30, 65, 65], fill: "hsla(0,0%,0%,0.5)" },
        { type: "text", position: [0, 25, 100, 75], align: "center", value: numberUni[i], color: `hsla(${teamHues[i]}, 89%, 57%, 1)` },
        { type: "box", position: [0, 0, 100, 25], fill: `hsla(${teamHues[i]}, 89%, 57%, 1)` },
        { type: "text", position: [0, 1, 100, 23], align: "center", value: "LogPasscodes", color: "hsla(0, 0%, 0%, 1.00)" },
      ]
    });
    sendUI(ship, {
      id: `genNew${i}`,
      position: [76-(teamNames.length*8)+i*4, 1, 3.5, 5.5],
      clickable: true,
      visible: true,
      components: [
        { type: "box", position: [0, 25, 100, 75], fill: `hsla(${teamHues[i]}, 89%, 57%, 0.25)` },
        { type: "round", position: [17.5, 30, 65, 65], fill: "hsla(0,0%,0%,0.5)" },
        { type: "text", position: [0, 25, 100, 75], align: "center", value: numberUni[i], color: `hsla(${teamHues[i]}, 89%, 57%, 1)` },
        { type: "box", position: [0, 0, 100, 25], fill: `hsla(${teamHues[i]}, 89%, 57%, 1)` },
        { type: "text", position: [0, 1, 100, 23], align: "center", value: "GenerateNew", color: "hsla(0, 0%, 0%, 1.00)" },
      ]
    });
  }
}

function hideKeys(ship) {
  keys = ["1","2","3","4","5","6","7","8","9","BACK","0","SEND","passent","passdesc"]
  for (let i=0; i<keys.length; i++) {
    sendUI(ship, {
      id: `${keys[i]}`,
      position: [1,1,1,1],
      clickable: false,
      visible: false,
      components: [
        { type: "text", position: [0, 25, 100, 50], color: "#FFF", value: `` },
      ]
    });
  }
}

function showKeys(ship) {
  for (let i=0; i<keyNames.length; i++) {
    sendUI(ship, {
      id: `${keyNames[i]}`,
      shortcut: `${keyNames[i]}`,
      position: [35 + ((i) % 3) * 10, 35 + Math.floor((i) / 3) * 10, 10, 10],
      clickable: true,
      visible: true,
      components: [
        { type: "box", position: [0, 0, 100, 100], fill: `hsla(40, 100%, 50%, 0.5)`, stroke: "#CDE", width: 2 },
        { type: "text", position: [0, 25, 100, 50], color: "#FFF", value: `${keyNames[i]}` },
      ]
    });
  }
  sendUI(ship, {
    id: `passdesc`,
    position: [10, 83, 80, 10],
    clickable: false,
    visible: true,
    components: [
      { type: "text", position: [0, 25, 100, 100], color: "#FFF", value: `ENTER THE 8-DIGIT CODE PROVIDED TO YOU BY YOUR CLAN LEADER` },
    ]
  });
}

function bigTxt(ship,txt) {
    sendUI(ship, {
    id: `bigtxt`,
    position: [10, 13, 80, 10],
    clickable: false,
    visible: true,
    components: [
      { type: "text", position: [0, 0, 100, 100], color: "#FFF", value: txt },
    ]
  });
}

function keyRec(ship,component) {
  if (component=="BACK") {
    ship.custom.pass = ship.custom.pass.slice(0, -1);
    sendUI(ship, {
      id: `passent`,
      position: [40, 23, 20, 10],
      clickable: true,
      visible: true,
      components: [
        { type: "text", position: [0, 25, 100, 100], color: "#FFF", value: `${ship.custom.pass}` },
      ]
    });
  } else if (component=="SEND") {
    if (ship.custom.pass.length == 8) {
      if (teamcodes.includes(ship.custom.pass)) {
        if (teamcodes[teamcodes.indexOf(ship.custom.pass)+1]!=ship.team && teamcodes[teamcodes.indexOf(ship.custom.pass)+1]!="-1") {
          bigTxt(ship, `You are on team ${ship.team+1}. Rejoin on team ${teamcodes[teamcodes.indexOf(ship.custom.pass)+1]+1}.`);
        } else {
          bigTxt(ship, "");
          hideKeys(ship);
          ship.custom.joined = true;
          ship.set({collider: true, kill:true});
          if (teamcodes[teamcodes.indexOf(ship.custom.pass)+1]=="-1") {
            admin(ship)
          }
        }
      } else {
        bigTxt(ship, `This is not a vaild passcode.`);
      }
    } else {
      bigTxt(ship, `Passcodes are 8 digits long.`);
    }
  } else {
    if (!ship.custom.pass) {
      ship.custom.pass = "";
    }
    if (ship.custom.pass.length != 8) {
      ship.custom.pass = ship.custom.pass+component;
      sendUI(ship, {
        id: `passent`,
        position: [40, 23, 20, 10],
        clickable: true,
        visible: true,
        components: [
          { type: "text", position: [0, 25, 100, 100], color: "#FFF", value: `${ship.custom.pass}` },
        ]
      });
    }
  }
}

this.tick = function(game) {
  if (game.step == 60) {

  }
  if (game.step%30==1) {
    for (let ship of game.ships) {
      if (ship.custom.joined !== true) {
        ship.set({x:0,y:0, collider:false});
        showKeys(ship);
      }
    }
  }
};

this.event = function(event,game) {
  let ship = event.ship;
  let component = event.id;
  switch (event.name) {
    case "ui_component_clicked":
      if (component.includes("passLog")) {
        listCodes(component.slice(-1));
      }
      else if (component.includes("genNew")) {
        generateNew(component.slice(-1));
      }
      else if (keyNames.includes(component)) {
        keyRec(ship,component);
      }
      break;
  }
};
