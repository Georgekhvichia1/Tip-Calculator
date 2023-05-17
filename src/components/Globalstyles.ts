import  { createGlobalStyle } from 'styled-components';



const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap'); */

* {
 
    margin:0;
    padding:0;
    box-sizing:border-box;
}
  body{
    
    background-color: ${props => props.theme.background};
    font-family: 'Space Mono';
   

    }

 
`;
 


export default GlobalStyles;