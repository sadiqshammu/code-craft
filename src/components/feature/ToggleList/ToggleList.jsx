import * as React from "react"
import AppContext from "../../State"
import "./styles.css"

const defaultRenderItem = props => (
  <React.Fragment>{props && props.children}</React.Fragment>
)

function ToggleList(props) {
  const {
    className = "",
    list = [],
    selectIdx = 0,
    renderItem = defaultRenderItem,
    type = "",
    ...rest
  } = props
  const [activeIdx, setActiveIdx] = React.useState(selectIdx)
  const getContext = React.useContext(AppContext)
  return (
    <React.Fragment>
      {list && (
        <div className={`toggle-list ${className}`} {...rest}>
          {list.map((item, index) => {
            const classes = activeIdx === index ? "active" : ""
            type === "mode" &&
              getContext.level === 0 &&
              getContext.setLevel(list[selectIdx].level)
            return (
              <div
                key={index}
                className={`item ${classes}`}
                onClick={() => {
                  type === "mode" && getContext.setLevel(list[index].level)
                  type === "menu" && getContext.setMenuLabel(list[index].title)
                  setActiveIdx(index)
                }}
                children={renderItem(item)}
              />
            )
          })}
        </div>
      )}
    </React.Fragment>
  )
}

export { ToggleList }
export default ToggleList
