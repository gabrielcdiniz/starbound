/* eslint-disable import/no-anonymous-default-export */

/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'feat', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'revert', release: 'patch' },

          { type: 'fix', release: 'minor' },
          { type: 'perf', release: 'minor' },
          { type: 'style', release: 'minor' },
          { type: 'chore', scope: 'package', release: 'minor' },
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
      },
    ],

    [
      '@semantic-release/changelog',
      {
        preset: 'angular',
        changelogFile: 'docs/CHANGELOG.md',
      },
    ],

    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
        writerOpts: {
          commitsSort: ['subject', 'scope'],
        },
      },
    ],

    '@semantic-release/git',
  ],
};
