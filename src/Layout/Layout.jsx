import * as React from "react"
import { AppProvider, useCommonState } from "../components/State"
import * as Feature from "../components/feature"
import * as SVG from "../asset/Svg"
import * as Content from "../widgets"
import "../asset/fonts/font-styles.css"
import "./styles.css"

function Layout(props) {
  const { className = "", ...rest } = props
  const [isActiveArrow, setIsActiveArrow] = React.useState(false)
  const commonStateProps = useCommonState()

  return (
    <AppProvider value={commonStateProps}>
      <main className={`wrapper ${className}`} {...rest}>
        <div
          title="Menu"
          className={`menu-arrow ${isActiveArrow ? "open" : ""}`}
          onClick={() => setIsActiveArrow(!isActiveArrow)}
          children={SVG.BackArrow}
        />
        <aside className={`side-bar ${isActiveArrow ? "close" : ""}`}>
          <Content.MenuBar selectIdx={0} />
        </aside>

        <section className={`container ${isActiveArrow ? "close" : ""}`}>
          <Content.TitleWithItem className="header" text="devices">
            <span className="plus-icon">+</span>
          </Content.TitleWithItem>

          <Content.TitleWithItem
            className="bed-lamp-toggle"
            text="bed lamp"
            type="h3"
          >
            <Feature.ToggleButton size={42} bgColor="#000" />
          </Content.TitleWithItem>

          <Content.Shades />
          <Content.Mode />
          <Content.Intensity />
        </section>
      </main>
    </AppProvider>
  )
}

export { Layout }
export default Layout
