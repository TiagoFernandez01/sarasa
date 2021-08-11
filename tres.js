function mostrar() {
  let tipo;
  let origen;
  let precio;
  let seguir;
  let contMuñecas = 0;
  let contRompecabezas = 0;
  let contpelotas = 0;
  let jugueteMasVendido;
  let contJuguteMVendido;
  let promedioPreciosImp = 0;
  let contImportados = 0;
  let acumPrecioImp = 0;
  let recaudacionTotal;
  let acumMuñecas = 0;
  let acumRompecabezas = 0;
  let acumPelotas = 0;
  let iva;
  let flagRompecabezas = 1;
  let rompecabezasBarato;

  do {

    tipo = prompt("Ingrese el tipo de juguete (muñeca/ rompecabezas / pelota):").toLowerCase();
    while (tipo != "muñeca" && tipo != "rompecabezas" && tipo != "pelota") {
      tipo = prompt("Error.Ingrese el tipo de juguete (muñeca/ rompecabezas / pelota):").toLowerCase();
    }
    origen = prompt("Ingrese el origen (nacional/importado):").toLowerCase();
    while (origen != "nacional" && origen != "importado") {
      origen = prompt("Error.Ingrese el origen (nacional/importado):").toLowerCase();

    }
    precio = parseInt(prompt("Ingrese precio"));
    while (isNaN(precio) || canprecio < 1000 || canprecio > 5000) {
      costo = parseInt(prompt("Error.Ingrese precio"));
    }

    if (tipo == "muñeca") {
      acumMuñecas = acumMuñecas + precio;
      contMuñecas++;

    } else if (tipo == "rompecabezas") {
      acumRompecabezas = acumRompecabezas + precio;
      contRompecabezas++;
      if (origen == "nacional") {
        if (flagRompecabezas || precio < rompecabezasBarato) {
          rompecabezasBarato = precio;
          flagRompecabezas = 0;

        }

      }

    }
    else {
      acumPelotas = acumPelotas + precio;
      contpelotas++;

    }

    if (origen == "importado") {
      acumPrecioImp = acumPrecioImp + precio;
      contImportados++;

    }







    seguir = prompt("desea seguir ingrsando datos? (s/n)").toLowerCase();
  } while (seguir == 's');
  ///////////////////////////////////////////////////////////////////
  recaudacionTotal = acumMuñecas + acumPelotas + acumRompecabezas;
  iva = recaudacionTotal * 100 / 21;




  if (origen == "importado") {
    if (contImportados != 0) {
      promedioPreciosImp = contImportados * 100 / acumPrecioImp;

    }

  }



  if (contMuñecas > contRompecabezas && contMuñecas > contpelotas) {
    jugueteMasVendido = "muñeca";
    contJuguteMVendido = contMuñecas;

  } else if (contRompecabezas >= contMuñecas && contRompecabezas > contpelotas) {
    jugueteMasVendido = "rompecabezas";
    contJuguteMVendido = contRompecabezas;

  }
  else {
    jugueteMasVendido = "pelota";
    contJuguteMVendido = contpelotas;
  }

  document.write("A) El tipo de juguete mas vendido es: " + jugueteMasVendido + "<br>");
  document.write("B) Promedio de precio de juguetes importados: " + promedioPreciosImp + "<br>");
  document.write("C) Recaudacion total: " + recaudacionTotal + "<br>");
  document.write("D) el precio del rompecabezas nacional mas barato es: " + rompecabezasBarato + "<br>");
  document.write("E) Se percibio de iva total: " + iva + "<br>");













}
