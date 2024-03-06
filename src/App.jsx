import { useEffect } from 'react';
import Routes from './routes/Routes'
import { useSelector } from 'react-redux';

function App() {
  const hiddenNotis = useSelector((state) => state.notis.hidden)
  useEffect(() => {
    if (!hiddenNotis) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [hiddenNotis]);
  return (
    <>
      <Routes/>
    </>
  )
}

export default App
