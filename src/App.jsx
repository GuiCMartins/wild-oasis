import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Heading";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Heading as={"h1"}>Hello World</Heading>
        <Heading as={"h2"}>Hello World</Heading>
        <Heading as={"h3"}>Hello World</Heading>
      </div>
    </>
  );
}

export default App;
