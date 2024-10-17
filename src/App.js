
import React, { useState } from 'react';
import styled from '@emotion/styled';
import MottoDisplay from './components/MottoDisplay';
import TodoForm from './components/TodoForm';
import { FireworkContainer, Firework } from './styles';

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: radial-gradient(ellipse at top right, rgba(40, 40, 30, 0.3) 0%, rgba(26, 26, 26, 0) 70%), #1a1a1a;
  padding: 1rem;
  box-sizing: border-box;
  font-size: 24px;
  overflow-x: hidden;
  padding-bottom: 150px; // Add this line to move content up

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const AnswerStyled = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 3rem;
  text-align: center;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
`;

function App() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [fireworks, setFireworks] = useState([]);

  const createFirework = () => {
    const colors = ['#ff0', '#f0f', '#0ff', '#0f0', '#ff5500', '#ffd700'];
    return Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      initialY: window.innerHeight + 10,
      finalY: Math.random() * window.innerHeight,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
  };

  const handleTodoSubmit = () => {
    setShowAnswer(true);
    setFireworks(createFirework());
    setTimeout(() => setFireworks([]), 2500); // Clear fireworks after animation
  };

  return (
    <ContainerStyled>
      <MottoDisplay />
      <TodoForm onSubmit={handleTodoSubmit} />
      {showAnswer && (
        <AnswerStyled>
          Yes, the trillion dollar AI assistant is coming!
        </AnswerStyled>
      )}
      <FireworkContainer>
        {fireworks.map((fw, index) => (
          <Firework
            key={index}
            color={fw.color}
            style={{
              '--x': `${fw.x}px`,
              '--initialY': `${fw.initialY}px`,
              '--finalY': `${fw.finalY}px`
            }}
          />
        ))}
      </FireworkContainer>
    </ContainerStyled>
  );
}

export default App;

