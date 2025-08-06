this.options = {
  root_mode: "survival",
  map_size: 20
};

this.tick = function(game) {
  if (game.step == 60){
    echo("READY");
  }
};

ping = () => {
  echo("pong");
};
