import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Função que gera um número aleatório entre 1 e 6
function rollFace() {
  return Math.floor(Math.random() * 6) + 1;
}

function App() {
  const [face1, setFace1] = useState(rollFace());
  const [face2, setFace2] = useState(rollFace());
  const [message, setMessage] = useState('');
  const [wins, setWins] = useState(0);
  const [plays, setPlays] = useState(0);

  // Função para rolar as faces
  const handleRoll = () => {
    const newFace1 = rollFace();
    const newFace2 = rollFace();
    const total = newFace1 + newFace2;
    
    setFace1(newFace1);
    setFace2(newFace2);
    setPlays(plays + 1);

    if (total === 7 || total === 11) {
      setMessage('Ganhou!');
      setWins(wins + 1);
    } else {
      setMessage('Perdeu!');
    }
  };

  // Função para calcular o percentual de vitórias
  const getWinPercentage = () => {
    return plays === 0 ? 0 : Math.round((wins / plays) * 100);
  };

  return (
    <div className="App container text-center mt-5">
      <h1 className="display-4 mb-4">Jogo de Dados</h1>

      <div className="row justify-content-center">
        {/* Imagens das faces ou números */}
        <div className="col-md-3 face">
          <img src={`/images/face${face1}.png`} alt={`Face ${face1}`} className="img-fluid large-image" />
          <p className="lead mt-2">Face: {face1}</p>
        </div>
        <div className="col-md-3 face">
          <img src={`/images/face${face2}.png`} alt={`Face ${face2}`} className="img-fluid large-image" />
          <p className="lead mt-2">Face: {face2}</p>
        </div>
      </div>

      {/* Mensagem de resultado */}
      <h2 className={`mt-4 ${message === 'Ganhou!' ? 'text-success' : 'text-danger'}`}>
        {message}
      </h2>

      {/* Botão de rolar as faces */}
      <button className="btn btn-primary btn-lg mt-3" onClick={handleRoll}>
        Jogar
      </button>

      {/* Contador de vitórias e jogadas */}
      <div className="score mt-4">
        <p className="h5">Vitórias: {wins}</p>
        <p className="h5">Jogadas: {plays}</p>
        <p className="h5">Percentual de Vitórias: {getWinPercentage()}%</p>
      </div>
    </div>
  );
}

export default App;
