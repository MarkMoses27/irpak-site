import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Events from './components/Events';
import Media from './components/Media';
import Resources from './components/Resources';
import News from './components/News';
import Contact from './components/Contact';

//  New pages for Get Involved dropdown
import Volunteer from './components/involved/Volunteer';
import Member from './components/involved/BecomeMember';
import Opportunities from './components/involved/Internship';
import Gallery from './components/media/Gallery'; // Assuming you have a PhotoGallery component
import CommunityArts from './components/programs/CommunityArts';
import YouthTalent from './components/programs/YouthTalent';
import WorldCultureDay from './components/programs/WorldCultureDay'; 
import PerformingArts from './components/programs/PerformingArts'; // Assuming you have a PerformingArts component
import ArtsTours from './components/programs/ArtsTours';
import CurrentPartners from './components/partners/CurrentPartners'; 
import Partnership from './components/partners/Partnership';
import LatestAnnouncements from './components/blog/LatestAnnouncements'; // Assuming you have a LatestAnnouncements component
import FeatureArticle from './components/blog/FeatureArticle'; // Assuming you have a FeatureArticle component
import StoriesFromCommunity from './components/blog/StoriesFromCommunity';
import DonatePage from './components/donation/DonatePage'; // Assuming you have a DonatePage component
import Videos from './components/media/Videos'; // Assuming you have a Videos component
import Testimonials from './components/media/Testimonials'; // Assuming you have a Testimonials component
import EventHighlights from './components/media/EventHighlights'; // Assuming you have an EventHighlights component
import PressAndArticles from './components/media/PressAndArticles'; // Assuming you have a PressAndArticles component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/media" element={<Media />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />

          {/* ✅ Additional Routes for "Get Involved" submenu */}
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/member" element={<Member />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="media/videos" element={<Videos />} />
          <Route path="/media/testimonials" element={<Testimonials />} />
          <Route path="/media/highlights" element={<EventHighlights />} />
          <Route path="/media/press" element={<PressAndArticles />} />
          <Route path="/programs/community-arts" element={<CommunityArts />} />
          <Route path="/programs/youth-talent" element={<YouthTalent />} /> 
          <Route path="/programs/world-culture-day" element={<WorldCultureDay />} />
          <Route path="/programs/performing-arts" element={<PerformingArts />} />
          <Route path='/programs/arts-tours' element={<ArtsTours />} />
          <Route path="/partners/current" element={<CurrentPartners />} />
          <Route path="/partners/opportunities" element={<Partnership />} /> 
          <Route path="/blog/announcements" element={<LatestAnnouncements />} />
          <Route path="/blog/features" element={<FeatureArticle />} />
          <Route path="/blog/stories" element={<StoriesFromCommunity />} />
          <Route path="/donate" element={<DonatePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
