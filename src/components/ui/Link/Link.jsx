import * as React from "react"
import "./styles.css"

function Link(props) {
  const {
    className = "",
    url = "p",
    target = "_blank",
    text = "",
    ...rest
  } = props
  return (
    <React.Fragment>
      {text && (
        <a
          {...rest}
          href={url}
          target={target}
          className={className}
          children={text}
        />
      )}
    </React.Fragment>
  )
}

export { Link }
export default Link
