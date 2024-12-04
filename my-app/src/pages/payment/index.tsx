import { useState, useEffect } from "react";
import "./styles.css";
import { getPayments } from "../../services/api";
import { IPayment } from "../../interfaces/payment";

function Payment() {
  const [targetAmount, setTargetAmount] = useState("");
  const [paymentValue, setPaymentValue] = useState("");
  const [paymentList, setPaymentList] = useState<IPayment[] | null>([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    getPayments().then((response) => {
      console.log(response);
      setPaymentList(response);
    });
  }, []);

  function addPayment() {
    setPaymentList((prev: any[] | null) => {
      if (prev?.length)
        return [
          ...prev,
          {
            id: prev?.length,
            amount: Number(paymentValue),
          },
        ];
      return prev;
    });

    checkForMatch();
  }

  function checkForMatch() {
    paymentList?.forEach((payment) => {
      for (let i = 1; i < paymentList.length; i++) {
        if (paymentList[i].amount + payment.amount === Number(targetAmount)) {
          setShowAlert(true);
          setInterval(() => {
            setShowAlert(false);
          }, 3000);
        }
      }
    });
  }

  return (
    <div className="payment__container">
      <div className="payment__input-group">
        <label>Inform target amount:</label>
        <input
          type="number"
          onChange={(e) => setTargetAmount(e.target.value)}
          value={targetAmount}
          placeholder="Ex: 500"
        ></input>
      </div>
      <div className="payment__input-group">
        <label>Inform a payment amount:</label>
        <input
          type="number"
          onChange={(e) => setPaymentValue(e.target.value)}
          value={paymentValue}
          placeholder="Ex: 20"
        ></input>
        <button title="Add payment" onClick={addPayment}>
          Add payment
        </button>
      </div>
      <section>
        <label>Payment history:</label>
        <ul>
          {paymentList?.map((payment) => (
            <li key={payment.id}>{`U$ ${payment.amount.toFixed(2)}`}</li>
          ))}
        </ul>
      </section>
      <section>{showAlert && <p>You have a match of 2 payments!</p>}</section>
    </div>
  );
}

export default Payment;
