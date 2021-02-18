import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: 'NEWS',
  },
  {
    name: 'about',
    text: 'ABOUT',
  },
  {
    name: 'link',
    text: 'LINK',
  },
  {
    name: 'projects',
    text: 'PROJECTS',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 133px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.16);
`;

const CategoryColumn = styled.div`
  display: flex;
  &:first-child {
    margin-left: 30px;
    margin-right: auto;
  }
  &:last-child {
    // margin-left: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #495057;
    // color: #22b8cf;
    &:hover {
      color: #495057;
    }
  }

  & {
    margin-right: 1rem;
  }
`;
const Categories = () => {
  return (
    <CategoriesBlock>
      <CategoryColumn>
        <img src="images/newzen_logo.png" alt="logo"/>
      </CategoryColumn>
      <CategoryColumn>
        {categories.map(c => (
          <Category
            key={c.name}
            activeClassName="active"
            exact={c.name === 'all'}
            to={c.name === 'all' ? '/' : `/${c.name}`}
          >
            {c.text}
          </Category>
        ))}
      </CategoryColumn>
    </CategoriesBlock>
  );
};

export default Categories;
