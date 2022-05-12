# run `pip3 install -U discord.py` to install discord.py
# run `pip3 install -U python-dotenv` to install dotenv

import os
import time
import random
import discord
from discord.ext import commands
# import for slash commands
from discord import app_commands


from token_file import DISCORD_TOKEN


bot = discord.Client()

class client(bot):
    def __init__(self):
        super().__init__()
        self.synced = False #we use this so the bot doesn't sync commands more than once

    async def on_ready(self):
        await self.wait_until_ready()
        print("Bot Online.")
        if not self.synced: #check if slash commands have been synced 
            await tree.sync(guild = discord.Object(id=974059269668343829)) #guild specific: leave blank if global (global registration can take 1-24 hours)
            self.synced = True
        print(f"We have logged in as {self.user}.")

aclient = client()
tree = app_commands.CommandTree(aclient)


# execute Bot
bot.run(DISCORD_TOKEN)
