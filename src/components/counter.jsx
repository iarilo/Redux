import { useEffect, useRef } from "react";
import { completadButton, resetTimer, increment } from "../store/countSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  
  const stateButton = useSelector((ell) => ell.timerReducer.stateCount);
  const timerValue = useSelector((ell) => ell.timerReducer.value);
  const dispatch = useDispatch();
  const countRef = useRef(null);

  const timeStart = () => {
    dispatch(completadButton(!timerValue));
  };

  const timeStop = () => {
    dispatch(completadButton(timerValue));
  };

  const reset = () => {
    dispatch(resetTimer());
  };

  useEffect(() => {
    if (stateButton)
      countRef.current = setInterval(() => {
        dispatch(increment());
      }, 1000);
    return () => {
      countRef.current && clearInterval(countRef.current);
      countRef.current = null;
    };
  });

  return (
    <div className=" conteiner-count">
      {!stateButton ? (
        <button className="button_plus" onClick={timeStart}>
          старт
        </button>
      ) : (
        <button className="button_plus" onClick={timeStop}>
          стоп
        </button>
      )}

      <span className="span-null">{timerValue}</span>
      <button className="button_minus" onClick={reset}>
        обновить
      </button>
    </div>
  );
  
};

export default Counter;

//------------------------------------------

/*
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  completadButton, resetTimer, increment } from "../store/countSlice";

const Counter = () => {
  const stateCount = useSelector((state) => state.countReducer.stateButton);
  const textData = useSelector((state) => state.countReducer.value);

  const dispatch = useDispatch();

  const countIdRef = useRef(null);

  const timeStart = () => {
    dispatch(completadButton(!stateCount));
  };

  const timeStop = () => {
    dispatch(completadButton(stateCount));
  };

  const reset = () => {
    stateCount; // false
    dispatch(resetTimer()); // 0
  };

  
  useEffect(() => {
    if (stateCount)
      countIdRef.current = setInterval(() => {
        dispatch(increment());
      }, 1000);

    return () => {
      countIdRef.current && clearInterval(countIdRef.current);
      countIdRef.current = null;
    };
  });

  
  return (
    <div className=" conteiner-count">
      {!stateCount ? (
        <button className="button_plus" onClick={timeStart}>
          старт
        </button>
      ) : (
        <button className="button_plus" onClick={timeStop}>
          стоп
        </button>
      )}
      <span className="span-null">{textData}</span>
      <button className="button_minus" onClick={reset}>
        обновить
      </button>
    </div>
  );
};

export default Counter;


//  TIMER -  REDUX   --------------------------------------------


/*
function setDefaultvalue() {
  // Проверяю localStorage по ключу text
  const userCount = localStorage.getItem("text");
  // Если ключ совпадает то возврощаю данные или ноль
  return userCount ? +userCount : 0;
}

const Counter = () => {
  // Timer
  const [count, setCount] = useState(setDefaultvalue());
  const [isCounting, setIsCount] = useState(false);
  const timerIdRef = useRef(null);

  const timeStart = () => {
    setIsCount(true);
  };

  const timeStop = () => {
    setIsCount(false);
  };

  const reset = () => {
    setCount(0);
    setIsCount(false);
  };

  //Записываю данные в  localStorage
  useEffect(() => {
    localStorage.setItem("text", count);
  }, [count]);

  // Подсчёт
  useEffect(() => {
    if (isCounting) {
      timerIdRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    //clearInterval(timerIdRef.current)
    // опция для размантирования
    return () => {
      console.log('unmount')
      timerIdRef.current && clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    };
  }, [isCounting]);

  return (
    <div className=" conteiner-count">
      {!isCounting ? (
        <button className="button_plus" onClick={timeStart}>
          старт
        </button>
      ) : (
        <button className="button_plus" onClick={timeStop}>
          стоп
        </button>
      )}
      <span className="span-null">{count}</span>
      <button className="button_minus" onClick={reset}>
        обновить
      </button>
    </div>
  );
};

export default Counter;
*/
