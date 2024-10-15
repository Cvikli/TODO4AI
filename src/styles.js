import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255, 165, 0, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(255, 165, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 165, 0, 0); }
`;

export const firework = keyframes`
  0% { transform: translate(var(--x), var(--initialY)); width: 0px; opacity: 1; }
  50% { width: 5px; opacity: 1; }
  100% { width: 0px; opacity: 0; transform: translate(var(--x), var(--finalY)); }
`;

export const blinkCursor = keyframes`
  0% { border-right-color: #FFA500; }
  50% { border-right-color: transparent; }
  100% { border-right-color: #FFA500; }
`;

const gleamAnimation = keyframes`
  0% {
    background-position: 200% center;
  }
  100% {
    background-position: -200% center;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1500px;
  background-color: rgba(42, 42, 42, 0.8);
  border-radius: 35px;
  overflow: visible;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    border-radius: 25px;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 30px 40px;
  font-size: 32px;
  border: none;
  background-color: transparent;
  color: #ffffff;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #888;
  }

  @media (max-width: 768px) {
    padding: 20px;
    font-size: 24px;
  }
`;

export const Button = styled.button`
  padding: 30px 60px;
  font-size: 36px;
  font-weight: 900;
  color: white;
  background: linear-gradient(45deg, #FFA500, #FF6347, #FF4500);
  border: none;
  border-radius: 0 35px 35px 0;
  cursor: pointer;
  transition: transform 0.1s, box-shadow 0.3s;
  animation: ${pulse} 2s infinite;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    box-shadow: 0 5px 15px rgba(255,165,0,0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    padding: 30px;
    font-size: 24px;
  }

  @media (max-width: 480px) {
    padding: 15px 30px;
  }
`;

export const Answer = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-top: 60px;
  text-align: center;
  animation: ${fadeIn} 1s ease-in;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 40px;
  }
`;

export const ErrorMessage = styled.div`
  color: #FF4500;
  margin-top: 20px;
  font-size: 24px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const FireworkContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const Firework = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${props => props.color};
  animation: ${firework} 2.5s ease-out forwards;
`;

export const MottoContainer = styled.div`
  text-align: left;
  height: 60px;
  margin-bottom: 280px;
  margin-left: 580px;
  width: 100%;
  max-width: 1500px;
`;

export const AnimatedMotto = styled.div`
  display: inline-block;
  white-space: nowrap;
  margin: 0;
  letter-spacing: 0.05em;
  font-weight: 900;
  font-size: 48px;
  background: linear-gradient(
    70deg,
    #FFA500 0%,
    #FFA500 40%,
    #FFD700 50%,
    #FFA500 58%,
    #FFA500 100%
  );
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${gleamAnimation} 4s linear infinite;
`;



