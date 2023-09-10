import React from "react";

interface Props {
  children: React.ReactNode;
  style?: string;
  id?: string;
}
const ComponentWrapper: React.FC<Props> = ({ children, style, id }: Props) => {
  return (
    <section id={id} className={`w-full ${style}`}>
      <div className="w-full h-full max-w-[1100px] mx-auto md:px-14 px-4">
        {children}
      </div>
    </section>
  );
};

export default ComponentWrapper;
