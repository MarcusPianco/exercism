class CollatzConjecture {
  static steps(integerNumber: number) {

    let nInteger= integerNumber;
    let count=0;

    if(nInteger<=0){
      throw new Error("Only positive numbers are allowed");
    }

    do {
      if(nInteger===1){
        return 0;
      }
      if(nInteger%2===0){
        nInteger=nInteger/2;
        count+=1;

      }
      else{
        nInteger=3*nInteger+1;
        count+=1;
      }
      
    } while (nInteger!==1);
    return count;
  }

}

export default CollatzConjecture
