import * as React from "react"
import * as UI from "../../components/ui"
import "./styles.css"

function Legend(props) {
  const { className = "", text = "" } = props
  return (
    <React.Fragment>
      {text && (
        <div className={`legend ${className}`}>
          <UI.Heading className="title" text={text} type="h3" />
          <span className="line" />
        </div>
      )}
    </React.Fragment>
  )
}

export { Legend }
export default Legend
