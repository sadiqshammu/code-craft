import * as React from "react"
import * as UI from "../../ui"
import "./styles.css"

function ToggleButton(props) {
  const { className = "", size = 35 } = props
  const [active, setActive] = React.useState(false)
  const styles = {
    width: `${size}px`,
    height: `${size / 2}px`,
    padding: `0 ${size / 10}px`,
    borderRadius: `${size}px`
  }
  return (
    <div
      className={`toggle-btn ${className}`}
      onClick={() => setActive(!active)}
      style={styles}
      item-select={active.toString()}
    >
      <UI.Icon>
        <rect width="24" height="24" rx="24" ry="24" />
      </UI.Icon>
    </div>
  )
}

export { ToggleButton }
export default ToggleButton
