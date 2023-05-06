import { useState } from "react"
import Square from "./Square"
import chessService from "../service/chessService"
import { SquareState } from "~/types"

const Board = () => {
  const boardSize = '700px'

  const startGame = () => {
    const initedBoard = chessService.newGame()
    console.log(initedBoard)
  }

  const [boardState, setBoardState] = useState<SquareState[][]>(chessService.newGame())

  return (
    <>
      <div className="flex flex-wrap" style={{width: boardSize, height: boardSize}}>
        {boardState.map((stateArr) => (
          stateArr.map((state) => (
            <Square key={state.square} {...state} />
          ))
        ))}
      </div>
      <button className="btn" onClick={startGame}>Play</button>
    </>
  )
}

export default Board
