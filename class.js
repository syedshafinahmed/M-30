class Player {
    constructor(name){
        this.name = name;
        this.age = 24;
        this.location = "Bangladesh";
        console.log("constructor", name);
    }
    goal(){
        console.log("score a goal");
    }
    getTeamName(){
        return 'Barca'
    }
}
const player1 = new Player('Shafin')
const player2 = new Player('Ahmed')
console.log(player1);
// player1.goal()
// console.log(player1);