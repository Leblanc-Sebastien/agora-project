import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.agora.app',
  appName: 'Agora',
  webDir: '.output/public',
  server: {
    androidScheme: 'https',
  },
}

export default config
