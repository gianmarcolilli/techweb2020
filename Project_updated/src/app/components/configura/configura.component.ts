import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storia } from 'src/app/interfaces/storia';
import { DummyApiService } from 'src/app/services/dummy-api.service';


@Component({
  selector: 'app-configura',
  templateUrl: './configura.component.html',
  styleUrls: ['./configura.component.css']
})
export class ConfiguraComponent implements OnInit {
  id: number;
  storia: Storia;
  tempDomanda: '';
  showConfiguraDomanda: false;
  constructor(private activeRoute: ActivatedRoute, private api: DummyApiService) { }



  aggiungiAttivita(type: string) {
    if (type == "domande") {
      this.storia.steps.push({
        action: '',
        actionImg: '',
        activityId: 0,
        activityTitle: this.tempDomanda,
        backImg: '',
        correctId: 0,
        wrongId: 9,
        answers: [],
        chatMessages: []
      })
    }

    this.resettaForm()
  }

  resettaForm() {
    this.tempDomanda = ''
  }

  // generaAttivita(tipoDiAttività){

  //   if(tipoDiAttività=="4answers"){

  //     return {
  //       title : myTempTitle,
  //       answers : myTempRisposte,

  //     }
  //   }



  //   resetVariabiliDiAppoggio()


  // }


  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params.id;
    this.api.getStoria(this.id).subscribe((singleStory) => {
      this.storia = this.api.reMap(singleStory)
    }

    )

  }

}
