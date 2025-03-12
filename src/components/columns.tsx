import * as React from "react"

interface ColumnsProps {
  children: React.ReactNode;
}

const Columns = ({ children }: ColumnsProps) => {
  
  return (
    <>
      <div className="flex w-full container gap-4 pb-12 lg:pb-28 flex-col md:flex-row items-center flex-wrap">
        {children}
      </div>
    </>
  );
}

export default Columns
