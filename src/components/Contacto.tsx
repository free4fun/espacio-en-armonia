function Contacto() {
  return (
    <section className="section">
      <h2 className="section-heading">Contacto</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Nombre" className="form-input" />
        <input type="phone" placeholder="Whatsapp" className="form-input" />
        <textarea rows={4} placeholder="Mensaje" className="form-input"></textarea>
        <button type="submit" className="form-button">Enviar</button>
      </form>
    </section>
  );
}

export default Contacto;