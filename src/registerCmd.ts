import { REST, Routes, SlashCommandBuilder } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const commands = [
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!')
        .toJSON()
];

console.log('CLIENT_ID:', process.env.CLIENT_ID);
console.log('GUILD_ID:', process.env.GUILD_ID);

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN!);

(async () => {
    try {
        console.log('Registering slash commands...');
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID!,
                process.env.GUILD_ID! // Use your guild/server ID for instant update
            ),
            { body: commands }
        );
        console.log('Slash commands registered!');
    } catch (error) {
        console.error(error);
    }
})();