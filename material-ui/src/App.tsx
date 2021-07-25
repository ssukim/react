import { theme } from './theme/theme';
import styled, { ThemeProvider } from "styled-components";
import Buttons from "./components/Atom/Button";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: "#228be6",
          gray: "#495057",
          pink: "#f06595",
        },
      }}
    >
      <AppBlock>
        <Buttons color={'gray'}/>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
