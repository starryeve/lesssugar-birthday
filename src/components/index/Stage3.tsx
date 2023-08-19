import Image from 'next/image'
import { useState } from 'react'

const DND_FORMAT = 'tin'

interface Stage3Props {
  onBaseBake: () => void
}

export default function Stage3({ onBaseBake }: Stage3Props) {
  const [isHover, setIsHover] = useState(false)
  const onDragStart: React.DragEventHandler = e => {
    console.log('drag start: ', e)
    const data = {
      type: DND_FORMAT,
      id: 1
    }
    e.dataTransfer.setData(DND_FORMAT, JSON.stringify(data))
  }

  const onDragOver: React.DragEventHandler = e => {
    e.preventDefault()
    return
  }

  const onDragEnter: React.DragEventHandler = e => {
    setIsHover(true)
    // console.log('drag enter: ', e)
  }

  const onDragLeave: React.DragEventHandler = e => {
    setIsHover(false)
    // console.log('drag leave: ', e)
  }

  const onDrop: React.DragEventHandler = e => {
    setIsHover(false)
    const { dataTransfer } = e
    const dataStr = dataTransfer.getData(DND_FORMAT)
    if(dataStr) {
      const data = JSON.parse(dataStr)
      if(data.type === DND_FORMAT) {
        onBaseBake()
      }
    } else {
      return
    }
  }

  return <div className="birthday__stage stage3">
    <h1>Let’s bake own base</h1>
    <p>Alright, let’s get this mixture in the oven. Go ahead and drag the cake mix into the digital oven. Then put your feet up while it bakes.</p>
    <div className={isHover ? 'oven hover' : 'oven'}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}>
      <Image width={290} height={282} draggable={false}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/oven.png" alt="Oven"/>
    </div>
    <div className="tin" draggable onDragStart={onDragStart}>
      <Image width={90} height={70} draggable={false}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tin.png" alt="Tin" />
    </div>
  </div>
}