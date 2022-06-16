import React, { useState, useRef, useEffect } from "react";

const useForceUpdate = () => useState()[1];

const Upload = () => {
  const fileInput = useRef(null);
  const forceUpdate = useForceUpdate();

  useEffect((e) => {
    window.addEventListener("keyup", clickFileInput);
    return () => window.removeEventListener("keyup", clickFileInput);
  });

  function clickFileInput(e) {
    if (fileInput.current.nextSibling.contains(document.activeElement)) {
      // Bind space to trigger clicking of the button when focused
      if (e.keyCode === 32) {
        fileInput.current.click();
      }
    }
  }

  function fileNames() {
    const { current } = fileInput;

    if (current && current.files.length > 0) {
      let messages = [];
      for (let file of current.files) {
        messages = messages.concat(<p key={file.name}>{file.name}</p>);
      }
      return messages;
    }
    return "Upload Pitch Deck";
  }

  return (
    <div className="d-flex align-items-center justify-content-between upload-wrap">
      {fileNames()}
      <input
        id="file"
        type="file"
        ref={fileInput}
        // The onChange should trigger updates whenever
        // the value changes?
        // Try to select a file, then try selecting another one.
        onChange={forceUpdate}
        multiple
      />
      <label htmlFor="file">
        <span tabIndex="0" role="button" aria-controls="filename">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <g id="Layer_x0020_1" transform="translate(0 0)">
              <g id="_3024629215024" transform="translate(0 0)">
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M0,2885.215v3.7a4.661,4.661,0,0,0,.327,1.8,3.892,3.892,0,0,0,.876,1.292l.552.483a3.845,3.845,0,0,0,.689.391,4.415,4.415,0,0,0,1.807.347h11.5A4.109,4.109,0,0,0,20,2888.915v-3.7c0-.11-.033-.143-.14-.143H18.084c-.226,0-.14.417-.14.854a24.337,24.337,0,0,1-.109,3.921,2.05,2.05,0,0,1-.908,1.07,1.779,1.779,0,0,1-.8.227H3.878a1.814,1.814,0,0,1-1.321-.651,1.886,1.886,0,0,1-.5-1.53l0-3.513c.008-.522.132-.376-1.919-.376-.108,0-.14.033-.14.143Z"
                  transform="translate(0 -2873.23)"
                  fill="#f5f8ff"
                  fill-rule="evenodd"
                />
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M773.62,6.782l1.392,1.446,4.221-4.292.011,10.114c0,.729-.3.569,1.9.569.231,0,.139-.739.139-1.186V3.948l4.21,4.28,1.414-1.423L780.276,0Z"
                  transform="translate(-770.264 0)"
                  fill="#f5f8ff"
                  fill-rule="evenodd"
                />
              </g>
            </g>
          </svg>
        </span>
      </label>
    </div>
  );
};

export default Upload;
