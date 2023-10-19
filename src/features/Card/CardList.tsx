"use client";

import styled from "@emotion/styled";
import { MediaCard } from "@/features/Card/MediaCard";
import { PostData } from "@/types";
import { useGetPost } from "@/hooks/useGetPost";

const CardWrapper = styled.div`
  padding-bottom: 50px;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export function CardList() {
  const { posts, isLoading } = useGetPost();
  const postsData = posts && [...posts].reverse();

  if (isLoading) return <p>...Loading</p>;

  return (
    <CardWrapper>
      {postsData.map((postData : PostData) => (
        <MediaCard
          key={postData.id}
          postData={postData}
        />
      ))}
    </CardWrapper>
  );
}
