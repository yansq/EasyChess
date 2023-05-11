import { useState, useEffect } from 'react'
import { SquareState, MoveResult } from '../types'
import { PieceSymbol, Color } from 'chess.js'
import { useGameStore } from '../stores/gameStore.ts'
import chessService from "../service/chessService"

const Square = ({ square, type, color }: SquareState) => {
  const [pieceImg, setPieceImg] = useState('')

  const setSelectedSquare = useGameStore((state) => state.selectSquare)
  const selectedSquare = useGameStore((state) => state.selectedSquare)
  const trun = useGameStore((state) => state.whoseTurn)
  const passTurn = useGameStore((state) => state.passTurn)
  const setBoardState = useGameStore((state) => state.setBoardState)

  useEffect(() => {
    setPieceImg(getPieceImg(type, color))
  }, [type, color])

  const getPieceImg = (type: PieceSymbol | '', color: Color | ''): string => {
    const basePath = '/public/pieces/'
    const fullColor = color === 'b' ? 'black' : 'white'
    return type ? `url(${basePath}${type}-${fullColor}.svg)` : ''
  }
  const bgColor = (Number(square.charCodeAt(0)) + Number(square.charAt(1))) % 2 == 0 
      ? 'bg-board-primary' 
      : 'bg-board-secondary'

  const clickSquare = () => {
    if (chessService.isYourPiece(square, trun)) {
      setSelectedSquare(square)
    } else if (selectedSquare !== '') {
      try {
        if (chessService.isLegalMove(selectedSquare, square)) {
          const moveResult = chessService.move(selectedSquare ,square)
          handleResult(moveResult)
        }
      } catch (error) {
        // TODO: choose promotion piece
        const moveResult = chessService.move(selectedSquare, square, 'q')
        handleResult(moveResult)
        console.warn(error)
      }
    }
  }

  const handleResult = (moveResult: MoveResult) => {
    if (moveResult == MoveResult.Draw) {
      window.prompt("It is a draw!")
    }
    if (moveResult == MoveResult.CheckMate) {
      window.prompt(true + " wins!")
    }
    setSelectedSquare('')
    passTurn()
    setBoardState(chessService.getBoard())
  }

  return (
    <div 
        style={{backgroundImage: pieceImg}} 
        className={"w-1/8 h-1/8 bg-cover box-border relative " 
            + bgColor + (selectedSquare === square ? " border-solid border-2" : "")}
        onClick={clickSquare}>
      {square}
    </div>
  )
}

export default Square
