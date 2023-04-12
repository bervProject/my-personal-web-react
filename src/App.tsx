import React from 'react';
import {
  defaultDarkModeOverride,
  Grid,
  Card,
  ThemeProvider,
  ColorMode,
  View,
  useTheme,
} from '@aws-amplify/ui-react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

function MainLayout() {
  const { tokens } = useTheme();
  return (
    <View
      backgroundColor={tokens.colors.background.primary}
    >
      <Grid
        templateColumns={{ base: '1fr', large: '1fr 1fr 1fr' }}
        templateRows={{ base: '1fr', large: '1fr 3fr 1fr' }}
        gap={tokens.space.small}
      >
        <Card
          columnSpan={[1, 1, 1, 3]}
        >
          <Header />
        </Card>
        <Card
          rowSpan={{ base: 1, large: 2 }}
        >
          <Nav />
        </Card>
        <Card columnSpan={{ base: 1, large: 2 }}>
          <Outlet />
        </Card>
        <Card columnSpan={{ base: 1, large: 3 }}>
          <Footer />
        </Card>
      </Grid>
    </View>
  );
}

function App() {
  const colorMode = useSelector((state: any) => state.theme.theme as ColorMode);
  const theme = {
    name: 'my-theme',
    overrides: [defaultDarkModeOverride],
  };

  return (
    <ThemeProvider theme={theme} colorMode={colorMode}>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
