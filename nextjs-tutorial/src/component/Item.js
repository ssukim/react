import { Button, Divider, Header } from "semantic-ui-react";
import styled from "styled-components";

export default function Item({ item }) {
  const ItemWrap = styled.div`
    display: flex;
    padding: 40px 0;
  `;

  const ItemImg = styled.div`
    flex: 200px 0 0;
  `;

  const ItemInfo = styled.div`
    strong {
      display: block;
      font-size: 24px;
      margin-top: 20px;
    }
    strong:nth-child(2) {
      display: block;
      font-size: 34px;
      margin: 20px 0 40px;
      color: #00bcd4;
    }
  `;

  const { image_link, name, price, description } = item;

  return (
    <>
      <ItemWrap>
        <ItemImg>
          <img src={image_link} alt={name} />
        </ItemImg>
        <ItemInfo>
          <strong>{name}</strong>
          <strong>{price}</strong>
          <Button color="orange">구매하기</Button>
        </ItemInfo>
      </ItemWrap>
      <Divider />
      <Header as="h3">Description</Header>
      <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
    </>
  );
}
