<template>
    <div>
        <h1 class="title">Team {{player.name}} won!</h1>
        <ul>
            <li><router-link class="button is-link is-large is-fullwidth" to="/play">Rematch</router-link></li>
            <li><router-link class="button is-link is-large is-fullwidth" to="/">Home</router-link></li>
        </ul>
    </div>
</template>
<script>

    import GameService from '../../services/gameService';

    export default{
        data(){
            return {
                user: 'asd'
            }
        },
        created() {
            let game = new GameService().getAll()[0];
            this.player = game.winnerPlayer;

        }
    }
</script>

<style>
 li {
     margin-top: 30px; 
 }
</style>
