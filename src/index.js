import ReactDOM from 'react-dom/client';
import App from './App';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Ibrahim',
  lastName: 'Saitov',
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
export default formatName