import React, { useState, useEffect } from 'react';

const Back = () => {
  const [cardholderName, setCardholderName] = useState('LASHA KHAREBAVA');
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [expiryMonth, setExpiryMonth] = useState('00');
  const [expiryYear, setExpiryYear] = useState('00');
  const [cvc, setCvc] = useState('000');

  // Update document title with the cardholder name
  useEffect(() => {
    document.title = cardholderName || 'Credit Card Form';
  }, [cardholderName]);

  // Handle cardholder name input (letters only)
  const handleCardholderNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); // Allow only letters and spaces
    setCardholderName(value.toUpperCase()); // Convert to uppercase for consistency
  };

  // Handle card number input (numbers only, 16 characters)
  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length <= 16) {
      setCardNumber(value.replace(/(.{4})/g, '$1 ').trim()); // Format as 4-digit blocks
    }
  };

  // Handle expiry month and year (numbers only, max 2 characters)
  const handleExpiryMonthChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length <= 2) {
      setExpiryMonth(value);
    }
  };

  const handleExpiryYearChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length <= 2) {
      setExpiryYear(value);
    }
  };

  // Handle CVC input (numbers only, 3 characters)
  const handleCvcChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length <= 3) {
      setCvc(value);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Left section with the Mask.svg background (30% width) */}
      <div
        style={{
          width: '30%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(/Mask.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Front of the card */}
        <div
          style={{
            width: '90%',
            height: '180px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #ff00cc, #3333ff)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '20px',
            marginBottom: '20px',
            position: 'relative',
            left: '340px',
          }}
        >
          <p style={{ fontSize: '1.2em', letterSpacing: '2px' }}>{cardNumber}</p>
          <p style={{ marginTop: '10px', fontSize: '0.9em' }}>{cardholderName}</p>
          <p style={{ fontSize: '0.9em', alignSelf: 'flex-end' }}>
            {expiryMonth}/{expiryYear}
          </p>
        </div>

        {/* Back of the card */}
        <div
          style={{
            width: '90%',
            height: '180px',
            borderRadius: '10px',
            backgroundColor: '#e6e6e6',
            position: 'relative',
            padding: '20px',
            left: '390px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '40px',
              backgroundColor: 'black',
              marginBottom: '30px',
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              width: '50px',
              height: '20px',
              backgroundColor: '#ccc',
              textAlign: 'center',
            }}
          >
            {cvc}
          </div>
        </div>
      </div>

      {/*  (70% width) */}
      <div
        style={{
          width: '70%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <form
          style={{
            width: '80%',
            maxWidth: '400px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            padding: '20px',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
          }}
        >
          <label style={{ fontWeight: 'bold' }}>
            Cardholder Name
            <input
              type="text"
              placeholder="e.g. Jane Appleseed"
              value={cardholderName}
              onChange={handleCardholderNameChange}
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                borderRadius: '5px',
                border: '1px solid #ddd',
              }}
            />
          </label>

          <label style={{ fontWeight: 'bold' }}>
            Card Number
            <input
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              value={cardNumber}
              onChange={handleCardNumberChange}
              maxLength="19"
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                borderRadius: '5px',
                border: '1px solid #ddd',
              }}
            />
          </label>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '10px',
            }}
          >
            <label style={{ flex: 1, fontWeight: 'bold' }}>
              Exp. Date (MM/YY)
              <div
                style={{
                  display: 'flex',
                  gap: '5px',
                  marginTop: '5px',
                }}
              >
                <input
                  type="text"
                  placeholder="MM"
                  value={expiryMonth}
                  onChange={handleExpiryMonthChange}
                  maxLength="2"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                  }}
                />
                <input
                  type="text"
                  placeholder="YY"
                  value={expiryYear}
                  onChange={handleExpiryYearChange}
                  maxLength="2"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                  }}
                />
              </div>
            </label>

            <label style={{ flex: 1, fontWeight: 'bold' }}>
              CVC
              <input
                type="text"
                placeholder="e.g. 123"
                value={cvc}
                onChange={handleCvcChange}
                maxLength="3"
                style={{
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                }}
              />
            </label>
          </div>

          <button
            type="submit"
            style={{
              marginTop: '20px',
              padding: '10px',
              backgroundColor: '#1e0e3d',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Back;
