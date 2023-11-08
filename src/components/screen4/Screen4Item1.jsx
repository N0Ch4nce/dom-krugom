import { useEffect, useState } from "react";

export default function Screen4Item1(props) {

    const [activeBack, setActiveBack] = useState(1);
    const [openedValue, setOpenedValue] = useState(props.opened);
    let backTimeout;
  
    const switchBack = () => {
      if (openedValue === 1) {
        if (activeBack < 3) {
          setActiveBack(activeBack + 1);
        } else {
          setActiveBack(1);
        }
        // Устанавливаем новый таймаут для следующего выполнения switchBack
        backTimeout = setTimeout(switchBack, 4500);
      }
    };
  
    useEffect(() => {
      if (openedValue === 1) {
        // Устанавливаем таймаут для первого выполнения switchBack
        backTimeout = setTimeout(switchBack, 4500);
      }
  
      return () => {
        clearTimeout(backTimeout); // Очищаем таймаут при размонтировании компонента
      };
    }, [openedValue, activeBack]);
  
    useEffect(() => {
      // Обновляем openedValue, чтобы отслеживать изменения props.opened
      props.setMoreActive(0)
      setOpenedValue(props.opened);
    }, [props.opened]);

    return <>
        <div className={props.opened === 1 ? "screen4Item opened" : "screen4Item"} onClick={props.onClick}>
            <div className="s4ItemBackground">
                <img className={activeBack === 1 ? "s4back active" : "s4back"} src="/images/s4Item1_1.webp" />
                <img className={activeBack === 2 ? "s4back active" : "s4back"} src="/images/s4Item1_2.webp" />
                <img className={activeBack === 3 ? "s4back active" : "s4back"} src="/images/s4Item1_3.webp" />
            </div>
            <div className="s4Name">
                <span className={activeBack === 1 ? "active" : ""}>Валдай</span>
                <span className={activeBack === 2 ? "active" : ""}>Старая Русса</span>
                <span className={activeBack === 3 ? "active" : ""}>Новгородский Кремль</span>
            </div>
            <div className="overlay">
                <div className="plusIcon" />
            </div>
        </div>
    </>
}