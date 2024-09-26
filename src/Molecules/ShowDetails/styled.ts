import styled from "@emotion/styled";

export const StyledList = styled.div(
  `
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  `
)

export const StyledListElement = styled.div(`
  cursor: pointer
`);	

export const StyledButtons = styled.div(`
  display: flex;
  flex-flow: row;
  gap: 8px;
  @media (max-width: 767px) {
    justify-content: space-evenly;
  }  
`)

export const StyledCard = styled.div(`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center; 
  }  
`)

export const StyledContainer = styled.div(`
  display: flex;
  flex-flow: column;
  gap: 8px;
  `)