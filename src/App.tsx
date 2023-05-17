import  { useEffect, useState } from "react";
import GlobalStyles from "./components/Globalstyles";
import styled, { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import { defaultTheme } from "./themes/defaultTheme";
import { Input } from "./components/Input";
import Logo from "./assets/images/logo.svg";
import Label from "./components/Label";
import Tip from "./components/Tip";
import Results from "./components/Results";

const MAX_PERSONS = 9;

export default function Calculator() {
  const [bill, setBill] = useState<number | undefined>(undefined);
  const [people, setPeople] = useState<number | undefined>(undefined);
  const [tip, setTip] = useState<number | undefined>(undefined);

  const [peopleError, setPeopleError] = useState(false);
  const allRight =
    bill !== undefined && people !== undefined && tip !== undefined;
  const tipAmount = allRight ? ((bill * tip) / people).toFixed(2):undefined;
  const totalPerPerson = allRight ? ((bill * (1 + tip)) / people).toFixed(2):undefined;
  const showTip =
    allRight && !(tipAmount === "NaN " || tipAmount === "Infinity");
  const showTotal =
    allRight && !(totalPerPerson === "NaN" || totalPerPerson === "Infinity");
    

  useEffect(() => {
    if (people === 0) {
      setPeopleError(true);
    } else {
      setPeopleError(false);
    }
  }, [people]);
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Container>
        <Image src={Logo} />

        <CalculatorContainer>
          <InputsContainer>
            <Label>Bill</Label>
            <InputWithMargin
              iconType="bill"
              placeholder="0"
              type="number"
              min={0}
              value={bill}
              max={99999}
              onChange={(e) => {
                if (e.target.value.length < 9) {
                  setBill(e.target.valueAsNumber);
                }
              }}></InputWithMargin>
           
            <Label>People</Label>
            <Tip setTip={setTip} tip={tip}/>
            <InputWithMargin
              // number of people !
              iconType="person"
              placeholder="0"
              value={people || ""}
              min={0}
              step={1}
              type="number"
              onKeyDown={(e) => {
                if (e.key === ".") {
                  e.preventDefault();
                }
              }}
              onChange={(e) => {
                if (e.target.value.length < MAX_PERSONS) {
                  setPeople(e.target.valueAsNumber);
                }
              }}></InputWithMargin>

            <div style={{ color: "red" }}>
              {peopleError ? "can`t be Zero" : null}
            </div>
         <Results
         showTip={showTip}
         showTotal={showTotal}
         totalPerPerson={totalPerPerson}
         tipAmount={tipAmount}
         />
          </InputsContainer>
        </CalculatorContainer>
      </Container>
    </ThemeProvider>
  );
}

const InputsContainer = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  
`;



const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;
const Image = styled.img`
  padding: 50px 0 40px 0;
`;

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px 25px 0 0;
  overflow: hidden;
  padding: 24px;
  width: 100%;
  
`;

const InputWithMargin = styled(Input)`
  margin-bottom: 32px;
  width: 50%;
`;
