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

intents = discord.Intents.default()

bot = discord.Client(intents=intents)
tree = app_commands.CommandTree(bot)

@bot.event
async def on_ready():
    print("Bot Online")




# execute Bot
bot.run(DISCORD_TOKEN)
