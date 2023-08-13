import Image from 'next/image'
import { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import LSButton from '@/components/LSButton'
import styles from '@/styles/Birthday.module.scss'
import { StageContent, stagesContent } from './data'
import LSModal from '@/components/LSModal'


export default function Birthday() {
  const [progress, setProgress] =  useState(1)

  const [modalShow, setModalShow] = useState(false)
  const [modalContent, setModalContent] = useState<StageContent>(stagesContent[0])

  return <main className={styles.birthday}>
    <CSSTransition in={modalShow} timeout={2000} classNames="scale" unmountOnExit>
      <LSModal imgUrl={modalContent.imgUrl} title={modalContent.title}
        content={modalContent.description} btnText={modalContent.btnUrl} onConfirm={() => {
        setProgress(progress + 1)
        setModalShow(false)
      }}/>
    </CSSTransition>

    <CSSTransition in={ !modalShow && progress === 1 } timeout={2000} classNames="fade" unmountOnExit>
      <Stage1 onStart={() => {
        console.log('onstart')
        setModalShow(true)
        setModalContent(stagesContent[0])
      }}/>
    </CSSTransition>

    <CSSTransition in={ !modalShow && progress === 2 } timeout={2000} classNames="fade" unmountOnExit >
      <Stage2 onMixWell={() => {
        console.log('onMixWell')
        setModalShow(true)
        setModalContent(stagesContent[1])
      }} />
    </CSSTransition>

    <CSSTransition in={ !modalShow && progress === 3 } timeout={2000} classNames="fade" unmountOnExit >
      <Stage3 onBaseBake={() => {
        console.log('onBaseBake')
        setModalShow(true)
        setModalContent(stagesContent[2])
      }} />
    </CSSTransition>
  </main>
}



interface Stage1Props {
  onStart: () => void
}
function Stage1({ onStart } : Stage1Props) {
  return <div className="birthday__stage stage1">
    <Image width={300} height={370}
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cake.png" alt="Birth Cake" />
    <LSButton className="start" onClick={onStart}>Let’s make a cake!</LSButton>
  </div>
}

interface Stage2Props {
  onMixWell: () => void
}
function Stage2({ onMixWell }:Stage2Props) {
  const [count, setCount] = useState(0) // stir times
  const MIX_WELL_COUNT = 5

  useEffect(() => {
    if(count === MIX_WELL_COUNT) { // mix well, call onMixWell func
      onMixWell()
    }
  }, [count, onMixWell])

  return <div className="birthday__stage stage2">
    <h1>Let’s get mixing</h1>
    <p>OK, so let’s start by mixing all of our ingredients together in a big mixing bowl. Click the mix button below until the mixture is nice and smooth.</p>
    <div className="mix">
      <div className="mix__bowl">
        <Image width={207} height={148}
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/bowl.png" alt="Mix Bowl" />
      </div>
      <div className="mix__spoon">
        <Image width={25} height={81}
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/spoon.png" alt="Mix Spoon" />
      </div>
    </div>
    <LSButton className="start" onClick={() => setCount(count + 1)}>Click here to mix!</LSButton>
  </div>
}

interface Stage3Props {
  onBaseBake: () => void
}
function Stage3({ onBaseBake }:Stage3Props) {

  return <div className="birthday__stage stage3">
    <h1>Let’s bake own base</h1>
    <p>Alright, let’s get this mixture in the oven. Go ahead and drag the cake mix into the digital oven. Then put your feet up while it bakes.</p>
    <div className="oven">
      <Image width={290} height={282}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/oven.png" alt="Oven" />
    </div>
    <div className="tin">
    <Image width={90} height={70}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tin.png" alt="Tin" />
    </div>
  </div>
}