import * as React from "react"
import Column from "./column"
// Images
import IMG1 from "../images/cinematic-blue-cover.jpg"
import IMG2 from "../images/cinematic-green-cover.jpg"
import IMG3 from "../images/lanscape-cover.jpg"
import IMG4 from "../images/vintage-cover.jpg"

const Columns: React.FC = () => {

  return (
    <>
      <div className="flex w-full container gap-4 pb-32 flex-col md:flex-row items-center flex-wrap">
        <Column image={IMG1} href="https://thedarkroomfactory.etsy.com/ca/listing/1838508074/6-lightroom-presets-cinematic-blue"/>
        <Column image={IMG2} href="https://thedarkroomfactory.etsy.com/ca/listing/1842233178/10-lightroom-presets-cinematic-green"/>
        <Column image={IMG3} href="https://thedarkroomfactory.etsy.com/ca/listing/1819820658/15-landscape-lightroom-presets-lightroom" />
        {/* <Column image={IMG4} href="https://thedarkroomfactory.etsy.com/ca/listing/1819820658/15-landscape-lightroom-presets-lightroom" /> */}
      </div>
    </>
  );
}

export default Columns
