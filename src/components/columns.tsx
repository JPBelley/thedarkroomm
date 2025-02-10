import * as React from "react"
import Column from "./column"

// interface ColumnsProps {
//   columns: Array<>;
// }

const Columns: React.FC<ColumnsProps>  = ({columns}) => {
  
  return (
    <>
      <div className="flex w-full container gap-4 pb-32 flex-col md:flex-row items-center flex-wrap">
        {columns.map((column: any ,i: number) => {
          const { etsyLink, featuredImage } = column.node?.frontmatter;

          return (
            <Column key={i} image={featuredImage} href={etsyLink} />
        )})}
      </div>
    </>
  );
}

export default Columns
