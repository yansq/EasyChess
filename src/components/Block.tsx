import type { BlockState } from '../types'

const Block = ({ id}: BlockState) => {
  const bgColor = (Number(id.charCodeAt(0)) + Number(id.charAt(1))) % 2 == 0 
      ? 'bg-[#B58862]' : 'bg-[#F0D9B5]'

  return (
    <div className={"w-1/8 h-1/8 " + bgColor}>{id}</div>
  )
}

export default Block
