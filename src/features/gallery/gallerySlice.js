import { createSlice } from 'redux-starter-kit';

import data from '../../components/data';

const gallerySlice = createSlice({
  slice: 'gallery',
  initialState: { dataToShow: data, selectedTags: new Set([]) },
  reducers: {
    toggleTag: (state, action) => {
      const tag = action.payload;
      if (state.selectedTags.has(tag)) {
        state.selectedTags.delete(tag);
      } else {
        state.selectedTags.add(tag);
      }
    },
    showAll: (state, action) => {
      state.selectedTags.clear();
    }
  }
});

export const { toggleTag, showAll } = gallerySlice.actions;

export default gallerySlice.reducer;
