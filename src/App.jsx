import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { ProfileHeader } from './components/ProfileHeader';
import { ProfileTabs } from './components/ProfileTabs';
import { PhotoGrid } from './components/PhotoGrid';
import { AccountSwitcher } from './components/AccountSwitcher';
import { StoryOverlay } from './components/StoryOverlay';
import { ThemeModal } from './components/ThemeModal';
import { DATA } from './data';

function App() {
  const [currentAccountId, setCurrentAccountId] = useState('fashionBrand');
  const [currentThemeId, setCurrentThemeId] = useState(null);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  const currentAccount = DATA[currentAccountId];

  // Reset theme when account changes or initialize if null
  useEffect(() => {
    const themeIds = Object.keys(currentAccount.themes);
    if (!currentThemeId || !themeIds.includes(currentThemeId)) {
      setCurrentThemeId(themeIds[0]);
    }
  }, [currentAccountId, currentAccount, currentThemeId]);

  const handleSwitchAccount = () => {
    setCurrentAccountId(prev => prev === 'fashionBrand' ? 'musicArtist' : 'fashionBrand');
  };

  // Safe access to current theme data
  const currentTheme = currentAccount.themes[currentThemeId] || Object.values(currentAccount.themes)[0];

  return (
    <Layout>
      <div onClick={() => setIsStoryOpen(true)} className="cursor-pointer">
        <ProfileHeader
          account={currentAccount}
          currentTheme={currentTheme}
          onOpenThemeModal={() => setIsThemeModalOpen(true)}
        />
      </div>

      <ProfileTabs />

      <PhotoGrid posts={currentTheme?.posts || []} />

      <AccountSwitcher
        currentAccountId={currentAccountId}
        onSwitch={handleSwitchAccount}
      />

      <StoryOverlay
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />

      <ThemeModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
        themes={currentAccount.themes}
        currentThemeId={currentThemeId}
        onSelectTheme={setCurrentThemeId}
      />
    </Layout>
  );
}

export default App;
