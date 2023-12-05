import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [passengers, setPassengers] = useState([]);
  const [destinations, setDestinations] = useState([]); 
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/troy1129/jsonplaceholder/passengers', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setPassengers(data); 
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });

    fetch('https://my-json-server.typicode.com/troy1129/jsonplaceholder/destinations', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setDestinations(data); 
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  }, []);

  // const queueTo = (destination, passenger) => {
    
  // };

  const [sales, setSales] = useState(0);
  const [bus1, setBus1] = useState([]);
  const [bus2, setBus2] = useState([]);
  const [bus3, setBus3] = useState([]);

      const queueTo = (destination, passenger) => {
        setSales(sales + des.price);

        if (destination.id === 1 || destination.id === 2) {
        const updatedBus = [...bus1, passenger];
        setBus1(updatedBus);
        } else if (des.id === 3 || des.id === 4) {
        const updatedBus = [...bus2, passenger];
        setBus2(updatedBus);
        } else if (destination.id === 5 || destination.id === 6) {
        const updatedBus = [...bus3, passenger];
        setBus3(updatedBus);
        }
        const updatedPass = passengers.filter((passenger) => passenger.id !== passenger.id);
        setPassengers(updatedPass);
        };


  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">
          <strong>SALES: PHP </strong>
        </h1>
      </header>
      <div className="content">
        <div className="form-container">
          {passengers.length > 0 && (
            <div className="queue">
              {passengers.map((passenger) => (
                <div className="ticket" key={passenger.id}>
                  <p>{passenger.name}</p>
                  <p>Ticket ID: {passenger.id}
                  </p>
                  {destinations.length > 0 && (
                    <div className="button">
                      {destinations.map((destination) => (
                        <button key={destination.id} onClick={() => queueTo(destination, passenger)}>
                        {destination.destination}<br/>P {destination.price}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

        <div className= "busview">
              <div className="bus">
                  <h3> BUS 1 : CEBU and MANDAUE</h3>
                  {bus1.length > 0 && (
                    <div>
                      {bus1.map(bus => (
                        <div className="ticket" key={bus.id}>
                          <p>{bus.name}</p>
                          <p>Ticket ID: {bus.id}</p>
                        </div>
                      ))}
                    </div>  
                  )}
              </div>
              
              <div className="bus">
                  <h3> BUS 2 : LILO-AN and LAPU-LAPU</h3>
                  {bus2.length > 0 && (
                    <div>
                      {bus2.map(bus => (
                        <div className="ticket" key={bus.id}>
                          <p>{bus.name}</p>
                          <p>Ticket ID: {bus.id}</p>
                        </div>
                      ))}
                    </div>  
                  )}
              </div>
              <div className="bus">
                  <h3> BUS 3 : CONSOLACION and TALISAY</h3>
                  {bus3.length > 0 && (
                    <div>
                      {bus3.map(bus => (
                        <div className="ticket" key={bus.id}>
                          <p>{bus.name}</p>
                          <p>Ticket ID: {bus.id}</p>
                        </div>
                      ))}
                    </div>  
                  )}
              </div>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default App;

