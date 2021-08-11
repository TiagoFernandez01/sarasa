function mostrar() {
  let nombre;
  let carrera;
  let sexo;
  let cantMaterias;
  let notaPromedio;
  let edad;
  let contFisica = 0;
  let contQuimica = 0;
  let contSistemas = 0;
  let acumNotas = 0;
  let acumFisica = 0;
  let nombreMPromedio;
  let flagMPromedio = 1;
  let mejorPromedio;
  let flagMujer = 1;
  let edadMujerJoven;
  let nombreMujerMJoven;
  let porcQuimica;
  let porcFisica;
  let porcSistemas;
  let contEstudiantes = 0;
  let nombreMasMaterias;
  let edadMasMaterias;


  for (let i = 0; i < 500; i++) {

    nombre = prompt("Ingrese nombre del alumno:").toLowerCase();



    carrera = prompt("Ingrese el tipo de carrera (quimica/fisica/sistemas)").toLowerCase();
    while (carrera != "quimica" && carrera != "fisica" && carrera != "sistemas") {
      carrera = prompt("Error.Ingrese el tipo de carrera (quimica/fisica/sistemas)").toLowerCase();
    }
    sexo = prompt("Ingrese el sexo (masculino/femenino/no binario):").toLowerCase();
    while (sexo != 'masculino' && sexo != 'femenino' && sexo != "no binario") {
      sexo = prompt("Error.Ingrese el sexo (masculino/femenino/no binario):").toLowerCase();
    }

    cantMaterias = parseInt(prompt("Ingrese la cantidad de materias (entre 1 y 5)"));
    while (isNaN(cantMaterias) || cantMaterias < 1 || cantMaterias > 5) {
      cantMaterias = parseInt(prompt("Error.Ingrese la cantidad de materias (entre 1 y 5)"));


    }
    notaPromedio = parseInt(prompt("Ingrese la nota promedio (entre 0 y 10)"));
    while (isNaN(notaPromedio) || notaPromedio < 0 || notaPromedio > 10) {
      notaPromedio = parseInt(prompt("Error.Ingrese la nota promedio (entre 0 y 10)"));


    }
    edad = parseInt(prompt("Ingrese su edad (mayor a 0)"));
    while (isNaN(edad) || edad <= 0) {
      edad = parseInt(prompt("Error.Ingrese su edad (mayor a 0)"));

    }
    acumNotas = acumNotas + notaPromedio;
    contEstudiantes++;

    if (carrera == "fisica") {
      acumFisica = acumFisica + notaPromedio;
      contFisica++;
      if (flagMPromedio || notaPromedio > mejorPromedio) {
        mejorPromedio = notaPromedio;
        nombreMPromedio = nombre;
        flagMPromedio = 0;

      }



    } else if (carrera == "quimica") {

      contQuimica++;

    }
    else {

      contSistemas++;

    }


    if (sexo == 'femenino') {
      if (flagMujer || edad > edadMujerJoven) {
        edadMujerJoven = edad;
        nombreMujerMJoven = nombre;
        flagMujer = 0;

      }

    }





  }
  ////////////////////////////////////////////////////////



  if (contFisica != 0) {
    porcFisica = contFisica * 100 / contEstudiantes;

  }

  if (contQuimica != 0) {
    porcQuimica = contQuimica * 100 / contEstudiantes;

  }

  if (contSistemas != 0) {
    porcSistemas = contSistemas * 100 / contEstudiantes;

  }

  if (contFisica > contSistemas) {
    nombreMasMaterias = nombre;
    edadMasMaterias = edad;


  } else {
    contSistemas >= contFisica
    nombreMasMaterias = nombre;
    edadMasMaterias = edad;

  }

  document.write("A) el nombre del mejor promedio de los alumnos que estudian fisica es " + nombreMPromedio + "<br>");
  document.write("B) el nombre de la alumna mas joven es " + nombreMujerMJoven + "<br>");
  document.write("C) el porcentaje de estudaintes que estudian: quimica= " + porcQuimica + " fisica= " + porcFisica + " sistemas= " + porcSistemas + "<br>");
  document.write("D) nombre y edad del estudiante que cursa mas materias: " + nombreMasMaterias + edadMasMaterias + " años");









}
