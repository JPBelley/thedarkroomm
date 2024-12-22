import * as React from "react"
import Column from "./column"
// Images
import TowerImg from "../images/tower.jpg"
import PalmTreeImg from "../images/palm-tree.jpg"
import CampagnaImg from "../images/la-campagna.jpg"

const Columns: React.FC = () => {

  return (
    <div className="flex w-full gap-4 px-5 py-40 flex-col md:flex-row items-center">
      <Column image={PalmTreeImg}/>
      <Column image={TowerImg}/>
      <Column image={CampagnaImg}/>
    </div>
  );
}

export default Columns
