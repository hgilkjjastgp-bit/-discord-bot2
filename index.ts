import { Client, GatewayIntentBits, Events } from "discord.js";
import { loadCommands } from "./commands/index.js";

const token = process.env.DISCORD_TOKEN;

if (!token) {
  throw new Error("Missing DISCORD_TOKEN environment variable");
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

const commands = loadCommands();

client.once(Events.ClientReady, (c) => {
  console.log(`Bot is online as ${c.user.tag}!`);
  console.log(`Serving ${c.guilds.cache.size} server(s)`);
  console.log(`Loaded ${commands.size} commands`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = commands.get(interaction.commandName);
  if (!command) {
    console.error(`Unknown command: ${interaction.commandName}`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(`Error executing /${interaction.commandName}:`, error);
    const msg = {
      content: "Something went wrong running that command!",
      ephemeral: true,
    };
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp(msg);
    } else {
      await interaction.reply(msg);
    }
  }
});

await client.login(token);
