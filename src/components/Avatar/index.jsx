

import { Exhibit } from "@readyplayerme/visage";
const config = {
  clearCache: true,
  bodyType: "fullbody",
  quickStart: false,
  language: "en",
};

const style = { width: "100%", height: "100vh", border: "none", touchAction: 'none'};
const modelSrc = "https://models.readyplayer.me/65cdecfff5da9f6b9251d2f7.glb"

export default function Avatar1() {

  return (
    <>
      <Exhibit modelSrc={modelSrc} config={config} style={style} />
    </>
  );
}
