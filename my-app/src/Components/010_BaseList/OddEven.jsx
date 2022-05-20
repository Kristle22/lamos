import randColor from '../../FUNCTIONS/randColor';

function OddEven({ wh }) {
  const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

  return (
    <>
      <div className='kvc'>
        {dogs.map((dog, i) => (
          <div
            className='kv'
            key={i}
            style={{
              border: '3px solid white',
              borderRadius: i % 2 ? 50 : 5,
              backgroundColor: i % 2 ? randColor() : 'transparent',
              width: wh,
              height: wh,
            }}
          >
            {dog}
          </div>
        ))}
      </div>
    </>
  );
}

export default OddEven;
