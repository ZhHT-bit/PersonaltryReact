import Banner from '../banner/banner.js'
import './home.css'
import { useState, useEffect } from 'react'

function Home() {
  let [count, setCount] = useState(1)   // 取值范围 1 ~ 5
  const numPircture = Array.from({ length: 5 }, (_, i) => i)
  const height = document.documentElement.scrollHeight

  useEffect(() => {
    const n = setInterval(() => {
      setCount(prev => {
        if (prev < 5) {
          return prev + 1;
        } else {
          return 1;
        }
      });
    }, 5000);
    return () => { clearInterval(n) };
  }, []);

  return (
    <div className='picture' style={{ height: height, backgroundImage: `url(p${count}.jpg)` }}>
      <Banner active='home'></Banner>
      <div className='left' onClick={() => {
        setCount(count === 1 ? 5 : count - 1)
      }}><div></div></div>
      <div className='right' onClick={() => {
        setCount(count === 5 ? 1 : count + 1)
      }}><div></div></div>
      <ul className='count'>
        {numPircture.map((item) => {
          return (
            <li key={item} className={count === (item + 1) ? 'pactive' : ''} onClick={() => {
              setCount(item + 1)
            }}></li>
          )
        })}
      </ul>
    </div>
  )
}

export default Home