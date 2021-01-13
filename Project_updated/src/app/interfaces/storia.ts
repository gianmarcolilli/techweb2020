export interface Step {
  activityId: number,
  activityTitle: string,
  action: string,
  correctId :  number,
  wrongId: number,

  backImg?: string,
  // actionImg ?: string,
  //PUZZLE
  puzzleImg ?: string,
  difficulty ?: string,
  //QUIZ
  quizCorrectIdx?:number,
  answers? : String[],
  //D&D
  order?:DragDrop[],
  //DOMANDA
  risposteDomanda ?: string[],
  tipoDomanda?: string


}


export interface Answer{
  content:string,
  correct:boolean
}

export interface Storia {
  id: number,
  nome: string,
  fasciaEta: string,
  urlBackground?: string,
  steps?: Step[],
  didascalia?: string,
  // startText ?: string,
  // entryId ?: number

}

export interface DragDrop{
  posizione: number,
  desc: string
}
