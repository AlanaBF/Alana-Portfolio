import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityAvatar() {
  const { unityProvider } = useUnityContext({


    loaderUrl: "Build/Avatar.loader.js",
    dataUrl: "Build/Avatar.data.gz",
    frameworkUrl: "Build/Avatar.framework.js.gz",
    codeUrl: "Build/Avatar.wasm.gz",
  });

  return <Unity className="unity-avatar" unityProvider={unityProvider} />;
}
export default UnityAvatar;
