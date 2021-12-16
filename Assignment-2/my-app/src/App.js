import logo from './logo.svg';
import './App.css';
  
function App(props) {
  debugger;
  const { employees } = props;

  return (
    <div className="container">
      {
        employees.map((employee, index) =>(

          <div key={index} index={index} className="profile-details">
            
            <div className='profile-img-container'>
              <img
                className='avtar'
                src={employee.profileImg}
                width="100"
                height="100"
                alt='profile-avtar'
              />
            </div>

            <div className="title-container">
              <h1>{employee.name || "not defined"}</h1>
            </div>

            <div className='profile-info-container'>
              <label>Location </label>
              <strong>{employee.location}</strong>
            </div>

            <div className='profile-info-container'>
              <label>Blood Group</label>
              <strong>{employee.bloodGroup}</strong>
            </div>

            <div className='profile-info-container'>
              <label>Age</label>
              <strong>{employee.age}</strong>
            </div>

          </div>
        ))
      }
    </div>
  );
};

export default App;