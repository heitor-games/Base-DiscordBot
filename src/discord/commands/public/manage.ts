import { ApplicationCommandOptionType, ApplicationCommandType } from "discord.js";
import { Command } from "discord/base/Command.js";

new Command({
    name: "manage",
    description: "Manage Command",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "users",
            description: "Command for manage users",
            type: ApplicationCommandOptionType.Subcommand,
            options: [{
                name: "user",
                description: "user",
                type: ApplicationCommandOptionType.User,
                required
            }],
        }
    ],
    async run(interaction){
        const { options } = interaction;
        switch(options.getSubcommand(true)){
            case "users":{
                const user = options.getUser("user", true);
                interaction.reply({ephemeral, content: `${user} managed.`});
                return;
            }
        }
    }
});