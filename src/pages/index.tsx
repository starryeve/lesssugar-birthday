import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Countdown from "react-countdown";
import styles from '@/styles/Birthday.module.scss'
import { StageContent, stagesContent } from '@/data'
import LSModal from '@/components/common/LSModal'
import Stage1 from '@/components/index/Stage1'
import Stage2 from '@/components/index/Stage2'
import Stage3 from '@/components/index/Stage3'
import Stage4 from '@/components/index/Stage4'
import dayjs from 'dayjs';

export default function Birthday() {
  const [progress, setProgress] = useState(1)

  const [modalShow, setModalShow] = useState(false)
  const [modalContent, setModalContent] = useState<StageContent>(stagesContent[0])

  const audioRef = useRef<HTMLAudioElement>(null)
  const handlePlay = () => {
    if(audioRef.current) {
      audioRef.current.play()
    }
  }
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const now = dayjs()
    const birthday = dayjs('2023-08-24 00:00')

    const diff = Math.floor(birthday.diff(now) / 1000)
    setSeconds(diff)

    const countdown = setInterval(() => {
      setSeconds(seconds => seconds - 1)
    }, 1000)

    return () => {
      clearInterval(countdown)
    }
  }, [])
  return <main className={styles.birthday}>
    {
      seconds >= 0
    ? <div className='countdown'>
      <Countdown  date={Date.now() + (seconds * 1000)}></Countdown>
    </div>
    : <>
    <audio autoPlay loop ref={audioRef}>
      <source src="/bgm1.mp3" type="audio/mpeg" />
    </audio>

    <CSSTransition in={modalShow} timeout={2000} classNames="scale" unmountOnExit>
      <LSModal imgUrl={modalContent.imgUrl} title={modalContent.title}
        content={modalContent.description} btnText={modalContent.btnUrl} onConfirm={() => {
        setProgress(progress => progress + 1)
        setModalShow(false)
      }}/>
    </CSSTransition>

    <CSSTransition in={ !modalShow && progress === 1 } timeout={2000} classNames="fade" unmountOnExit>
      <Stage1 onStart={() => {
        console.log('onstart')
        setModalShow(true)
        handlePlay()
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

    <CSSTransition in={ !modalShow && progress === 4 } timeout={2000} classNames="fade" unmountOnExit >
      <Stage4 />
    </CSSTransition>
    </>
  }
  </main>
}






