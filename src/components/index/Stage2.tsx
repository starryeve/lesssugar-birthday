import { useEffect, useState } from "react"
import Image from 'next/image'
import LSButton from "@/components/common/LSButton"

interface Stage2Props {
  onMixWell: () => void
}
export default function Stage2({ onMixWell }:Stage2Props) {
  const [count, setCount] = useState(0) // mix times
  const [mixing, setMixing] = useState(false)
  const MIX_WELL_COUNT = 5

  const mix = () => {
    if(!mixing && count < MIX_WELL_COUNT) {
      setCount(count + 1)
      setMixing(true)
      setTimeout(() => {
        setMixing(false)
      }, 1000);
    }
  }

  useEffect(() => {
    if(count === MIX_WELL_COUNT) { // mix well, call onMixWell func
      setTimeout(() => {
        onMixWell()
      }, 1000);
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
        <Image width={25} height={81} className={mixing ? 'mixing' : ''}
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/spoon.png" alt="Mix Spoon" />
      </div>
    </div>
    <LSButton className="start" onClick={mix}>Click here to mix!</LSButton>
  </div>
}