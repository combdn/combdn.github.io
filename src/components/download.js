import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import data from './data';

export default function Download() {
  useEffect(() => {
    let downloadableData = [];
    for (const work of data) {
      let newWork = work;
      newWork.id = uuid();
      downloadableData.push(newWork);
    }
    console.log(JSON.stringify(downloadableData));

    downloadableData = [JSON.stringify(downloadableData)];

    var file;

    var properties = { type: 'text/plain' }; // Specify the file's mime-type.
    try {
      // Specify the filename using the File constructor, but ...
      file = new File(downloadableData, 'file.json', properties);
    } catch (e) {
      // ... fall back to the Blob constructor if that isn't supported.
      file = new Blob(downloadableData, properties);
    }
    var url = URL.createObjectURL(file);
    document.getElementById('link').href = url;
  });

  return (
    <a id="link" target="_blank" download="file.json">
      Download
    </a>
  );
}
