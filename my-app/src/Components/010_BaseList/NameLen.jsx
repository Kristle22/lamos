function NameLen({ wh }) {
  const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

  return (
    <>
      <div className='kvc'>
        {dogs.map((dog, i) => (
          <div
            className='kv'
            key={i}
            style={{
              color: dog.length > 6 ? 'green' : 'red',
              backgroundColor: 'yellowgreen',
              width: wh,
              height: wh,
              fontSize: '50px',
              fontWeight: '700',
            }}
          >
            {dog.length}
          </div>
        ))}
      </div>
    </>
  );
}

export default NameLen;
