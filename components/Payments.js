import { useEffect} from "react";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";


// This values are the props in the UI
const currency = "USD";
const style = {
                "layout":"vertical",
                "color": "silver",
                "height": 55,
            };

const ButtonWrapper = ({ currency, showSpinner, amount }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);

    return (
    <>
            { (showSpinner && isPending) && <div className="spinner" /> }
            
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount,currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        alert("You have completed the transaction")
                    });
                }}
            />
            
        </>
    );
}

export default function Payments({amount}) {

	return (
		<div style={{ maxWidth: "90rem", minHeight: "40rem", paddingRight:"10px"}}>
            <PayPalScriptProvider
                options={{
                    'client-id': process.env.NEXT_PUBLIC_CLIENT_ID,
                    "disable-funding": "paylater",
                    components: "buttons",
                    currency: "USD",
                }
            }
            >
				<ButtonWrapper
		    className= dark:bg-tan
                    currency={currency}
                    showSpinner={false}
                    amount={amount}
                />
			</PayPalScriptProvider>
		</div>
	);
        }


        
