import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import PDFViewer from './PDFViewer';
import '../node_modules/react-stepzilla/src/css/main.css';


export default class OD4TJWizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        {
          name: 'Step 1',
          component: (
            <PDFViewer file="2014_barclays_country_snapshot.pdf" />
          ),
        },
        {
          name: 'Step 2',
          component: (
            <div>Step 2</div>
          ),
        },
      ],
    };
  }

  render() {
    return (
      <div className='step-progress'>
        <StepZilla
          steps={this.state.steps}
          dontValidate={true}
          />
      </div>
    );
  }
}
