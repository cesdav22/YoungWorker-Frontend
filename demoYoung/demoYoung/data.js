module.exports = function () {
    var data = {
      estudiantes: [
        {
          id:1,
          nameEstudiante: "Luisa",
          carreraEstudiante: "Sitemasinformacion",
          UniversidadEstudiante:"Pacifico"
        },
        {
          id:2,
          nameEstudiante: "Juana",
          carreraEstudiante: "Comunicacion",
          UniversidadEstudiante:"Lima"
        },
        {
          id:3,
          nameEstudiante: "Pedro",
          carreraEstudiante: "Arquitectura",
          UniversidadEstudiante:"Upc"
        },
        {
          id:4,
          nameEstudiante: "Jesus",
          carreraEstudiante: "Arte",
          UniversidadEstudiante:"Upc"

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