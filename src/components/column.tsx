import * as React from "react";

/*
 * Types
 */
interface ColumnProps {
  image: string;
}

/*
 * Style
 */

const Column: React.FC<ColumnProps> = (props) => {
  const { image } = props

  return (
    <div 
      className={`column relative flex-1 w-full min-w-[30%]`} 
    >
      <img 
        className={`rounded object-cover w-full`} 
        src={image}
      />
    </div>
  );
}

export default Column
