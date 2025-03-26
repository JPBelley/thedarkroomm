import * as React from "react"

interface ColumnsProps {
  children: React.ReactNode;
  gap?: string;
}

const Columns = ({ children, gap = "4" }: ColumnsProps) => {
  
  return (
    <>
      <div className={`flex w-full container gap-${gap} pb-12 lg:pb-28 flex-col md:flex-row items-center flex-wrap`}>
        {children}
      </div>
    </>
  );
}

export default Columns
