import { IPayment } from "../interfaces/payment";

export async function getPayments(): Promise<IPayment[]> {
  const promise: Promise<IPayment[]> = new Promise((resolve) => {
    resolve([
      { id: "0", amount: 500.0 },
      { id: "2", amount: 220.0 },
    ]);
  });

  return promise;
}
