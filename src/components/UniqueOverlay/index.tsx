import { useTransform } from "framer-motion";
import React, { useState } from "react";
import useWrapperScroll from "../Model/useWrapperScroll";
import Sidebar from "../Sidebar";

import { Container, Header, Logo, Burger, Footer } from "./styles";

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();
  const [close, setClose] = useState(false)
  const showSidebar = () => {
    setClose(!close)
  }
 
  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo />
        <ul>
          <li>Model S</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Model 3</li>
          <li>Solar Panels</li>
        </ul>
        <div onClick={() => showSidebar}>
          <Burger />
        </div>
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">made with love</a>
          </li>
          <li>
            <a href="#">by Matheus</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
