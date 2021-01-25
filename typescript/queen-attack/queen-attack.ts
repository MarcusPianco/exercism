interface QueensPosition{
    black: [number, number]; white: [number, number] 
}

export default class QueenAttack{

    private queensPositions: QueensPosition;
    private _white: [number,number];
    private _black: [number,number];
    constructor(queensPositions: QueensPosition){
        this.queensPositions=queensPositions;
        this._white=queensPositions.white;
        this._black=queensPositions.black;
        this.checkSamePosition(queensPositions);
    }
    private checkSamePosition(queensPositions: QueensPosition){
        if(queensPositions.black[0]===queensPositions.black[0]&&queensPositions.black[1]===queensPositions.black[1]){
            throw new Error("Queens cannot share the same space");
        }
    }
    get white():[number,number]{
        return this.white;
    }
    get black():[number,number]{
        return this.black;
    }

    public toString(): string{
        return ''
    }

    public canAttack(): boolean{
        return true;
    }



}