import Image from 'next/image'
import LSButton from "@/components/LSButton"

interface Stage1Props {
  onStart: () => void
}
export default function Stage1({ onStart } : Stage1Props) {
  return <div className="birthday__stage stage1">
    <Image width={300} height={370}
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cake.png" alt="Birth Cake" />
    <LSButton className="start" onClick={onStart}>Let’s make a cake!</LSButton>
  </div>
}