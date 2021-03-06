import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from "../context";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        marginBottom: '.5rem',
        border: '1px solid gray',
        borderRadius: '4px'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({todo, idx, onChange}) {
  const {removeTodo} = useContext(Context)
    const classes = []
    if (todo.done) {
      classes.push('done')
    }
  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          type='checkbox'
          checked={todo.done}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong>{idx+1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className='rm' onClick={removeTodo.bind(null, todo.id)}>x</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  idx: PropTypes.number,
  onChange: PropTypes.func.isRequired
}


export default TodoItem