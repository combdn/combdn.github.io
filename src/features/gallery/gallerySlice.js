import { createSlice } from 'redux-starter-kit';

import data from '../../components/data';

const computeAvailableTags = data => {
  let availableTags = new Set();
  for (const work of data) {
    work.tags.forEach(tag => availableTags.add(tag));
  }

  // Return the array.
  // Arrays are serializable and can be used in the redux store.
  return [...availableTags];
};

// for (const work of data) {
//   work.tags.forEach(tag => availableTags.add(tag));
// }

const gallerySlice = createSlice({
  slice: 'gallery',
  initialState: {
    dataToShow: data,
    availableTags: computeAvailableTags(data),
    selectedTags: []
  },
  reducers: {
    toggleTag: (state, action) => {
      const tag = action.payload.tag;

      // Create a set from selected tags for convenience.
      // Whould rather use the set in the state but it doesn't work with Redux.
      let selectedTagsSet = new Set(state.selectedTags);

      // Toggle tag.
      if (selectedTagsSet.has(tag)) {
        selectedTagsSet.delete(tag);
      } else {
        selectedTagsSet.add(tag);
      }

      // Update dataToShow
      if (selectedTagsSet.length === 0) {
        state.dataToShow = data;
      } else {
        state.dataToShow = data.filter(element => {
          for (const selectedTag of selectedTagsSet) {
            if (!element.tags.includes(selectedTag)) return false;
          }
          return true;
        });
      }

      // Convert the set back to array to store in the state
      state.selectedTags = [...selectedTagsSet];
      state.availableTags = computeAvailableTags(state.dataToShow);
    },
    showAll: (state, action) => {
      state.dataToShow = data;
      state.selectedTags = [];
      state.availableTags = computeAvailableTags(data);
    }
  }
});

export const { toggleTag, showAll } = gallerySlice.actions;

export default gallerySlice.reducer;
