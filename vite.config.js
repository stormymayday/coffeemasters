import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        VitePWA({
            registerType: 'prompt',
            includeAssets: ['icon.png', 'icon-maskable.png'],
            manifest: {
                "name": "Coffee Masters",
                "short_name": "CoffeeMasters",
                "theme_color": "#43281C",
                "display": "standalone",
                "background_color": "#EFEFEF",
                "start_url": "/",
                "scope": "/",
                "description": "The app for order at Coffee Masters, the best coffee shop in the Frontend world, by Frontend Masters.",
                "icons": [
                    {
                        "src": "icon.png",
                        "sizes": "1024x1024",
                        "type": "image/png"
                    },
                    {
                        "src": "icon-maskable.png",
                        "sizes": "512x512",
                        "type": "image/png",
                        "purpose": "maskable"
                    }
                ]
            },
        }),
    ],
});