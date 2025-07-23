import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.39828f9084634985b6c1e07d4e0766d8',
  appName: 'IRL-Match',
  webDir: 'dist',
  server: {
    url: 'https://39828f90-8463-4985-b6c1-e07d4e0766d8.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    Geolocation: {
      permissions: ['ACCESS_COARSE_LOCATION', 'ACCESS_FINE_LOCATION']
    }
  }
};

export default config;