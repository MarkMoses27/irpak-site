import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Events from './components/Events';
import Involved from './components/involved/Involved';
import Media from './components/Media';
import Resources from './components/Resources';
import News from './components/News';
import Partners from './components/Partners';
import Contact from './components/Contact';

//  New pages for Get Involved dropdown
import Volunteer from './components/involved/Involved';
import Member from './components/involved/BecomeMember';
import Opportunities from './components/involved/InternshipOpportunities';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/involved" element={<Involved />} />
          <Route path="/media" element={<Media />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/news" element={<News />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />

          {/* ✅ Additional Routes for "Get Involved" submenu */}
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/member" element={<Member />} />
          <Route path="/opportunities" element={<Opportunities />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
