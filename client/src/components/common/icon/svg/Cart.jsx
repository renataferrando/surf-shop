const Cart = ({ ...r }) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" { ...r }>
            <path
                fill="#272727"
                d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 01.958 1.287l-2.4 8a1 1 0 01-.958.713H6v2h11v2H5a1 1 0 01-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm12 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
            ></path>
        </svg>
    );
};

export default Cart;