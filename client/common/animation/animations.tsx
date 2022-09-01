import React from "react";
import Lottie from "react-lottie-player";
import DrawDeveloper from "./drawDelveloper.json";
import HomePageAnimation from "./homeAnimation.json";

// type AnimationPorps = {
//   animation?: LottieAnimation;
// };

// enum LottieAnimation {
//   DrawDeveloper = "DrawDeveloper",
// }

const animaitonList = [DrawDeveloper];

// enum AnimationType {
//   animation = Animation.,
// }

export default function LoadingAnimation() {
  return (
    <Lottie
      loop
      // animationData={DrawDeveloper}
      animationData={DrawDeveloper}
      play
      style={{ width: 500, height: 500 }}
    />
  );
}

export function HomeAnimation() {
  return (
    <Lottie
      loop
      animationData={HomePageAnimation}
      play
      style={{ width: 500, height: 500 }}
    />
  );
}
