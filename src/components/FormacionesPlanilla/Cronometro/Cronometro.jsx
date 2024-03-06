import { useEffect, useState } from "react";
import { ButtonsContainer, CronometroContainer, CronometroH1, CronometroWrapper } from "./CronometroStyles";

import { HiArrowPath, HiMiniPauseCircle, HiMiniPlayCircle  } from "react-icons/hi2";


function Cronometro() {
  const [diff, setDiff] = useState(null);
  const [initial, setInitial] = useState(null);
  const [paused, setPaused] = useState(true);

  const tick = () => {
    if (!paused) {
      setDiff(new Date(+new Date() - initial));
    }
  };

  const start = () => {
    if (!initial) {
      setInitial(+new Date());
    }
    setPaused(false);
  };

  const pause = () => {
    setPaused(true);
  };

  const resume = () => {
    const now = +new Date();
    setInitial(now - diff);
    setPaused(false);
  };

  const reset = () => {
    setInitial(null);
    setDiff(null);
    setPaused(true);
  };

  useEffect(() => {
    if (initial && !paused) {
      requestAnimationFrame(tick);
    }
  }, [initial, paused]);

  useEffect(() => {
    if (diff && !paused) {
      requestAnimationFrame(tick);
    }
  }, [diff, paused]);

  return (
    <CronometroContainer>
            <CronometroWrapper>
    <CronometroH1>{timeFormat(diff)}</CronometroH1>
    <ButtonsContainer>
        {paused ? (
            <button onClick={start}>
                <HiMiniPlayCircle/>
            </button>
        ) : (
            <>
            <button onClick={pause}>
                <HiMiniPauseCircle/>
            </button>
            <button onClick={reset}>
                <HiArrowPath/>
            </button>
            </>
      )}
      </ButtonsContainer>

    </CronometroWrapper>
    </CronometroContainer>

  );
}

const timeFormat = (date) => {
  if (!date) return "00:00:00:00";

  let hh = date.getUTCHours();
  let mm = date.getUTCMinutes();
  let ss = date.getSeconds();
  let cm = Math.round(date.getMilliseconds() / 10);

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  cm = cm < 10 ? "0" + cm : cm;

  return `${hh}:${mm}:${ss}:${cm}`;
};

export default Cronometro;
