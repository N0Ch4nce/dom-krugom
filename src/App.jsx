import { useEffect, useRef, useState } from 'react'
import './CSS/main.css'
import './CSS/fonts.css'
import './CSS/style.css'
import './CSS/media.css'
import Header from './components/Header.jsx'

// SLIDER SCREEN 1
import Screen1Slider from './components/screen1/Screen1Slider.jsx'

// Swiper items
import Screen3Slider from './components/screen3/Screen3Slider.jsx'

// MYSLIDER SCREEN 4
import Screen4Slider from './components/screen4/Screen4Slider.jsx'

// PARALLAX
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

// SCROLL
import { Link, animateScroll as scroll } from "react-scroll";


function App() {

  const [opened, setOpened] = useState(2)
  const [moreActive, setMoreActive] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [locationHeight, setLocationHeight] = useState(390)
  const locationContent = useRef()

  const birdsParallax = () => {
    if (window.innerWidth <= 1920){
      if (window.innerWidth <= 1280){
        if (window.innerWidth <= 640){
          return [-100, 110]
        }
        return [-40, 100]
      }
      return [-30, 120]
    }
  }

  useEffect(() => {
    // if (windowWidth <= 768) {
      if (opened === 1) {
        setLocationHeight(locationContent.current.children[0].offsetHeight)
      }
      if (opened === 2) {
        setLocationHeight(locationContent.current.children[1].offsetHeight)
      }
      if (opened === 3) {
        setLocationHeight(locationContent.current.children[2].offsetHeight)
      }
      if (opened === 4) {
        setLocationHeight(locationContent.current.children[3].offsetHeight)
      } 
    // }
  }, [windowWidth, opened, moreActive])



  return <>
  <ParallaxProvider>
    <Header />
    <div className="screen mainScreen" name="mainScreen">

    <Screen1Slider />

    </div>
    <div className="screen screen2" name="about" >
      <div className="screenContent">
        <div className="block block1">
          <div className="title">О чем наш проект? </div>
          <div className="description">Посмотрите минутное видео. Это очень быстро.</div>
        </div>
        <div className="block block2">
          <div className="videoBlock">
            <video poster='/images/videoPreview.png' controls>
              <source src='/video/mainVideo.mp4' />
            </video>
          </div>
          <div className="text">
            <p>Сегодня путешествия в автодоме перестают быть лишь картинкой в зарубежных фильмах и обретают популярность как никогда. Еще вчера в нашей стране не хватало кемпингов европейского уровня, а теперь они множатся и спешат заявить о себе. Каждое великое начало таится в первом шаге! У нас — в первом километре.</p>
            <p><strong>Дом.Кругом</strong>приложение, которое делает путешествие в доме на колесах простым и интересным. Места для стоянки или ночевки в автодоме, палатке или глэмпинге, удивительные локации, маршруты и точки ремонта – мы проверили все за вас! Интересные маршруты для тех, кто хочет исследовать мир, экономит время и любит детали, и даже тех, кто впервые отправился в необычный путь. А еще, Дом. Кругом – это большое комьюнити людей, влюбленных в автопутешествия и желающих влюбить весь мир: показать нашу Родину такой, какой ее еще не видели!</p>
            <p><a href="https://www.youtube.com/@dom.krugom" target='__blank'>Больше видео</a></p>
          </div>
        </div>
        <div className="block block3">
          <div className="illustrationBlock">
            <Parallax translateY={[-20, 20]} style={{position: "absolute", width: "100%", height: "100%", pointerEvents: "none"}}>
            <div className="imageBlock1">
              <img src="/images/screen2image1.svg" />
            </div>
            </Parallax>
            <Parallax translateY={[-40, 40]} style={{position: "absolute", width: "100%", height: "100%", pointerEvents: "none"}}>
            <div className="imageBlock2">
              <img src="/images/screen2image2.svg" />
            </div>
            </Parallax>
          </div>
          <div className="buttonsBlock">
            <a href="/documents/aptechka_karavanera.pdf" download><button>АПТЕЧКА КАРАВАНЕРА</button></a>
            <a href="/documents/checklist_karavanera.pdf" download><button>Что взять с собой в дорогу в автодом</button></a>
          </div>
        </div>
      </div>
    </div>
    <div className="screen screen3">
      <div className="screenContent">
        <div className="block block1">
          <div className="title">Куда поехать с домом на колёсах</div>
          <div className="description">Быстро спланируйте остановки, используя фильтр в приложении. Сохраняйте маршруты, добавляйте заметки и отправляйтесь навстречу новым приключениям!</div>
        </div>
      </div>
      <div className="block block2">
          <Screen3Slider />
      </div>
    </div>
    <div className="screen screen4" name="routes" >
      <div className="screenContent">
        <div className="block block1">
          <div className="title">Маршруты в приложении</div>
          <div className="description">
            <p>Или «Идеи для поездок» – это готовые вкусные маршруты с продуманными до мелочей особенностями: то, что сделает путешествие в доме на колесах интересным и полным приключений. Куда заехать и сделать красивые фоточки, где попробовать оригинальные блюда местной кухни, увидеть колоритные пейзажи и архитектуру, посетить экскурсии и купить самые вкусные пироги. Мы возьмем вас за ручку и провезем по самым атмосферным местам, которые точно стоит посетить. </p>
          </div>
        </div>
        <div className="block block2">
          <div ref={locationContent} className="locationContent" style={{height: `${locationHeight}px`}}>
            <div className={opened === 1 ? "location location1 opened" : "location location1"}>
              <div className="locationName">Земля Новгородская</div>
              <div className="locationInfoBlock">
                <div className="destinationBlock">
                  <div className="image" />
                  <div className="destinationInfo">371 км</div>
                </div>
                <div className="stopBlock">
                  <div className="image" />
                  <div className="stopInfo">8 остановок</div>
                </div>
                <div className="timeBlock">
                  <div className="image" />
                  <div className="timeInfo">{`6:30 часов (в дороге)`}</div>
                </div>
              </div>
              <div className="locationDescription">
                <div className="pMain">
                  <p>Путешествие по красотам Великого Новгорода, одного из старейших городов России, упомянутого ещё в «Повести временных лет», по озеру <strong>Ильмень</strong> с живописными берегами и многотысячелетней историей освоения, по пленительным зелёным панорамам и чистейшему <strong>Валдаю</strong>, знаменитому своими колокольными мастерами и старинными храмами!
                    <span className={moreActive === 1 ? "more hidden" : "more"} onClick={() => {
                      setMoreActive(1)
                    }}>Читать далее...</span>
                  </p>
                </div>
                <div className={moreActive === 1 ? "pOpened active" : "pOpened"}>
                  <p>По пути оздоровимся минеральной водичкой, попаримся в баньке на берегу озера, устроим романтический <strong>пикник на горе</strong>, сплавимся на сапах или арендуем квадроцикл, чтобы сделать отдых уж точно незабываемым!</p>
                  <p className='longness'>Длительность: <strong>4 дня</strong></p>
                </div>
              </div>
            </div>
            <div className={opened === 2 ? "location location2 opened" : "location location2"}>
              <div className="locationName">Природа горного Алтая</div>
              <div className="locationInfoBlock">
                <div className="destinationBlock">
                  <div className="image" />
                  <div className="destinationInfo">774 км</div>
                </div>
                <div className="stopBlock">
                  <div className="image" />
                  <div className="stopInfo">16 остановок</div>
                </div>
                <div className="timeBlock">
                  <div className="image" />
                  <div className="timeInfo">{`16:09 часов (в дороге)`}</div>
                </div>
              </div>
              <div className="locationDescription">
                <div className="pMain">
                  <p>Именно здесь мы увидим захватывающие горные пейзажи, древние леса и кристально чистые озёра. Попробуем местные деликатесы, безумно вкусную алтайскую кухню и <strong>совершим восхождение на горы.</strong>
                    .<span className={moreActive === 2 ? "more hidden" : "more"} onClick={() => {
                      setMoreActive(2)
                    }}>Читать далее...</span>
                  </p>
                </div>
                <div className={moreActive === 2 ? "pOpened active" : "pOpened"}>
                  <p>Пройдём путь сквозь время и природу, открывая величественные водопады, горячие источники и удивительные панорамы, которые заставят нас задержаться душой на долгие мгновения. Этот маршрут — <strong>встреча с дикой природой</strong>, вызывающая трепет и вдохновение, оставляющая <strong>незабываемые впечатления</strong> в сердце каждого путешественника!</p>
                  <p className='longness'>Длительность: <strong>4 дня</strong></p>
                </div>
              </div>
            </div>
            <div className={opened === 3 ? "location location3 opened" : "location location3"}>
              <div className="locationName">Большое путешествие по Золотому кольцу России</div>
              <div className="locationInfoBlock">
                <div className="destinationBlock">
                  <div className="image" />
                  <div className="destinationInfo">755 км</div>
                </div>
                <div className="stopBlock">
                  <div className="image" />
                  <div className="stopInfo">23 остановки</div>
                </div>
                <div className="timeBlock">
                  <div className="image" />
                  <div className="timeInfo">{`13:52 часов (в дороге)`}</div>
                </div>
              </div>
              <div className="locationDescription">
                <div className="pMain">
                  <p>Маршрут по Золотому кольцу — это продуманное путешествие по историческим городам России, расположенным вокруг Москвы. Нас ждут древние церкви, крепости и монастыри, которые свидетельствуют <strong>о богатом культурном наследии России.</strong>
                    <span className={moreActive === 3 ? "more hidden" : "more"} onClick={() => {
                      setMoreActive(3)
                    }}>Читать далее...</span>
                  </p>
                </div>
                <div className={moreActive === 3 ? "pOpened active" : "pOpened"}>
                  <p>От ярких куполов Сергиева Посада до белокаменных архитектурных шедевров Ярославля — каждый город имеет свой неповторимый характер. Великолепная природа, культурные памятники и атмосфера старинной России сделают это путешествие незабываемым. Каждый город перенесёт нас в другую эпоху, раскрывая черты <strong>русской культуры и истории.</strong></p>
                  <p className='longness'>Длительность: <strong>5 дней</strong></p>
                </div>
              </div>
            </div>
            <div className={opened === 4 ? "location location4 opened" : "location location4"}>
              <div className="locationName">По карельским шхерам. Вокруг Ладожского озера</div>
              <div className="locationInfoBlock">
                <div className="destinationBlock">
                  <div className="image" />
                  <div className="destinationInfo">916 км</div>
                </div>
                <div className="stopBlock">
                  <div className="image" />
                  <div className="stopInfo">18 остановок</div>
                </div>
                <div className="timeBlock">
                  <div className="image" />
                  <div className="timeInfo">{`16:32 часов (в дороге)`}</div>
                </div>
              </div>
              <div className="locationDescription">
                <div className="pMain">
                  <p>Флагманский маршрут с продуманными до мелочей остановками, <strong>гастрономическими изысками</strong> и исторической архитектурой.
                    <span className={moreActive === 4 ? "more hidden" : "more"} onClick={() => {
                      setMoreActive(4)
                    }}>Читать далее...</span>
                  </p>
                </div>
                <div className={moreActive === 4 ? "pOpened active" : "pOpened"}>
                  <p>Остановимся на ночёвку в Новой Ладоге, посетим Нижне-Свирский заповедник, в котором обитают 250 видов птиц, 44 вида млекопитающих, 4 вида рептилий, подышим свежим воздухом в Петровском саду и отправимся ночевать на берегу Онежского озера! Посетим Рускеалу и Мраморный каньон, полюбуемся Карельскими шхерами и отведаем самые вкусные <strong>пирожки — калитки!</strong></p>
                  <p className='longness'>Длительность: <strong>5 дней</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block block3" >
        <Screen4Slider opened={opened} setOpened={setOpened} moreActive={moreActive} setMoreActive={setMoreActive} />
      </div>
    </div>
    <div className="screen screen5" name="moreRoutes">
      <Parallax translateX={birdsParallax()} style={{position: "absolute", width: "100%", height: "100%", pointerEvents: "none"}}>
      <div className="screen5Image">
          <img src="/images/screen5img.svg" />
      </div>
      </Parallax>
      <div className="screenContent">
        <div className="title">Больше маршрутов в нашем приложении</div>
        <div className="buttonsBlock">
          <a href="https://apps.apple.com/ru/app/%D0%B4%D0%BE%D0%BC-%D0%BA%D1%80%D1%83%D0%B3%D0%BE%D0%BC/id1669192632" target="_blank">
            <button className="button">
              <div className="buttonImg">
                <img src="/images/appstore.webp" />
              </div>
              <div className="buttonText">App store</div>
            </button>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.dom.krugom">
            <button className="button">
              <div className="buttonImg">
                <img src="/images/googleplay.webp" />
              </div>
              <div className="buttonText">Google play</div>
            </button>
          </a>
        </div>
      </div>
    </div>
    <div className="screen screen6">
      <Parallax translateY={[-10, 30]} style={{position: "absolute", width: "100%", height: "100%", pointerEvents: "none", zIndex: "0"}}>
      <div className="footerImage">
        <img src="/images/footerImage.svg" />
      </div>
      </Parallax>
      <div className="footerBackground">
        <img src="/images/footerBack.webp" />
      </div>
    </div>
    <div name="contacts" className="footer">
      <div className="footerMenu">
        <div className="footerLeft">
          <Link to="mainScreen" smooth={true} duration={300}>
            <div className="logo">
              <img src="/images/domkrugomLogo.webp" />
            </div>
          </Link>
          <div className="footerDescription">Удобные автопутешествия!</div>
        </div>
        <div className="footerContacts">
          <div className="contactsTitle">Связаться с нами:</div>
          <div className="contactsBlock">
            <div className="contactsColumn">
              <a href="tel:+79852585800" target="_blank">
                <div className="contactsTextBlock phone">
                  <div className="contactsIcon" />
                  <div className="contactsText">{`+7 (985) 258 58 00`}</div>
                </div>
              </a>
              <a href="mailto:info@dom-krugom.ru" target="_blank">
                <div className="contactsTextBlock mail">
                  <div className="contactsIcon" />
                  <div className="contactsText">info@dom-krugom.ru</div>
                </div>
              </a>
              <a href="https://t.me/domkrygom" target="_blank">
                <div className="contactsTextBlock telegram">
                  <div className="contactsIcon" />
                  <div className="contactsText">t.me/domkrygom</div>
                </div>
              </a>
            </div>
            <div className="contactsColumn">
              <a href="https://vk.com/dom.krygom" target="_blank">
                <div className="contactsTextBlock vk">
                  <div className="contactsIcon" />
                  <div className="contactsText">vk.com/dom.krygom</div>
                </div>
              </a>
              <a href="https://www.youtube.com/@dom.krugom" target="_blank">
                <div className="contactsTextBlock youtube">
                    <div className="contactsIcon" />
                    <div className="contactsText">youtube.com/@dom.krugom</div>
                </div>
              </a>
              <a href="https://dzen.ru/domkrygom" target="_blank">
                <div className="contactsTextBlock dzen">
                  <div className="contactsIcon" />
                  <div className="contactsText">dzen.ru/domkrygom</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ParallaxProvider>
  </>
}

export default App
