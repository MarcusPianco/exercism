


export class ResistorColor {
  private resistors={"Black":"0", "Brown":"1", "Red":"2", "Orange":"3",
  "Yellow":"4", "Green":"5","Blue":"6", "Violet":"7","Grey":"8", "White":"9"}
  private colors: string[];

  constructor(colors: string[]) {
    this.colors = colors;
  }
  value = (): number => Number.parseInt(this.colors.reduce((resistor:string)=>this.resistors[resistor],"").substr(0,2));
}
