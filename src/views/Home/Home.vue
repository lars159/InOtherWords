<template>
    <div> 
        <img  src="../../assets/coin.png"  :class="{flipImg: isFlip}"> 

        <ul>
            <li><button @click="play" class="button is-link is-large is-fullwidth" v-bind:class="flip" to="/setup">Play</button></li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                user: 'asd',
                isFlip: false
            }
        },
        created() {
            this.flip = "";
        
        },
        methods : {
            play : function (){ 
                let self = this;
                this.isFlip = true;
                setTimeout(function(){
                   self.$router.push("setup");
                }, 800);
            }
        }
    }
</script>
<style scoped>
h1{
    text-align: center;
}

img {
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto; 
    margin-bottom: 30px; 
    transition: 0.8s ;
}

.flipImg {
    transform: rotateY(90deg);
    
}

</style>