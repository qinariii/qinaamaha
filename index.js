import { Telegraf, session } from "telegraf";
import { message } from "telegraf/filters";
import dotenv from "dotenv";


dotenv.config();

const bot = new Telegraf(`${process.env.TELEGRAM_API_KEY}`);
bot.use(session());

const INITIAL_SESSION = {
  messages: [],
};

bot.launch();

bot.command("start", async (ctx) => {
  ctx.session === INITIAL_SESSION;
  await ctx.reply("yooo");
});

bot.on(message('text'), async (ctx) => {
    // Explicit usage
    await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello`)
})

