function ZebBeb({ spalva }) {

  return (
    <>
      <h1 style={
        {
          color: spalva === 1 ? 'blue' : 'red',
        }
      }> Zebrai ir bebrai</h1 >
    </>
  );
}

export default ZebBeb;