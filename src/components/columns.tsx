import * as React from "react"

interface ColumnsProps {
  children: React.ReactNode;
  gap?: string;
  columns?: string;
}

const Columns = ({ children, gap = "4", columns = "2" }: ColumnsProps) => {
  const classesTemps = ['grid-cols-2', 'grid-cols-3'];
 
  return (
    <>
      <div className={`flex md:grid grid-cols-${columns} w-full container gap-${gap} pb-12 lg:pb-28 flex-col text-center`}>
        {children}
      </div>
    </>
  );
}

export default Columns
