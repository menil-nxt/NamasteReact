import { useState } from "react";
import { useNavigate } from "react-router";
import { useCart } from "../utils/CartContext";

const banks = [
  "State Bank of India",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Kotak Mahindra Bank",
  "Yes Bank",
  "Punjab National Bank",
  "Bank of Baroda",
];

const CardForm = ({ onSuccess }) => {
  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (card.number && card.expiry && card.cvv && card.name) onSuccess();
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <input
        placeholder="Cardholder Name"
        value={card.name}
        onChange={(e) => setCard({ ...card, name: e.target.value })}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <input
        placeholder="Card Number (1234 5678 9012 3456)"
        value={card.number}
        onChange={(e) => setCard({ ...card, number: e.target.value })}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <div className="flex gap-4">
        <input
          placeholder="MM/YY"
          value={card.expiry}
          onChange={(e) => setCard({ ...card, expiry: e.target.value })}
          className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          placeholder="CVV"
          type="password"
          value={card.cvv}
          onChange={(e) => setCard({ ...card, cvv: e.target.value })}
          className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors"
      >
        Pay Now
      </button>
    </form>
  );
};

const UpiForm = ({ onSuccess }) => {
  const [showQr, setShowQr] = useState(false);
  return (
    <div className="space-y-4 mb-6 text-center">
      {!showQr ? (
        <>
          <p className="text-gray-500 text-sm">
            Click below to generate a QR code for payment
          </p>
          <button
            onClick={() => setShowQr(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
          >
            Generate QR Code
          </button>
        </>
      ) : (
        <>
          <div className="inline-block bg-white border-2 border-gray-300 rounded-2xl p-6">
            <div className="w-48 h-48 bg-white mx-auto relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 border-4 border-black rounded-xl relative">
                  {Array.from({ length: 20 }).map((_, r) => (
                    <div key={r} className="flex">
                      {Array.from({ length: 20 }).map((_, c) => (
                        <div
                          key={c}
                          className={`w-2 h-2 ${(r + c) % 3 === 0 ? "bg-black" : "bg-white"}`}
                        />
                      ))}
                    </div>
                  ))}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white border-2 border-black rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Scan this QR code with any UPI app
          </p>
          <p className="text-xs text-gray-400">UPI ID: namastereact@upi</p>
          <button
            onClick={onSuccess}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors mt-2"
          >
            I have paid
          </button>
        </>
      )}
    </div>
  );
};

const NetBankingForm = ({ onSuccess }) => {
  const [bank, setBank] = useState("");
  const [details, setDetails] = useState({ account: "", mobile: "", otp: "" });
  const [step, setStep] = useState("bank");

  if (step === "bank") {
    return (
      <div className="space-y-3 mb-6">
        <p className="text-sm text-gray-500 mb-2">Select your bank</p>
        <div className="max-h-48 overflow-y-auto space-y-2">
          {banks.map((b) => (
            <label
              key={b}
              className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer ${bank === b ? "border-orange-500 bg-orange-50" : "border-gray-200"}`}
            >
              <input
                type="radio"
                name="bank"
                value={b}
                checked={bank === b}
                onChange={() => setBank(b)}
                className="accent-orange-500"
              />
              <span className="text-gray-700">{b}</span>
            </label>
          ))}
        </div>
        <button
          disabled={!bank}
          onClick={() => setStep("details")}
          className={`w-full font-semibold py-3 rounded-xl transition-colors ${bank ? "bg-orange-500 hover:bg-orange-600 text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSuccess();
      }}
      className="space-y-4 mb-6"
    >
      <p className="text-sm font-medium text-gray-600">
        Account Details - {bank}
      </p>
      <input
        placeholder="Account Number"
        value={details.account}
        onChange={(e) => setDetails({ ...details, account: e.target.value })}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <input
        placeholder="Mobile Number"
        value={details.mobile}
        onChange={(e) => setDetails({ ...details, mobile: e.target.value })}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <div className="flex gap-2 items-center">
        <input
          placeholder="OTP"
          value={details.otp}
          onChange={(e) => setDetails({ ...details, otp: e.target.value })}
          className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="button"
          className="text-sm text-orange-500 hover:text-orange-600 font-medium whitespace-nowrap"
        >
          Send OTP
        </button>
      </div>
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors"
      >
        Pay Now
      </button>
    </form>
  );
};

const CODConfirm = ({ onSuccess }) => (
  <div className="space-y-4 mb-6 text-center">
    <p className="text-gray-500 text-sm">
      Pay when your food arrives at your doorstep
    </p>
    <button
      onClick={onSuccess}
      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors"
    >
      Place Order (Cash on Delivery)
    </button>
  </div>
);

const WalletConfirm = ({ onSuccess }) => (
  <div className="space-y-4 mb-6 text-center">
    <p className="text-gray-500 text-sm">
      Pay using your digital wallet balance
    </p>
    <button
      onClick={onSuccess}
      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors"
    >
      Pay with Wallet
    </button>
  </div>
);

const Payment = () => {
  const [selected, setSelected] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const { totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleSuccess = () => {
    setShowSuccess(true);
    clearCart();
  };

  if (showSuccess) {
    const steps = [
      { label: "Order Confirmed", time: "0 min", done: true },
      { label: "Preparing your food", time: "10-15 min", done: true },
      { label: "Out for delivery", time: "15-25 min", done: false },
      { label: "Delivered", time: "25-35 min", done: false },
    ];

    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 w-full max-w-lg text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Order Received!
          </h2>
          <p className="text-gray-500 mb-8">
            Your delicious food is on its way. Estimated delivery:{" "}
            <span className="font-semibold text-orange-500">30-35 min</span>
          </p>

          <div className="relative mb-10">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-200" />
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 relative pb-8 last:pb-0"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold z-10 flex-shrink-0 ${
                    step.done
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {step.done ? "✓" : i + 1}
                </div>
                <div className="text-left pt-2">
                  <p
                    className={`font-semibold ${
                      step.done ? "text-gray-800" : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </p>
                  <p className="text-sm text-gray-400">{step.time}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("/")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-10 rounded-full transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment</h1>
        <p className="text-gray-500 mb-6">
          Total Amount:{" "}
          <span className="text-lg font-semibold text-gray-800">
            Rs {(totalPrice / 100).toFixed(2)}
          </span>
        </p>

        <div className="space-y-3 mb-6">
          {paymentMethods.map((method) => (
            <label
              key={method.id}
              className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                selected === method.id
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="payment"
                value={method.id}
                checked={selected === method.id}
                onChange={() => setSelected(method.id)}
                className="accent-orange-500"
              />
              <span className="text-2xl">{method.icon}</span>
              <span className="font-medium text-gray-700">{method.label}</span>
            </label>
          ))}
        </div>

        {selected === "credit" && <CardForm onSuccess={handleSuccess} />}
        {selected === "upi" && <UpiForm onSuccess={handleSuccess} />}
        {selected === "netbanking" && (
          <NetBankingForm onSuccess={handleSuccess} />
        )}
        {selected === "cod" && <CODConfirm onSuccess={handleSuccess} />}
        {selected === "wallet" && <WalletConfirm onSuccess={handleSuccess} />}
      </div>
    </div>
  );
};

const paymentMethods = [
  { id: "credit", label: "Credit / Debit Card", icon: "💳" },
  { id: "upi", label: "UPI (Google Pay, PhonePe, etc.)", icon: "📱" },
  { id: "netbanking", label: "Net Banking", icon: "🏦" },
  { id: "cod", label: "Cash on Delivery", icon: "💵" },
  { id: "wallet", label: "Wallet (Paytm, Amazon Pay)", icon: "👛" },
];

export default Payment;
