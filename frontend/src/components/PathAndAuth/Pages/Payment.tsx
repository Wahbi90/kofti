import React, { useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { signin, setError, setLoading } from '../../../redux/auth/authActions';
import { RootState } from '../../../store';

const Checkout = () => {
  // const [personalName, setPersonalName] = useState('');
  // const [adress, setAdress] = useState('');
  // const [zipCode, setZipCode] = useState('');
  // const dispatch = useDispatch();

  //   const submitHandler = (e: FormEvent) => {
  //     e.preventDefault();

  return (
    <div className="container">
      <br />
      <br />
      <br />
        <h1 className="has-text-centered is-size-2 mb-3">Payment</h1>
    </div>
  );
};

export default Checkout;
