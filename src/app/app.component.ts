import { Component } from '@angular/core';
import { Document, Packer, Paragraph, TextRun } from "docx";
import saveAs from 'file-saver';

//import { experiences, education, skills, achievements } from "./data-ejemplo";
//import { DocumentCreator } from "./generador-ejemplo"
import { datos } from "./data-ejemplo";
import { GeneradorDocs } from "./generador-ejemplo"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

  }

  ngOnInit() {

  }


  descargarDocumento() {

    //crea un nuevo documento generado por Documentcreator
    const documentCreator = new GeneradorDocs();
    const doc = documentCreator.crearParrafos([
      datos,
    ]);
    /*
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([
      experiences,
      education,
      skills,
      achievements
    ]);
    */

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "ejemplo.docx");
    });
  }

  descargarDocumento64() {

    const documentCreator = new GeneradorDocs();
    const doc = documentCreator.crearParrafos([
      datos,
    ]);


    Packer.toBase64String(doc).then((string) => {
      console.log("Soy el string base64: ",string);
    });
  }

  onKey(event) {
    const inputValue = event.target.value;
    console.log(inputValue)
  }


  
}
