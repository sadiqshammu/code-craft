import * as React from "react"
import * as Feature from "../../components/feature"
import * as SVG from "../../asset/Svg"
import { Legend } from "../Legend"
import "./styles.css"

const shadeList = ["#FF4563", "#8245E6", "#4AC0E0", "#1089EB", "#C791CD"]

const renderCustomItem = item => {
  return (
    <span
      className="tick-icon"
      children={SVG.Tick}
      style={{ background: item }}
    />
  )
}

function Shades(props) {
  return (
    <section className="shades">
      <Legend text="shades" />
      <Feature.ToggleList
        {...props}
        list={shadeList}
        renderItem={renderCustomItem}
        type="shades"
      />
    </section>
  )
}

export { Shades }
export default Shades
