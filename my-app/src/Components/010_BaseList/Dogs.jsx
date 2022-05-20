function Dogs({ w, h }) {
  const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

  return (
    <>
      <div className='kvc'>
        {dogs.map((dog, i) => (
          <div className='kv' key={i} style={{ width: w, height: h }}>
            {dog}
          </div>
        ))}
      </div>
    </>
  );
}

export default Dogs;
