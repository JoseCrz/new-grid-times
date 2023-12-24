import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";

import { COLORS, QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>

        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  @media ${QUERIES.laptopAndUp} {
    background-color: ${COLORS.gray[300]};
    grid-template-columns: 1fr 1fr;
    gap: 1px;
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    background-color: ${COLORS.gray[100]};
    padding-right: 16px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SportsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    background-color: ${COLORS.gray[100]};
    padding-left: 16px;
    overflow: auto;
  }
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

export default SpecialtyStoryGrid;
