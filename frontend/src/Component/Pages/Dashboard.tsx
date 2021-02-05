import React,{ FC, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Message from '../UI/message';
import { setSuccess } from '../../store/actions/authActions';
import { RootState } from '../../store';

const Dashboard = () => {
    const { user, needVerification, success } = useSelector((state:RootState) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (success) {
            dispatch(setSuccess(''));
        }
    },[success,dispatch]);

    return (
        <section className="section">
            <div className="container">
                {needVerification && <Message type="success" msg="Please verify your email adress." />}
                <h1 className="is-size-1">Welcome </h1>
            </div>
        </section>
    );
}

export default Dashboard;