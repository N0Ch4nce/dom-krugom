import Screen4Item1 from './Screen4Item1.jsx';
import Screen4Item2 from './Screen4Item2.jsx';
import Screen4Item3 from './Screen4Item3.jsx';
import Screen4Item4 from './Screen4Item4.jsx';
import { forwardRef, useEffect, useRef, useState } from 'react';


export default function Screen4Slider(props) {
    const opened = props.opened
    const setOpened = props.setOpened
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const sliderBlock = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [wasDragging, setWasDragging] = useState(false)
  
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.clientX - translateX);
      setTimeout(() => {
        setWasDragging(true)
      }, 130);
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
  
      if (windowWidth >= 640) {
        const offsetX = e.clientX - startX;
        setTranslateX(offsetX);
      }
    };
  
    const handleMouseUp = (e) => {
      openScreen4Item(e, 1)
      openScreen4Item(e, 2)
      openScreen4Item(e, 3)
      openScreen4Item(e, 4)

      setIsDragging(false)
      setWasDragging(false)
      setTimeout(() => {
        setWasDragging(false)
      }, 200);
    };

    const openScreen4Item = (e, index) => {
      if (wasDragging === false) {
        if (e.target === sliderBlock.current.children[index - 1]) {
          // if (e.target.classList.contains('opened')) {
          //   setOpened(0);  
          // } else {
          //   setOpened(index);
          // }
          setOpened(index);
        }
      }
    };

    const backFromBorder = (x, xTranslation, xOpened, xTranslationOpened) => {
      if (opened === 0) {
        if (translateX > window.innerWidth * x) {
          setTranslateX(xTranslation)
        }
        if (translateX < window.innerWidth * -x) {
          setTranslateX(-xTranslation)
        }
      } else {
        if (translateX > window.innerWidth * xOpened) {
          setTranslateX(xTranslationOpened)
        }
        if (translateX < window.innerWidth * -xOpened) {
          setTranslateX(-xTranslationOpened)
        }
      }
    }
  
    useEffect(() => {
      if (isDragging) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      } else {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        if (windowWidth >= 1920 ){
          backFromBorder(0.2, 145, 0.2, 145)
        }
        if (windowWidth < 1920 && windowWidth >= 1280) {
          backFromBorder(0.2, 50, 0.2, 50)
        }
        if (windowWidth < 1280 && windowWidth >= 980) {
          backFromBorder(0.2, 250, 0.2, 425)
        }
        if (windowWidth < 980 && windowWidth >= 768) {
          backFromBorder(0.2, 340, 0.8, 525)
        }
        if (windowWidth < 768 && windowWidth >= 640) {
          backFromBorder(0.35, 235, 0.8, 525)
        }
        // if (windowWidth < 640 && windowWidth >= 480) {
        //   backFromBorder(0.35, 210, 0.7, 310)
        // }
        // if (windowWidth < 480 ) {
        //   backFromBorder(0.8, 225, 1.3, 380)
        // }
      }
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }, [isDragging]);
    

    return <>
        <div ref={sliderBlock} className="sliderBlock"
        style={isDragging ? {transform: `translateX(${translateX}px)`, transition: "0s"} : {transform: `translateX(${translateX}px)`, transition: "0.25s"}}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        >
          <Screen4Item1 opened={opened} moreActive={props.moreActive} setMoreActive={props.setMoreActive} />
          <Screen4Item2 opened={opened} moreActive={props.moreActive} setMoreActive={props.setMoreActive} />
          <Screen4Item3 opened={opened} moreActive={props.moreActive} setMoreActive={props.setMoreActive} />
          <Screen4Item4 opened={opened} moreActive={props.moreActive} setMoreActive={props.setMoreActive} />
        </div>
    </>
}