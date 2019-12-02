import * as React from "react"
import * as Feature from "../../components/feature"
import * as UI from "../../components/ui"
import bedLamp from "../../asset/img/bedlamp.jpg"
import noria from "../../asset/img/noria.jpg"
import doorlock from "../../asset/img/doorlock.jpg"
import lg from "../../asset/img/lg.jpg"
import thermostat from "../../asset/img/thermostat.jpg"
import * as SVG from "../../asset/Svg"
import "./styles.css"

const menuList = [
  {
    title: "bed lamp",
    slogan: "bedroom",
    img: bedLamp
  },
  {
    title: "noria ac",
    slogan: "bedroom",
    img: noria
  },
  {
    title: "door lock",
    slogan: "home office",
    img: doorlock
  },
  {
    title: "lg tv ",
    slogan: "living room",
    img: lg
  },
  {
    title: "thermostat",
    slogan: "bedroom",
    img: thermostat
  }
]

const renderCustomItem = props => {
  const { title, slogan, img } = props

  return (
    <React.Fragment>
      <div className="box">
        {title && <UI.Heading text={title} />}
        {slogan && (
          <div className="slogan">
            <span>in </span>
            {slogan}
          </div>
        )}
      </div>
      <div className="arrow" children={SVG.RightArrow} />
      <UI.Image src={img} />
    </React.Fragment>
  )
}

function MenuBar(props) {
  return (
    <section className="menu-bar">
      <Feature.ToggleList
        {...props}
        list={menuList}
        renderItem={renderCustomItem}
      />
    </section>
  )
}

export { MenuBar }
export default MenuBar
