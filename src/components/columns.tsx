import * as React from "react"

interface ColumnsProps {
  children: React.ReactNode;
  gap?: string;
  columns?: string;
}

const Columns = ({ children, gap = "4", columns = "2" }: ColumnsProps) => {
  
  return (
    <>
      <div className={`flex md:grid grid-cols-${columns} w-full container gap-${gap} pb-12 lg:pb-28 flex-col text-center`}>
        {children}
      </div>
    </>
  );
}

export default Columns
