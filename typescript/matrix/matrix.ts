export default class Matrix {

  private matrix: string;
  private matrixInverted: Array<string>[];
  constructor(matrix: string) {
    this.matrix=matrix;
    this.matrixInverted=this.transformMatrixLine()
  }

  get columns(){
    return this.getRow()
  }
   get rows(){
    return this.getColumn()
  }
  private getColumn(){
    const arrayTemp=[]
    for (let i in this.matrixInverted){
      const columnElements =this.matrixInverted.map((_,iteratorIndex,arr)=>arr[iteratorIndex][i])
      const convertInNumbers=columnElements.map((element)=>element&& parseInt(element))
      arrayTemp.push(convertInNumbers);
    }
    return arrayTemp;
  }
  
  private getRow(){
    const arrayTemp=[]
    for (let elementArray of this.matrixInverted){
      const convertInNumbers=elementArray.map((element)=>parseInt(element))
      arrayTemp.push(convertInNumbers);
    }
    return arrayTemp;
  }
  

   private transformMatrixLine = ():Array<string>[] =>{
    const arraySplit = this.matrix.split('\n').map(array=>array.split(' '))  
    let arrayTemp:Array<string[]> = []
    for(let element in arraySplit){
      const arrayToAdd:string[]=[]
        for (let index = 0; index < arraySplit.length; index++) {
          if(arraySplit[index][element]){
            arrayToAdd.push(arraySplit[index][element])
          }
          
        }
        if(arrayToAdd.length>0){
          arrayTemp.push(arrayToAdd);
        }
    }
    return arrayTemp;
  }
}