'use client'

import React from "react";
import Lottie from "lottie-react";
import animationData from "./animationHub.json";

function LottieLandingHandler(animation:any) {
  return <Lottie loop animationData={animationData} />;
}

export default LottieLandingHandler;
