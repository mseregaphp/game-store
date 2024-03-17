import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import { HomePage } from './pages/home-page/home-page';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
