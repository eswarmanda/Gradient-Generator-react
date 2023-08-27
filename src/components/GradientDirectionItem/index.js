import {ListItem, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, onClickDirection, isActive} = props
  const {value, displayText} = directionDetails
  const clickDirection = () => {
    onClickDirection(value)
  }
  return (
    <ListItem>
      <Button isActive={isActive} onClick={clickDirection}>
        {displayText}
      </Button>
    </ListItem>
  )
}
export default GradientDirectionItem
