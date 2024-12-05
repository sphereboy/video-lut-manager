module.exports = {
  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `eslint --fix ${filenames.join(' ')}`,
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': (filenames) =>
    `prettier --write ${filenames.join(' ')}`,
} 