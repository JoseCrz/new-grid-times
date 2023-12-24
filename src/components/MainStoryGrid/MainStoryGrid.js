import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";

import { COLORS, QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 252px;
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
  }

  @media ${QUERIES.laptopAndUp} {
    background-color: ${COLORS.gray[300]};
    grid-template-columns: 477px 2fr 1.5fr;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    gap: 1px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.laptopAndUp} {
    background-color: ${COLORS.gray[100]};
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media ${QUERIES.laptopAndUp} {
    background-color: ${COLORS.gray[100]};
    padding: 0 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(172px, 100%), 1fr));
    gap: 32px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(auto-fill, minmax(min(386px, 100%), 1fr));
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  background-color: ${COLORS.gray[100]};
  @media ${QUERIES.tabletAndUp} {
    background-color: ${COLORS.gray[100]};
    padding-left: 16px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.tabletAndUp} {
    background-color: ${COLORS.gray[100]};
    padding-top: 16px;
    padding-left: 16px;
  }
`;

export default MainStoryGrid;
