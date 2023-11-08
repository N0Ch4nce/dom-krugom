import { useEffect, useState } from "react";

export default function Screen4Item2(props) {

    const [activeBack, setActiveBack] = useState(1);
    const [openedValue, setOpenedValue] = useState(props.opened);
    let backTimeout;
  
    const switchBack = () => {
      if (openedValue === 2) {
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
      if (openedValue === 2) {
        // Устанавливаем таймаут для первого выполнения switchBack
        backTimeout = setTimeout(switchBack, 4500);
      }
  
      return () => {
        clearTimeout(backTimeout); // Очищаем таймаут при размонтировании компонента
      };
    }, [openedValue, activeBack]);
  
    useEffect(() => {
      // Обновляем openedValue, чтобы отслеживать изменения props.opened
      setOpenedValue(props.opened);
      props.setMoreActive(0)
    }, [props.opened]);

    return <>
        <div className={props.opened === 2 ? "screen4Item opened" : "screen4Item"} onClick={props.onClick}>
            <div className="s4ItemBackground">
                <img className={activeBack === 1 ? "s4back active" : "s4back"} src="/images/s4Item2_1.webp" />
                <img className={activeBack === 2 ? "s4back active" : "s4back"} src="/images/s4Item2_2.webp" />
                <img className={activeBack === 3 ? "s4back active" : "s4back"} src="/images/s4Item2_3.webp" />
            </div>
            <div className="s4Name">
                <span className={activeBack === 1 ? "active" : ""}>Чертов палец</span>
                <span className={activeBack === 2 ? "active" : ""}>Чуйский тракт</span>
                <span className={activeBack === 3 ? "active" : ""}>Слияние Чуи и Катуни</span>
            </div>
            <div className="overlay">
                <div className="plusIcon" />
            </div>
        </div>
    </>
}