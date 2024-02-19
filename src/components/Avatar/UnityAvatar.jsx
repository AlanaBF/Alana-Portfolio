import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityAvatar() {
  const { unityProvider } = useUnityContext({


    loaderUrl: "AvatarBuild/Avatar.loader.js",
    dataUrl: "AvatarBuild/Avatar.data.gz",
    frameworkUrl: "AvatarBuild/Avatar.framework.js.gz",
    codeUrl: "AvatarBuild/Avatar.wasm.gz",
  });

  return <Unity className="unity-avatar" unityProvider={unityProvider} />;
}
export default UnityAvatar;
