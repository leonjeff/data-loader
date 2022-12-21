const InputSearch = (licensePlateValue, licensePlateChange) => {
  return (
    <div
      style={{
        border: "2px solid blue",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Buscar por patente</h1>

      <form>
        <input
          type="text"
          placeholder="Ingrese numero de patente"
          value={licensePlateValue}
          onChange={licensePlateChange}
        />
      </form>
    </div>
  );
};

export default InputSearch;
