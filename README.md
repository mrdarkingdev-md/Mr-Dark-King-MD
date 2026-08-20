# 👑 MR DARK KING MD - WhatsApp & Telegram Bot

A powerful multi-platform bot for WhatsApp and Telegram with automatic channel subscription, pairing system, and command management.

## ✨ Features

- ✅ **WhatsApp Integration** - Uses Baileys for WhatsApp Web automation
- ✅ **Telegram Support** - Full Telegram bot functionality
- ✅ **Pairing System** - Generate official WhatsApp pairing codes
- ✅ **Auto Channel Subscription** - Automatically add users to your WhatsApp channel
- ✅ **Command System** - Easy-to-use command routing
- ✅ **Multi-Platform** - Works on both WhatsApp and Telegram simultaneously
- ✅ **Auto Reconnect** - Automatically reconnects on disconnection
- ✅ **Private Mode** - Restrict bot to owner only

## 📋 Requirements

- Node.js 14+ 
- npm or yarn
- WhatsApp Account
- Telegram Bot Token (optional)

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/mrdarkingdev-md/mr-dark-king-md.git
cd mr-dark-king-md

# Install dependencies
npm install

# Copy example env file
cp .env.example .env

# Edit .env with your credentials
nano .env
```

## ⚙️ Configuration

Update `.env` file:

```env
# Telegram Bot Configuration
BOT_TOKEN=your_telegram_bot_token_here

# WhatsApp Configuration
WHATSAPP_PHONE=2348071569915
WHATSAPP_NAME=MR DARK KING MD

# Bot Configuration
BOT_MODE=private
BOT_OWNER=Mr Dark King Dev
BOT_OWNER_PHONE=2348071569915
```

## 🎮 Commands

### WhatsApp Commands

```
.menu       - Show all available commands
.ping       - Check bot status
.status     - Bot connection status
.owner      - Owner information
.channel    - Join our WhatsApp channel
.pair <number> - Generate pairing code and auto-add to channel
```

### Telegram Commands

```
/start      - Welcome message
/menu       - Show all available commands
/ping       - Check bot status
/status     - Bot connection status
/owner      - Owner information
/channel    - Get WhatsApp channel link
/help       - Show help message
```

## 📱 Usage

### Starting the Bot

```bash
npm start
```

### WhatsApp Authentication

1. Run the bot
2. Scan the QR code with your WhatsApp phone
3. Bot will connect automatically

### Adding Users to Channel

```
.pair 2348012345678
```

The bot will:
1. Generate a pairing code
2. User enters code in WhatsApp settings
3. User is automatically added to your channel

## 📁 Project Structure

```
mr-dark-king-md/
├── index.js              # Main entry point
├── whatsapp.js           # WhatsApp bot logic
├── telegram.js           # Telegram bot logic
├── .env                  # Environment variables
├── package.json          # Dependencies
├── commands/
│   ├── menu.js          # Menu command
│   ├── owner.js         # Owner info command
│   └── ping.js          # Ping/status command
└── README.md            # Documentation
```

## 🔑 Environment Variables

| Variable | Description | Example |
|----------|-------------|----------|
| BOT_TOKEN | Telegram bot token | 123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11 |
| WHATSAPP_PHONE | Bot WhatsApp number | 2348071569915 |
| WHATSAPP_NAME | Bot display name | MR DARK KING MD |
| BOT_MODE | private or public | private |
| BOT_OWNER | Owner name | Mr Dark King Dev |
| BOT_OWNER_PHONE | Owner phone number | 2348071569915 |

## 🐛 Troubleshooting

### Bot not connecting to WhatsApp
- Delete `auth_info_baileys` folder
- Restart the bot
- Scan QR code again

### Telegram bot not responding
- Check BOT_TOKEN in .env
- Ensure bot is started: `npm start`
- Verify internet connection

### Channel invitation not working
- Ensure you're the channel admin
- Check channel ID is correct
- Verify bot has permissions

## 📞 Contact

**Owner:** Mr Dark King Dev  
**WhatsApp Channel:** https://whatsapp.com/channel/0029Vb8LXbO6LwHkS1PGWV1E

## 📄 License

MIT License - See LICENSE file for details

## 🙏 Credits

- [Baileys](https://github.com/WhiskeySockets/Baileys) - WhatsApp Web API
- [Telegraf](https://telegraf.js.org/) - Telegram Bot Framework
- [Dotenv](https://github.com/motdotla/dotenv) - Environment configuration

## ⚠️ Disclaimer

This project is for educational purposes. Use responsibly and comply with WhatsApp and Telegram terms of service.

---

**Made with ❤️ by Mr Dark King Dev**
