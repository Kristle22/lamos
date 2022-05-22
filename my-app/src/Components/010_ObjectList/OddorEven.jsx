import { data } from './seaPlaners'

function OddorEven({ entry }) {
  const [even, odd] = ListEntries()
  if (entry === 'even') {
    return even
  } else {
    return odd
  }
}

function ListEntries() {
  const evenEntries = data
    .filter((el) => el.id % 2 === 0)
    .map((el) => (
      <div key={el.id} style={{ textAlign: 'left' }}>
        id: <span>{el.id}</span>, type: <span>{el.type}</span>, name:{' '}
        <span>{el.name}</span>, color: <span>{el.color}</span>
      </div>
    ))
  const oddEntries = data
    .filter((el) => el.id % 2)
    .map((el) => (
      <div key={el.id} style={{ textAlign: 'left' }}>
        id: <span>{el.id}</span>, type: <span>{el.type}</span>, name:{' '}
        <span>{el.name}</span>, color: <span>{el.color}</span>
      </div>
    ))
  return [evenEntries, oddEntries]
}

export default OddorEven
