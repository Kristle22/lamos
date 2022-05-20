function CapitalGone({ wh }) {
  const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

  return (
    <>
      <div className='kvc'>
        {dogs.map((dog, i) =>
          dog.toLowerCase() === dog ? (
            <div
              className='kv'
              key={i}
              style={{ width: wh, height: wh, margin: '0 35px' }}
            >
              {dog}
            </div>
          ) : (
            ''
          )
        )}
      </div>
    </>
  );
}

export default CapitalGone;
