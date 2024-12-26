interface BingoState {
  board: string[];
  selectedCells: boolean[][];
  bingoLines: string[];
}

export const BingoStateManager = {
  saveGameState: (state: BingoState) => {
    localStorage.setItem('bingoState', JSON.stringify(state));
  },

  getGameState: (): BingoState | null => {
    const state = localStorage.getItem('bingoState');
    return state ? JSON.parse(state) : null;
  },

  clearGameState: () => {
    localStorage.removeItem('bingoState');
  },
};
