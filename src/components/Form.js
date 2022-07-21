import React, { useState } from "react";

const Success = () => {
  return <h1>Order placed successfully</h1>;
};
const Form = () => {
  const [step, setStep] = useState(1);
  const [info, setInfo] = useState({});

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const updateValue = (e) => {
    console.log(e.target.name);
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  switch (step) {
    case 1:
        return (
            <form>
            <label htmlFor="input">Shipping info: </label>
          <input type="text" id="input" name="shippingInfo" onChange={updateValue}></input>
          ;
          <input type="button" value="next" onClick={nextStep} />
        </form>
      );

    case 2:
      return (
          <form>
              <label htmlFor="input">Payment info: </label>
          <input type="text" id="input" name="paymentInfo" onChange={updateValue}></input>
          ;
          <input type="button" value="next" onClick={nextStep} />
        </form>
      );
    case 3:
      return <Success />;
    default:
      break;
  }
};

export default Form;
