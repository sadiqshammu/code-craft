import * as React from "react"
import "./styles.css"

function Paragraph(props) {
  const { className = "", type = "p", text = "", ...rest } = props
  const TagName = type
  return (
    <React.Fragment>
      {text && <TagName {...rest} className={className} text={text} />}
    </React.Fragment>
  )
}

export { Paragraph }
export default Paragraph
