import * as React from "react"
import "./styles.css"

function Heading(props) {
  const { className = "", text = "", type = "h1", ...rest } = props
  const Tag = type
  return (
    <React.Fragment>
      {text && <Tag {...rest} className={className} children={text} />}
    </React.Fragment>
  )
}

export { Heading }
export default Heading
