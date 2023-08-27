import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  margin: 10px;
`
export const Button = styled.button`
  height: 35px;
  width: 60px;
  font-size: small;
  font-weight: 500;
  border: none;
  color: black;
  cursor: pointer;
  background-color: #ffffff;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
