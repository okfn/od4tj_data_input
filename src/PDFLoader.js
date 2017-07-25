import React, { Component } from 'react';
import PDFRegionSelector from './PDFRegionSelector';


export default class PDFLoader extends Component {
  state = {};

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  }

  renderPdfViewer = (file) => {
    if (file) {
      return (
        <PDFRegionSelector file={file} />
      )
    }
  }

  render() {
    const pdfViewer = this.renderPdfViewer(this.state.file);

    return (
      <div>
        <label htmlFor="file">Load from file:</label>
        <input
          type="file"
          onChange={this.onFileChange}
          />

        {pdfViewer}
      </div>
    )
  }
}
