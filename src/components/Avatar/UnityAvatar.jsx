import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityAvatar() {
  const { unityProvider } = useUnityContext({


    loaderUrl: "/Build/Avatar1.loader.js",
    dataUrl: "/Build/Avatar1.data.gz",
    frameworkUrl: "/Build/Avatar1.framework.js.gz",
    codeUrl: "/Build/Avatar1.wasm.gz",
  });

  return <Unity className="unity-avatar" unityProvider={unityProvider} />;
}
export default UnityAvatar;
