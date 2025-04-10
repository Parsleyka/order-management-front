/*global process*/

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())

    console.log(env)

    return {
        plugins: [react()],
        server: {
            port: env.VITE_HOST_PORT,
            host: env.VITE_HOST_URL
        },
        preview: {
            port: env.VITE_HOST_PORT,
            host: true
        }
    }
})
