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
  width: 100vw;
  height: 100vh;
  display: flex;
  margin: 0;
  justify-content: center;
  justify-items: center;
  text-align: center;
  background-color: ${theme.background.main};
`;
const Container = styled.div`
  border: 2px solid black;
  height: 100%;
  width: 60%;
  margin: 0;
  background-color: ${theme.background.main};
  display: grid;
  grid-template-rows: 10% repeat(2, 1fr);
  grid-template-columns: 1fr;
  grid-template-areas: 'text'
                       'addExercise'
                       'review';
  justify-content: center;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;


`;


const Header = styled.h1`
  grid-area: text;
  width: 100%;
  height: 10%;
  margin: 0;
  text-align: center;
  border: 2px solid black;
  justify-self: flex-start;



`;
const ExerciseBox = styled.div`
  grid-area: addExercise;
  border: 2px solid black;

  width: 100%;
`


const StyledButton = styled.button`
  grid-area: review;
  border: 2px solid black;
  width: 500px;
  max-height: 10%;
  text-align: center;
  align-items: center;
`;




const StyledModal = styled.div`
  background-color: #9FE2BF;
  top: 50%;
  left: 50%;
  z-index: 7;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 75%;
  grid-template-rows: 25% repeat(2, 1fr);
  grid-template-columns: 1fr;
  grid-template-areas: 'buttons'
                       'list'
                       'close'

  border: 2px solid black;
  overflow: scroll;
  justify-content: center;
  justify-items: center;
  text-align: center;
`;

const CloseButton = styled.button`
grid-area: close;
height: 50px;
width: 200px;

`
const TypesSection = styled.div`
grid-area: buttons;
max-height: 100%;


border: 2px solid black;

display: flex;
justify-content: center;
  justify-items: center;
  text-align: center;
gap: 5px;
`
const TypesButton = styled.button`
  width: 100px;
  height: 100%;


`


const ExerciseList = styled.div`
  grid-area: list;
  width: 50%;

  border: 2px solid black;
  margin: auto;


`


const Exercise = styled.div`
  width: 100%;
  height: 50px;
  max-height: 70px;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  &:hover {
    background-color: white;
    box-shadow: 10px 10px black;
  }
`;
const DisplayModal = styled.div`
  background-color: #9FE2BF;
  top: 50%;
  left: 50%;
  z-index: 7;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 75%;
  display: flex;
  justify-content: center;
  justify-items: center;
  text-align: center;
  margin: auto;
  border: 2px solid black;
  flex-direction: column;
`;

const VideoWindow = styled.div`
width: 70vh;
margin: auto;
border: 2px solid black;`


const Exerciseentry = styled.div`
border: 2px solid black;
display: grid;
grid-template-rows: 25% repeat(2, 1fr);
grid-template-columns: 1fr;
grid-template-areas: 'dropdown'
                     'data'
                     'buttons';

row-gap: 5px;

`;

const Dropdown = styled.div`
grid-area: dropdown;
background: none;
display: flex;
justify-content: flex-end;
align-items: flex-end;
gap: 5px;
`
const DropdownButton = styled.button`


justify-content: flex-end;
align-items: flex-end;
text-align: center;
gap: 5px;
width: 100px;
`
const SetData = styled.div`
grid-area: data;
border: 2px solid black;
row-gap: 5px;

`
const SetButton = styled.button`
  grid-area: buttons;
  display:flex;
  justify-self: flex-start;
  width: 100px;
  margin: auto;
`
const VideoClose = styled.button`
  width: 10vw;
  margin: auto;
`

export {
  theme,
  StyledModal,
  OuterContainer,
  Container,
  Header,
  StyledButton,
  CloseButton,
  TypesSection,
  TypesButton,
  Exercise,
  ExerciseList,
  DisplayModal,
  Exerciseentry,
  Dropdown,
  DropdownButton,
  SetData,
  SetButton,
  VideoWindow,
  VideoClose,
  ExerciseBox
}