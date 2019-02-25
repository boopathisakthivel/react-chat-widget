import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class QuickButton extends PureComponent {
  render() {
    if(this.props.button.get('type') === "image") {
      return (
        <img className="quick-button quick-button-image" src={this.props.button.get('imagelink')} alt={this.props.button.get('label')} onClick={(event) => this.props.onQuickButtonClicked(event, this.props.button.get('value'))}/>
      )
    }
    else {
      return (
        <button
          className="quick-button"
          onClick={(event) => this.props.onQuickButtonClicked(event, this.props.button.get('value'))}
        >
          {this.props.button.get('label')}
        </button>
      )
    }
  }
}

QuickButton.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
};

export default QuickButton;
