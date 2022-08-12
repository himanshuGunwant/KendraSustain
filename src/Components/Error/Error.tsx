import { Link } from 'react-router-dom';
import { Container } from './Error.style';

const Error = () => {
  return (
    <Container>
      <div className={'foo'}>
        <h1>Error 404</h1>
        <Link to={'/dashboard'}>Go To dashboard</Link>
        <Link
          to={'/login'}
          onClick={() => localStorage.removeItem('authToken')}
        >
          Return To Login
        </Link>
      </div>
    </Container>
  );
};

export default Error;
