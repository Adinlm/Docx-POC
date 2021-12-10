import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  SectionType,
  ShadingType,
  BorderStyle,
  TabStopPosition,
  TabStopType,
  TextRun,
  ImageRun,
  Table,
  TableRow,
  TableCell
} from "docx";

//import { datos, education } from "./data-ejemplo";




export class GeneradorDocs {
  public crearParrafos(): Document {
    const documento = new Document({
      sections: [{
        children: [
          new Paragraph({
            children: [
              new ImageRun({
                data: ("data:image/png;base64,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"),
                
               /*data:(Buffer.from("./logo.png").toString('base64')),
               */
               
                transformation: {
                  width: 100,
                  height: 100,
                },
              }),

            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "SERVICIO DE ANATOMIA PATOLOGICA",
                bold: true, color: "000000"
              })],
            heading: HeadingLevel.HEADING_3,
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Av.Manquehue Norte 1410 - Piso-2 ", color: "000000"
              }),
              new TextRun({
                text: "Fonos:225861641 o 225861642 ", break: 1, color: "000000"
              })
            ],
            heading: HeadingLevel.HEADING_6,
            alignment: AlignmentType.CENTER,
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Paciente: "   ,
              }),
              new TextRun({
                text: "RUT/PASAPORTE: 14145903-1", break: 1
              }),
              new TextRun({
                text: "Medico Solicitante: Paulina Arce Escobar      Fecha de Nacimiento: 19/07/1990      Edad: 31 ", break: 1,
              }),
              new TextRun({
                text: "Servicio Solicitante: GASTROENTEROLOGIA", break: 1
              }),
              new TextRun({
                text: "Fecha de recepción: 20/11/2021              Fecha de informe: 22/11/2021", break: 1
              }),
            ],
            spacing: {
              before: 200,
            },
            thematicBreak: true,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Diagnóstico Clínico/Antecedentes:", bold: true
              }),
              new TextRun({
                text: "Obs esófago de barret.", break: 1
              }),
            ],
            spacing: {
              before: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Muestras enviadas:", bold: true
              }),
              new TextRun({
                text: "Esófago, Biopsia endoscópica, Ma 1 M6 biopsias de lenguetas de mucosa de aspecto gástrico a 4 cm de la constricción hiatal", break: 1
              }),
            ],
            spacing: {
              before: 200,
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Examen Macroscópico:", bold: true
              })
            ],
            spacing: {
              before: 200,
              after: 200
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "En formalina, 7 fragmentos de tejido pardo-grisáceo de 2 a 4 mm, distribuidos en los casilleros n°1 a n°6."
              })
            ],
            spacing: {
              before: 200,
              after: 200
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Examen Microscópico:", bold: true
              })
            ],
            spacing: {
              before: 200,
              after: 200
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text:
                  "Los fragmentos examinados corresponden a epitelio escamoso con acantosis, papilomatosis, espongiosis con exocitosis de linfocitos y de algunos granulocitos eosinófilos."
              })
            ],
            spacing: {
              before: 200,
              after: 200
            },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text:
                  "Diagnóstico:", bold: true
              }),
              new TextRun({
                text:
                  "Hallazgos compatibles con ESOFAGITIS POR REFLUJO", break: 1
              })
            ],
            spacing: {
              before: 200,
            },
          }),
          new Paragraph({
            text: "esofagitis",
            bullet: {
              level: 0 //items del listado
            }

          }),
          new Paragraph({
            text: "epitelio",
            bullet: {
              level: 0 //items del listado
            }

          }),
          new Paragraph({
            text: "pardo-grisáceo",
            bullet: {
              level: 0 //items del listado
            }

          }),

        ],
      }],
    })

    
    return documento;
  }
}


export class GeneradorDocsJson{
  public crearParrafosJson([datos]): Document {
    console.log("soy el dato ",Object.keys(datos)[0])
    const documento = new Document({
      sections:[{
        children:[
          this.crearHeading(datos),

        ],
      }],
    })
    return documento;
  }
  public crearHeading(text: string): Paragraph {
    return new Paragraph({

      text: text,
      heading: HeadingLevel.HEADING_1,
      thematicBreak: true
    });
  }
}

