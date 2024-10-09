import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const MyComponent = () => {
  return (
    <div className='App'>
      <Typewriter
        words={["Welcome aboard!", "Let’s create something great together!"]}
        loop={Infinity}
        cursor
        cursorStyle='|'
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default MyComponent;
