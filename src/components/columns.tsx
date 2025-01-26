import * as React from "react"
import Column from "./column"
// Images
import IMG1 from "../images/cinematic-blue-cover.jpg"
import IMG2 from "../images/cinematic-green-cover.jpg"
import IMG3 from "../images/lanscape-cover.jpg"

const Columns: React.FC = () => {

  return (
    <>
      <div className="flex w-full container gap-4 px-5 pb-32 flex-col md:flex-row items-center flex-wrap">
        <Column image={IMG1}/>
        <Column image={IMG2}/>
        <Column image={IMG3}/>
      </div>
    </>
  );
}

export default Columns
