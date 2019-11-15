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

const gallerySlice = createSlice({
  slice: 'gallery',
  initialState: {
    dataToShow: data,
    availableTags: computeAvailableTags(data),
    selectedTags: [],
    selectedWorkId: '',
    selectedWorkProject: ''
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

      // If some thumbnail is selected and it will be invisible
      // after filtering — discard selection
      if (state.selectedWorkId !== '') {
        if (
          state.dataToShow.findIndex(work => work.id === state.selectedWorkId) <
          0
        )
          state.selectedWorkId = '';
      }
    },
    showAll: (state, action) => {
      state.dataToShow = data;
      state.selectedTags = [];
      state.availableTags = computeAvailableTags(data);
    },
    toggleWorkSelection: (state, action) => {
      // If nothing is selected or click was on different thumbnail
      if (
        state.selectedWorkId === '' ||
        state.selectedWorkId !== action.payload.id
      ) {
        state.selectedWorkId = action.payload.id;
        state.selectedWorkProject = action.payload.project;
      } else {
        // If clicked on the same thumbnail twice
        state.selectedWorkId = '';
        state.selectedWorkProject = '';
      }
    }
  }
});

export const { toggleTag, showAll, toggleWorkSelection } = gallerySlice.actions;

export default gallerySlice.reducer;
