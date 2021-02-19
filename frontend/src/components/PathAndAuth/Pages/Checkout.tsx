import React, { useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../UI/Input';
import { signin, setError, setLoading } from '../../../redux/auth/authActions';
import { RootState } from '../../../store';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import { Button } from 'antd';
import { Cascader, Divider } from 'antd';
import axios from 'axios';

const obj = {};

const handelchange: any = (e) => {
  obj['fullName'] = e.target.value;
  console.log(obj);
};
const handelchange1: any = (e) => {
  obj['phoneNumber'] = e.target.value;
  console.log(obj);
};
const handelchange2: any = (e) => {
  obj['adress'] = e.target.value;
  console.log(obj);
};
const handelchange3: any = (e) => {
  obj['zipCode'] = e.target.value;
  console.log(obj);
};
const handelClick = () => {
  let productName = JSON.parse(localStorage.getItem('cartItems')).map((el) => {
    return el.title;
  });
  obj['cartItems'] = productName;
  axios
    .post('http://localhost:8081/checkout', obj)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

const Checkout = () => {
  let productName = JSON.parse(localStorage.getItem('cartItems')).map((el) => {
    return el.title;
  });

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
            onChange={handelchange}
          />
          <Input
            type="number"
            name="Phone-number"
            placeholder="Phone-number"
            label="Phone-number"
            onChange={handelchange1}
          />
          <Input
            type="text"
            name="Adress"
            placeholder="Adress"
            label="Adress"
            onChange={handelchange2}
          />
          <Input
            type="text"
            name="ZipCode"
            placeholder="ZipCode"
            label="ZipCode"
            onChange={handelchange3}
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
          <Button
            className="is-primary is-fullwidth mt-5"
            onClick={handelClick}
          >
            Pay at delivery
          </Button>
          <div>
            <StripeCheckout
              stripeKey="pk_test_51IJxTPHsdDLmCbLGE7cwb9KmoftRqAojzRTWQZLJ6NXfzDUjZqhCABV0mc3HjaaYf3rkmxe91qOLtegyUaeW8KwI00DbaQqC96"
              token={(token, adress) => {
                console.log('function work', token, adress);
              }}
              billingAddress
              shippingAddress
              amount={+localStorage.getItem('sum') * 100}
              name={productName}
              currency="TND"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
