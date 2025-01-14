import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { Blog } from './components/Blog';
import { Projects } from './components/Projects';
import { Reading } from './components/Reading';
import { Contact } from './components/Contact';
import { MobileView } from './components/MobileView';
import { NoteDetail } from './components/NoteDetail';
import { BlogPost } from './pages/BlogPost';
import { useMediaQuery } from './hooks/useMediaQuery';

export default function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Router>
      <div className="h-screen flex flex-col bg-white dark:bg-gray-900">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          {!isMobile && <Sidebar />}
          <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">
            <Routes>
              <Route path="/" element={isMobile ? <MobileView /> : <AboutMe />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/reading" element={<Reading />} />
              <Route path="/contact" element={<Contact />} />
              {isMobile && <Route path="/note/:slug" element={<NoteDetail />} />}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}