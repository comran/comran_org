import React, { Component } from 'react';
import './ContentBlock.css';

class ContentBlock extends Component {
  render() {
    return (
      <div className="ContentBlock">
        <div className="contentBlockWrapper">
          <div className="contentBlockContentWrapper">
            <div className="contentBlockContent">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentBlock;
