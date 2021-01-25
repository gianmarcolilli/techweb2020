import { AbstractControl } from "@angular/forms";
import { Observable, Observer, of } from "rxjs";

export const mimeType = (
  control: AbstractControl
): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> => {
  if (typeof(control.value) === 'string') {
    return of(null);
  }

  const file = control.value as File;    //prendo il file
  const fileReader = new FileReader();   //Riesco a leggerlo

  //Creo un Observable
  const frObs = new Observable(
    (observer: Observer<{ [key: string]: any }>) => {

      //Attende l'evento load end e inizia la sua funzione dopo il "fileReader.readAsArrayBuffer(file);"
      fileReader.addEventListener("loadend", () => {

        //Logica di validazione

        //Uint8Array => Unsigned Integers of 8 bits.
        // U => Unsigned, cioè solo valori positivi (i 'sign' negativi non sono ammessi)
        // Int => Integers, quindi solo numeri interi
        // 8 => utilizzati solo 8 nit (quindi numeri da 0 a 255 compresi)
        const arr = new Uint8Array(fileReader.result as ArrayBuffer).subarray(0, 4);  //subarray ci serve per prenderci il mime-type del file
        let header = "";
        let isValid = false;
        for (let i = 0; i < arr.length; i++) {
          header += arr[i].toString(16); //per convertirlo a esadecimale
        }
        switch (header) {
          case "89504e47":    //png
            isValid = true;
            break;
          case "ffd8ffe0":    //jfif jpe jpeg jpg
          case "ffd8ffe1":    //jpg
          case "ffd8ffe2":    //jpeg
          case "ffd8ffe3":    //jpeg
          case "ffd8ffe8":    //jpg
          // case "47494638":    //gif
            isValid = true;
            break;
          default:
            isValid = false; // Or you can use the blob.type as fallback
            break;
        }
        if (isValid) {
          observer.next(null);
        } else {
          observer.next({ invalidMimeType: true });
        }
        observer.complete();
      });
      fileReader.readAsArrayBuffer(file);
    }
  );
  return frObs;
};
