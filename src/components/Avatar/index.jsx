import { Exhibit } from "@readyplayerme/visage";

const config = {
  clearCache: true,
  bodyType: "fullbody",
  quickStart: false,
  language: "en",
};

const style = {
  width: "100%",
  height: "50vh",
  border: "none",
  touchAction: "none",
};

export default function Avatar1() {
  return (
    <>
      <Exhibit
        fit
        float
        scale={1}
        config={config}
        style={style}
        cameraInitialDistance={3.2}
        // animationSrc={Dance}
        backLightColor="#FFB878"
        backLightIntensity={2.2}
        cameraTarget={1.55}
        dpr={2}
        fillLightColor="#6794FF"
        fillLightIntensity={0.8}
        keyLightColor="#FFFFFF"
        keyLightIntensity={1.2}
        modelSrc="https://models.readyplayer.me/640c924dab2415db27b49dc6.glb"
      />
    </>
  );
}


