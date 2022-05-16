import {Link} from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
	 <section>
      <h1>Page Not Found</h1>
      <img src={require('images/notFound.jpg')} alt="page not found" width={600} />
      <p>
        <Link to="/">Home Page</Link>
      </p>
	 </section>
  );
};

export default NotFoundPage;