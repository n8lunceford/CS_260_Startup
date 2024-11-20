// Calendar.jsx
const Calendar = () => {
    const days = Array.from({length: 31}, (_, i) => i + 1);
  
    return (
      <div>
        <h1>Calendar</h1>
        <table>
          <thead>
            <tr>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({length: 5}, (_, weekIndex) => (
              <tr key={weekIndex}>
                {Array.from({length: 7}, (_, dayIndex) => {
                  const day = weekIndex * 7 + dayIndex + 1;
                  return day <= 31 ? <td key={day}>{day}</td> : <td key={`empty-${dayIndex}`}></td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  ReactDOM.render(<Calendar />, document.getElementById('root'));