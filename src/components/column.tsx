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
const columnStyle = {
  transition: '.2s ease-in-out'
};

const imageStyle = {
  transition: '.2s ease-in-out'
};

const Column: React.FC<ColumnProps> = (props) => {
  const { image } = props
  const [hover, setHover] = React.useState(false);

  return (
    <div 
      className={`column relative flex-1 h-[500px]${hover ? ' is-hovered' : ''}`} 
      // onMouseEnter={() => setHover(true)}
      // onMouseLeave={() => setHover(false)}
      style={columnStyle}
    >
      <img 
        className={`absolute inset-0 top-1/2 -translate-y-1/2 rounded object-cover w-full${hover ? ' h-[700px]' : ' h-[500px]'}`} 
        src={image}
        style={imageStyle}
      />
    </div>
  );
}

export default Column
