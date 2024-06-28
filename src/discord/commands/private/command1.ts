import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import { Command } from "discord/base/Command.js";

new Command({
    name: "comando1",
    description: "Comando 1 para dizer Comando 1",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "termo",
            description: "termo",
            type: ApplicationCommandOptionType.String,
            autocomplete: true
        }
    ],
    async autocomplete(interaction) {
        interaction.options.getFocused();
        interaction.respond([
            {
                name: "",
                value: ""
            }
        ]);
    },
    async run(interaction){
        interaction.options.getString("termo");
        interaction.reply({ ephemeral, content: "Comando 1 Executado!"});
    }
});