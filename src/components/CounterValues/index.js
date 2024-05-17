import './index.css'

const CounterValues = props => {
  const {countDetails} = props
  const {countOfChar, charactersInput} = countDetails

  return (
    <li className="list-card">
      <p className="value">
        {charactersInput} : {countOfChar}
      </p>
    </li>
  )
}

export default CounterValues
