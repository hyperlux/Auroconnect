import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Forums from './pages/Forums';
import Services from './pages/Services';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Resources from './pages/Resources';
import LocalMap from './pages/LocalMap';
import Decisions from './pages/Decisions';
import Discover from './pages/Discover';
import Bazaar from './pages/Bazaar';
import { useTheme } from './lib/theme';
import { useAuth } from './lib/auth';
import { supabase } from './lib/supabase';

function App() {
  const { theme } = useTheme();
  const { user, session } = useAuth();

  // Set up Supabase auth listener
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session && !user) {
          // Re-hydrate user state if session exists but user doesn't
          useAuth.getState().login(session.user.email!, '');
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [user]);

  // Apply theme to root element
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="events" element={<Events />} />
          <Route path="forums" element={<Forums />} />
          <Route path="services" element={<Services />} />
          <Route path="community" element={<Community />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="resources" element={<Resources />} />
          <Route path="map" element={<LocalMap />} />
          <Route path="decisions" element={<Decisions />} />
          <Route path="discover" element={<Discover />} />
          <Route path="bazaar" element={<Bazaar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;