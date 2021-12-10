import { Component } from '@angular/core';
import { Document, Packer, Paragraph, TextRun } from "docx";
import saveAs from 'file-saver';

//import { experiences, education, skills, achievements } from "./data-ejemplo";
//import { DocumentCreator } from "./generador-ejemplo"
import { datos, education } from "./data-ejemplo";
import { GeneradorDocs,GeneradorDocsJson } from "./generador-ejemplo"


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
    const doc = documentCreator.crearParrafos();
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
    const doc = documentCreator.crearParrafos();


    Packer.toBase64String(doc).then((string) => {
      console.log("Soy el string base64: ", string);
    });
  }

  descargarDocumentoJson() {

    const documentCreator = new GeneradorDocsJson();
    const doc = documentCreator.crearParrafosJson([
      datos,
    ]);


    Packer.toBlob(doc).then(blob => {
      saveAs(blob, "ejemplojson.docx");
    });
  }

  onKey(event) {
    const inputValue = event.target.value;
    console.log(inputValue)
  }



}
