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
  height: 100%;
  width: 60%;
  margin: 0;
  background-color: ${theme.background.main};
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr;
  grid-template-areas: 'text'
                       'addExercise'
                       'review';
  justify-content: center;
  text-align: center;
  align-items: center;

`;
const Nav = styled.div`
  display: review;
  display: flex;
  justify-content: center;
  gap: 10px;
  grid-template-areas: 'add reviews';
`

const AddButton = styled.button`
  grid-area: add;
  display: flex;
  width: 40%;
  height: 100px;
  text-align: center;


`;
const StyledButton = styled.button`
  grid-area: reviews;
  display: flex;
  width: 40%;
  height: 100px;
  text-align: center;

`;
const EntryDiv = styled.div`
display: flex;
jsutify-content:flex-end;`
const EntryButton = styled.button`
display: flex;
flex-direction: end;
justify-content: flex-end;
`






const Types = styled.button`
width: 125px;
height: 10%;`

const Header = styled.h1`
  height: 150px;
  margin: 0;
  text-align: center;

`;


const StyledModal = styled.div`
  top: 50%;
  left: 50%;
  z-index: 7;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 75%;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const DisplayModal = styled.div`
  top: 50%;
  left: 50%;
  z-index: 7;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
`




export {
  theme,
  StyledModal,
  OuterContainer,
  AddButton,
  Container,
  Header,
  StyledButton,
  Nav,
  Exercise,
  Types,
  DisplayModal,
  EntryButton,
  EntryDiv
}