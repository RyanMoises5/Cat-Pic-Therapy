import { useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='bg-gray-700 text-amber-100 h-screen'id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default Error