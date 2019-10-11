import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import s from './ZonesPickerSuggestions.module.css';
import { InputCheckbox, PickerSuggestions, ScrollArrow } from '..';
import ZoneSuggestion from './ZoneSuggestion';
import { Type as ZoneType } from './ZoneType';

class ZonesPickerSuggestions extends PureComponent {
  static getScrollTop(containerRef) {
    const { current: container } = containerRef;

    if (container) {
      return container.scrollTop;
    }
    return 0;
  }

  static scrollTo(containerRef, scroll) {
    const { current: container } = containerRef;

    if (container) {
      container.scrollTo(scroll);
    }
  }

  constructor(props) {
    super(props);

    const visibleArrows = {
      [ZonesPickerSuggestions.topFromZoneArrow]: false,
      [ZonesPickerSuggestions.topToZoneArrow]: false,
      [ZonesPickerSuggestions.bottomFromZoneArrow]: true,
      [ZonesPickerSuggestions.bottomToZoneArrow]: true,
    };
    this.fromZonesContainer = React.createRef();
    this.toZonesContainer = React.createRef();
    this.state = {
      visibleArrows,
    };
    this.fromZonesScrollTo = ZonesPickerSuggestions.scrollTo.bind(this, this.fromZonesContainer);
    this.toZonesScrollTo = ZonesPickerSuggestions.scrollTo.bind(this, this.toZonesContainer);
    this.getFromZonesScrollTop = ZonesPickerSuggestions.getScrollTop.bind(
      this, this.fromZonesContainer,
    );
    this.getToZonesScrollTop = ZonesPickerSuggestions.getScrollTop.bind(
      this, this.toZonesContainer,
    );
    this.showTopFromZonesArrow = this.setArrowVisibility.bind(
      this, ZonesPickerSuggestions.topFromZoneArrow, true,
    );
    this.hideTopFromZonesArrow = this.setArrowVisibility.bind(
      this, ZonesPickerSuggestions.topFromZoneArrow, false,
    );
    this.showBottomFromZonesArrow = this.setArrowVisibility.bind(
      this, ZonesPickerSuggestions.bottomFromZoneArrow, true,
    );
    this.hideBottomFromZonesArrow = this.setArrowVisibility.bind(
      this, ZonesPickerSuggestions.bottomFromZoneArrow, false,
    );
    this.showTopToZonesArrow = this.setArrowVisibility.bind(
      this, ZonesPickerSuggestions.topToZoneArrow, true,
    );
    this.hideTopToZonesArrow = this.setArrowVisibility.bind(
      this, ZonesPickerSuggestions.topToZoneArrow, false,
    );
    this.showBottomToZonesArrow = this.setArrowVisibility.bind(
      this, ZonesPickerSuggestions.bottomToZoneArrow, true,
    );
    this.hideBottomToZonesArrow = this.setArrowVisibility.bind(
      this, ZonesPickerSuggestions.bottomToZoneArrow, false,
    );
    this.handleFromZonesScroll = this.handleScroll.bind(
      this,
      this.fromZonesContainer,
      ZonesPickerSuggestions.topFromZoneArrow,
      ZonesPickerSuggestions.bottomFromZoneArrow,
    );
    this.handleToZonesScroll = this.handleScroll.bind(
      this, this.toZonesContainer,
      ZonesPickerSuggestions.topToZoneArrow,
      ZonesPickerSuggestions.bottomToZoneArrow,
    );
    this.getFromZonesContainerBottomScrollLimit = ScrollArrow.getContainerBottomScrollLimit.bind(
      this, this.fromZonesContainer,
    );
    this.getToZonesContainerBottomScrollLimit = ScrollArrow.getContainerBottomScrollLimit.bind(
      this, this.toZonesContainer,
    );
  }

  setArrowVisibility(arrow, visible) {
    this.setState(prevState => ({
      visibleArrows: {
        ...prevState.visibleArrows,
        [arrow]: visible,
      },
    }));
  }

  getFromZonesContainerStyle = () => {
    const { visibleArrows } = this.state;

    return {
      marginTop: visibleArrows[ZonesPickerSuggestions.topFromZoneArrow] ? '20px' : '0',
      marginBottom: visibleArrows[ZonesPickerSuggestions.bottomFromZoneArrow] ? '20px' : '0',
    };
  };

  getToZonesContainerStyle = () => {
    const { visibleArrows } = this.state;

    return {
      marginTop: visibleArrows[ZonesPickerSuggestions.topToZoneArrow] ? '20px' : '0',
      marginBottom: visibleArrows[ZonesPickerSuggestions.bottomToZoneArrow] ? '20px' : '0',
    };
  };


  renderFromZoneSuggestion = (zone) => {
    const { onFromZoneClick, searchFrom, ZoneSuggestionIcon } = this.props;

    return (
      <ZoneSuggestion
        value={zone}
        key={zone.code}
        onClick={() => onFromZoneClick(zone)}
        disabled={zone.disabled}
        search={searchFrom}
        Icon={ZoneSuggestionIcon}
      />
    );
  };

  renderToZoneSuggestion = (zone) => {
    const { onToZoneClick, searchTo, ZoneSuggestionIcon } = this.props;

    return (
      <ZoneSuggestion
        value={zone}
        key={zone.code}
        onClick={() => onToZoneClick(zone)}
        disabled={zone.disabled}
        className={s.toZoneSuggestion}
        search={searchTo}
        Icon={ZoneSuggestionIcon}
      />
    );
  };

