import create, {StateCreator} from 'zustand';

interface SampleStoreState {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

export const useSampleStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state: SampleStoreState) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
