import "./banner.css";

function BannerMirrored() {
  return (
    <section className="banner container section">
      <h2 className="proud__title">Pedals we're proud of: </h2>
      <div className="proud__item-container">
        {filteredItems.map((item) => (
          <ProudItem item={item} />
        ))}
      </div>
    </section>
  );
}

export default BannerMirrored;
