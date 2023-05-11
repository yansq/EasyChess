import { create } from 'zustand'

interface BearState {
  bears: number
  increase: () => void
}

const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBear: () => set({ bears: 0 }),
}))

export const useBear = () => useBearStore((state) => state.bears)
