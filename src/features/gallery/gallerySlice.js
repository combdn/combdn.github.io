import { createSlice } from 'redux-starter-kit';

import data from '../../components/data';

let dataIds = [];
for (const object of data) {
  dataIds.push(object.id);
}

const computeAvailableTags = dataIds => {
  let availableTags = new Set();
  let availableWorks = data.filter(work => dataIds.includes(work.id));
  for (const work of availableWorks) {
    work.tags.forEach(tag => availableTags.add(tag));
  }

  // Return the array.
  // Arrays are serializable and can be used in the redux store.
  return [...availableTags];
};

const gallerySlice = createSlice({
  slice: 'gallery',
  initialState: {
    // TODO: store only data ids in the state.
    // (Or remove link from the Patient’s Card description. Or parse the string into React.)
    dataIdsToShow: dataIds,
    availableTags: computeAvailableTags(dataIds),
    selectedTags: [],
    selectedWorkId: '',
    selectedWorkCaseId: ''
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

      // Update dataIdsToShow
      if (selectedTagsSet.length === 0) {
        state.dataIdsToShow = dataIds;
      } else {
        state.dataIdsToShow = data
          .filter(element => {
            for (const selectedTag of selectedTagsSet) {
              if (!element.tags.includes(selectedTag)) return false;
            }
            return true;
          })
          .map(work => work.id);
      }

      // Convert the set back to array to store in the state
      state.selectedTags = [...selectedTagsSet];
      state.availableTags = computeAvailableTags(state.dataIdsToShow);

      // If some thumbnail is selected and it will be invisible
      // after filtering — discard selection
      if (state.selectedWorkId !== '') {
        if (
          state.dataIdsToShow.findIndex(id => id === state.selectedWorkId) < 0
        )
          state.selectedWorkId = '';
      }
    },
    showAll: (state, action) => {
      state.dataIdsToShow = dataIds;
      state.selectedTags = [];
      state.availableTags = computeAvailableTags(dataIds);
    },
    toggleWorkSelection: (state, action) => {
      // If nothing is selected or click was on different thumbnail
      if (
        state.selectedWorkId === '' ||
        state.selectedWorkId !== action.payload.id
      ) {
        state.selectedWorkId = action.payload.id;
        state.selectedWorkCaseId = action.payload.caseId;
      } else {
        // If clicked on the same thumbnail twice
        state.selectedWorkId = '';
        state.selectedWorkCaseId = '';
      }
    },
    turnOffWorkSelection: (state, action) => {
      state.selectedWorkId = '';
      state.selectedWorkCaseId = '';
    }
  }
});

export const {
  toggleTag,
  showAll,
  toggleWorkSelection,
  turnOffWorkSelection
} = gallerySlice.actions;

export default gallerySlice.reducer;
