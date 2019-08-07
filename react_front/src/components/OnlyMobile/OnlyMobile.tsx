import React from "react";
import iphoneFrame from '../../static/images/iphone-frame.png';
import styled from '../../styles/typed-components';

const ResponsibleApp = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;

& > div {
  position: relative;
  width: 299px;
  height: 626px;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    background-image : url(${iphoneFrame});
    width: 423px;
    height: 718px;
    top: -4rem;
    left: -2.1rem;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;
  }
}


${props => props.theme.media.phone`
  & > div {
    width: 100%;
    height: 100%;
    position: static;
    margin: 0;
    &::before {
      content: none;
    }
  }
`}
`;

interface IProps {
  children: any;
}

const OnlyMobile = (props: IProps) => {
  const { children } = props;
  return (
    <ResponsibleApp>
      <div>
        {children}
      </div>
    </ResponsibleApp>
  )
}

export default OnlyMobile;