import styled from 'styled-components'

export const GradientGeneratorCard = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(${props => props.gradientValue});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
`
export const Heading = styled.h1`
  font-size: ${props => props.size}px;
  color: ${props => props.color};
  text-align: center;
`
export const Paragraph = styled.p`
  font-size: ${props => props.size}px;
  color: ${props => props.color};
  text-align: center;
`
export const Ul = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-left: -40px;
`
export const InputCard = styled.div`
  display: flex;
  flex-direction: ${props => props.axis};
  justify-content: space-evenly;
`
export const InputColor = styled.input`
  height: 40px;
  margin: 40px;
  margin-top: 5px;
  border: none;
  border-radius: 10px;
  border-color: transparent;
`
export const Button1 = styled.button`
  height: 35px;
  width: 90px;
  color: #1e293b;
  font-weight: 500;
  border: none;
  cursor: pointer;
  background-color: #00c9b7;
`
