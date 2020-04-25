import React, { ReactElement } from "react";
import "./styles.less";
type ContainerProps = {
  children: ReactElement[] | ReactElement;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container">
      {React.Children.map(children, (child) => (
        <React.Fragment>{child}</React.Fragment>
      ))}
    </div>
  );
};
export default Container;
