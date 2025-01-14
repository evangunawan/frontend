import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import React from 'react';
import { Content } from 'src/components/layout/Content';

const ItemWrapper = styled.a`
  min-height: 120px;
  padding: 2rem;
  width: 1px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
  text-decoration: none;
  color: var(--texxt-primary);
  transition: 0.2s;
  &:hover {
    text-decoration: none;
    background-color: var(--primary);
    margin: -8px;
    padding: 40px;
    z-index: 10;
    box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.2);
    --text-primary: white;
    * {
      color: var(--text-primary);
    }
  }
  @media screen and (max-width: 800px) {
    padding: 1rem 1.25rem;
    &:not(:last-child) {
      border-bottom: 1px solid var(--border-color);
    }
  }
`;

const Category = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  font-size: 12px;
  color: var(--text-secondary);
`;

const Title = styled.span`
  margin-top: 15px;
  font-weight: 600;
  font-size: 20px;
  display: block;
`;

const Action = styled.div`
  color: var(--primary);
  margin-top: 0.5rem;
`;

const HomeNewsItem: React.FC<{
  to?: string;
  href?: string;
  category: React.ReactNode;
  title: React.ReactNode;
  action: React.ReactNode;
}> = ({ to, href, category, title, action }) => {
  const innerContent = (
    <>
      <div>
        <Category>{category}</Category>
        <Title>{title}</Title>
      </div>
      <Action>{action}</Action>
    </>
  );
  return to ? (
    <ItemWrapper as={Link} to={to} className="home-news-item">
      {innerContent}
    </ItemWrapper>
  ) : (
    <ItemWrapper href={href} target="_blank" rel="noreferrer noopener">
      {innerContent}
    </ItemWrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  @media screen and (max-width: 800px) {
    position: relative;
  }
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
`;
const WrapperInner = styled.div`
  position: absolute;
  top: -4rem;
  width: calc(100% - 2rem);
  display: flex;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.06);
  z-index: 10;
  @media screen and (max-width: 800px) {
    position: relative;
    display: block;
    width: calc(100%);
    top: 2rem;
    & > * {
      width: 100%;
      display: block;
    }
  }
`;
export const NewsSection = () => {
  return (
    <Wrapper>
      <Content style={{ position: 'relative' }}>
        <WrapperInner>
          <HomeNewsItem
            category="JOIN US"
            title="Connect to Flexpool"
            action="Get Started"
            to="/get-started"
          />
          <HomeNewsItem
            category="LEARN"
            title="Read our Blog"
            action="Learn"
            href="https://medium.com/flexpool/"
          />
          <HomeNewsItem
            category="SUPPORT"
            title="Get support"
            action="Contact"
            to="/support"
          />
        </WrapperInner>
      </Content>
    </Wrapper>
  );
};