/*
const PHONE_NUMBER = "07534563401";
const PROFILE_URL = "https://www.linkedin.com/in/dolan1";
const EMAIL = "docx@docx.com";
export class DocumentCreator {
  // tslint:disable-next-line: typedef
  public create([experiences, educations, skills, achivements]): Document {
    const document = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: "Dolan Miu",
              heading: HeadingLevel.TITLE
            }),
            this.createContactInfo(PHONE_NUMBER, PROFILE_URL, EMAIL),
            this.createHeading("Education"),
            ...educations
              .map(education => {
                const arr: Paragraph[] = [];
                arr.push(
                  this.createInstitutionHeader(
                    education.schoolName,
                    `${education.startDate.year} - ${education.endDate.year}`
                  )
                );
                arr.push(
                  this.createRoleText(
                    `${education.fieldOfStudy} - ${education.degree}`
                  )
                );

                const bulletPoints = this.splitParagraphIntoBullets(
                  education.notes
                );
                bulletPoints.forEach(bulletPoint => {
                  arr.push(this.createBullet(bulletPoint));
                });

                return arr;
              })
              .reduce((prev, curr) => prev.concat(curr), []),
            this.createHeading("Experience"),
            ...experiences
              .map(position => {
                const arr: Paragraph[] = [];

                arr.push(
                  this.createInstitutionHeader(
                    position.company.name,
                    this.createPositionDateText(
                      position.startDate,
                      position.endDate,
                      position.isCurrent
                    )
                  )
                );
                arr.push(this.createRoleText(position.title));

                const bulletPoints = this.splitParagraphIntoBullets(
                  position.summary
                );

                bulletPoints.forEach(bulletPoint => {
                  arr.push(this.createBullet(bulletPoint));
                });

                return arr;
              })
              .reduce((prev, curr) => prev.concat(curr), []),
            this.createHeading("Skills, Achievements and Interests"),
            this.createSubHeading("Skills"),
            this.createSkillList(skills),
            this.createSubHeading("Achievements"),
            ...this.createAchivementsList(achivements),
            this.createSubHeading("Interests"),
            this.createInterests(
              "Programming, Technology, Music Production, Web Design, 3D Modelling, Dancing."
            ),
            this.createHeading("References"),
            new Paragraph(
              "Dr. Dean Mohamedally Director of Postgraduate Studies Department of Computer Science, University College London Malet Place, Bloomsbury, London WC1E d.mohamedally@ucl.ac.uk"
            ),
            new Paragraph("More references upon request"),
            new Paragraph({
              text:
                "This CV was generated in real-time based on my Linked-In profile from my personal website www.dolan.bio.",
              alignment: AlignmentType.CENTER
            })
          ]
        }
      ]
    });

    return document;
  }

  public createContactInfo(
    phoneNumber: string,
    profileUrl: string,
    email: string
  ): Paragraph {
    return new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun(
          `Mobile: ${phoneNumber} | LinkedIn: ${profileUrl} | Email: ${email}`
        ),
        new TextRun({
          text: "Address: 58 Elm Avenue, Kent ME4 6ER, UK",
          break: 1
        })
      ]
    });
  }

  public createHeading(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_1,
      thematicBreak: true
    });
  }

  public createSubHeading(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_2
    });
  }

  public createInstitutionHeader(
    institutionName: string,
    dateText: string
  ): Paragraph {
    return new Paragraph({
      tabStops: [
        {
          type: TabStopType.RIGHT,
          position: TabStopPosition.MAX
        }
      ],
      children: [
        new TextRun({
          text: institutionName,
          bold: true
        }),
        new TextRun({
          text: `\t${dateText}`,
          bold: true
        })
      ]
    });
  }

  public createRoleText(roleText: string): Paragraph {
    return new Paragraph({
      children: [
        new TextRun({
          text: roleText,
          italics: true
        })
      ]
    });
  }

  public createBullet(text: string): Paragraph {
    return new Paragraph({
      text: text,
      bullet: {
        level: 0
      }
    });
  }

  // tslint:disable-next-line:no-any
  public createSkillList(skills: any[]): Paragraph {
    return new Paragraph({
      children: [new TextRun(skills.map(skill => skill.name).join(", ") + ".")]
    });
  }

  // tslint:disable-next-line:no-any
  public createAchivementsList(achivements: any[]): Paragraph[] {
    return achivements.map(
      achievement =>
        new Paragraph({
          text: achievement.name,
          bullet: {
            level: 0
          }
        })
    );
  }

  public createInterests(interests: string): Paragraph {
    return new Paragraph({
      children: [new TextRun(interests)]
    });
  }

  public splitParagraphIntoBullets(text: string): string[] {
    return text.split("\n\n");
  }

  // tslint:disable-next-line:no-any
  public createPositionDateText(
    startDate: any,
    endDate: any,
    isCurrent: boolean
  ): string {
    const startDateText =
      this.getMonthFromInt(startDate.month) + ". " + startDate.year;
    const endDateText = isCurrent
      ? "Present"
      : `${this.getMonthFromInt(endDate.month)}. ${endDate.year}`;

    return `${startDateText} - ${endDateText}`;
  }

  public getMonthFromInt(value: number): string {
    switch (value) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sept";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      case 12:
        return "Dec";
      default:
        return "N/A";
    }
  }
}
*/

