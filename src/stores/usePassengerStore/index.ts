import { IPassengerRequestAction } from '@/apis/dto/passenger';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface PassengerStore {
  // filter state
  filter: IPassengerRequestAction;
  // eslint-disable-next-line no-unused-vars
  setFilter: (payload: PassengerStore['filter']) => void;
  // view history
  mostViewList: { id: number; count: number }[];
  // eslint-disable-next-line no-unused-vars
  setMostViewList: (payload: number) => void;
  clearHistoryView: () => void;
}

const initialFilterState: PassengerStore['filter'] = {
  limit: 30,
  offset: 0,
  sort: 'createdAt DESC',
  where: {
    first_name: '',
    phone: '',
  },
};

export const usePassengerStore = create<PassengerStore>()(
  persist(
    (set) => ({
      filter: initialFilterState,
      mostViewList: [],
      setMostViewList: (payload) =>
        set((state) => {
          const existingItem = state.mostViewList.find((item) => item.id === payload);

          if (existingItem) {
            return {
              mostViewList: state.mostViewList.map((item) =>
                item.id === payload ? { ...item, count: item.count + 1 } : item
              ),
            };
          }

          return {
            mostViewList: [...state.mostViewList, { id: payload, count: 1 }],
          };
        }),
      setFilter: (payload) => {
        set((state) => ({
          ...state,
          filter: payload,
        }));
      },
      clearHistoryView: () => set({ mostViewList: [] }),
    }),
    {
      name: 'searchHistory',
      storage: createJSONStorage(() => localStorage),
      version: 2,
      partialize: (state) => ({
        mostViewList: state.mostViewList,
      }),
    }
  )
);
