import Square from "./Square"
import chessService from "../service/chessService"
import { useGameStore } from '../stores/gameStore.ts'

const Board = () => {
  const boardSize = '700px'

  const boardState = useGameStore((state) => state.boardState)
  const setBoardState = useGameStore((state) => state.setBoardState)
  const setSelectedSquare = useGameStore((state) => state.selectSquare)
  const initTurn = useGameStore((state) => state.initTurn)

  const startGame = () => {
    const initedBoard = chessService.newGame()
    setBoardState(initedBoard)
    setSelectedSquare('')
    initTurn()
  }

  return (
    <>
      <div flex="~ wrap"  style={{width: boardSize, height: boardSize}}>
        {boardState.map((stateArr) => (
          stateArr.map((state) => (
            <Square key={state.square} {...state} />
          ))
        ))}
      </div>
      <button mt-4 main-btn onClick={startGame}>Play</button>
    </>
  )
}

export default Board
