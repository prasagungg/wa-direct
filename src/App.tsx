import { useState } from "react";

function App() {
  const [whatsappNumber, setWhatsappNumber] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedNumber = event.target.value.replace(/\D/g, "");
    setWhatsappNumber(sanitizedNumber);
  };

  const handleChat = () => {
    if (whatsappNumber) {
      window.open(`https://wa.me/${whatsappNumber}`, "_blank");
    } else {
      console.log("Please enter a WhatsApp number.");
    }
  };

  return (
    <div className="grid place-content-center min-h-screen p-4">
      <div className="card bg-base-100 w-full max-w-sm md:max-w-lg shadow-sm mx-auto">
        <figure>
          <img
            src="https://s6.imgcdn.dev/YIsxPH.png"
            alt="Shoes"
            className="h-auto"
          />
        </figure>
        <div className="card-body">
          <div className="w-full">
            <label className="fieldset-legend text-primary">
              Nomor Whatsapp kamu berapa?
            </label>
            <input
              type="text"
              className="input input-primary w-full"
              placeholder="Type here"
              value={whatsappNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleChat}>
              Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
