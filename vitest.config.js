import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      reportOnFailure: true,
      all: true,
      include: ['src/**/*.js'],
      exclude: [
        'src/.internal/**',
        'tests/**',
        'vitest.config.js',
        'node_modules/**'
      ]
    }
  }
})
