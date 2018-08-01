window.playerIndex = 0;
window.players = [];

export default class QuestionsService {
  add(name){
    window.players.push({name : name, rounds : [ ]});
    return window.players;    
  }

  next() { 
    if(playerIndex >= window.players.length)
      playerIndex = 0;
    let p = window.players[playerIndex]; 
    playerIndex++;
    return p;
  }

  allPlayers(){
    return window.players;
  }

  reset(){
    window.playerIndex = 0;
    window.players = []; 
  }
}
