import { gql, graphql } from 'react-apollo';

function TodoApp({ data: { todos, refetch } }) {
  return (
    <div>
      <button onClick={() => refetch()}>
        Refresh
      </button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default graphql(gql`
  query TodoAppQuery {
    todos {
      id
      text
    }
  }
`)(TodoApp);