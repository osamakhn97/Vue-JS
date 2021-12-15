const getAttackValue = (max,min)=>{
return Math.floor(Math.random()*(max-min)+min) // gives the value beetween max and min
}
const app = Vue.createApp({
    data(){
        return {
            playerHealth : 100,
            monsterHealth : 100,
            currentRound : 0,
            winner: null,
            logs:[],
            
        }

    },
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                this.winner = "draw";
            }
            else if(value<=0){
                this.winner = "monster"
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = "draw"
            }
            else if(value<=0){
                this.winner = "player"
            }
        }
    },
    methods:{

        attackMonster(){
           const attack = getAttackValue(12,5);
           this.monsterHealth -= attack;
           
           this.currentRound++;
           this.battleLog('Player','attack',attack);
           this.attackPlayer();
        },
        attackPlayer(){
            const attack = getAttackValue(15,8);
            this.playerHealth -= attack;
            this.battleLog('Monster','attack',attack);
        },
        strongAttackMonster(){
            const attack = getAttackValue(22,12);
            this.monsterHealth -= attack;
            this.battleLog('Player','special-attack',attack);
            this.attackPlayer();
            this.currentRound++

        },
        heal(){
            
            const healValue = getAttackValue(20,6)
            if(this.playerHealth+healValue  > 100  ){
                this.playerHealth = 100
            }
            else{
                this.playerHealth += healValue;
                this.currentRound++;
            }
            this.battleLog('Player','heal',healValue);
            this.attackPlayer();
        },
        reset(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logs = []
        },
        surrender(){
            this.winner = 'monster'
        },
        battleLog(who,what,val){

            this.logs.push({
                who:who,
                what:what,
                val:val

            })

        },
      



    },
    computed:{
        playerHealthBar(){
            if(this.playerHealth<0){
                return {width : `0%`}
            }
            return {
                width:`${this.playerHealth}%`
            }
        },
        monsterHealthBar(){
            if(this.monsterHealth<0){
                return {width : `0%`}
            }
            return {
                width:`${this.monsterHealth}%`
            }
        },
        disableAttack(){
            return this.currentRound % 3 !== 0
        }
    }
})

app.mount('#game');