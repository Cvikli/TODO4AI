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
  max-width: 60%;
  background-color: rgba(42, 42, 42, 0.8);
  border-radius: 35px;
  overflow: visible;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  margin: 0 auto;

  @media (max-width: 1308px) {
    max-width: 80%;
    border-radius: 20px;
  }
  @media (max-width: 768px) {
    max-width: 92%;
    border-radius: 20px;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 2rem;
  font-size: 1.5rem;
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
    font-size: 1.2rem;
    padding: 1.5rem;
  }
`;

export const Button = styled.button`
  padding: 2rem 3rem;
  font-size: 1.5rem;
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
    padding: 1.5rem;
    font-size: 1.2rem;
    border-radius: 0 20px 20px 0;
  }
`;

export const Answer = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 3rem;
  text-align: center;
  animation: ${fadeIn} 1s ease-in;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
`;

export const ErrorMessage = styled.div`
  color: #FF4500;
  margin-top: 1rem;
  font-size: 1.2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
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
  height: 210px;
  margin-bottom: 9rem;
  width: 100%;
  max-width: 90%;
  padding-left: 20%;

  @media (max-width: 1308px) {
    margin-bottom: 4rem;
    padding-left: 5%;
  }
  @media (max-width: 768px) {
    padding-left: 0%;
  }
`;

export const AnimatedMotto = styled.div`
  display: inline-block;
  white-space: pre-wrap;
  margin: 0;
  letter-spacing: 0.05em;
  font-weight: 900;
  font-size: 3.5rem;
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
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 1308px) {
    margin-bottom: 4rem;
    font-size:  3rem;
  }
  @media (max-width: 768px) {
    font-size:  2.5rem;
  }
`;

