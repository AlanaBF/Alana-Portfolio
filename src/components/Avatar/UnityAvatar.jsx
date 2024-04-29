import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityAvatar() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Build/Avatar1.loader.js",
    dataUrl: "/Build/Avatar1.data",
    frameworkUrl: "/Build/Avatar1.framework.js",
    codeUrl: "/Build/Avatar1.wasm",
  });

  // Define custom styles
  const unityStyle = {
    width: "30%", // Adjust width as needed
    height: "30%", // Adjust height as needed
    borderRadius: "50px",
    margin: "auto",
    border: "solid 10px var(--dark-blue)"
  };

  return <Unity unityProvider={unityProvider} style={unityStyle} />;
}

export default UnityAvatar;