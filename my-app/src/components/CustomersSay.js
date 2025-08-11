export default function CustomersSay() {
  const items = [
    { id: 1, name: "Alex", rating: 5, text: "Amazing food!" },
    { id: 2, name: "Mara", rating: 4, text: "Cozy vibes." }
  ];
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {items.map(t => (
          <article key={t.id} className="card">
            <p>{"★".repeat(t.rating)}</p>
            <p>{t.text}</p>
            <small>— {t.name}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
