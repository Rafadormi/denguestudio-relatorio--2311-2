import React from 'react';

interface A4PageProps {
  children: React.ReactNode;
  className?: string;
  isCover?: boolean;
}

const A4Page: React.FC<A4PageProps> = ({ children, className = '', isCover = false }) => {
  return (
    <div 
      className={`
        bg-white mx-auto shadow-xl relative
        w-full md:w-[21cm] min-h-[29.7cm]
        print:w-full print:shadow-none print:m-0 print:min-h-0 print:break-after-page
        ${isCover ? 'flex flex-col' : ''}
        ${className}
      `}
      style={{ padding: isCover ? '0' : '2cm' }}
    >
      {children}
    </div>
  );
};

export default A4Page;