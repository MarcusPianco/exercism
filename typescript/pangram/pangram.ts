export default class Pangram{

    private sumAscIICharacters:number=2847;

    constructor(private phase:string){
        this.phase = phase;
    }

    public isPangram(){
        const transformPhaseToArray = this.phase.toLowerCase().split('');
        let sumLetters:number=0;
        const setLetters= new Set(transformPhaseToArray);
        setLetters.forEach((x )=> 
        x.charCodeAt(0) <=122 && x.charCodeAt(0) >=97 ? sumLetters+=x.charCodeAt(0):null);
        return sumLetters===this.sumAscIICharacters;
    }
}