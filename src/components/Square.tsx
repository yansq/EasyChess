import { useState, useEffect } from 'react'
import type { SquareState } from '../types'
import { PieceSymbol, Color } from 'chess.js'

const Square = ({ square, type, color }: SquareState) => {
  const [pieceImg, setPieceImg] = useState('')

  useEffect(() => {
    setPieceImg(getPieceImg(type, color))
  }, [type, color])

  const getPieceImg = (type: PieceSymbol | '', color: Color | ''): string => {
    const basePath = '/public/pieces/'
    const fullColor = color === 'b' ? 'Black' : 'White'
    return type ? `bg-[url(${basePath}${type}-${fullColor}.svg)]` : ''
  }

  const bgColor = (Number(square.charCodeAt(0)) + Number(square.charAt(1))) % 2 == 0 
      ? 'bg-board-primary' : 'bg-board-secondary'

  return (
    <div className={"w-1/8 h-1/8 bg-cover bg-[url(/public/pieces/Pawn-Black.svg)] " + bgColor}>{square} {type}</div>
  )
}

export default Square
