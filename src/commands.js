import asyncio
import os
from aiogram import Bot, Dispatcher

bot = Bot(token=os.environ.get("BOT_TOKEN"))
dp = Dispatcher()

async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
