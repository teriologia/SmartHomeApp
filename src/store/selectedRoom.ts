import {create} from 'zustand';

export const useBearStore = create(set => ({
  image: '',
  items: [],
  setImage: (image: any, items: any) =>
    set(state => ({image: image, items: items})),
  removeImage: () => set({image: '', items: []}),
}));
