// SCROLL
import { Link, animateScroll as scroll } from "react-scroll";

export default function Screen3Item5(props) {
    return <>
        <div className="screen3Item">
            <div className="topPart">
                <div className="backgroundImage">
                    <img src="/images/s3Item5.png" />
                </div>
                <div className="s3itemPanel">
                    <div className="icon car"/>
                    <div className="icon bigCar"/>
                    <div className="icon backCar"/>
                    <div className="icon weather"/>
                </div>
            </div>
            <div className="bottomPart">
                <div className="s3infoContent">
                    <div className="s3itemIcon cafe"/>
                    <div className="s3itemInfo">
                        <div className="s3itemName">Русский дворик</div>
                        <div className="s3itemType">Заведение</div>
                    </div>
                </div>
                <Link to="moreRoutes" smooth={true} duration={300}>
                    <button className="s3button">Скачать приложение</button>
                </Link>
            </div>
        </div>
    </>
}