import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ProductHeader extends PureComponent {
  static PropTypes = {
    name: PropTypes.string,
    header: PropTypes.string,
    icon: PropTypes.node,
    isNameFirst: PropTypes.bool
  };

  static defaultProps = {
    name: '',
    header: '',
    icon: null,
    isNameFirst: true
  };

  render() {
    const {
      name,
      header,
      icon,
      isNameFirst
    } = this.props;

    return (
      <div className="tinder__productHeader">
        <div className="product-overview">
          <div className="product-headline">
            {isNameFirst ? <h1>{name}</h1> : <h2>{header}</h2>}
            {isNameFirst ? <h2>{header}</h2> : <h1>{name}</h1>}
          </div>
          {icon}
        </div>
        <button className="get-started">
          <a href={"tinder.com"} target="_blank">
            get started
          </a>
        </button>
      </div>
    );
  }
}

export default ProductHeader;
