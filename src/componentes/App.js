import React, { Component } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import Resumen from "./Resumen";
import Resultado from "./Resultado";
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from "../helper";

class App extends Component {
  constructor() {
    super();
    this.state = {
      resultado: "",
      datos: {}
    };
  }

  cotizarSeguro = datos => {
    const { marca, plan, year } = datos;
    let resultado = 2000;
    const diferencia = obtenerDiferenciaAnio(year);
    resultado -= resultado * diferencia * 0.03;
    resultado = resultado * calcularMarca(marca);
    resultado = parseFloat(resultado * obtenerPlan(plan)).toFixed(2);
    this.setState({ datos, resultado });
  };

  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de Seguro de Coche" />
        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro} />
          <Resumen datos={this.state.datos} />
          <Resultado resultado={this.state.resultado} />
        </div>
      </div>
    );
  }
}

export default App;
