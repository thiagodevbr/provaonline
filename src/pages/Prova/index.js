import React, { Component } from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";
import {
  Header,
  SubHeader,
  ImgAssociated,
  Question,
  Footer,
  Form,
  Warning
} from "./style";
import {
  FaCaretRight,
  FaChalkboardTeacher,
  FaChalkboard,
  FaComments,
  FaChartBar,
  FaBook,
  FaStickyNote,
  FaBomb,
  FaQuestionCircle,
  FaCheckCircle,
  FaTimesCircle
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Radio from "../../components/Radio";

class Prova extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: false,
      textButton: "Expandir Imagem",
      resp: "",
      later: false,
      payload: {
        resp: ""
      }
    };
  }

  handleChangeImage = () => {
    const { image, textButton } = this.state;
    image ? this.setState({ image: false }) : this.setState({ image: true });
    textButton === "Expandir Imagem"
      ? this.setState({ textButton: "Esconder Imagem" })
      : this.setState({ textButton: "Expandir Imagem" });
  };
  handleOption = resp => {
    this.setState({ resp });
  };

  handleLaterQuestion = () => {
    this.setState({ later: true, payload: { resp: "" } });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ later: false });
    this.setState({ payload: { resp: this.state.resp } });
  };

  render() {
    const { image, textButton, later, payload } = this.state;
    return (
      <Container>
        <Header>
          <div>
            <span className="number_question">1</span>
            <span className="cod_question">Q1234</span>
            <span className="mat_question">
              Português <FaCaretRight />
            </span>
            <span className="cat_mat_question">Interpretação de Textos</span>
          </div>
          <span className="voltar">
            <Link to="/">
              <Button>Voltar</Button>
            </Link>
          </span>
        </Header>
        <SubHeader>
          <span className="year">
            <strong>Ano:</strong>2019
          </span>
          <span className="banca">
            <strong>Banca:</strong>Cespe
          </span>
          <span className="orgao">
            <strong>Orgão:</strong>PRF
          </span>
          <span className="prova">
            <strong>Prova:</strong> CESPE - 2019 - PRF - Policial Rodoviário
            Federal
          </span>
        </SubHeader>
        <ImgAssociated>
          <span onClick={() => this.handleChangeImage()}>{textButton}</span>
          {image && (
            <img
              src="https://s3.amazonaws.com/qcon-assets-production/images/provas/60210/d6f71190edaa221d4064.png"
              alt="Imagem associada da questão"
            />
          )}
        </ImgAssociated>
        <Question>
          <p>
            No que se refere aos sentidos e às construções linguísticas do texto
            precedente, julgue o item a seguir.
          </p>
          <p>
            A forma verbal “viceja” (ℓ.1) poderia ser substituída por germina,
            sem prejuízo da coerência e da correção gramatical do trecho.
          </p>
        </Question>
        <Form onSubmit={this.handleSubmit} later={later} resp={payload.resp}>
          <div>
            <Radio
              name="sim"
              id="resp"
              value="Sim"
              select={() => this.handleOption("Sim")}
            />
            <Radio
              name="nao"
              id="resp"
              value="Não"
              select={() => this.handleOption("Não")}
            />
            <Button>Responder</Button>
            <Button
              type="button"
              onClick={() => {
                this.handleLaterQuestion();
              }}
            >
              Deixar Marcada
            </Button>
          </div>
          <Warning warn={later}>
            {later && <FaQuestionCircle />}
            {payload.resp === "Sim" && <FaCheckCircle />}
            {payload.resp === "Não" && <FaTimesCircle />}
          </Warning>
        </Form>
        <Footer>
          <span className="teacher">
            <FaChalkboardTeacher /> Professor (1)
          </span>
          <span className="class">
            <FaChalkboard /> Aulas (2)
          </span>
          <span className="comments">
            <FaComments /> Comentários (12)
          </span>
          <span className="statistic">
            <FaChartBar /> Estatísticas
          </span>
          <span className="books">
            <FaBook /> Cadernos
          </span>
          <span className="notes">
            <FaStickyNote />
            Criar Nota
          </span>
          <span className="bugs">
            <FaBomb />
            Relatar Erro
          </span>
        </Footer>
      </Container>
    );
  }
}

export default Prova;
