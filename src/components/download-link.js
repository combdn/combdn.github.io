import React, { useEffect } from 'react';

export default function DownloadLink({ url, id, name, type, children }) {
  async function createBlobUrl(url) {
    let blob = await fetch(url).then(response => response.blob());
    // debugger;
    let file = new File([blob], name, { type: type });
    let newUrl = URL.createObjectURL(file);
    document.getElementById(id).href = newUrl;
  }

  useEffect(() => {
    createBlobUrl(url);
  });

  return (
    <a id={id} target="_blank" download="test.pdf">
      {children}
    </a>
  );
}
