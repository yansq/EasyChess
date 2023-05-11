import { create } from 'zustand'
import { Participator, SquareState } from '../types'
import type { Square } from 'chess.js'
import chessService from '../service/chessService'

interface GameState {
  boardState: SquareState[][]
  setBoardState: (boardState: SquareState[][]) => void

  whoseTurn: Participator
  passTurn: () => void

  selectedSquare: Square | ''
  selectSquare: (square: Square | '') => void

  bears: number
  increase: () => void
}

export const useGameStore = create<GameState>((set) => ({
  boardState: chessService.newGame(),
  setBoardState: (boardState) => set({ boardState }),

  whoseTurn: Participator.White,
  passTurn: () => set((state) => ({ whoseTurn: state.whoseTurn === Participator.White ? Participator.Black : Participator.White })),
    
  move: () => set((state) => {
    console.log(state)
    return { whoseTurn: state.whoseTurn === Participator.White 
        ? Participator.Black 
        : Participator.White }
  }),

  selectedSquare: '',
  selectSquare: (square) => set({
    selectedSquare: square,
  }),

  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBear: () => set({ bears: 0 }),
}))
