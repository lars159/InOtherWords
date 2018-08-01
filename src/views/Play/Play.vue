<template>
    <div>
        <div class="ready" v-if="status == 'ready'">
            <h1 class="title">Get ready {{player.name}}</h1>
            <p>The rules are you may not say the word only expline it and if it's to hard presss skip to get the next word</p>
        <div class="coin"> Diffrent words </div>

        <nav class="navbar  is-fixed-bottom" role="navigation" aria-label="main navigation">
            <button class="button is-link is-large is-fullwidth" v-on:click="start">Start</button>
        </nav>
        </div>

        <div class="gameon" v-if="status == 'gameon'">
            <audio src="ticks.ogg"></audio>
            <div class="coin" :class="{flip: isFlip}"> {{question.src}} </div>
            <nav class="navbar  is-fixed-bottom" role="navigation" aria-label="main navigation"> 
                <button class="button is-link is-danger is-large answer" @click="answer(false)">Skip</button>
                <button class="button is-link  is-success is-large answer" @click="answer(true)">Correct</button>
                    
            </nav>
        </div>
    
        <div class="done" v-if="status == 'done'">
            <h1 class="title">Well done</h1>
            <h2 class="title"> total correct {{totCorrect}}</h2>
            <p> You had Correct {{round.questions | wins}}  out of {{round.questions.length}}</p>

            <button class="button is-link is-large is-fullwidth" @click="nextGame()">Next team</button>

            <h2 class="title">Edit</h2>
            <ul>
                <li v-for="question in round.questions">
                    {{question.src}}  {{question.result}}

                    <div class="control">
                        <label class="radio">
                            <input type="radio" name="answer" v-bind:value="true" v-model="question.result" @click="change(question, true)">
                            Correct
                        </label>
                        <label class="radio">
                            <input type="radio" name="answer"  v-bind:value="false" v-model="question.result" @click="change(question, false)">
                            Incorrect
                        </label>
                    </div> 
                </li>
            </ul>
        </div>
    </div>

</template>
<script>

    import QuestionService from '../../services/questionService';
    import PlayerService from '../../services/playerService';
    import GameService from '../../services/gameService';


    export default{
        data(){
            return {
                status : 'ready',
                player: {},
                question : {},
                isFlip : false
            } 
        },
        created() {
            this.player = new PlayerService().next();
            this.totCorrect = 0;
        },
        filters: {
            wins: function (value) {
                return value.filter( x  => x.result ).length;
            }
        },
          methods: {
              start : function () {
                  this.status = 'gameon';
                  let self = this;
                  this.round =  {questions : []};
                  this.player.rounds.unshift(this.round);
                  this.question = new QuestionService().next();
                  this.round.questions.push(this.question);
                  this.audio = new Audio(require('./ticks.ogg'));
                  this.audio.play();
                  setTimeout(function(){
                      self.audio.pause();
                      self.audio = new Audio(require('./bling.ogg'));
                      audio.play();
                      self.status = 'done'; 
                      let allQuestions = self.player.rounds.reduce((totQ, qs) => totQ.concat(qs.questions), []);
                      self.totCorrect = allQuestions.filter((q) => q.result).length;
                      if(self.totCorrect > 20) {
                        let game = {players : new PlayerService().allPlayers(), winnerPlayer : self.player};
                        new GameService().add(game);
                        self.$router.push('score');
                      }
                  }, 40 * 1000)
              }, 
              answer : function (result){
                  this.isFlip = true;
                  let self = this;
                  
                  setTimeout(() => {
                    self.isFlip = false;
                    this.question.result = result; 
                    this.question = new QuestionService().next();
                    this.round.questions.push(this.question);
                  }, 800); 
              },
              nextGame : function() {
                  this.status = 'ready';
                  this.player = new PlayerService().next();
              },
              change : function(a, result) {
                  a.result = result;
              }
        }
    }
</script>

<style>
.answer {
    width: 49%;
}


</style>
