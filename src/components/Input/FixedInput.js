import React from 'react';
import PropTypes from 'prop-types';

class FixedInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidUpdate() {
    const { value } = this.props;
    const node = this.inputRef.current;
    const oldLength = node.value.length;
    const oldIdx = node.selectionStart;
    node.value = value;
    const newIdx = Math.max(0, node.value.length - oldLength + oldIdx);

    if (node.selectionStart && node.selectionEnd) {
      node.selectionStart = newIdx;
      node.selectionEnd = newIdx;
    }
  }

  render() {
    return <input ref={this.inputRef} {...this.props} value={undefined} />;
  }
}

FixedInput.propTypes = {
  value: PropTypes.string.isRequired,
};

export default FixedInput;
