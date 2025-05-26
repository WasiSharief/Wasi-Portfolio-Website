import { useState } from "react";

export default function Playstore({ ref }) {
  const [Hoveron, setHover] = useState("");

  return (
    <div ref={ref} className="PlaystoreSectionDiv">
      <div className="projectmaindiv">
      <a
            href="https://github.com/WasiSharief/LocationCapture"
            target={"_blank"}
          ><div
          className={`Playstore-Tile ${
            Hoveron === "ImgLoc" ? "ProjectHovered" : ""
          }`}
         
        >
         
            <div
              className={`playstoreProject ImgLocPlay ${
                Hoveron === "ImgLoc" ? "ProjectHovered ProjectScale" : ""
              }`}
            ></div>
         

          <div className="ImgLocPlayDetails">
            <h2 className="ImgLocPTitle">
              Image Location Capture<br></br>
            </h2>
            <h2 className="ImgLocPTitle">
              Downloads: 100+<br></br>
            </h2>
            <h3>
              Its a Cross Platform Mobile Application, To Capture location along
              with image and store it locally in Local Memory storage and can
              access without Internet. This App was built using React Native and
              Node.js
            </h3>
            <div className="playstorelogo">

            </div>
          </div>
        </div>
        </a>
      </div>
    </div>
  );
}
