function mostrar() {
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  let seguir;
  let promedioEdadRep = 0;
  let acumEdadRep = 0;
  let contAves = 0;
  let contMamiferos = 0;
  let contReptiles = 0;
  let contTotalMascotas;
  let porcAves;
  let tipoMascMayor;
  let contMascMayor;
  let flagMascJoven;
  let sexoMascJoven;
  let tipoMascJoven;
  do {
    nombre = prompt("Ingrese nombre de la mascota:").toLowerCase();
    while (nombre.length < 3 || nombre.length > 8) {
      nombre = prompt("Error.Ingrese nombre de la mascota:").toLowerCase();

    }
    tipo = prompt("Ingrese el tipo de animal (mamifero/ave/reptil").toLowerCase();
    while (tipo != "mamifero" && tipo != "ave" && tipo != "reptil") {
      tipo = prompt("Error.Ingrese el tipo deanimal (mamifero/ave/reptil)").toLowerCase();


    }

    if (tipo == "reptil") {
      sangre = "fria";

    } else {
      sangre = prompt("Ingrese el tipo de sangre (fria/calida)").toLowerCase();
      while (sangre != "fria" && sangre != "calida") {
        sangre = prompt("Error.Ingrese el tipo de sangre (fria/calida)").toLowerCase();

      }
    }
    edad = parseInt(prompt("Ingrese su edad (mayor a 0)"));
    while (isNaN(edad) || edad <= 0) {
      edad = parseInt(prompt("Error.Ingrese su edad (mayor a 0)"));

    }


    sexo = prompt("Ingrese el sexo (m/f):").toLowerCase();
    while (sexo != 'f' && sexo != 'm') {
      sexo = prompt("Error.Ingrese el sexo (m/f):").toLowerCase();

    }

    if (tipo == "reptil") {
      acumEdadRep = acumEdadRep + edad;
      contReptiles++;

    } else if (tipo == "ave") {
      contAves++;


    } else {
      contMamiferos++;
    }

    contTotalMascotas++;

    if (flagMascJoven || sexo == "m" || sexo == 'f') {
      sexoMascJoven = sexo;
      tipoMascJoven = tipo;
      flagMascJoven = 0;

    }
















    seguir = prompt("desea seguir ingrsando datos? (s/n)").toLowerCase();
  } while (seguir == 's');
  ////////////////////////////////////////////////////////////////////

  if (contReptiles != 0) {
    promedioEdadRep = acumEdadRep / contReptiles;

  }


  if (contAves != 0) {
    porcAves = contAves * 100 / contTotalMascotas;


  }

  if (contReptiles > contAves && contReptiles > contMamiferos) {
    tipoMascMayor = "reptiles";
    contMascMayor = contReptiles;


  } else if (contAves >= contReptiles && contAves > contMamiferos) {
    tipoMascMayor = "aves";
    contMascMayor = contAves;

  }
  else {
    tipoMascMayor = "mamifero";
    contMascMayor = contMamiferos;
  }

  document.write("A) Promedio de edad de los reptiles: " + promedioEdadRep + " < br>");
  document.write("B) tipo y sexo de la mascota mas joven: " + sexoMascJoven + tipoMascJoven + "<br>");
  document.write("C) porcentaje de aves sobre el total de mascotas: " + porcAves + "<br>");
  document.write("D) Del tipo de mascota que hay mas cantidad es " + tipoMascMayor + "<br>");


}
