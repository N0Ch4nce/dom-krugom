import { useRef } from "react"
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header(props) {

    const headerRef = useRef()
    const headerOverlayRef = useRef()

    return <>
    <div className="headerButton" onClick={() => {
      headerRef.current.classList.toggle('active')
      headerOverlayRef.current.classList.toggle('active')
      }}>
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
    <div className="header" ref={headerRef}>
      <div className="headerContent">
        <Link to="mainScreen" smooth={true} duration={300}>
          <div className="logo">
            <img src="/images/domkrugomLogo.webp" alt="домкругом логотип" />
          </div>
        </Link>
        <div className="headerOverlay" ref={headerOverlayRef}
          onClick={() => {
          headerRef.current.classList.toggle('active')
          headerOverlayRef.current.classList.toggle('active')
          }}
        />
        <div className="headerUl">
          <Link className="headerLi" to="about" smooth={true} duration={600}>О проекте</Link>
          <Link className="headerLi" to="routes" smooth={true} duration={600}>Галерея маршрутов</Link>
          <Link className="headerLi" to="contacts" smooth={true} duration={600}>Контакты</Link>
        </div>
      </div>
    </div>
    </>
}