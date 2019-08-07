import React from 'react';

// Get static pathes for all of the files in the 'assets' folder
// with 'require.context' webpack method
export default function useFiles() {
  // Function to import files
  function importAll(context) {
    let files = {};
    context.keys().forEach(item => {
      files[item.replace('./', '')] = context(item);
    });
    return files;
  }

  // Import images
  const imageFiles = importAll(
    require.context('../assets/', true, /\.(png|jpe?g|svg)$/)
  );

  // Import videos
  const videoFiles = importAll(
    require.context('../assets/', true, /\.(mp4|mov)$/)
  );

  return { images: imageFiles, videos: videoFiles };
}
