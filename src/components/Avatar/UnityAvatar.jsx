import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityAvatar() {
  const { unityProvider, unload } = useUnityContext({
    loaderUrl: "/Build/Avatar1.loader.js",
    dataUrl: "/Build/Avatar1.data",
    frameworkUrl: "/Build/Avatar1.framework.js",
    codeUrl: "/Build/Avatar1.wasm",
  });

  useEffect(() => {
    return () => {
      unload().catch((error) => {
        console.error("Failed to unload Unity instance:", error);
      });
    };
  }, [unload]);

  // Define custom styles
  const unityStyle = {
    width: "60%", // Adjust width as needed
    height: "70%", // Adjust height as needed
    borderRadius: "50px",
    border: "solid 10px var(--dark-blue)"
  };

  return <Unity unityProvider={unityProvider} style={unityStyle} />;
}

export default UnityAvatar;