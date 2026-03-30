import '../tools.css'
import './banner.css'
import { useNavigate } from 'react-router-dom'

const Banner = ({ active }) => {
  const navigate = useNavigate()
  const width = document.documentElement.scrollWidth;

  if (width < 1200) {
    document.documentElement.style.fontSize = '6px'
  }

  return (
    <div className='banner'>
      {width < 1200 ? <div className='title'>个人美术展</div>
        : <div className='title0'>个人美术展</div>}
      <ul className={width < 1200 ? 'route phonePlace' : 'route PCplace'}>
        {width < 1200 ? '' : <li className={active === 'home' ? 'active' : ''}
          onClick={() => { if (active !== 'home') navigate('/') }}
        >首页</li>}
        <li className={active === 'detail' ? 'active' : ''}
          onClick={() => { if (active !== 'detail') navigate('/detail') }}
        >详情</li>
        <li className={active === 'notice' ? 'active' : ''}
          onClick={() => { if (active != 'notice') navigate('/notice') }}
        >公告</li>
      </ul>
    </div>
  )
}

export default Banner