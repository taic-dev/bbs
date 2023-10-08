"use client";

import styled from "@emotion/styled";
import { MediaCard } from "@/components/elements/Card/MediaCard";
import { CARD_LIST_DUMMY_DATA } from "@/constants/dummyData";

export default function Card() {
  const CardWrapper = styled.div`
    padding-bottom: 50px;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  `;

  return (
    <CardWrapper>
      {CARD_LIST_DUMMY_DATA.map(({ id, title, text, image_url }) => (
        <MediaCard 
          key={id}
          id={id}
          title={title}
          text={text}
          image_url={image_url}
        />
      ))}
    </CardWrapper>
  );
}
