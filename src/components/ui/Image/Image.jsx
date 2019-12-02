import * as React from "react"
import "./styles.css"

function Image(props) {
  const { className = "", src = "", alt = "", ...rest } = props
  return (
    <React.Fragment>
      {src && (
        <div {...rest} className={`figure ${className}`}>
          <img src={src} alt={alt} />
        </div>
      )}
    </React.Fragment>
  )
}

export { Image }
export default Image
