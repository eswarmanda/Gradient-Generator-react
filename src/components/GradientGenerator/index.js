import {Component} from 'react'
import {
  GradientGeneratorCard,
  Heading,
  Ul,
  InputCard,
  InputColor,
  Button1,
  Paragraph,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    directionInput: gradientDirectionsList[0].value,
    colorInput1: '#8ae323',
    colorInput2: '#014f7b',
    gradientValue: ` to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onClickDirection = value => {
    this.setState({directionInput: value})
    console.log(value)
  }

  onChangeColorPad1 = event => {
    console.log(event.target.value)
    this.setState({colorInput1: event.target.value})
  }

  onChangeColorPad2 = event => {
    console.log(event.target.value)
    this.setState({colorInput2: event.target.value})
  }

  onClickGenerate = () => {
    const {directionInput, colorInput1, colorInput2} = this.state
    this.setState({
      gradientValue: `to ${directionInput}, ${colorInput1} ,${colorInput2}`,
    })
  }

  render() {
    const {directionInput, gradientValue, colorInput1, colorInput2} = this.state
    return (
      <GradientGeneratorCard
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <Heading color="#ffffff" size="30">
          Generate a CSS Color Gradient
        </Heading>
        <Paragraph color="#ededed" size="20">
          Choose Direction
        </Paragraph>

        <Ul>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              directionDetails={eachDirection}
              key={eachDirection.directionId}
              onClickDirection={this.onClickDirection}
              isActive={eachDirection.value === directionInput}
            />
          ))}
        </Ul>

        <Paragraph color="#ededed" size="20">
          Pick the Colors
        </Paragraph>
        <InputCard>
          <InputCard axis="column">
            <Paragraph color="#ededed" size="15">
              {colorInput1}
            </Paragraph>
            <InputColor
              type="color"
              value={colorInput1}
              onChange={this.onChangeColorPad1}
            />
          </InputCard>

          <InputCard axis="column">
            <Paragraph color="#ededed" size="15">
              {colorInput2}
            </Paragraph>
            <InputColor
              type="color"
              value={colorInput2}
              onChange={this.onChangeColorPad2}
            />
          </InputCard>
        </InputCard>
        <Button1 bgColor="#00c9b7" onClick={this.onClickGenerate}>
          Generate
        </Button1>
      </GradientGeneratorCard>
    )
  }
}

export default GradientGenerator
