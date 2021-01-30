interface QueensPosition{
    black: [number, number]; white: [number, number] 
}

export default class QueenAttack{


     public white: [number,number];
     public black: [number,number];
    constructor(queensPositions: QueensPosition){
        this.white=queensPositions.white;
        this.black=queensPositions.black;
        this.checkSamePosition(queensPositions);
    }
    private checkSamePosition(queensPositions: QueensPosition){
        if(queensPositions.white[0]===queensPositions.black[0]&&queensPositions.black[1]===queensPositions.white[1]){
            throw new Error("Queens cannot share the same space");
        }
    }
 
    public toString(): string{
        let arrayChess:Array<any> =[]
        for (let index = 0; index < 8; index++) {
            let arrTemp =[]
            for (let indexY = 0; indexY < 8; indexY++) {
                arrTemp.push("_")
            }   
            arrayChess.push(arrTemp);
        }
        arrayChess[this.white[0]][this.white[1]]='W';
        arrayChess[this.black[0]][this.black[1]]='B';
        return arrayChess.reduce((initial,item)=>{
            initial+=item.join(' ')+'\n';
            return initial;
        },'');

    }

    public canAttack(): boolean{
         return this.white[0]===this.black[0]||this.white[1]===this.black[1] ||Math.abs(this.white[0]-this.black[0])===Math.abs(this.white[1]-this.black[1])
    }



}