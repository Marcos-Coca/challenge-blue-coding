import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { getGhyps } from "./service";
import debounce from "just-debounce-it";

import CardsCarousel from "./Carousle";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";

import "bootstrap/dist/css/bootstrap.min.css";
import { Gyph } from "./types";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [ghyps, setGhyps] = useState<Gyph[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedGhyps, setSelectedGhyps] = useState<Gyph | null>(null);

  const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    getGhyps({ text: e.target.value })
      .then((data) => {
        console.log(data);
        setGhyps(data.data);
      })
      .catch(() => {
        setError(new Error("Error al cargar los datos"));
      })
      .finally(() => setLoading(false));
  }, 500);

  const handleClickCard = (selectedGhyp: Gyph) => {
    setSelectedGhyps(selectedGhyp);
    setShowModal(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container className="App">
      <form>
        <input onChange={handleSearch} type="text" placeholder="Search..." />
      </form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body>
          <CardsCarousel selectedGhyps={selectedGhyps} ghyps={ghyps} />
        </Modal.Body>
      </Modal>

      {ghyps.map((gyph) => (
        <button
          onClick={() => {
            handleClickCard(gyph);
          }}
          className="button-card"
        >
          <picture key={gyph.id}>
            <img alt={gyph.title} src={gyph.images.original.url}></img>
          </picture>
        </button>
      ))}
    </Container>
  );
}

export default App;