  handleScroll(containerRef, topArrow, bottomArrow) {
    const { current: container } = containerRef;
    const { visibleArrows } = this.state;

    if (container.scrollTop <= 0) {
      visibleArrows[topArrow] = false;
    } else if (container.scrollTop >= ScrollArrow.getContainerBottomScrollLimit(containerRef)) {
      visibleArrows[bottomArrow] = false;
    } else if (
      !visibleArrows[topArrow] || !visibleArrows[bottomArrow]
    ) {
      visibleArrows[topArrow] = true;
      visibleArrows[bottomArrow] = true;
    } else {
      return;
    }
    this.setState({ visibleArrows });
    this.forceUpdate();
  }

  render() {
    const {
      visible, split, fromZoneSuggestions, toZoneSuggestions, texts, onSplit, ArrowIcon,
    } = this.props;
    const { visibleArrows } = this.state;

    return (
      <PickerSuggestions visible={visible}>
        <div className={s.suggestionsContainer}>
          <ScrollArrow
            visible={visibleArrows[ZonesPickerSuggestions.topFromZoneArrow]}
            className={[s.arrowContainer, s.topArrow, split ? s.leftArrow : undefined].join(' ')}
            direction={ScrollArrow.up}
            getScrollTop={this.getFromZonesScrollTop}
            getBottomScrollLimit={this.getFromZonesContainerBottomScrollLimit}
            scrollTo={this.fromZonesScrollTo}
            onHide={this.hideTopFromZonesArrow}
            onShow={this.showTopFromZonesArrow}
            Icon={ArrowIcon}
          />
          <div
            className={[s.suggestions, visible ? s.visible : undefined].join(' ')}
            ref={this.fromZonesContainer}
            onScroll={this.handleFromZonesScroll}
            style={this.getFromZonesContainerStyle()}
          >
            {fromZoneSuggestions.map(this.renderFromZoneSuggestion)}
          </div>
          <ScrollArrow
            visible={visibleArrows[ZonesPickerSuggestions.bottomFromZoneArrow]}
            className={[s.arrowContainer, s.bottomArrow, split ? s.leftArrow : undefined].join(' ')}
            direction={ScrollArrow.down}
            getScrollTop={this.getFromZonesScrollTop}
            getBottomScrollLimit={this.getFromZonesContainerBottomScrollLimit}
            scrollTo={this.fromZonesScrollTo}
            onHide={this.hideBottomFromZonesArrow}
            onShow={this.showBottomFromZonesArrow}
            Icon={ArrowIcon}
          />
          <ScrollArrow
            visible={visibleArrows[ZonesPickerSuggestions.topToZoneArrow]}
            className={[s.arrowContainer, s.topArrow, split ? s.rightArrow : s.hiddenArrow].join(' ')}
            direction={ScrollArrow.up}
            getScrollTop={this.getToZonesScrollTop}
            getBottomScrollLimit={this.getToZonesContainerBottomScrollLimit}
            scrollTo={this.toZonesScrollTo}
            onHide={this.hideTopToZonesArrow}
            onShow={this.showTopToZonesArrow}
            Icon={ArrowIcon}
          />
          <div
            className={[s.suggestions, visible && split ? s.visible : undefined].join(' ')}
            ref={this.toZonesContainer}
            onScroll={this.handleToZonesScroll}
            style={this.getToZonesContainerStyle()}
          >
            {toZoneSuggestions.map(this.renderToZoneSuggestion)}
          </div>
          <ScrollArrow
            visible={visibleArrows[ZonesPickerSuggestions.bottomToZoneArrow]}
            className={[s.arrowContainer, s.bottomArrow, split ? s.rightArrow : s.hiddenArrow].join(' ')}
            direction={ScrollArrow.down}
            getScrollTop={this.getToZonesScrollTop}
            getBottomScrollLimit={this.getToZonesContainerBottomScrollLimit}
            scrollTo={this.toZonesScrollTo}
            onHide={this.hideBottomToZonesArrow}
            onShow={this.showBottomToZonesArrow}
            Icon={ArrowIcon}
          />
        </div>
        <div className={[s.suggestionAction, visible ? s.suggestionActionVisible : undefined].join(' ')}>
          <InputCheckbox onChange={onSplit} checked={split}>
            {texts.suggestionCheckboxLabel}
          </InputCheckbox>
        </div>
      </PickerSuggestions>
    );
  }
}

ZonesPickerSuggestions.defaultProps = {
  onFromZoneClick: () => {},
  onToZoneClick: () => {},
  visible: true,
  split: false,
  onSplit: () => {},
  fromZoneSuggestions: [],
  toZoneSuggestions: [],
  searchFrom: '',
  searchTo: '',
  ZoneSuggestionIcon: () => null,
  ArrowIcon: () => null,
};

ZonesPickerSuggestions.propTypes = {
  onFromZoneClick: PropTypes.func,
  onToZoneClick: PropTypes.func,
  visible: PropTypes.bool,
  split: PropTypes.bool,
  onSplit: PropTypes.func,
  fromZoneSuggestions: PropTypes.arrayOf(ZoneType),
  toZoneSuggestions: PropTypes.arrayOf(ZoneType),
  texts: PropTypes.shape().isRequired,
  searchFrom: PropTypes.string,
  searchTo: PropTypes.string,
  ZoneSuggestionIcon: PropTypes.func,
  ArrowIcon: PropTypes.func,
};

ZonesPickerSuggestions.topFromZoneArrow = 'topFromZoneArrow';
ZonesPickerSuggestions.bottomFromZoneArrow = 'bottomFromZoneArrow';
ZonesPickerSuggestions.topToZoneArrow = 'topToZoneArrow';
ZonesPickerSuggestions.bottomToZoneArrow = 'bottomToZoneArrow';

export default ZonesPickerSuggestions;
