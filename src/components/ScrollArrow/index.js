import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import s from './ScrollArrow.module.css';

class ScrollArrow extends PureComponent {
  static getContainerBottomScrollLimit(containerRef) {
    const { current: container } = containerRef;

    if (!container) {
      return 0;
    }
    return container.scrollHeight - container.offsetTop - container.offsetHeight;
  }

  handleMouseLeave = () => {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
      this.scrollInterval = null;
    }
  };

  handleScrollHover = () => {
    const {
      scrollInterval, getScrollTop, scrollTo, scrollOffset, getBottomScrollLimit, direction,
    } = this.props;

    if (!scrollTo) {
      return;
    }
    this.scrollInterval = setInterval(() => {
      let top;

      if (direction === ScrollArrow.up) {
        top = getScrollTop() - scrollOffset;
      } else {
        top = getScrollTop() + scrollOffset;
      }

      if (top <= 0) {
        top = 0;
        clearInterval(this.scrollInterval);
      } else if (top >= getBottomScrollLimit()) {
        top = getBottomScrollLimit() + scrollOffset;
      }

      scrollTo({
        top,
        behavior: 'smooth',
      });
    },
    scrollInterval);
  };

  resetScroll = () => {
    const { scrollTo, direction, getBottomScrollLimit } = this.props;
    const scrollValue = { top: direction === ScrollArrow.up ? 0 : getBottomScrollLimit() };

    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
    if (scrollTo) {
      scrollTo({
        ...scrollValue,
        behavior: 'smooth',
      });
    }
  };

  render() {
    const {
      visible, direction, className, style,
    } = this.props;

    return (
      <div
        role="presentation"
        style={style}
        className={[s.container, visible ? s.visible : s.hidden, className].join(' ')}
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleScrollHover}
        onClick={this.resetScroll}
      >
        <i className={[`icon icon-chevron-thin-${direction}`, s.arrowIcon, visible ? undefined : s.hiddenIcon].join(' ')} />
      </div>
    );
  }
}

ScrollArrow.down = 'down';
ScrollArrow.up = 'up';

ScrollArrow.defaultProps = {
  visible: true,
  scrollInterval: 100,
  scrollOffset: 30,
  direction: ScrollArrow.up,
  className: undefined,
  style: undefined,
  scrollTo: null,
};

ScrollArrow.propTypes = {
  visible: PropTypes.bool,
  scrollInterval: PropTypes.number,
  scrollOffset: PropTypes.number,
  direction: PropTypes.oneOf([ScrollArrow.down, ScrollArrow.up]),
  className: PropTypes.string,
  style: PropTypes.shape(),
  getScrollTop: PropTypes.func.isRequired,
  scrollTo: PropTypes.func,
  getBottomScrollLimit: PropTypes.func.isRequired,
};

export default ScrollArrow;
