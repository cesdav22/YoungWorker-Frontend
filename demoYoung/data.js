module.exports = function () {
    var data = {
      estudiantes: [
        {
          id:1,
          nameEstudiante: "Luisa",
          carreraEstudiante: "Sitemasinformacion"
        },
        {
          id:2,
          nameEstudiante: "Juana",
          carreraEstudiante: "Comunicacion",
        },
        {
          id:3,
          nameEstudiante: "Pedro",
          carreraEstudiante: "Arquitectura",
        },
        {
          id:4,
          nameEstudiante: "Jesus",
          carreraEstudiante: "Arte",

        }
      ],
      postulaciones:[
        {
          id:1,
          GradoAcadmico: "Tercio",
          InformacionCV:"Master",
          estudiante:{
            id:2
          }
        }
      ]

    }

    return data
  }