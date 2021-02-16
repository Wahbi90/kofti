import React, { useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { signin, setError, setLoading } from '../../../redux/auth/authActions';
import { RootState } from '../../../store';
import StripeCheckout, { Token } from 'react-stripe-checkout';

const Checkout = () => {
  // const [personalName, setPersonalName] = useState('');
  // const [adress, setAdress] = useState('');
  // const [zipCode, setZipCode] = useState('');
  // const dispatch = useDispatch();

  //   const submitHandler = (e: FormEvent) => {
  //     e.preventDefault();
   
let productName = JSON.parse(localStorage.getItem('cartItems')).map(el=>{return el.title})


  return (
    <div className="container">
      <br />
      <br />
      <br />
      <div>
        <h1 className="has-text-centered is-size-2 mb-3">Checkout INFO</h1>
        <form className="form">
          <Input
            type="text"
            name="Full-Name"
            placeholder="Full-Name"
            label="Full-Name"
          />
          <Input
            type="number"
            name="Phone-number"
            placeholder="Phone-number"
            label="Phone-number"
          />
          <Input
            type="text"
            name="Adress"
            placeholder="Adress"
            label="Adress"
          />
          <Input
            type="text"
            name="ZipCode"
            placeholder="ZipCode"
            label="ZipCode"
          />
          <fieldset>
            <legend>Region preferences</legend>
            <label style={{ fontSize: '18px' }}>Region</label>
            <select>
              <option value="">-- select one --</option>
              <option value="Tunis">Tunis</option>
              <option value="Ariana">Ariana</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Manouba">Manouba</option>
              <option value="Sfax">Sfax</option>
              <option value="Sousse">Sousse</option>
              <option value="Gabès">Gabès</option>
              <option value="Kairouan">Kairouan</option>
              <option value="Bizerte">Bizerte</option>
              <option value="Gafsa">Gafsa</option>
              <option value="Nabeul">Nabeul</option>
              <option value="Kasserine">Kasserine</option>
              <option value="Monastir">Monastir</option>
              <option value="Tataouine">Tataouine</option>
              <option value="Medenine">Medenine</option>
              <option value="Béja">Béja</option>
              <option value="Jendouba">Jendouba</option>
              <option value="El Kef">El Kef</option>
              <option value="Mahdia">Mahdia</option>
              <option value="Sidi Bouzid">Sidi Bouzid</option>
              <option value="Tozeur">Tozeur</option>
              <option value="Siliana">Siliana</option>
              <option value="Kebili">Kebili</option>
              <option value="Zaghouan">Zaghouan</option>
            </select>
          </fieldset>
          <br />
          <button className="is-primary is-fullwidth mt-5" type="button">
            Submit
          </button>
          <div>
            <StripeCheckout
              stripeKey="pk_test_51IJxTPHsdDLmCbLGE7cwb9KmoftRqAojzRTWQZLJ6NXfzDUjZqhCABV0mc3HjaaYf3rkmxe91qOLtegyUaeW8KwI00DbaQqC96"
              token={(token: Token, adress:any) => {
                console.log('function work', token, adress);
              }}
              billingAddress
              shippingAddress
              amount={+localStorage.getItem('sum')*100}
              name={productName}
              currency='TND'
            />
          </div>
        </form>
      </div>
    </div>
  );
};


export default Checkout;
