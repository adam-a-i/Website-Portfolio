import React from 'react';
import styled from 'styled-components';

const Switch = () => {
  return (
    <StyledWrapper>
      <div>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="toggle">
          <div className="bar bar--top" />
          <div className="bar bar--middle" />
          <div className="bar bar--bottom" />
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    width: 40px;
    cursor: pointer;
    margin: auto;
    display: block;
    height: calc(4px * 3 + 11px * 2);
  }

  .bar {
    position: absolute;
    left: 0;
    right: 0;
    height: 4px;
    border-radius: calc(4px / 2);
    background:rgb(173, 169, 179);
    color: inherit;
    opacity: 1;
    transition: none 0.35s cubic-bezier(.5,-0.35,.35,1.5) 0s;
  }

  /***** Spin Animation *****/

  .bar--top {
    bottom: calc(50% + 11px + 4px/ 2);
    transition-property: bottom,transform;
    transition-delay: calc(0s + 0.35s),0s;
  }

  .bar--middle {
    top: calc(50% - 4px/ 2);
    transition-property: opacity;
    transition-delay: calc(0s + 0.35s);
  }

  .bar--bottom {
    top: calc(50% + 11px + 4px/ 2);
    transition-property: top,transform;
    transition-delay: calc(0s + 0.35s),0s;
  }

  #checkbox:checked + .toggle .bar--top {
    bottom: calc(50% - 4px/ 2);
    transform: rotate(135deg);
    transition-delay: 0s,calc(0s + 0.35s);
  }

  #checkbox:checked + .toggle .bar--middle {
    opacity: 0;
    transition-duration: 0s;
    transition-delay: calc(0s + 0.35s);
  }

  #checkbox:checked + .toggle .bar--bottom {
    top: calc(50% - 4px/ 2);
    transform: rotate(225deg);
    transition-delay: 0s,calc(0s + 0.35s);
  }`;

export default Switch;
