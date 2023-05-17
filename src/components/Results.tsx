
import styled from 'styled-components';
import ResetButton from './ResetButton';
import { Bill, BillName, PerPerson } from './Bill';



interface Props{
    showTip:boolean;
    showTotal:boolean;
    tipAmount: string | undefined;
    totalPerPerson: string | undefined;
}
export default function Results(props: Props) {
    const { showTip, tipAmount, totalPerPerson, showTotal} = props;
  return (
    <ResultContainer>
    <BillContainer>
      <div>
        <BillName>tip amount</BillName>
        <PerPerson>/person</PerPerson>
        <Bill>{showTip ? tipAmount : "$0.00"}</Bill>
      </div>
    </BillContainer>

    <BillContainer>
      <div>
        <BillName> total</BillName>
        <PerPerson>/person</PerPerson>
        <Bill>{showTotal ? totalPerPerson : "$0.00"}</Bill>
      </div>
    </BillContainer>
    <ResetButton>Reset</ResetButton>
  </ResultContainer>
  )
}

const BillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ResultContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cyan.dark};
  width: 100%;
  border-radius: 15px;
  padding: 39px 22px 24px 24px;
`;
