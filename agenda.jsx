// Agenda.jsx
const Agenda = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const hours = ['12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM'];
  
    return (
      <div>
        <h1>Agenda</h1>
        <table>
          <thead>
            <tr>
              <th></th>
              {days.map(day => <th key={day}>{day}</th>)}
            </tr>
          </thead>
          <tbody>
            {hours.map(hour => (
              <tr key={hour}>
                <td>{hour}</td>
                {days.map(day => <td key={`${day}-${hour}`}></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  ReactDOM.render(<Agenda />, document.getElementById('root'));