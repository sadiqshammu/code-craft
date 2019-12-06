import * as React from "react"
import * as UI from "../../components/ui"
import AppContext from "../../components/State"
import "./styles.css"

function TitleWithItem(props) {
  const {
    className = "",
    children,
    text = "",
    type = "h1",
    isValidate = false
  } = props
  const getContext = React.useContext(AppContext)
  return (
    <React.Fragment>
      {(text || children) && (
        <section className={`title-with-item ${className}`}>
          {text && (
            <UI.Heading
              className="title"
              text={
                isValidate && getContext && getContext.menuLabel !== ""
                  ? getContext.menuLabel
                  : text
              }
              type={type}
            />
          )}
          {children && <div className="col" children={children} />}
        </section>
      )}
    </React.Fragment>
  )
}

export { TitleWithItem }
export default TitleWithItem
