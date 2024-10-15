import React, { useState, useEffect, useRef } from 'react';
import { FormContainer, Input, Button, ErrorMessage } from '../styles';

const TodoForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setError('Please enter a TODO question');
    } else {
      setError('');
      onSubmit(inputValue);
      setInputValue('');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <>
      <FormContainer>
        <Input 
          ref={inputRef}
          type="text" 
          placeholder="What todo?" 
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <Button onClick={handleSubmit}>DO it!</Button>
      </FormContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default TodoForm;