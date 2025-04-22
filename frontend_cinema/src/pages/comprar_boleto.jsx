import '../styles/comprar_boleto.css';

function MatrizButacas({ filas = 6, columnas = 8 }) {
  const asientos = [];

  for (let fila = 0; fila < filas; fila++) {
    for (let columna = 0; columna < columnas; columna++) {
      asientos.push({
        fila,
        columna,
        estado: 'disponible' // puede ser: disponible, reservado, seleccionado
      });
    }
  }

  return (
    <div className="matriz-container">
      <div className="pantalla">SCREEN</div>

      <div
        className="grid-asientos"
        style={{
          gridTemplateColumns: `repeat(${columnas}, 40px)`
        }}
      >
        {asientos.map((asiento, index) => (
          <div
            key={index}
            className={`asiento ${asiento.estado}`}
            title={`Fila ${asiento.fila + 1}, Columna ${asiento.columna + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default MatrizButacas;