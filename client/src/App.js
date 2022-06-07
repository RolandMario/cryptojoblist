

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/pages/about/About';
import TopBar from './components/pages/home/TopBar';
import HomeIndex from './components/pages/home/HomeIndex';
import Footer from './components/pages/home/Footer';
import FindJobs from './components/pages/jobs/FindJobs';
import PostJobs from './components/pages/jobs/PostJobs';
import JobLists from './components/pages/jobs/JobLists';
import Talents from './components/pages/candidiates/Talents';
import Companies from './components/pages/company/Companies';
import Blog from './components/pages/blog/Blog';
import Contact from './components/pages/contact/Contact';
import SignIn from './components/pages/auth/SignIn';
import SignUp from './components/pages/auth/SignUp';
import Account from './components/pages/accounts/Account';
import Resume from './components/pages/accounts/Resume';
import Company from './components/pages/register/Company'
import RecAccount from './components/pages/RecruiterAccount/RecAccount';


function App() {
  return (
   <>
   <Router>
        <TopBar/>
        <Routes>
          
          <Route path="/" element={<HomeIndex/>}/>
          <Route path="/about-us" element={<About/>}/>
          <Route path="/find-job" element={<FindJobs/>}/>
          <Route path="/post-job" element={<PostJobs/>}/>
          <Route path="/job-lists" element={<JobLists/>}/>
          <Route path="/talents" element={<Talents/>}/>
          <Route path="/companies" element={<Companies/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact-us" element={<Contact/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/company-registration" element={<Company/>}/>
          <Route path="/recruiter-account" element={<RecAccount/>}/>
        </Routes>
        <Footer/>
   </Router>
   
   </>
  );
}

export default App;
