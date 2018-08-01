window.playerIndex = 0;
window.players = [];

export default class QuestionsService {
  add(game){
    let games = JSON.parse(localStorage.getItem("games") || '[]');
    games.unshift(game);
    localStorage.setItem("games", JSON.stringify(games));
  }

  getAll() { 
    return JSON.parse(localStorage.getItem("games") || '[]');
  }
}
