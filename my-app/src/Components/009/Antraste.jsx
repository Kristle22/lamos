function Antraste({ h1text, h2text, spalva }) {
  return (
    <>
      <h1
        style={{
          color: spalva,
        }}
      >
        {h1text}
      </h1>
      <h2
        style={{
          color: spalva,
        }}
      >
        {h2text}
      </h2>
    </>
  );
}

export default Antraste;
