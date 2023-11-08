import { useEffect, useState } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


export default function Screen1Slider(){
    const [activeSlide, setActiveSlide] = useState(1)

    let sliderTimeout;

    useEffect(() => {
        // Функция для переключения слайдов
        const switchSlide = () => {
            if (activeSlide < 5) {
                setActiveSlide(activeSlide + 1);
            } else {
                setActiveSlide(1);
            }
        };

        // Установка нового таймаута и сохранение его идентификатора
        sliderTimeout = setTimeout(switchSlide, 8000);

        // Функция для очистки таймаута при размонтировании компонента
        return () => {
            clearTimeout(sliderTimeout);
        };
    }, [activeSlide]);

    return <>
    
    <div className="slideContainer">
        <div className="slideContent">
            <div className={activeSlide === 1 ? "screen1Slide screen1Slide1 active" : "screen1Slide screen1Slide1"}>
                <div className="slideBackgroundBlock">
                    <div className="slideBackgroundImage">
                        <img src="/images/screen1Back1.webp" />
                    </div>
                    <div className="slideIllustrationBlock">
                        <Parallax translateY={[-8, 8]} style={{width: "100%", height: "100%", pointerEvents: "none"}}>
                        <div className="slideImage1">
                            <img src="/images/slide1img1.svg" />
                        </div>
                        </Parallax>
                    </div>
                </div>
                <div className="description">Идеальное путешествие В АВТОДОМЕ</div>
                <div className="title">Готовые решения</div>
            </div>
            <div className={activeSlide === 2 ? "screen1Slide screen1Slide2 active" : "screen1Slide screen1Slide2"}>
                <div className="slideBackgroundBlock">
                    <div className="slideBackgroundImage">
                        <img src="/images/screen1Back2.webp" />
                    </div>
                    <div className="slideIllustrationBlock">
                        <Parallax translateY={[-8, 8]} style={{width: "100%", height: "100%", pointerEvents: "none", zIndex: 1}}>
                        <div className="slideImage1">
                            <img src="/images/slide2img1.svg" />
                        </div>
                        </Parallax>
                        <div className="transformBlock">
                        <Parallax translateY={[-5, 5]} style={{width: "100%", height: "100%", pointerEvents: "none"}}>
                        <div className="slideImage2">
                            <img src="/images/slide2img2.svg" />
                        </div>
                        </Parallax>
                        </div>
                    </div>
                </div>
                <div className="description">Идеальное путешествие В АВТОДОМЕ</div>
                <div className="title">Проверенные<br/> локации</div>
            </div>
            <div className={activeSlide === 3 ? "screen1Slide screen1Slide3 active" : "screen1Slide screen1Slide3"}>
                <div className="slideBackgroundBlock">
                    <div className="slideBackgroundImage">
                        <img src="/images/screen1Back3.webp" />
                    </div>
                    <div className="slideIllustrationBlock">

                        <Parallax translateY={[-8, 8]} style={{width: "100%", height: "100%", pointerEvents: "none"}}>
                            <div className="slideImage1">
                                <img src="/images/slide3img1.svg" />
                            </div>
                        </Parallax>

                    </div>
                </div>
                <div className="description">Идеальное путешествие В АВТОДОМЕ</div>
                <div className="title">Конструктор<br/> маршрутов</div>
            </div>
            <div className={activeSlide === 4 ? "screen1Slide screen1Slide4 active" : "screen1Slide screen1Slide4"}>
                <div className="slideBackgroundBlock">
                    <div className="slideBackgroundImage">
                        <img src="/images/slideBack4_1.png" />
                    </div>
                    <div className="slideIllustrationBlock">
                        <Parallax translateY={[-10, 10]} style={{width: "100%", height: "100%", pointerEvents: "none"}}>
                        <div className="slideImage1">
                            <img src="/images/slide4img1.svg" />
                        </div>
                        </Parallax>


                        <Parallax translateY={[-35, 0]} style={{width: "100%", height: "100%", pointerEvents: "none", position: "absolute"}}>
                        <div className="slideImage2">
                            <img src="/images/slide4img2.svg" />
                        </div>
                        </Parallax>

                    </div>
                </div>
                <div className="description">Идеальное путешествие В АВТОДОМЕ</div>
                <div className="title">Аренда домов<br/> на колесах</div>
            </div>
            <div className={activeSlide === 5 ? "screen1Slide screen1Slide5 active" : "screen1Slide screen1Slide5"}>
                <div className="slideBackgroundBlock">
                    <div className="slideBackgroundImage">
                        <img src="/images/slideBack5_1.png" />
                    </div>
                    <div className="slideIllustrationBlock">
                        <Parallax translateY={[-5, 5]} style={{width: "100%", height: "100%", pointerEvents: "none"}}>
                            <div className="slideImage1">
                                <img src="/images/slide5img1.svg" />
                            </div>
                        </Parallax>
                    </div>
                </div>
                <div className="description">Идеальное путешествие В АВТОДОМЕ</div>
                <div className="title">Бронирование<br /> кемпингов</div>
            </div>
        </div>
        <div className="buttonsBlock">
            <a href="https://apps.apple.com/ru/app/%D0%B4%D0%BE%D0%BC-%D0%BA%D1%80%D1%83%D0%B3%D0%BE%D0%BC/id1669192632" target="_blank">
                <button className="button">
                    <div className="buttonImg">
                    <img src="/images/appstore.webp" />
                    </div>
                    <div className="buttonText">App Store</div>
                </button>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.dom.krugom">
                <button className="button">
                    <div className="buttonImg">
                    <img src="/images/googleplay.webp" />
                    </div>
                    <div className="buttonText">Google Play</div>
                </button>
            </a>
        </div>
        <div className="slideNavBlock">
            <div className="slideArrowPrev" onClick={() => {
                if(activeSlide > 1) {
                    setActiveSlide(activeSlide - 1)   
                } else {
                    setActiveSlide(5)
                }
            }}/>
            <div className="slidePointBlock">
                <div className={activeSlide === 1 ? "slidePoint active" : "slidePoint"} onClick={() => setActiveSlide(1)}/>
                <div className={activeSlide === 2 ? "slidePoint active" : "slidePoint"} onClick={() => setActiveSlide(2)}/>
                <div className={activeSlide === 3 ? "slidePoint active" : "slidePoint"} onClick={() => setActiveSlide(3)}/>
                <div className={activeSlide === 4 ? "slidePoint active" : "slidePoint"} onClick={() => setActiveSlide(4)}/>
                <div className={activeSlide === 5 ? "slidePoint active" : "slidePoint"} onClick={() => setActiveSlide(5)}/>
            </div>
            <div className="slideArrowNext" onClick={() => {
                if(activeSlide < 5) {
                    setActiveSlide(activeSlide + 1)   
                } else {
                    setActiveSlide(1)
                }
            }}/>
        </div>
    </div>    
    
    </>

}