import { Chess, Square } from "chess.js"
import { SquareState, Participator } from "~/types"

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

const move = (from: string, to: string, promotion?: string) => {
  return chess.move({ from, to, promotion })
}

const isLegalMove = (from: string, to: string) => {
  const possibleMoves = chess.moves({ square: from as Square, verbose: true })
  const move = possibleMoves.find((move) => move.to === to)
  if (move) {
    console.log(move)
    if (move.flags.includes('p')) {
      throw new Error("need to promote")
    }
    return true
  }
  return false
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

const isYourPiece = (square: Square | '', trun: Participator) => {
  const piece = chess.get(square as Square)
  if (!piece) {
    return false
  }
  return piece.color == trun
}

export default { testGame, getBoard ,newGame, move, isYourPiece, isLegalMove }
