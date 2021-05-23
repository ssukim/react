import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import Item from "../../src/component/Item";

const Post = ({item}) => {
  // const router = useRouter();
  // const { id } = router.query;

  // const [item, setItem] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  // function getData() {
  //   axios.get(API_URL).then((res) => {
  //     //   console.log(res.data);
  //     setItem(res.data);
  //     setIsLoading(false);
  //   });
  // }

  // useEffect(() => {
  //   if (id && id > 0) {
  //     getData();
  //   }
  // }, [id]);

  // return (
  //   <>
  //     {isLoading ? (
  //       <div style={{ padding: "300px 0" }}>
  //         <Loader inline="centered" active>
  //           Loading
  //         </Loader>
  //       </div>
  //     ) : (
  //       <Item item={item} />
  //     )}
  //   </>
  // );
  return(
    <>
    <Head>
      <title>{item.name}</title>
      <meta name="description" content={item.description}></meta>
    </Head>
    {item &&<Item item={item} />}
    </>

  ) 
  
};

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}
