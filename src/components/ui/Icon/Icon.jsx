import * as React from "react"
import "./styles.css"

function Icon(props) {
  const {
    className = "",
    viewBox = "0 0 24 24",
    children,
    fill = "#000",
    ...rest
  } = props
  return (
    <React.Fragment>
      {children && (
        <svg
          {...rest}
          fill={fill}
          viewBox={viewBox}
          className={className}
          xmlns="http://www.w3.org/2000/svg"
        >
          {children}
        </svg>
      )}
    </React.Fragment>
  )
}

export { Icon }
export default Icon
