import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "@emotion/css";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";

const ToggleMenuIcon = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    margin-left: auto;
    cursor: pointer;
  }
`;

const NavWrapper = styled.header`
  background: #1b1f24;
  width: 100%;
`;

const NavCSS = styled.nav`
  max-width: 1250px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  align-items: center;
  height: 100px;

  @media (max-width: 1400px) {
    padding: 15px;
  }
`;

const Logo = styled.div`
  font-size: 27px;
  font-weight: 700;
  > a {
    &:link,
    &:visited {
      text-decoration: none;
      color: #05fa67;
    }
    :hover {
      color: #00ffea;
    }
  }
`;

const Sidebar = styled.ul`
  @media (min-width: 768px) {
    width: 392px;
  }
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 80%;
  height: 100%;
  margin: 0;
  box-shadow: rgb(88 102 126 / 8%) 0px 4px 24px,
    rgb(88 102 126 / 12%) 0px 1px 2px;
  background-color: #25282e;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  z-index: 4000;
  padding: 40px 40px 60px 40px;
  list-style: none;

  > li {
    margin-bottom: 20px;
    padding: 10px;
  }
`;

const NavListCSS = styled.ul`
  margin-left: auto;
  align-items: center;
  display: inline-flex;
  padding: 15px;
  list-style: none;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const link = css`
  :link,
  :visited {
    color: white;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    margin: 0 25px 0 0;
    padding-bottom: 6px;
    text-decoration: none;
    background-image: linear-gradient(
      transparent 0%,
      transparent 90%,
      #05fa67 90%,
      #05fa67 100%
    );
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position-x: right;
    transition: background-size 0.3s;
  }
  :active {
    color: #05fa67;
  }

  :hover {
    background-size: 100% 100%;
    background-position-x: left;
  }
`;

const Navbar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <NavWrapper>
      <NavCSS>
        <Logo>
          <Link to="/">Rick and Morty</Link>
        </Logo>
        <ToggleMenuIcon
          onClick={(e) => {
            e.stopPropagation();
            setIsOpenNav(!isOpenNav);
          }}
        >
          <MenuOutlined style={{ cursor: "pointer", color: "white" }} />
        </ToggleMenuIcon>
        {isOpenNav ? (
          <Sidebar>
            <li className={link} onClick={() => setIsOpenNav(false)}>
              <CloseOutlined style={{ cursor: "pointer", color: "white" }} />
            </li>
            <li>
              <Link to="/characters" className={link}>
                Characters
              </Link>
            </li>
            <li>
              <Link to="/episodes" className={link}>
                Episodes
              </Link>
            </li>
            <li>
              <Link to="/location" className={link}>
                Location
              </Link>
            </li>
          </Sidebar>
        ) : (
          <NavListCSS>
            <li>
              <Link to="/characters" className={link}>
                Characters
              </Link>
            </li>
            <li>
              <Link to="/episodes" className={link}>
                Episodes
              </Link>
            </li>
            <li>
              <Link to="/location" className={link}>
                Location
              </Link>
            </li>
          </NavListCSS>
        )}
      </NavCSS>
    </NavWrapper>
  );
};

export default Navbar;
