import React, { Component } from 'react';
import PDF from 'react-pdf-js';
import PropTypes from 'prop-types';
import './PDFViewer.css';

class PDFViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
  }

  onPageComplete = (page) => {
    this.setState({ page });
  }

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  }

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  }

  renderPagination = (page, pages) => {
    let previousButton = (
      <li className="previous" onClick={this.handlePrevious}>
        <button>
          <i className="fa fa-arrow-left"></i> Previous
        </button>
      </li>
    );
    if (page === 1) {
      previousButton = (
        <li className="previous disabled">
          <button>
            <i className="fa fa-arrow-left"></i> Previous
          </button>
        </li>
      );
    }
    let nextButton = (
      <li className="next" onClick={this.handleNext}>
        <button>
          Next <i className="fa fa-arrow-right"></i>
        </button>
      </li>
    );
    if (page === pages) {
      nextButton = (
        <li className="next disabled">
          <button>
            Next <i className="fa fa-arrow-right"></i>
          </button>
        </li>
      );
    }
    return (
      <nav>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
      );
  }

  render() {
    let pagination = null;

    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }

    return (
      <div className="PDFViewer">
        <PDF
          file={this.props.file}
          onDocumentComplete={this.onDocumentComplete}
          onPageComplete={this.onPageComplete}
          page={this.state.page}
        />
        {pagination}
      </div>
    );
  }
}

PDFViewer.propTypes = {
  file: PropTypes.string.isRequired,
};

export default PDFViewer;
