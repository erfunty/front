import Styled, { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Heading as="h1">fuck world</Heading>
          <div>
            <Heading as="h2">Check in and out </Heading>
            <Button>Check in</Button>
            <Button>Check out</Button>
          </div>
        </Row>
        <Row>

        <Heading as="h3">form</Heading>
        <form>
          <Input type="number" placeholder="Number of gusts" />
          <Input type="number" placeholder="Number of gusts" />
        </form>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
