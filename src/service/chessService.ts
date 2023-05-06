import { Chess, Square } from "chess.js"
import { SquareState } from "~/types"

let chess: Chess

const getBoard = () => {
  return assembleBoard(chess.board())
}

const newGame = () => {
  chess = new Chess()
  return getBoard()
}

const testGame = () => {
  newGame()
  while (!chess.isGameOver()) {
    const moves = chess.moves()
    const move = moves[Math.floor(Math.random() * moves.length)]
    chess.move(move)
  }
  console.log(chess.pgn())
}

const move = (from: string, to: string) => {
  chess.move({ from, to })
}

const assembleBoard = (board: (SquareState | null)[][]): SquareState[][] => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (!board[i][j]) {
        board[i][j] = {
          square: String.fromCharCode(97 + j) + (8 - i) as Square,
          type: '',
          color: '' 
        }
      }
    }
  }
  return board as SquareState[][]
}

export default { testGame, getBoard ,newGame, move }
