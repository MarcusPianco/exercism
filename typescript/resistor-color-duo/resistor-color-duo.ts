export const colorValue:any={'black':0, 'brown':1, 'bed':2,'orange':3,'yellow':4,'green':5, 'blue': 6, 'violet':7,'grey':8,'white':9}
export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    if(colors.length<2){
      throw new Error("At least two colors need to be present");
    }
    this.colors = colors;
  }
  value = (): number => Number.parseInt(this.colors.splice(0,2).reduce((final, initial)=>final+=colorValue[initial]
  ,''))
}
