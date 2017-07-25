import React, { Component } from 'react';
import PDFViewer from './PDFViewer';
import RegionSelect from 'react-region-select';

export default class PDFRegionSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regions: []
    };
  }

  onChange = (regions) => {
    this.setState({
      regions,
    });
  }

	changeRegionData = (index, event) => {
		const region = this.state.regions[index];
		this.onChange([
			...this.state.regions.slice(0, index),
      Object.assign({}, region, {
				data: Object.assign({}, region.data, { dataType: event.target.value })
			}),
			...this.state.regions.slice(index + 1)
		]);
	}

  removeRegion = (index, event) => {
    const regions = this.state.regions;
    this.onChange([
      ...regions.slice(0, index),
      ...regions.slice(index + 1),
    ]);
  }

	regionRenderer = (regionProps) => {
		if (!regionProps.isChanging) {
			return (
        <div style={{ position: 'absolute', right: 0, bottom: '-1.5em' }}>
          <button onClick={() => this.removeRegion(regionProps.index)}>
            Remove
          </button>
        </div>
			);
		}
    return null;
	}

  render() {
    return (
      <div>
        <RegionSelect
          regions={this.state.regions}
          onChange={this.onChange}
          regionRenderer={this.regionRenderer}
          >
          <PDFViewer file={this.props.file} />
        </RegionSelect>
      </div>
    );
  }
}
