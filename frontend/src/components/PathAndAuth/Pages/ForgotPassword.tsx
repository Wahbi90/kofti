import React, { useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Message from '../UI/message';
import { sendPasswordResetEmail, setError, setSuccess } from '../../../redux/auth/authActions';
import { RootState } from '../../..';

const ForgotPassword = () => {
    const [email, setEmail] = useState ('');
    const [loading, setLoading] = useState (false);
    const dispatch = useDispatch();
    const {error, success} = useSelector((state:RootState) => state.auth);

    useEffect(() => {
        return () => {
            if(error) {
                dispatch(setError(''));
            }
            if(success){
                dispatch(setSuccess(''));
            }
        }
    },[error,dispatch, success]);

    const submitHandler = async (e:FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await dispatch(sendPasswordResetEmail(email, "Email Sent!"));
        setLoading(false);
    }
    return (
        <section className="section">
            <div className="container">
                <h2 className="has-text-centered is-size-2 mb-3">Reset Password</h2>
                <form className="form" onSubmit={submitHandler} >
                    {error && <Message type="danger" msg={error} /> }
                    {success && <Message type="success" msg={success} /> }
                    <Input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    placeholder="Email adress"
                    label="Email adress"
                    />
                    <Button text={loading ? "loading ..." : "Reset email sent"} className="is-primary is-fullwidth mt-5" disabled= {loading} />
                </form>
            </div>
        </section>
    )
}


export default ForgotPassword