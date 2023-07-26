# @iconicompany/eslint-config

- Semi quotes
- Auto fix for formatting
- Sorted imports, dangling commas
- Reasonable defaults, best practices, only one-line of config
- **Style principle**: Minimal for reading, stable for diff

## Usage

### Install

```npm install -D eslint @iconicompany/eslint-config```

### Configure eslint.config.js

```javascript
import config from "@iconicompany/eslint-config";

export default config;
```

### Add script for package.json
```json
{
  "scripts": {
    "lint": "ESLINT_USE_FLAT_CONFIG=true eslint -c eslint.config.js .",
    "lint:fix": "ESLINT_USE_FLAT_CONFIG=true eslint -c eslint.config.js --fix ."
  }
}
```

Done! 🎉