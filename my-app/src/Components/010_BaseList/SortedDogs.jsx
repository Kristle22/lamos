import '../../FUNCTIONS/randColor';
import randColor from '../../FUNCTIONS/randColor';

function SortedDogs({ r }) {
  const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

  dogs.sort((a, b) => b.length - a.length);

  return (
    <>
      <div className='kvc'>
        {dogs.map((dog, i) => (
          <div
            className='kv'
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '50%',
              backgroundColor: randColor(),
              width: r,
              height: r,
            }}
          >
            <span>{i + 1}</span>
            {dog}
          </div>
        ))}
      </div>
    </>
  );
}

export default SortedDogs;
