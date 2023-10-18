"use client";

import styled from "@emotion/styled";
import { MediaCard } from "@/features/Card/MediaCard";
import { PostsData } from "@/types";
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

  console.log(postsData);

  if (isLoading) return <p>...Loading</p>;

  return (
    <CardWrapper>
      {postsData.map((postData : PostsData) => (
        <MediaCard
          key={postData.id}
          postData={postData}
        />
      ))}
    </CardWrapper>
  );
}
