import { ApplicationCommandType } from "discord.js";
import { Command } from "discord/base/Command.js";

new Command({
    name: "reply",
    type: ApplicationCommandType.Message,
    async run(interaction) {
        const { targetMessage } = interaction;
        interaction.deferReply({ ephemeral });
        targetMessage.reply("Olá!");
    },
});