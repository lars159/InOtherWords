<template>
    <div>
        <h1 class="title">Create Teams</h1>
        <ul class="menu-list">
            <li v-for="player in players" v-bind:key="player.name"> <span class="is-size-4">{{player.name}} <font-awesome-icon icon="minus" /> </span> </li> 
        </ul> 
        <button class="button is-link is-large is-fullwidth" v-on:click="add">Add player</button>

        <nav class="navbar  is-fixed-bottom" role="navigation" aria-label="main navigation">
            <button class="button is-link is-large is-fullwidth" v-on:click="start" :disabled="this.players.length <= 1">Start</button>
        </nav>
    </div>
</template>
<script>
    import PlayerService from '../../services/playerService';

    export default{
        data(){
            return {
                players: []
            }
        },
        created() {
            new PlayerService().reset();
        },
        methods: {
            add: function (event) {
                let name = prompt("Please enter your name", "Player " + (this.players.length + 1));
                this.players = new PlayerService().add(name); 
            },
            start: function() {
                this.$router.push('play')
            }
        }
    }
</script>

<style scoped>
li{
    text-align: center;
}
</style>
