import type { SquareState } from '../types'

const Square = ({ square, type, color }: SquareState) => {
  const bgColor = (Number(square.charCodeAt(0)) + Number(square.charAt(1))) % 2 == 0 
      ? 'bg-board-primary' : 'bg-board-secondary'

  return (
    <div className={"w-1/8 h-1/8 bg-cover bg-[url(/public/pieces/Pawn-Black.svg)] " + bgColor}>{square} {type}</div>
  )
}

export default Square
