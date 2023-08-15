import LSButton from '@/components/LSButton'
import { useState } from 'react'
import { baseOptions, fillingOptions } from '../data/index'

export default function Stage4() {
  return  <div className="birthday__stage stage4">
    <h1>Let’s make the cake</h1>
    <p>Build your cake in any order you want. Click an ingredient to add it to your cake. You can add more than one item e.g 2 vanilla sponges but only 5 bases and 6 fillings. Hit the button at the bottom to finish your cake and add your candles. Make sure you leave some icing for the top of your cake!</p>

    <SeasonPaste />
    <Cake />

    <LSButton>Add the candle!</LSButton>
  </div>
}


function SeasonPaste() {
  const MAX_BASE_COUNT = 5, MAX_FILLINGS_COUNT = 6

  const [baseCount, setBaseCount] = useState(0)
  const [fillingCount, steFillingCount] = useState(0)

  return <div className='season-paste'>
    <div className="paste">
      <div className="intros">
        <h3>Bases</h3>
        <h5>{baseCount} / {MAX_BASE_COUNT}</h5>
      </div>
      <div className="options">
        {
          baseOptions.map(option => (
            <div className='option' key={option.name}>
              <div className="option__color" style={{backgroundColor: option.color}}></div>
              <div className="option__name">{option.name}</div>
            </div>
          ))
        }
      </div>
    </div>

    <div className="paste inactive">
      <div className="intros">
        <h3>Fillings</h3>
        <h5>{fillingCount} / {MAX_FILLINGS_COUNT}</h5>
      </div>
      <div className="options">
        {
          fillingOptions.map(option => (
            <div className='option' key={option.name}>
              <div className="option__color" style={{backgroundColor: option.color}}></div>
              <div className="option__name">{option.name}</div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
}

interface CakeProps {
  bases: string[]
  fillings: string[]
}
function Cake() {
  return  <div className="cake">
    <div className="base" style={{backgroundColor: '#ffd296', width: '200px'}}></div>
  </div>
}