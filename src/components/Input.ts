import styled from "styled-components";
import DollarIcon from "../assets/images/icon-dollar.svg";
import personIcon from "../assets/images/icon-person.svg";

interface Props {
  iconType?: "bill" | "person";
}
const icon = (props:Props) => {
  switch (props.iconType) {
    case "bill":
      return DollarIcon;
    case "person":
      return personIcon;
    default:
      return "";
  }

};

export const Input = styled.input<Props>`
  all: unset;
  height: 48px;
  padding-right: 17px;
  border-radius: 5px;
  
  background-image: url(${icon});
  background-position: left 19px center;
  background-color: ${(props) => props.theme.inputBackground};
  background-repeat: no-repeat;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 24px;
  text-align: right;
  color: ${({ theme }) => theme.colors.cyan.dark};
  width: calc(100% - 17px); 


  &::placeholder {
    color: ${({ theme }) => theme.colors.cyan.dark};
    font-family: ${({ theme }) => theme.fonts.primary}; 
    opacity: 0.35;
  }
  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.cyan.strong};
  }
  input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button
     {
       -webkit-appearance: none;
       margin: 0;
      }
`;
