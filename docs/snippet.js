import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import PropTypes from 'prop-types'

const Snippet = (props) => {
  const [state, setState] = React.useState(Object.fromEntries(Object.entries(props.options).map(([k, v]) => [k, v.default || false])))
  const handleChange = e => setState({ ...state, [e.target.name]: e.target.checked })
  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        {
          Object.entries(props.options).map(([k, v], i) => {
            return (
              <label key={i}>
                <input name={k} type="checkbox" checked={state[k]} onChange={handleChange} />
                {v.label || k}
              </label>
            )
          })
        }
      </form>
      <CodeBlock className={'language-' + props.lang}>
        {props.snippet(state)}
      </CodeBlock>
    </div>
  )
}
Snippet.propTypes = {
  options: PropTypes.object.isRequired,
  snippet: PropTypes.func.isRequired,
  lang: PropTypes.string
}
export default Snippet
