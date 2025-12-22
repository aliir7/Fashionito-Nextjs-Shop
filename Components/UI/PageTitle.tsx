import type React from "react";

type PageTitleProps = {
  title: string;
  children: React.ReactNode;
};

function PageTitle({ title, children }: PageTitleProps) {
  return (
    <div className="page-section flex items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center z-10">
        <h2 className="text-3xl lg:text-5xl font-semibold text-white">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}

export default PageTitle;
