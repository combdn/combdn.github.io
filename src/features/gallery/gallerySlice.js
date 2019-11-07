import { createSlice } from 'redux-starter-kit';

import data from '../../components/data';

let availableTags = new Set();

for (const work of data) {
  work.tags.forEach(tag => availableTags.add(tag));
  console.log('tag added');
}

// Convert to the array.
// Arrays are serializable and can be used in the redux store.
availableTags = [...availableTags];

const gallerySlice = createSlice({
  slice: 'gallery',
  initialState: {
    dataToShow: data,
    availableTags: availableTags,
    selectedTags: new Set([])
  },
  reducers: {
    toggleTag: (state, action) => {
      const tag = action.payload;
      if (state.selectedTags.has(tag)) {
        state.selectedTags.delete(tag);
      } else {
        state.selectedTags.add(tag);
      }

      if (state.selectedTags.length === 0) {
        state.dataToShow = data;
      } else {
        state.dataToShow = data.filter(element => {
          for (const selectedTag of state.selectedTags) {
            if (!element.tags.includes(selectedTag)) return false;
          }
          return true;
        });
      }
    },
    showAll: (state, action) => {
      state.selectedTags.clear();
      state.dataToShow = data;
      state.selectedTags.clear();
    }
  }
});

export const { toggleTag, showAll } = gallerySlice.actions;

export default gallerySlice.reducer;
