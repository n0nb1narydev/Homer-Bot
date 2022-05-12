# run `pip3 install -U discord.py` to install discord.py
# run `pip3 install -U python-dotenv` to install dotenv

import os
import time
import random
import discord
# from dotenv import load_dotenv
from token_file import DISCORD_TOKEN
from discord.ext import tasks, commands


bot = discord.Client()

# on_ready() will be called the message will be printed once client is ready for further action. (When bot switches from Offline to Online)
@bot.event
async def on_ready():
    print("Bot Online.")

# execute Bot
bot.run(DISCORD_TOKEN)
