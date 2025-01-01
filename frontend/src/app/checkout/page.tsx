import ProtectedPage from '../components/ProtectedPage';

const Checkout = () => {
    return (
        <ProtectedPage>
            <div>
                <h1>Checkout</h1>
                {/* Your checkout logic and Stripe integration here */}
            </div>
        </ProtectedPage>
    );
};

export default Checkout;
