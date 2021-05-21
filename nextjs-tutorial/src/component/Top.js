import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "100px 0 0 " }}>
          <img
            src="/images/fire.png"
            alt="logo"
            style={{ display: "block", width: 80 }}
          />
        </div>
        <Header as="h1">쑤킴</Header>
      </div>
      <Gnb />
    </div>
  );
}
