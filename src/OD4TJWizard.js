import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import PDFLoader from './PDFLoader';
import '../node_modules/react-stepzilla/src/css/main.css';


export default class OD4TJWizard extends Component {
  state = {
    steps: [
      {
        name: 'Step 1',
        component: (
          <PDFLoader />
        ),
      },
    ],
  };

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
