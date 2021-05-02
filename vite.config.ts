import reactRefresh from '@vitejs/plugin-react-refresh';
import { UserConfig, ConfigEnv } from 'vite';
import { join } from 'path';

const srcRoot = join(__dirname, 'src');

export default ({ command }: ConfigEnv): UserConfig => {
  // DEV
  if (command === 'serve') {
    return {
      base: '/',
      plugins: [reactRefresh()],
      resolve: {
        alias: {
          '/@': srcRoot
        }
      },
      build: {
        outDir: join(srcRoot, '/out'),
        emptyOutDir: true,
        rollupOptions: {}
      },
      server: {
        port: process.env.PORT === undefined ? 3000 : +process.env.PORT,
        proxy: {
          // 如果是 /api 打头，则访问地址如下
          '/api': {
            target: 'http://pro.gce.xunqinji.xyz:8887',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
          }
        }
      },
      optimizeDeps: {
        exclude: ['path']
      },
      esbuild: {
        // jsxInject: `import React from 'react'`
      }
    };
  }
  // PROD
  else {
    return {
      base: `./`,
      plugins: [reactRefresh()],
      build: {
        outDir: join(srcRoot, '/out'),
        emptyOutDir: true,
        rollupOptions: {}
      },
      resolve: {
        alias: {
          '/@': srcRoot
        }
      },
      server: {
        port: process.env.PORT === undefined ? 3000 : +process.env.PORT,
      },
      optimizeDeps: {
        exclude: ['path']
      },
      esbuild: {
        // jsxInject: `import React from 'react'`
      }
    };
  }
};
