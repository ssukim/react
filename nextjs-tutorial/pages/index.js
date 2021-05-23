import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import ItemList from "../src/component/ItemList";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL =
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    axios.get(API_URL).then((res) => {
      // console.log(res.data);
      setList(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Home | 쑤킴</title>
      </Head>
      {isLoading && (
        <div style={{padding: "300px 0"}}>
            <Loader inline="centered" active>
              Loading
            </Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <Header as="h3" style={{ paddigTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddigTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}
    </div>
  );
}
