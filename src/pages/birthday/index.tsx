import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from '@/styles/Birthday.module.scss'
import { StageContent, stagesContent } from './data/index'
import LSModal from '@/components/LSModal'
import Stage1 from './components/Stage1'
import Stage2 from './components/Stage2'
import Stage3 from './components/Stage3'
import Stage4 from './components/Stage4'

export default function Birthday() {
  const [progress, setProgress] = useState(4)

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

    <CSSTransition in={ !modalShow && progress === 4 } timeout={2000} classNames="fade" unmountOnExit >
      <Stage4 />
    </CSSTransition>
  </main>
}






