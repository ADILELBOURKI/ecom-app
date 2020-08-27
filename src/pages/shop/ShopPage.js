import React from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";

class ShopPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProp }) => (
          <PreviewCollection key={id} {...otherCollectionProp} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
