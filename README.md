```markdown
# DiscordBot TypeScript Bun Template

A starter template for building Discord bots using TypeScript and Bun.

## Features

- TypeScript support
- Bun as runtime
- Ready-to-use project structure

## Prerequisites

- [Bun](https://bun.sh/) installed
- [Node.js](https://nodejs.org/) (for npm compatibility)
- [Git](https://git-scm.com/)

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/gitBitsystem/bun-discordbot-template.git
   cd bun-discordbot-template
   ```

2. **Install dependencies:**
   ```sh
   bun install
   ```

3. **Configure your bot:**
    - Create a .env file and define your credentials.
        - **GUILD_ID**=your_guild_id
        - **DISCORD_TOKEN**=your_bot_token
        - **CLIENT_ID**=your_client_id.

4. **Run the bot in development:**
   ```sh
   bun run src/bot.ts
   ```

5. **Build the project:**
   ```sh
   bun x tsc
   ```

## Scripts

- `bun run src/bot.ts` — Start the bot in development mode (with hot reload if configured)
- `bun x tsc` — Compile TypeScript to JavaScript

## License

MIT
```