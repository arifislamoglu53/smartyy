import React from "react";
import { CO2Provider } from "../app/context/CO2Context"; // Asegúrate de usar la ruta correcta a tu contexto
import "../styles/globals.css"; // Si tienes estilos globales
import Energie from "./energie/page";
import Ernaehrung from "./ernaehrung/page";
import Mobilitaet from "./mobilitaet/page";
import Konsum from "./konsum/page";
import Result from "./result/page"

function MyApp({ Component, pageProps }) {
  return (
    <CO2Provider>
      <Energie/>
	  <Ernaehrung/>
	  <Konsum/>
	  <Mobilitaet/>
	  <Result/>
    </CO2Provider>
  );
}

export default MyApp;