import React, { Component } from "react";
import { SectionGroup } from "./style";
import Button from "../../components/Button";
import { FaFileDownload } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Prova extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      institute: "",
      type: "",
      date: "",
      level: "",
      org: "",
      year: ""
    };
  }

  componentDidMount() {
    const { id, institute, date, type, level, org, year } = this.props;
    this.setState({
      id,
      institute,
      type,
      date,
      level,
      org,
      year
    });
  }

  render() {
    const { id, institute, date, type, level, org, year } = this.state;
    return (
      <SectionGroup>
        <section>
          <span>Prova</span>
          <strong>
            {institute} - {year} - {org} - {type}
          </strong>
          <p>
            Aplicada em {date} - {level}
          </p>
        </section>
        <div>
          <Link to={`/prova-online/${id}`}>
            <Button>Resolva online</Button>
          </Link>

          <FaFileDownload />
        </div>
      </SectionGroup>
    );
  }
}

Prova.propTypes = {
  id: PropTypes.string.isRequired,
  institute: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  org: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};

export default Prova;
