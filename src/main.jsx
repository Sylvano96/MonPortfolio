import React, { createContext, lazy, Suspense, useContext, useState} from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeContext, ThemeProvider } from './Context/useTheme.jsx'
import './index.css'
import { motion } from 'framer-motion';

const AppLazy = lazy(()=> import('./App.jsx'))

const colors = {
  primary: '#7B66FF',      
  secondary: '#00E0FF',    
  accent: '#FFD700',       
  dark: '#070A1A',         
  darkCard: '#151A30',     
  darkHover: '#202845',
  light: '#FAFAFA',        
  lightCard: '#FFFFFF',
  lightHover: '#F0F3F7'
};

function Spinner1() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: theme === 'dark' ? colors.dark : colors.light,
      gap: '60px'
    }}>

      <div>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              style={{
                width: '6px',
                height: '40px',
                borderRadius: '3px',
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
              }}
              animate={{
                scaleY: [0.5, 1, 0.5],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback={ <Spinner1 /> }>
        <AppLazy/>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
)
