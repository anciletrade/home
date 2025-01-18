import * as React from 'react';
import {styled, alpha, PaletteMode, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {logoBlack, logoWhite} from "../assets";
import ToggleColorMode from "./ToggleColorMode";
import { Link } from 'react-router-dom'; // Import Link from React Router

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));
interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}
export default function AppAppBar({mode,toggleColorMode}:AppAppBarProps) {
  const [open, setOpen] = React.useState(false);
   const theme = useTheme();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const handleSignIn = () => {
    window.location.href = 'https://web.dev.anciletrading.com';
  };
  const handleNavigation = (section:string) => {
    // Scroll to the specified section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 2 }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>

            <img src={theme.palette.mode === 'dark' ? logoWhite : logoBlack}

            style={{width: '20%', height:'40px'}} />

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button href="#features" variant="text" color="info" size="small">
                Features
              </Button>
              <Button href="#how_it_works" variant="text" color="info" size="small">
                How it works
              </Button>
              <Button href="#pricing" variant="text" color="info" size="small">
                Pricing
              </Button>
              <Button href="#faq" variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                FAQ
              </Button>

            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <ToggleColorMode
                data-screenshot="toggle-mode"
                mode={mode}
                toggleColorMode={toggleColorMode}
            />
            <Button color="primary" variant="contained" size="small" onClick={handleSignIn}>
              Get Started
            </Button>

          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />

                <MenuItem onClick={() => handleNavigation('features')}>Features</MenuItem>
                <MenuItem onClick={() => handleNavigation('how_it_works')}>How it works</MenuItem>
                <MenuItem onClick={() => handleNavigation('pricing')}>Pricing</MenuItem>
                <MenuItem onClick={() => handleNavigation('faq')}>FAQ</MenuItem>

                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth onClick={handleSignIn}>
                 Get Started
                  </Button>
                </MenuItem>

              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
