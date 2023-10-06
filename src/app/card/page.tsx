'use client'

import styled from "@emotion/styled";
import { MediaCard } from "@/components/elements/Card/MediaCard";

export default function Card() {

  const CardWrapper = styled.div`
    padding-bottom: 50px;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  `

  return (
    <CardWrapper>
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
      <MediaCard />
    </CardWrapper>
  )
}