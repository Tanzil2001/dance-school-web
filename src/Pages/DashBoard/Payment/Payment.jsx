import React from 'react';
import useSelecedClass from '../../../hooks/useSelecedClass';
import CheckOut from './CheckOut';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Payment = () => {
    const [selectedCls] = useSelecedClass();
    const total = selectedCls.reduce((sum, cls) => sum + cls.price, 0);
    const price = parseFloat(total.toFixed(2));

    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK_S);
    return (
        <div>
            my payments
            <Elements stripe={stripePromise}>
                <CheckOut selectedCls={selectedCls} price={price}></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;