import React from "react";
import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px; 
  margin-bottom: 32px;

  .thumbnail {
    margin: 0 auto;
    img {
      width: 304px;
      height: 176px;
      object-fit: cover;
    }
  }

  .contents {
    flex-wrap: wrap;
    h2 {
      margin: 0;
      a {
        color: black;
        text-decoration:none;
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 120%;
        /* or 26px */
        text-align: center;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      white-space: normal;
    }
  }
`;
const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        {/* <p>{description}</p> */}
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
