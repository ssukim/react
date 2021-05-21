import { Grid } from "semantic-ui-react";
import styles from "./ItemList.module.css";
import styled from "styled-components";
import Link from "next/link";

const ItemListBlock = styled.div`
  padding-bottom: 20px;
  text-align: center;
  img {
    display: block;
    margin: 0 auto;
  }
  span {
    display: block;
    margin-bottom: 10px;
    color: #999;
    text-align: center;
  }
  strong:nth-child(1) {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 160px;
    margin: 10px auto;
  }
  strong:nth-child(2) {
    font-size: 17px;
    color: #00bcd4;
    font-weight: bold;
  }
`;

export default function ItemList({ list }) {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <Link href={`/view/${item.id}`}>
                <a>
                  <ItemListBlock>
                    <img src={item.image_link} alt={item.name} />
                    <strong>{item.name}</strong>
                    <span>
                      {item.category} {item.product_type}
                    </span>
                    <strong>${item.price}</strong>
                  </ItemListBlock>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
