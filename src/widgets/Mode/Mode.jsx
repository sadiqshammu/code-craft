import * as React from "react"
import * as Feature from "../../components/feature"
import * as UI from "../../components/ui"
import * as SVG from "../../asset/Svg"
import { Legend } from "../Legend"
import "./styles.css"

const shadeList = [
  {
    modeIcon: SVG.Morning,
    text: "morning",
    level: 50
  },
  {
    modeIcon: SVG.Day,
    text: "day",
    level: 30
  },
  {
    modeIcon: SVG.Night,
    text: "night",
    level: 100
  }
]

const renderCustomItem = props => {
  const { modeIcon, text, level } = props

  return (
    <React.Fragment>
      <div className="box">
        {modeIcon && <div className="mode-icon" children={modeIcon} />}
        {text && <UI.Heading className="text" text={text} type="h4" />}
        {level | (level === 0) && (
          <UI.Heading className="level" text={`${level}%`} type="h4" />
        )}
        <div className="tick-icon" children={SVG.Tick} />
      </div>
      <span className="mode-bg" />
    </React.Fragment>
  )
}

function Mode(props) {
  return (
    <section className="mode">
      <Legend text="mode" />
      <Feature.ToggleList
        {...props}
        list={shadeList}
        renderItem={renderCustomItem}
        type="mode"
      />
    </section>
  )
}

export { Mode }
export default Mode
