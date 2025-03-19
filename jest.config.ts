import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
    // Path to Next.js app for loading next.config.js and .env files in the test environment
    dir: './',
})

// Configs for Jest
const config: Config = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/app/Components/$1',
        '^@/app/(.*)$': '<rootDir>/app/$1',
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    collectCoverage: false,
    coverageDirectory: 'coverage',
}

// Ensure next/jest can load the Next.js config
export default createJestConfig(config)