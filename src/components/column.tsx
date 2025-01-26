import * as React from "react";

/*
 * Types
 */
interface ColumnProps {
  image: string;
  href: string;
}

/*
 * Style
 */

const Column: React.FC<ColumnProps> = (props) => {
  const { image, href } = props

  return (
    <a
      href={href} 
      className={`column relative flex-1 w-full min-w-[30%]`} 
    >
      <img 
        className={`rounded object-cover w-full`} 
        src={image}
      />
    </a>
  );
}

export default Column
