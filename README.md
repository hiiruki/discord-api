# Discord API

## Features

- Get user information
- TODO: Get activity information
- too lazy af

## Usage

```text
https://api.hiiruki.moe/discord/{user_id}
```

### Example

```text
https://api.hiiruki.moe/discord/529270835341426708
```

### Response

```json
{
  "id": "529270835341426708",
  "username": "404.php",
  "avatar": "78db712951c4a427d6284a84e7b5f8b5",
  "discriminator": "0",
  "public_flags": 4194368,
  "flags": 4194368,
  "banner": null,
  "accent_color": null,
  "global_name": "Hiiruki",
  "avatar_decoration_data": null,
  "banner_color": null,
  "clan": null,
  "primary_guild": null
}
```

## Local Development

### Get Bot Token

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Go to the Bot tab
4. Copy the token
5. Create a `.env` file in the root directory
6. Copy the token into `DISCORD_BOT_TOKEN=`

### Install Dependencies

```bash
pnpm i
```

### Start Development Server

```bash
pnpm run start
```

### Endpoints

```text
http://localhost:3000/discord/{user_id}
```

## References

[Discord Developer Portal - API Reference](https://discord.com/developers/docs/reference)

## License

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

The source code of this website is licensed under [MIT](/LICENSE)