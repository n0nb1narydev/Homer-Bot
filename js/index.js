// Require the necessary discord.js classes
const { Client, Intents, Message } = require('discord.js');
const { token } = require('./config.json');
const { SlashCommandBuilder } = require('@discordjs/builders');



// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	const guildId = '974059269668343829'
    const guild = client.guilds.cache.get(guildId)
    let commands

    if (guild) {
		console.log("this guild exists!")
        commands = guild.commands
    } else {
		console.log("this guild does not exist")
        commands = client.application.commands
    }

	client.api.applications(client.user.id).guilds(guildId).commands.post({
		data: {
			name: "throw",
			description: "Throw a donut at someone by mentioning them.",
			options: [
				{
					name: "person",
					description: "Mention a user",
					type: 6,
					required: true
				}
			]
		}
	})

	console.log('Ready!');
});

client.ws.on('INTERACTION_CREATE', async interaction => {
   const command = interaction.data.name.toLowerCase();
   const args = interaction.data.options;

   //const doh_role = client.guild.cache.find(r => r.id === '974401464610996286' );
   //const dough_role = client.guild.roles.cache.find(r => r.id === '974400553260040212');

   const doh_role = '974401464610996286';
   const dough_role = '974400553260040212';
    // const { commandName, options } = interaction
    

    if (command === 'throw') {
		const user = args.find(arg => arg.name.toLowerCase() == 'person').value;

		if(user){
			client.api.interactions(interaction.id, interaction.token).callback.post({

				data:{
					type: 4,
					data: {
						content: `<@${interaction.member.user.id}> threw a donut at <@${user}>`
					}
				}
			})

			const guild = client.guilds.cache.get('974059269668343829');
			const role = guild.roles.cache.find(role => role.id === doh_role);

			//guild.members.cache.find(u => u.id === user).user.roles.add(role);

			console.log(guild.members.cache.find(u => u.id === user).user);

		} else {
			console.log("no user")
		}

    }
});

// Login to Discord with your client's token
client.login(token);