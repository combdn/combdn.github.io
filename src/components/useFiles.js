// Get static paths for all of the files in the 'assets' folder
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
    require.context('../assets/', true, /\.(png|jpe?g|svg|gif)$/)
  );

  // Import videos
  const videoFiles = importAll(
    require.context('../assets/', true, /\.(mp4|mov)$/)
  );

  const txtFiles = importAll(require.context('../assets/', true, /\.(txt)$/));

  return { images: imageFiles, videos: videoFiles, texts: txtFiles };
}
