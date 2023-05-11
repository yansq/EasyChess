import { Chess, Square } from "chess.js"
import { SquareState, Participator, MoveResult } from "../types"

let chess: Chess

const getBoard = () => {
  return assembleBoard(chess.board())
}

const newGame = () => {
  chess = new Chess()
  return getBoard()
}

const move = (from: string, to: string, promotion?: string): MoveResult  => {
  const moveInfo = chess.move({ from, to, promotion })
  console.log(moveInfo)
  if (chess.isDraw()) {
    return MoveResult.Draw
  }
  if (chess.isCheckmate()) {
    return MoveResult.CheckMate
  }
  return MoveResult.Common
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

export default { getBoard ,newGame, move, isYourPiece, isLegalMove }
