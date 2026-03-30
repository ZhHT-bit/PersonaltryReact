import './notice.css'
import Banner from '../banner/banner.js'
import { useState } from 'react'

function Notice() {
  const height = document.documentElement.scrollHeight
  const [state, setState] = useState(false)
  const [index, setindex] = useState(0)

  // const message = []
  const message = [
    { title: '公告一', content: '测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件测试文件', time: '2026-03-27' }
  ]

  return (
    <div className='box' style={{ height: height }}>
      <Banner active={'notice'}></Banner>
      {state && <div className='shed' style={{ height: height }}
        onClick={() => {
          setState(!state)
        }}
      ></div>}
      <div className='ncontent' style={{ gridTemplateRows: `repeat(${message.length < 5 ? 5 : message.length}, 1fr);` }}>
        {state && <div className='page'>
          <div className='articleTitle'>{message[index].title}</div>
          <div className='articleless'>{message[index].content.substring(0, 50)}</div>
          <div className='articletime'>{message[index].time}</div>
        </div>}
        {message.length ?
          <ul className='ncontentlist'>
            {message.map((item, i) => {
              return (
                <li onClick={() => {
                  setState(!state)
                  setindex(i)
                }}>
                  <div className='articleTitle'>{item.title}</div>
                  <div className='articleless'>{item.content.substring(0, 50)}</div>
                  <div className='articletime'>{item.time}</div>
                </li>
              )
            })}
          </ul>
          :
          <div className='none' style={{ backgroundImage: `url(image.png)` }}></div>
        }
      </div>
    </div>
  )
}

export default Notice