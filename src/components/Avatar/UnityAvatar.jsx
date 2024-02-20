import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityAvatar() {
  const { unityProvider } = useUnityContext({


    loaderUrl: "/Build/Avatar1.loader.js",
    dataUrl: "/Build/Avatar1.data",
    frameworkUrl: "/Build/Avatar1.framework.js",
    codeUrl: "/Build/Avatar1.wasm",
  });

  return <Unity className="unity-avatar" unityProvider={unityProvider} />;
}
export default UnityAvatar;
