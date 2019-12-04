import * as React from "react"
import Roundy from "roundy"
import AppContext from "../../components/State"
import { Legend } from "../Legend"
import "./styles.css"

function Intensity(props) {
  const { className = "", ...rest } = props
  const getContext = React.useContext(AppContext)

  return (
    <section {...rest} className={`intensity-wrapper ${className}`}>
      <Legend text="intensity" />
      <div className="intensity">
        <Roundy
          value={getContext.level}
          allowClick
          color="#AD6BFF"
          arcSize={180}
          min={0}
          max={100}
          rotationOffset={0}
          strokeWidth={2}
        />
        <span className="count">{getContext.level}</span>
      </div>
    </section>
  )
}

export { Intensity }
export default Intensity
