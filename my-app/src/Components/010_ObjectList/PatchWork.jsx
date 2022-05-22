import { data } from './seaPlaners'

function Patchwork() {
  const list = data.map((el) => (
    <div key={el.id} style={{ textAlign: 'left' }}>
      id: <span>{el.id}</span>, type: <span>{el.type}</span>, name:{' '}
      <span>{el.name}</span>, color: <span>{el.color}</span>
    </div>
  ))
  return list
}

export default Patchwork
