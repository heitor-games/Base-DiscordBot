import { ApplicationCommandType } from "discord.js";
import { Command } from "discord/base/Command.js";

new Command({
    name: "profile",
    type: ApplicationCommandType.User,
    async run(interaction) {
        const { targetUser } = interaction;
        interaction.reply({ephemeral, content: `Perfil de ${targetUser}`});
    },
});
