import './detail.css'
import Banner from '../banner/banner'
import { useState, useEffect } from 'react'

function Detail() {
  const width = document.documentElement.scrollWidth
  const [flash, setflash] = useState(0)
  const height = document.documentElement.scrollHeight


  const contenttext = [
    { textTilte: '暮色海滩', textArticle: '画面展现了一处海滩的黄昏景致。天空中布满厚重的暗蓝色云层，云层下方晕染着暖橙色的霞光，色彩对比鲜明。平静的海面如镜面般平整，倒映着天空的色彩，海面与沙滩的界限清晰。沙滩宽阔且平整，向远方延伸，画面右侧能看到一座红顶的小型建筑。整体氛围静谧，暗调的天空与柔和的水面形成反差，传递出黄昏时分海滩独有的宁静感。' },
    { textTilte: '秋日山林', textArticle: '这是一片秋日山林的景象。画面里的树木呈现出丰富的色彩，深绿、金黄、橙红交织分布。一棵浅色叶片的树木在画面中尤为显眼，周围环绕着不同色彩的枝叶。山林的植被层次分明，不同种类的树木错落生长，展现出秋季植被的色彩变化。整体画面色彩浓郁，能直观感受到秋日山林的自然生机，每一处枝叶的色彩都彰显着季节的特征。' },
    { textTilte: '山涧溪流', textArticle: '画面呈现了山间的溪流景观。远处是巍峨的山峰，山体覆盖着绿色植被，部分山峰还残留着积雪。溪流从山间奔涌而下，形成层层叠叠的瀑布，水流撞击岩石翻涌着白色浪花。溪流两侧是粗糙的岩石，岩石旁生长着茂密的绿色树木与低矮植被。画面中还能看到一座小型建筑坐落在溪流旁的平缓处，整体展现出自然山水的壮阔与灵动，山水与植被的搭配尽显自然之美。' },
    { textTilte: '水中黑猫', textArticle: '这幅画面以水中的黑猫为核心。黑猫身处碧绿的水面中央，水面泛起一圈圈圆形的涟漪，涟漪向四周扩散。水面周围分布着深浅不一的绿色色块，还散落着浅黄、棕褐的片状元素，像是漂浮的叶片。黑猫的黑色身形在绿色水面中格外突出，画面以简洁的色彩和形态，勾勒出黑猫在水中的独特画面，整体氛围安静又略带神秘。' },
    { textTilte: '山湖相映', textArticle: '画面展示了山湖相依的景致。远处是连绵的雪山，山峰尖锐且覆盖着白雪，山体呈现出灰褐色的岩石质感。雪山下方是平静的湖面，湖水澄澈，清晰倒映出雪山与蓝天的轮廓。湖岸边生长着成片的针叶林，树木翠绿整齐，与湖水、雪山构成层次分明的画面。整体画面开阔且静谧，湖水的平和、雪山的巍峨、植被的翠绿相互映衬，尽显自然山水的秀美。' },
  ]

  return (
    <div className='paper' style={{ height: height }}>
      <Banner active='detail'></Banner>
      <div className='content'>
        <div className='detailtitle'>详细信息</div>
        <ul className='contentlist'>
          {contenttext.map((item, index) => {
            return (
              <li key={index}>
                <div className='dimage' style={{ backgroundImage: `url(p${index + 1}.jpg)` }}></div>
                <div className='text'>
                  <div className='textTilte'>{item.textTilte}</div>
                  {width < 1200 ? '' : <div className='textArticle'>{item.textArticle}</div>}
                </div>
                <div className='love'
                  key={index}
                  style={localStorage.getItem(index) ? { backgroundImage: `url(love1@3x.png)` } : { backgroundImage: `url(love@3x.png)` }}
                  onClick={(e) => {
                    let state = localStorage.getItem(index)
                    if (state === null) {
                      localStorage.setItem(index, "true");
                    } else {
                      localStorage.removeItem(index);
                    }
                    setflash(flash === 0 ? 1 : 0)
                  }}
                >
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Detail