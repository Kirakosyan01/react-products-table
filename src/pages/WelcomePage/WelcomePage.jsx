import React from 'react';
import animationData from '../../assets/Animation - 1728405984586.json';
import Lottie from 'lottie-react';
import PageTransition from '../../PageTransition/PageTransition';
import MyComponent from '../../Components/Typewriter/Typewriter';

export default function WelcomePage() {

  return (
    <PageTransition>
      <div className='flex items-center'>
    <div>
      <Lottie animationData={animationData}/>
    </div>
    <div className='text-5xl ml-24 max-w-md'>
      <MyComponent />
    </div>
      </div>
    </PageTransition>
  )
}
