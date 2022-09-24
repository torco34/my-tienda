import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
      <PayPalButtons style={{ layout: "horizontal" }} />
    </PayPalScriptProvider>
  );
}
export { App };
