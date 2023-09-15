import styled from 'styled-components';


const theme = {
  background: {
    main: '#FFFFFF', //change
    bar: '#3c6e71'
  },
  colors: {
    button: '#FFFFFF',
    headings: '#FFFFFF',
    primaryText: '#FFFFFF'
  }
};
const OuterContainer = styled.div`
display: grid;
width: 100%;
height: 100%;
margin: 0;
justify-items: center;
align-items: center;
text-align: center;
grid-template-columns: 150px auto;
grid-template-rows: 150px 150px 150px;
grid-template-areas: 'header header header'
                      'nav1 info info'
                      'nav2 info info'
                      'nav3 info info';

`;
const Container = styled.div`
grid-area: info
display: grid;

grid-template-columns: repeat(2,1fr);
grid-template-rows: repeat(3,1fr);
grid-template-areas:
                     "text text"
                     "create results"
                     "footer footer";
width: 70vw;
height: 100vh;
margin: 0;
justify-items: center;
align-items: center;
`;


const CreateButton = styled.button`
position: relative;
grid-area: nav1;
max-width: 150px;
max-height: 100px;
`;
const ResultsButton = styled.button`
position: relative;
grid-area: nav2;
max-width: 150px;
max-height: 100px;
`;
const Header = styled.div`
grid-area: header;
background-color: ${(({theme}) => theme.background.bar)};
color: ${(({theme}) => theme.colors.primaryText)};
width: 100%;
height: 100%;

`
// background-color: ${(props) => props.theme.colors.button};
const StyledModal = styled.div`
top: 50%;
left: 50%;
z-index: 7;
position: absolute;
transform: translate(-50%, -50%);
width: 100%;
height: 100%;
`;


// const StyledContent = styled.div`
// text-align: center;
// display: flex;
// flex-direction: column;
// `;



// const ExerciseButtons = styled(StyledButton)`
// display: flex;
// justify-content: start;
// `

// const ListExercise = styled.div`
// border: solid 1px;
// width: 100%;


// `
// color: ${(props) => props.theme.colors.primaryText};
// background-color: ${(props) => props.theme.colors.button};

//${({theme}) => theme.colors.headings}
export {
  theme,
  StyledModal,
  OuterContainer,
  CreateButton,
  Container,
  Header,
  ResultsButton
}