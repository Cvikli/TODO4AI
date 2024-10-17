
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { MottoContainer, AnimatedMotto } from '../styles';

const mottos = [
  "TODO for AI\nAutomate Your Tasks\nUnlock Your Superhuman Efficiency",
];

const MottoDisplay = () => {
  const [motto, setMotto] = useState('');
  const [currentMottoIndex, setCurrentMottoIndex] = useState(0);
  const timeoutRef = useRef(null);
  const charIndexRef = useRef(0);
  const isTypingRef = useRef(true);

  const animateText = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (isTypingRef.current) {
      if (charIndexRef.current < mottos[currentMottoIndex].length) {
        setMotto(mottos[currentMottoIndex].substring(0, charIndexRef.current + 1));
        charIndexRef.current++;
        timeoutRef.current = setTimeout(animateText, 40);
      } else {
        isTypingRef.current = false;
        timeoutRef.current = setTimeout(animateText, 2500);
      }
    } else {
      if (charIndexRef.current > 0) {
        setMotto(mottos[currentMottoIndex].substring(0, charIndexRef.current - 1));
        charIndexRef.current--;
        timeoutRef.current = setTimeout(animateText, 15);
      } else {
        isTypingRef.current = true;
        setCurrentMottoIndex((prevIndex) => (prevIndex + 1) % mottos.length);
        charIndexRef.current = 0;
        timeoutRef.current = setTimeout(animateText, 100);
      }
    }
  }, [currentMottoIndex]);

  useEffect(() => {
    animateText();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [animateText]);

  return (
    <MottoContainer>
      <AnimatedMotto>{motto}</AnimatedMotto>
    </MottoContainer>
  );
};

export default MottoDisplay;

