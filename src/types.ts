import type { Square, PieceSymbol, Color } from "chess.js"

export interface SquareState {
  square: Square;
  type: PieceSymbol | '';
  color: Color | '';
}
