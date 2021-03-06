export interface Step {
  activityId: number,
  activityTitle: string,
  action: string,
  backImg: string,
  actionImg: string,
  answers? : Answer[],
  chatMessages? : string[],
  correctId :  number,
  wrongId: number
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
  startText ?: string,
  entryId ?: number

}




// manageClick(clickedObjiect)
// {
//   if (this.storia.type == 'clickToObjiect') {
//     {
//       if (
//         clickedObjiect == this.storia.objiectToClick
//       goToNextStep(this.storia.step[currentStep].idNextStep)
//     )
//     else {
//         goToNextStep(this.storia.step[currentStep].idNextWrongStep)
//       }
//     }


//     if (this.storie.type == "clickToGo") {
//       goToNextStep(this.storia.step[currentStep].idNextStep)
//     }

//     if (this.storie.type == "chat") {
//       if (
//         currentDidascaliaIndex == this.storia.step[currentStep].chatMessages.lenght
//       ) {
//         goToNextStep(this.storia.step[currentStep].idNextStep)
//       }
//       else {
//         currentDidascaliIndex++;

//       }

//     }
//   }
