import * as React from "react"
import AppContext from "../../components/State"
import { Legend } from "../Legend"
import "./styles.css"

function Intensity(props) {
  const { className = "", ...rest } = props
  const getContext = React.useContext(AppContext)
  const defVal = -90
  const curVal = getContext.level
  const minMaxVal = defVal + curVal + (curVal - 10)
  const transformVal = minMaxVal > 90 ? 90 : minMaxVal < -90 ? -90 : minMaxVal
  return (
    <section {...rest} className={`intensity-wrapper ${className}`}>
      <Legend text="intensity" />
      <div className="intensity">
        <div
          className="line"
          style={{ transform: `rotate(${transformVal}deg)` }}
        >
          <div class="small-circle" />
        </div>
        <span className="count">{getContext.level}</span>
        <div className="circle">
          <div
            className="overlay"
            style={{ width: `${curVal <= 30 ? curVal - 8 : curVal}%` }}
          >
            <div className="circle-bold" />
          </div>
          <div className="circle-thin" />
        </div>
      </div>
    </section>
  )
}

export { Intensity }
export default Intensity
