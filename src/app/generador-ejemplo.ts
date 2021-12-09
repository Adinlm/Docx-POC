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





export class GeneradorDocs {
  public crearParrafos([datos]): Document {
    const documento = new Document({
      sections: [{
        children: [
          new Paragraph({
            children: [
              new ImageRun({
                data: ("./logo.png"),//problema con la ruta?
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
  /*	
  public createContact(
    name: string,
    id:string,
    medic:string,
  ):string{
      const name =

    
    return `${name};

  }

}
*/





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

