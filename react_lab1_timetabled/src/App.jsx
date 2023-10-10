import './App.css';
import Calendar from './components/Calendar'
const App = () => {

    return (
        <div className="App">
            <h1> Itinerary for 7 Days in Manhattan 🏢 </h1>
            <h4>Welcome to Manhattan, Someone! Check out this calendar to get to know the city and see all the sights during your stay.</h4>
            <Calendar />
        </div>
    ) // return
}  // App

export default App