import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <MobileHeader />
      <DesktopHeader />
    </header>
  );
};

function DesktopHeader() {
  return (
    <DesktopHeaderWrapper>
      <ActionGroup>
        <button>
          <Search size={24} />
        </button>
        <button>
          <Menu size={24} />
        </button>
      </ActionGroup>
      <Logo />
      <div>
        <Button>Subscribe</Button>
        <a
          href="localhost:3000#"
          style={{
            display: "block",
            textDecoration: "underline",
            marginTop: "8px",
            fontSize: "1rem",
          }}
        >
          Already a subscriber?
        </a>
      </div>
    </DesktopHeaderWrapper>
  );
}

function MobileHeader() {
  return (
    <MobileHeaderWrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "32px",
          marginBottom: "48px",
        }}
      >
        <Logo />
      </div>
    </MobileHeaderWrapper>
  );
}

const MobileHeaderWrapper = styled.div`
  display: block;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopHeaderWrapper = styled(MaxWidthWrapper)`
  display: none;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 48px;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

export default Header;
