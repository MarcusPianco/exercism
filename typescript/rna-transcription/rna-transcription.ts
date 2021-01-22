const rnaKeys:any={'G':'C', 'C':'G', 'T':'A','A':'U'}


class Transcriptor {
  toRna(rNas:string) {
    return rNas.split('').map(rna=>{
      if(!rnaKeys[rna]){
        throw new Error("Invalid input DNA.")
      }
      return rnaKeys[rna];
     } ).join("")
  }
}

export default Transcriptor
