import React from "react";
import Lottie from "lottie-react";
import animationData from '../../assets/Animation - 1728464284574.json';

export default function NotFound() {
  return (
    <div className="max-w-screen-sm">
        <Lottie animationData={animationData}/>
    </div>
  )
}