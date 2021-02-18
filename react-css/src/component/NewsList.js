import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "./lib/usePromise";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 854px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsItemBlock = styled.div`
  display: flex;
  margin-right: 28px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const NewsLogo = styled.img`
  margin-top: 2rem;
  margin-bottom: 3rem;
  width: 854px;
  height: 533px;
`;

const NewsLogoTitle = styled.div`
  font-family: New York Extra Large;
  font-size: 54px;
  margin-bottom: 32px;
  text-align: center;
`;

const NewsLogoSubTitle = styled.div`
  font-family: SF Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 170%;
  /* or 34px */
  text-align: center;
  margin-bottom: 34px;
`;

const Line = styled.div`
  width: 640px;
  height: 0px;
  border: 2px solid #000000;
  margin: 0 auto;
  margin-bottom: 64px;
`;

const AllNewsTitle = styled.div`
  font-family: New York Extra Large;
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 53px;
  /* identical to box height */

  text-align: center;
  margin-bottom: 34px;
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f`
    );
  }, [category]);

  // 대기중일 때
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  // 아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  // response 값이 유효할 때
  const { articles } = response.data;
  return (
    <>
      <NewsListBlock>
        <NewsLogo src="/images/article_logo.png" alt="article" />
        <NewsLogoTitle>
          A few words about this blog platform, Ghost, and how this site was
          made
        </NewsLogoTitle>
        <NewsLogoSubTitle>
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </NewsLogoSubTitle>
        <Line />
        <AllNewsTitle>All articles</AllNewsTitle>
        <NewsItemBlock>
          {articles.map((article) => (
            <NewsItem key={article.url} article={article} />
          ))}
        </NewsItemBlock>
      </NewsListBlock>
    </>
  );
};

export default NewsList;
