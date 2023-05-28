import { useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import connection from '../db';

const Home = () => {
  useEffect(() => {
    const testConnection = async () => {
      try {
        await connection.connect();
        console.log('Connected to database');
      } catch (error) {
        console.error('Database connection failed:', error);
      } finally {
        await connection.end();
      }
    };

    testConnection();
  }, []);

  return (
    <div>
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default Home;
