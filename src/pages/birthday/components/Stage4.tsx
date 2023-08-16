import LSButton from '@/components/LSButton'
import { useEffect, useState } from 'react'
import { SeasonOption, baseOptions, fillingOptions } from '../data/index'
const MAX_BASE_COUNT = 5, MAX_FILLINGS_COUNT = 6

export default function Stage4() {
  const [bases, setBases] = useState<SeasonOption<'base'>[]>([])
  const [fillings, setFillings] = useState<SeasonOption<'filling'>[]>([])

  const onBaseAdd = (base: SeasonOption<'base'>) => {
    setBases([...bases, base])
  }
  const onFillingAdd = (filling: SeasonOption<'filling'>) => {
    setFillings([...fillings, filling])
  }

  return  <div className="birthday__stage stage4">
    <h1>Let’s make the cake</h1>
    <p>Build your cake in any order you want. Click an ingredient to add it to your cake. You can add more than one item e.g 2 vanilla sponges but only 5 bases and 6 fillings. Hit the button at the bottom to finish your cake and add your candles. Make sure you leave some icing for the top of your cake!</p>

    <SeasonPaste bases={bases} fillings={fillings} maxBaseCount={MAX_BASE_COUNT} maxFillingCount={MAX_FILLINGS_COUNT}
      onBaseAdd={onBaseAdd} onFillingAdd={onFillingAdd} />
    <Cake bases={bases} fillings={fillings}/>

    <LSButton>Add the candle!</LSButton>
  </div>
}

interface SeasonPasteProps {
  bases: SeasonOption<'base'>[],
  fillings: SeasonOption<'filling'>[],
  maxBaseCount: number,
  maxFillingCount: number,

  onBaseAdd: (base: SeasonOption<'base'>) => void,
  onFillingAdd: (filling: SeasonOption<'filling'>) => void
}
function SeasonPaste({ bases, fillings, maxBaseCount, maxFillingCount, onBaseAdd, onFillingAdd }: SeasonPasteProps) {
  const [active, setActive] = useState<'base'|'filling'>('filling')

  return <div className='season-paste'>
    <div className={active === 'base' && bases.length < maxBaseCount ? 'paste' : 'paste inactive'}>
      <div className="intros">
        <h3>Bases</h3>
        <h5>{bases.length} / {maxBaseCount}</h5>
      </div>
      <div className="options">
        {
          baseOptions.map(option => (
            <div className='option' key={option.name} onClick={() => {
              onBaseAdd(option)
              setActive('filling')
            }}>
              <div className="option__color" style={{backgroundColor: option.color}}></div>
              <div className="option__name">{option.name}</div>
            </div>
          ))
        }
      </div>
    </div>

    <div className={active === 'filling' && fillings.length < maxFillingCount ? 'paste' : 'paste inactive'}>
      <div className="intros">
        <h3>Fillings / icings</h3>
        <h5>{fillings.length} / {maxFillingCount}</h5>
      </div>
      <div className="options">
        {
          fillingOptions.map(option => (
            <div className='option' key={option.name} onClick={() => {
              onFillingAdd(option)
              setActive('base')
            }}>
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
  bases: SeasonOption<'base'>[]
  fillings: SeasonOption<'filling'>[]
}
function Cake({bases, fillings}: CakeProps) {
  const [layers, setLayers] = useState<SeasonOption[]>([])
  useEffect(() => {
    const arr: SeasonOption[] = []
    const maxLength = Math.max(bases.length, fillings.length)

    for(let i = 0; i < maxLength; i++) {
      if(i < fillings.length) arr.unshift(fillings[i])
      if(i < bases.length) arr.unshift(bases[i])
    }

    setLayers(arr)
  }, [bases, fillings])

  return <div className="cake">
    {
      layers.map((layer, index) => (
        <div key={layer.name + index} className={layer.type}
          style={{
            backgroundColor: layer.color,
            width: 200 * (MAX_BASE_COUNT + MAX_FILLINGS_COUNT - layers.length + index) / (MAX_BASE_COUNT + MAX_FILLINGS_COUNT) + 'px'
          }}>
        </div>
      ))
    }
    <div className="base" style={{backgroundColor: '#ffd296', width: '200px'}}></div>
  </div>
}