import React, { useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Message from '../UI/message';
import { signin, setError, setLoading } from '../../../redux/auth/authActions';
import { RootState } from '../../../store';

const SIgnIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(''));
      }
    };
  }, [error, dispatch]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    dispatch(signin({ email, password }, () => setLoading(false)));
  };
  return (
    <section className="section">
      <div className="container">
        <h2 className="has-text-centered is-size-2 mb-3">Sign In</h2>
        <form className="form" onSubmit={submitHandler}>
          {error && <Message type="danger" msg={error} />}
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email adress"
            label="Email adress"
          />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
            label="Password"
          />
          <p>
            {' '}
            <Link to="/forgot-password"> Forgot password ?</Link>
          </p>
          <Button
            text={loading ? 'loading ...' : 'Sign In'}
            className="is-primary is-fullwidth mt-5"
            disabled={loading}
          />
        </form>
      </div>
    </section>
  );
};

export default SIgnIn;
