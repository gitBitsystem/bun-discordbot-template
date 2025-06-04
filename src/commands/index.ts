import { pingCommand } from './ping';
import { CommandInteraction } from 'discord.js';

export interface MyCommand {
    execute(interaction: CommandInteraction): Promise<void>;
    // Optionally: name, description, etc.
}

export const commands: Record<string, MyCommand> = {
    ping: pingCommand,
    // Add more commands here
};