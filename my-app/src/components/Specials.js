import specials from "../data/specials";

export default function Specials() {
  return (
    <section className="specials">
      <h2>Specials</h2>
      <div className="specials-grid">
        {specials.map(item => (
          <article key={item.id} className="card">
            <h3>{item.title} <span className="price">{item.price}</span></h3>
            <p>{item.desc}</p>
            <button>Order</button>
          </article>
        ))}
      </div>
    </section>
  );
}
