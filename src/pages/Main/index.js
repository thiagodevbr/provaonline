import React, { Component } from "react";
import Container from "../../components/Container";
import Test from "../../widgets/Prova";
import Moment from "moment";

class Main extends Component {
  render() {
    return (
      <Container>
        <Test
          id="1"
          institute="CESPE"
          date={Moment().format("DD/MM/YYYY")}
          type="Escriturário"
          level="Nivel médio"
          org="Banco do Brasil"
          year="2019"
        />
        <Test
          id="2"
          institute="CESPE"
          date={Moment().format("DD/MM/YYYY")}
          type="Escriturário"
          level="Nivel médio"
          org="Banco do Brasil"
          year="2019"
        />
        <Test
          id="3"
          institute="CESPE"
          date={Moment().format("DD/MM/YYYY")}
          type="Escriturário"
          level="Nivel médio"
          org="Banco do Brasil"
          year="2019"
        />
        <Test
          id="4"
          institute="CESPE"
          date={Moment().format("DD/MM/YYYY")}
          type="Escriturário"
          level="Nivel médio"
          org="Banco do Brasil"
          year="2019"
        />
      </Container>
    );
  }
}
export default Main;
