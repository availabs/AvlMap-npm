import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { axisBottom } from 'd3-axis';
import { createSelector } from 'reselect';
import styled from 'styled-components';

const epochToTimeString = epoch => {
  epoch = +epoch;
  epoch %= 288;
  return `${ parseInt(epoch / 12) }:${ ('0' + (epoch % 12) * 5).slice(-2) }`;
}

const TimeSliderContainer = styled.svg`
  pointer-events: none;
  position: absolute;
  top: 0;
  .axis text {
    font-size: 9px;
    fill: ${props => props.theme.textColor};
  }
  .axis line,
  .axis path {
    fill: none;
    stroke: ${props => props.theme.sliderBarBgd};
    shape-rendering: crispEdges;
    stroke-width: 2;
  }
  .axis .domain {
    display: none;
  }
  .value {
    fill: ${props => props.theme.textColor};
    font-size: 10px;
    &.start {
      text-anchor: start;
    }
    &.end {
      text-anchor: end;
    }
  }
`;

const height = 30;

export default class TimeSliderMarker extends Component {
  static propTypes = {
    domain: PropTypes.arrayOf(PropTypes.any).isRequired,
    width: PropTypes.number.isRequired
  };

  componentDidMount() {
    this._updateAxis(this.scaleSelector(this.props));
  }

  componentWillReceiveProps(nextProps) {
    if (this.scaleSelector(this.props) !== this.scaleSelector(nextProps)) {
      this._updateAxis(this.scaleSelector(nextProps));
    }
  }

  domainSelector = props => props.domain;
  widthSelector = props => props.width;
  scaleSelector = createSelector(
    this.domainSelector,
    this.widthSelector,
    (domain, width) =>
      Array.isArray(domain)
        ? scaleLinear()
            .domain(domain)
            .range([0, width])
            .clamp(true)
        : null
  );

  _updateAxis(scale) {
    if (!scale) {
      return;
    }
    
    const xAxis = axisBottom(scale)
      .ticks(4)
      .tickSize(8)
      .tickPadding(6)
      .tickValues([48, 96, 144, 192, 240])
      .tickFormat(epochToTimeString);

    const svg = select(this.svgContainer);

    svg
      .select('.x.axis')
      .call(xAxis);
  }

  render() {
    return (
      <TimeSliderContainer
        className="time-slider-marker"
        width={this.props.width}
        height={height}
        ref={comp => {
          this.svgContainer = comp;
        }}
      >
        <g className="x axis" transform="translate(0, 0)" />
      </TimeSliderContainer>
    );
  }
};