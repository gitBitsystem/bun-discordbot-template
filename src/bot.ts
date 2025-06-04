import { Client, GatewayIntentBits, Interaction } from 'discord.js';
import dotenv from 'dotenv';
import { commands } from './commands';

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`);
});

client.on('interactionCreate', async (interaction: Interaction) => {
    if (!interaction.isCommand()) return;

    const command = commands[interaction.commandName];
    if (command) {
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
});

client.login(process.env.DISCORD_TOKEN);