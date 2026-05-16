// PizzaRestaurantShimmer.jsx
const MenuShimmer = () => {
  return (
    <div className="pizza-shimmer-container">
      <div className="pizza-shimmer-bg"></div>

      <div className="pizza-content">
        {/* Restaurant Title */}
        <div className="shimmer title-shimmer"></div>

        {/* Rating */}
        <div className="rating-row">
          <div className="shimmer rating-label"></div>
          <div className="shimmer rating-value"></div>
        </div>

        {/* Address */}
        <div className="shimmer address-line"></div>
        <div className="shimmer address-small"></div>

        {/* Search / Offer Box */}
        <div className="shimmer search-box-shimmer"></div>

        {/* Menu List */}
        <div className="menu-list">
          {[1, 2].map((item) => (
            <div className="menu-card" key={item}>
              <div className="menu-left">
                <div className="shimmer food-title"></div>

                <div className="shimmer food-price"></div>

                <div className="shimmer food-desc"></div>
                <div className="shimmer food-desc small"></div>
              </div>

              <div className="shimmer food-image"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuShimmer;
