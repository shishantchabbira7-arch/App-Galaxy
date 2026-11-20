// AppGalaxy Master Data: 120+ Top Apps & Services with real official links, logos, and platform downloads
const appsData = [
  // =================== SOCIAL MEDIA ===================
  {
    id: "tiktok",
    name: "TikTok",
    category: "social",
    categoryLabel: "Social Media",
    tagline: "Short-form mobile video platform",
    description: "Discover, create, and share entertaining short videos with worldwide music, filters, and community.",
    icon: "https://cdn.simpleicons.org/tiktok/ffffff",
    iconBg: "#000000",
    color: "#ff0050",
    website: "https://www.tiktok.com",
    trending: true,
    featured: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically",
      ios: "https://apps.apple.com/app/tiktok-videos-music/id835599320",
      pc: "https://apps.microsoft.com/detail/9nh2gph4jzs9"
    }
  },
  {
    id: "facebook",
    name: "Facebook",
    category: "social",
    categoryLabel: "Social Media",
    tagline: "Connect with friends, family and community",
    description: "World's largest social network to share posts, photos, stories, and connect with people who share your interests.",
    icon: "https://cdn.simpleicons.org/facebook/ffffff",
    iconBg: "#1877f2",
    color: "#1877f2",
    website: "https://www.facebook.com",
    trending: true,
    featured: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.facebook.katana",
      ios: "https://apps.apple.com/app/facebook/id284882215",
      pc: "https://apps.microsoft.com/detail/9wzdncrfj2wl"
    }
  },
  {
    id: "instagram",
    name: "Instagram",
    category: "social",
    categoryLabel: "Social Media",
    tagline: "Capture and share what you love",
    description: "Visual social network for sharing photos, Reels, Stories and direct messaging friends and creators.",
    icon: "https://cdn.simpleicons.org/instagram/ffffff",
    iconBg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    color: "#e1306c",
    website: "https://www.instagram.com",
    trending: true,
    featured: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.instagram.android",
      ios: "https://apps.apple.com/app/instagram/id389801252",
      pc: "https://apps.microsoft.com/detail/9nblggh5l9xt"
    }
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    category: "social",
    categoryLabel: "Social Media",
    tagline: "Simple, reliable, private messaging",
    description: "Fast, secure, end-to-end encrypted messaging and calling around the world, free of charge.",
    icon: "https://cdn.simpleicons.org/whatsapp/ffffff",
    iconBg: "#25d366",
    color: "#25d366",
    website: "https://web.whatsapp.com",
    trending: true,
    featured: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.whatsapp",
      ios: "https://apps.apple.com/app/whatsapp-messenger/id310633997",
      pc: "https://www.whatsapp.com/download"
    }
  },
  {
    id: "x-twitter",
    name: "X (Twitter)",
    category: "social",
    categoryLabel: "Social Media",
    tagline: "The global digital town square",
    description: "Real-time updates, breaking news, sports, entertainment, and live discussions across the world.",
    icon: "https://cdn.simpleicons.org/x/ffffff",
    iconBg: "#000000",
    color: "#1d9bf0",
    website: "https://x.com",
    trending: true,
    featured: false,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.twitter.android",
      ios: "https://apps.apple.com/app/x/id333903271",
      pc: "https://apps.microsoft.com/detail/9wzdncrfj140"
    }
  },
  {
    id: "telegram",
    name: "Telegram",
    category: "social",
    categoryLabel: "Social Media",
    tagline: "Ultra-fast cloud-based messenger",
    description: "Pure instant messaging — simple, fast, secure, and synced across all your phones, tablets, and computers.",
    icon: "https://cdn.simpleicons.org/telegram/ffffff",
    iconBg: "#26a5e4",
    color: "#26a5e4",
    website: "https://web.telegram.org",
    trending: true,
    featured: false,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=org.telegram.messenger",
      ios: "https://apps.apple.com/app/telegram-messenger/id686449807",
      pc: "https://desktop.telegram.org"
    }
  },
  {
    id: "snapchat",
    name: "Snapchat",
    category: "social",
    categoryLabel: "Social Media",
    tagline: "The fastest way to share a moment",
    description: "Express yourself, live in the moment, learn about the world, and have fun together with AR lenses.",
    icon: "https://cdn.simpleicons.org/snapchat/000000",
    iconBg: "#fffc00",
    color: "#fffc00",
    website: "https://web.snapchat.com",
    trending: false,
    featured: false,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.snapchat.android",
      ios: "https://apps.apple.com/app/snapchat/id447188370",
      pc: "https://apps.microsoft.com/detail/9p548n6b6f7q"
    }
  },
  {
    id: "reddit",
    name: "Reddit",
    category: "social",
    categoryLabel: "Social Media",
    tagline: "Dive into anything on community forums",
    description: "Vibrant home of thousands of communities, endless conversation, and authentic human connection.",
    icon: "https://cdn.simpleicons.org/reddit/ffffff",
    iconBg: "#ff4500",
    color: "#ff4500",
    website: "https://www.reddit.com",
    trending: true,
    featured: false,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.reddit.frontpage",
      ios: "https://apps.apple.com/app/reddit/id1064216828",
      pc: "https://www.reddit.com"
    }
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    category: "social",
    categoryLabel: "Social Media",
    tagline: "World's largest professional network",
    description: "Connect to professional opportunities, industry insights, colleagues, and career growth.",
    icon: "https://cdn.simpleicons.org/linkedin/ffffff",
    iconBg: "#0a66c2",
    color: "#0a66c2",
    website: "https://www.linkedin.com",
    trending: false,
    featured: false,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.linkedin.android",
      ios: "https://apps.apple.com/app/linkedin-network-job-finder/id288429040",
      pc: "https://apps.microsoft.com/detail/9wzdncrfj445"
    }
  },
  {
    id: "pinterest",
    name: "Pinterest",
    category: "social",
    categoryLabel: "Social Media",
    tagline: "Visual discovery engine for ideas",
    description: "Find recipes, home inspiration, style tips, design ideas, and creative projects to try.",
    icon: "https://cdn.simpleicons.org/pinterest/ffffff",
    iconBg: "#e60023",
    color: "#e60023",
    website: "https://www.pinterest.com",
    trending: false,
    featured: false,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.pinterest",
      ios: "https://apps.apple.com/app/pinterest-lifestyle-ideas/id429047995",
      pc: "https://apps.microsoft.com/detail/9nblggh5px7q"
    }
  },
  {
    id: "discord",
    name: "Discord",
    category: "social",
    categoryLabel: "Social Media",
    tagline: "Voice, video, and text chat for groups",
    description: "Great place for gaming squads, study clubs, art communities, and friend groups to talk daily.",
    icon: "https://cdn.simpleicons.org/discord/ffffff",
    iconBg: "#5865f2",
    color: "#5865f2",
    website: "https://discord.com",
    trending: true,
    featured: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.discord",
      ios: "https://apps.apple.com/app/discord-talk-chat-hangout/id985746746",
      pc: "https://discord.com/download"
    }
  },
  {
    id: "threads",
    name: "Threads",
    category: "social",
    categoryLabel: "Social Media",
    tagline: "Share text updates and join public conversations",
    description: "Instagram's text-based conversation app to discuss everything from topic updates to world trends.",
    icon: "https://cdn.simpleicons.org/threads/ffffff",
    iconBg: "#000000",
    color: "#000000",
    website: "https://www.threads.net",
    trending: false,
    featured: false,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.instagram.barcelona",
      ios: "https://apps.apple.com/app/threads-an-instagram-app/id6446901402",
      pc: "https://www.threads.net"
    }
  },
  {
    id: "wechat",
    name: "WeChat",
    category: "social",
    categoryLabel: "Social Media",
    tagline: "Connecting over a billion people",
    description: "All-in-one messaging, social media, mobile payments, and mini-programs platform.",
    icon: "https://cdn.simpleicons.org/wechat/ffffff",
    iconBg: "#07c160",
    color: "#07c160",
    website: "https://www.wechat.com",
    trending: false,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.tencent.mm",
      ios: "https://apps.apple.com/app/wechat/id414478124",
      pc: "https://www.wechat.com/en/download"
    }
  },
  {
    id: "signal",
    name: "Signal",
    category: "social",
    categoryLabel: "Social Media",
    tagline: "Speak freely with state-of-the-art privacy",
    description: "Independent, open-source, encrypted messenger without ads or corporate tracking.",
    icon: "https://cdn.simpleicons.org/signal/ffffff",
    iconBg: "#3a76f0",
    color: "#3a76f0",
    website: "https://signal.org",
    trending: false,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms",
      ios: "https://apps.apple.com/app/signal-private-messenger/id874135370",
      pc: "https://signal.org/download/"
    }
  },
  {
    id: "tumblr",
    name: "Tumblr",
    category: "social",
    categoryLabel: "Social Media",
    tagline: "Effortless self-expression and fandoms",
    description: "Microblogging site to post multimedia, art, writing, memes and connect with subcultures.",
    icon: "https://cdn.simpleicons.org/tumblr/ffffff",
    iconBg: "#36465d",
    color: "#36465d",
    website: "https://www.tumblr.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.tumblr",
      ios: "https://apps.apple.com/app/tumblr-fandom-art-chaos/id305343404",
      pc: "https://www.tumblr.com"
    }
  },
  {
    id: "mastodon",
    name: "Mastodon",
    category: "social",
    categoryLabel: "Social Media",
    tagline: "Decentralized open social networking",
    description: "Free, open-source federated social network built on open protocols not owned by any corporation.",
    icon: "https://cdn.simpleicons.org/mastodon/ffffff",
    iconBg: "#6364ff",
    color: "#6364ff",
    website: "https://mastodon.social",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=org.joinmastodon.android",
      ios: "https://apps.apple.com/app/mastodon-for-iphone-and-ipad/id1571998974",
      pc: "https://joinmastodon.org"
    }
  },

  // =================== ENTERTAINMENT & STREAMING ===================
  {
    id: "youtube",
    name: "YouTube",
    category: "entertainment",
    categoryLabel: "Entertainment",
    tagline: "Enjoy videos and music you love",
    description: "The world's premier video platform for original creators, music, tutorials, live streams, and documentaries.",
    icon: "https://cdn.simpleicons.org/youtube/ffffff",
    iconBg: "#ff0000",
    color: "#ff0000",
    website: "https://www.youtube.com",
    trending: true,
    featured: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.google.android.youtube",
      ios: "https://apps.apple.com/app/youtube-watch-listen-stream/id544007664",
      pc: "https://www.youtube.com"
    }
  },
  {
    id: "netflix",
    name: "Netflix",
    category: "entertainment",
    categoryLabel: "Entertainment",
    tagline: "Unlimited movies, TV shows, and more",
    description: "Stream hit original series, blockbuster movies, anime, and documentaries on any connected device.",
    icon: "https://cdn.simpleicons.org/netflix/ffffff",
    iconBg: "#e50914",
    color: "#e50914",
    website: "https://www.netflix.com",
    trending: true,
    featured: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.netflix.mediaclient",
      ios: "https://apps.apple.com/app/netflix/id363590051",
      pc: "https://apps.microsoft.com/detail/9wzdncrfj3tj"
    }
  },
  {
    id: "spotify",
    name: "Spotify",
    category: "entertainment",
    categoryLabel: "Entertainment",
    tagline: "Music and podcasts for everyone",
    description: "Access over 100 million songs, curated playlists, top podcasts, and audiobooks worldwide.",
    icon: "https://cdn.simpleicons.org/spotify/ffffff",
    iconBg: "#1db954",
    color: "#1db954",
    website: "https://open.spotify.com",
    trending: true,
    featured: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.spotify.music",
      ios: "https://apps.apple.com/app/spotify-music-and-podcasts/id324684580",
      pc: "https://www.spotify.com/download"
    }
  },
  {
    id: "disneyplus",
    name: "Disney+",
    category: "entertainment",
    categoryLabel: "Entertainment",
    tagline: "The best stories in one place",
    description: "Home of Disney, Pixar, Marvel, Star Wars, National Geographic, and acclaimed originals.",
    icon: "https://cdn.simpleicons.org/disneyplus/ffffff",
    iconBg: "#0f172a",
    color: "#113ccf",
    website: "https://www.disneyplus.com",
    trending: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.disney.disneyplus",
      ios: "https://apps.apple.com/app/disney/id1446075923",
      pc: "https://apps.microsoft.com/detail/9nxqxx3977gw"
    }
  },
  {
    id: "primevideo",
    name: "Amazon Prime Video",
    category: "entertainment",
    categoryLabel: "Entertainment",
    tagline: "Watch exclusive Amazon Originals & hit movies",
    description: "Stream premium films, top TV series, live sports, and award-winning Amazon Originals.",
    icon: "https://cdn.simpleicons.org/primevideo/ffffff",
    iconBg: "#00a8e1",
    color: "#00a8e1",
    website: "https://www.primevideo.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.amazon.avod.thirdpartyclient",
      ios: "https://apps.apple.com/app/amazon-prime-video/id545519333",
      pc: "https://apps.microsoft.com/detail/9p6rc76msmmj"
    }
  },
  {
    id: "twitch",
    name: "Twitch",
    category: "entertainment",
    categoryLabel: "Entertainment",
    tagline: "Live streaming for gamers and creators",
    description: "Watch live gaming, esports tournaments, music broadcasts, creative arts, and chat with millions.",
    icon: "https://cdn.simpleicons.org/twitch/ffffff",
    iconBg: "#9146ff",
    color: "#9146ff",
    website: "https://www.twitch.tv",
    trending: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=tv.twitch.android.app",
      ios: "https://apps.apple.com/app/twitch-live-game-streaming/id460177396",
      pc: "https://www.twitch.tv/downloads"
    }
  },
  {
    id: "appletv",
    name: "Apple TV+",
    category: "entertainment",
    categoryLabel: "Entertainment",
    tagline: "Original stories from creative minds",
    description: "Award-winning series, compelling dramas, groundbreaking documentaries, and family entertainment.",
    icon: "https://cdn.simpleicons.org/apple/ffffff",
    iconBg: "#000000",
    color: "#ffffff",
    website: "https://tv.apple.com",
    downloads: {
      android: "https://tv.apple.com",
      ios: "https://apps.apple.com/app/apple-tv/id1174078549",
      pc: "https://apps.microsoft.com/detail/9nm4t8b9jqzk"
    }
  },
  {
    id: "soundcloud",
    name: "SoundCloud",
    category: "entertainment",
    categoryLabel: "Entertainment",
    tagline: "Discover new music and indie creators",
    description: "Next-gen music streaming and discovery community where fans connect directly with emerging artists.",
    icon: "https://cdn.simpleicons.org/soundcloud/ffffff",
    iconBg: "#ff5500",
    color: "#ff5500",
    website: "https://soundcloud.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.soundcloud.android",
      ios: "https://apps.apple.com/app/soundcloud-music-playlists/id336353151",
      pc: "https://soundcloud.com"
    }
  },
  {
    id: "crunchyroll",
    name: "Crunchyroll",
    category: "entertainment",
    categoryLabel: "Entertainment",
    tagline: "World's largest anime library",
    description: "Stream the newest anime fresh from Japan, alongside classics, manga, and theatrical releases.",
    icon: "https://cdn.simpleicons.org/crunchyroll/ffffff",
    iconBg: "#f47521",
    color: "#f47521",
    website: "https://www.crunchyroll.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.crunchyroll.crunchyroid",
      ios: "https://apps.apple.com/app/crunchyroll/id329913454",
      pc: "https://apps.microsoft.com/detail/9wzdncrfj15t"
    }
  },
  {
    id: "imdb",
    name: "IMDb",
    category: "entertainment",
    categoryLabel: "Entertainment",
    tagline: "Movies, TV & Celebrities guide",
    description: "World's most popular and authoritative source for movie, TV and celebrity content, ratings and reviews.",
    icon: "https://cdn.simpleicons.org/imdb/000000",
    iconBg: "#f5c518",
    color: "#f5c518",
    website: "https://www.imdb.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.imdb.mobile",
      ios: "https://apps.apple.com/app/imdb-movies-tv-shows/id342792525",
      pc: "https://www.imdb.com"
    }
  },
  {
    id: "vimeo",
    name: "Vimeo",
    category: "entertainment",
    categoryLabel: "Entertainment",
    tagline: "Professional video hosting and creator tools",
    description: "High-definition video platform for filmmakers, videographers, artists, and creative professionals.",
    icon: "https://cdn.simpleicons.org/vimeo/ffffff",
    iconBg: "#1ab7ea",
    color: "#1ab7ea",
    website: "https://vimeo.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.vimeo.android.videoapp",
      ios: "https://apps.apple.com/app/vimeo-watch-edit-stream/id425194759",
      pc: "https://vimeo.com"
    }
  },
  {
    id: "hulu",
    name: "Hulu",
    category: "entertainment",
    categoryLabel: "Entertainment",
    tagline: "Stream TV episodes, originals & movies",
    description: "Watch thousands of hit shows, new movies, current-season episodes, FX originals, and live TV.",
    icon: "https://cdn.simpleicons.org/hulu/000000",
    iconBg: "#1ce783",
    color: "#1ce783",
    website: "https://www.hulu.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.hulu.plus",
      ios: "https://apps.apple.com/app/hulu-watch-tv-shows-movies/id376510438",
      pc: "https://apps.microsoft.com/detail/9wzdncrfj364"
    }
  },

  // =================== AI TOOLS ===================
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "ai",
    categoryLabel: "AI Tools",
    tagline: "Conversational AI assistant by OpenAI",
    description: "Advanced AI conversational model for writing, brainstorming, programming, learning, and productivity.",
    icon: "https://cdn.simpleicons.org/openai/ffffff",
    iconBg: "#10a37f",
    color: "#10a37f",
    website: "https://chatgpt.com",
    trending: true,
    featured: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.openai.chatgpt",
      ios: "https://apps.apple.com/app/chatgpt/id6448311069",
      pc: "https://openai.com/chatgpt/download/"
    }
  },
  {
    id: "gemini",
    name: "Google Gemini",
    category: "ai",
    categoryLabel: "AI Tools",
    tagline: "Google's next-generation multimodal AI",
    description: "Collaborate with Gemini to supercharge your ideas, write, plan, learn, code, and summarize data seamlessly.",
    icon: "https://cdn.simpleicons.org/googlegemini/ffffff",
    iconBg: "linear-gradient(135deg, #1a73e8 0%, #8ab4f8 50%, #9c27b0 100%)",
    color: "#1a73e8",
    website: "https://gemini.google.com",
    trending: true,
    featured: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.google.android.apps.bard",
      ios: "https://apps.apple.com/app/google/id284815942",
      pc: "https://gemini.google.com"
    }
  },
  {
    id: "claude",
    name: "Claude AI",
    category: "ai",
    categoryLabel: "AI Tools",
    tagline: "Intelligent, thoughtful AI by Anthropic",
    description: "Next-generation AI assistant that excels at nuanced reasoning, coding, writing, and deep document analysis.",
    icon: "https://cdn.simpleicons.org/anthropic/ffffff",
    iconBg: "#d97706",
    color: "#d97706",
    website: "https://claude.ai",
    trending: true,
    featured: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.anthropic.claude",
      ios: "https://apps.apple.com/app/claude-by-anthropic/id6473753684",
      pc: "https://claude.ai/download"
    }
  },
  {
    id: "midjourney",
    name: "Midjourney",
    category: "ai",
    categoryLabel: "AI Tools",
    tagline: "Hyper-realistic generative AI art studio",
    description: "Pioneering AI system that transforms text prompts into breathtaking photorealistic and concept imagery.",
    icon: "https://cdn.simpleicons.org/midjourney/ffffff",
    iconBg: "#0f172a",
    color: "#22d3ee",
    website: "https://www.midjourney.com",
    trending: true,
    downloads: {
      android: "https://discord.com",
      ios: "https://discord.com",
      pc: "https://www.midjourney.com"
    }
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    category: "ai",
    categoryLabel: "AI Tools",
    tagline: "Your everyday AI companion",
    description: "AI-powered web search, writing companion, image creator, and productivity booster backed by OpenAI models.",
    icon: "https://cdn.simpleicons.org/microsoftcopilot/ffffff",
    iconBg: "linear-gradient(135deg, #0078d4 0%, #107c41 100%)",
    color: "#0078d4",
    website: "https://copilot.microsoft.com",
    trending: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.microsoft.copilot",
      ios: "https://apps.apple.com/app/microsoft-copilot/id6472538445",
      pc: "https://apps.microsoft.com/detail/9nblggh4r97l"
    }
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    category: "ai",
    categoryLabel: "AI Tools",
    tagline: "Where knowledge begins with direct answers",
    description: "Conversational answer engine delivering cited, verified and real-time search synthesis for inquiries.",
    icon: "https://cdn.simpleicons.org/perplexity/ffffff",
    iconBg: "#20b2aa",
    color: "#20b2aa",
    website: "https://www.perplexity.ai",
    trending: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=ai.perplexity.app.android",
      ios: "https://apps.apple.com/app/perplexity-ask-anything/id1668019334",
      pc: "https://apps.microsoft.com/detail/9n8z5g5r0x8l"
    }
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    category: "ai",
    categoryLabel: "AI Tools",
    tagline: "The open source AI community & hub",
    description: "Collaborative platform hosting thousands of open-source ML models, datasets, and interactive Spaces demos.",
    icon: "https://cdn.simpleicons.org/huggingface/ffffff",
    iconBg: "#ffbc00",
    color: "#ffbc00",
    website: "https://huggingface.co",
    downloads: {
      android: "https://huggingface.co",
      ios: "https://huggingface.co",
      pc: "https://huggingface.co"
    }
  },
  {
    id: "runway",
    name: "Runway Gen-3",
    category: "ai",
    categoryLabel: "AI Tools",
    tagline: "Next-generation generative video tools",
    description: "Industry-leading AI video synthesis platform empowering artists and creators with text-to-video magic.",
    icon: "https://cdn.simpleicons.org/runway/ffffff",
    iconBg: "#111827",
    color: "#818cf8",
    website: "https://runwayml.com",
    downloads: {
      android: "https://runwayml.com",
      ios: "https://apps.apple.com/app/runwayml/id1665024375",
      pc: "https://runwayml.com"
    }
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "ai",
    categoryLabel: "AI Tools",
    tagline: "Realistic voice generation and cloning",
    description: "The most natural, versatile AI speech synthesis and voice cloning software for creators and developers.",
    icon: "https://cdn.simpleicons.org/elevenlabs/ffffff",
    iconBg: "#000000",
    color: "#ffffff",
    website: "https://elevenlabs.io",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=io.elevenlabs.readerapp",
      ios: "https://apps.apple.com/app/elevenlabs-reader-ai-audio/id6479373050",
      pc: "https://elevenlabs.io"
    }
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    category: "ai",
    categoryLabel: "AI Tools",
    tagline: "High-performance open reasoning AI",
    description: "Cutting-edge open-weights AI model acclaimed for superior mathematical reasoning, code generation, and deep insights.",
    icon: "https://cdn.simpleicons.org/deepin/ffffff",
    iconBg: "#1d4ed8",
    color: "#1d4ed8",
    website: "https://chat.deepseek.com",
    trending: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.deepseek.chat",
      ios: "https://apps.apple.com/app/deepseek-ai-assistant/id6479001356",
      pc: "https://chat.deepseek.com"
    }
  },
  {
    id: "suno",
    name: "Suno AI",
    category: "ai",
    categoryLabel: "AI Tools",
    tagline: "Make any song you can imagine",
    description: "Generate complete, studio-quality songs with full vocals and instrumentation from a simple text prompt.",
    icon: "https://cdn.simpleicons.org/audacity/ffffff",
    iconBg: "#000000",
    color: "#ec4899",
    website: "https://suno.com",
    downloads: {
      android: "https://suno.com",
      ios: "https://apps.apple.com/app/suno-music-ai/id6480136361",
      pc: "https://suno.com"
    }
  },
  {
    id: "poe",
    name: "Poe by Quora",
    category: "ai",
    categoryLabel: "AI Tools",
    tagline: "Fast chat with top AI models",
    description: "Access GPT-4o, Claude 3.5, Gemini 1.5, Mistral, and custom user-built bots all in one clean interface.",
    icon: "https://cdn.simpleicons.org/quora/ffffff",
    iconBg: "#8b0000",
    color: "#8b0000",
    website: "https://poe.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.poe.android",
      ios: "https://apps.apple.com/app/poe-fast-ai-chat/id1640745955",
      pc: "https://poe.com/download"
    }
  },

  // =================== PRODUCTIVITY & TOOLS ===================
  {
    id: "google",
    name: "Google Search",
    category: "productivity",
    categoryLabel: "Productivity",
    tagline: "The world's leading search engine",
    description: "Instant access to global information, maps, images, videos, flight bookings, and comprehensive knowledge.",
    icon: "https://cdn.simpleicons.org/google/ffffff",
    iconBg: "#4285f4",
    color: "#4285f4",
    website: "https://www.google.com",
    trending: true,
    featured: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox",
      ios: "https://apps.apple.com/app/google/id284815942",
      pc: "https://www.google.com/chrome/"
    }
  },
  {
    id: "canva",
    name: "Canva",
    category: "productivity",
    categoryLabel: "Productivity",
    tagline: "Design anything, publish anywhere",
    description: "Empowers everyone to create professional presentations, social posts, resumes, videos, and logos with ease.",
    icon: "https://cdn.simpleicons.org/canva/ffffff",
    iconBg: "#00c4cc",
    color: "#00c4cc",
    website: "https://www.canva.com",
    trending: true,
    featured: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.canva.editor",
      ios: "https://apps.apple.com/app/canva-design-photo-video/id897446215",
      pc: "https://www.canva.com/download/windows/"
    }
  },
  {
    id: "notion",
    name: "Notion",
    category: "productivity",
    categoryLabel: "Productivity",
    tagline: "The connected workspace for wiki & docs",
    description: "All-in-one workspace for notes, project management, tasks, databases, and team collaboration.",
    icon: "https://cdn.simpleicons.org/notion/ffffff",
    iconBg: "#000000",
    color: "#000000",
    website: "https://www.notion.so",
    trending: true,
    featured: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=notion.id",
      ios: "https://apps.apple.com/app/notion-notes-docs-tasks/id1232780281",
      pc: "https://www.notion.so/desktop"
    }
  },
  {
    id: "gmail",
    name: "Gmail",
    category: "productivity",
    categoryLabel: "Productivity",
    tagline: "Fast, secure email with Google intelligence",
    description: "World-class email service with spam protection, 15GB free cloud storage, and integrated Meet calls.",
    icon: "https://cdn.simpleicons.org/gmail/ffffff",
    iconBg: "#ea4335",
    color: "#ea4335",
    website: "https://mail.google.com",
    trending: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.google.android.gm",
      ios: "https://apps.apple.com/app/gmail-email-by-google/id422689480",
      pc: "https://mail.google.com"
    }
  },
  {
    id: "googledrive",
    name: "Google Drive",
    category: "productivity",
    categoryLabel: "Productivity",
    tagline: "Cloud storage and file backup",
    description: "Store, share, and collaborate on files, spreadsheets, and folders from any smartphone, tablet, or PC.",
    icon: "https://cdn.simpleicons.org/googledrive/ffffff",
    iconBg: "#ffba00",
    color: "#34a853",
    website: "https://drive.google.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.google.android.apps.docs",
      ios: "https://apps.apple.com/app/google-drive/id507874739",
      pc: "https://www.google.com/drive/download/"
    }
  },
  {
    id: "microsoft365",
    name: "Microsoft 365 / Office",
    category: "productivity",
    categoryLabel: "Productivity",
    tagline: "Word, Excel, PowerPoint & cloud suite",
    description: "Industry-standard productivity applications for document editing, financial modeling, and presentations.",
    icon: "https://cdn.simpleicons.org/microsoftoffice/ffffff",
    iconBg: "#d83b01",
    color: "#d83b01",
    website: "https://www.office.com",
    trending: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.microsoft.office.officehubrow",
      ios: "https://apps.apple.com/app/microsoft-365-office/id541164041",
      pc: "https://apps.microsoft.com/detail/9wzdncrd29v9"
    }
  },
  {
    id: "figma",
    name: "Figma",
    category: "productivity",
    categoryLabel: "Productivity",
    tagline: "Collaborative interface design tool",
    description: "The leading collaborative design and prototyping tool used by top design and software teams worldwide.",
    icon: "https://cdn.simpleicons.org/figma/ffffff",
    iconBg: "#f24e1e",
    color: "#f24e1e",
    website: "https://www.figma.com",
    trending: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.figma.mirror",
      ios: "https://apps.apple.com/app/figma-view-collaborate-mirror/id1152747299",
      pc: "https://www.figma.com/downloads/"
    }
  },
  {
    id: "zoom",
    name: "Zoom Workplace",
    category: "productivity",
    categoryLabel: "Productivity",
    tagline: "HD video conferencing and team chat",
    description: "Seamless video meetings, cloud phone system, team chat, screen sharing, and virtual whiteboard platform.",
    icon: "https://cdn.simpleicons.org/zoom/ffffff",
    iconBg: "#2d8cff",
    color: "#2d8cff",
    website: "https://zoom.us",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=us.zoom.videomeetings",
      ios: "https://apps.apple.com/app/zoom-workplace/id546505307",
      pc: "https://zoom.us/download"
    }
  },
  {
    id: "slack",
    name: "Slack",
    category: "productivity",
    categoryLabel: "Productivity",
    tagline: "Productivity platform for teams",
    description: "Transforms team communication with channels, direct messaging, automation workflows, and file exchange.",
    icon: "https://cdn.simpleicons.org/slack/ffffff",
    iconBg: "#4a154b",
    color: "#4a154b",
    website: "https://slack.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.Slack",
      ios: "https://apps.apple.com/app/slack/id618783545",
      pc: "https://slack.com/downloads"
    }
  },
  {
    id: "trello",
    name: "Trello",
    category: "productivity",
    categoryLabel: "Productivity",
    tagline: "Visual project management boards",
    description: "Kanban-style boards, lists, and cards that help teams organize projects, workflows, and task tracking.",
    icon: "https://cdn.simpleicons.org/trello/ffffff",
    iconBg: "#0079bf",
    color: "#0079bf",
    website: "https://trello.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.trello",
      ios: "https://apps.apple.com/app/trello-manage-team-projects/id461504587",
      pc: "https://apps.microsoft.com/detail/9nblggh4xx06"
    }
  },
  {
    id: "github",
    name: "GitHub",
    category: "productivity",
    categoryLabel: "Productivity",
    tagline: "Where the world builds software",
    description: "Global home for developers to host code, collaborate via git pull requests, and manage open-source projects.",
    icon: "https://cdn.simpleicons.org/github/ffffff",
    iconBg: "#24292e",
    color: "#24292e",
    website: "https://github.com",
    trending: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.github.android",
      ios: "https://apps.apple.com/app/github/id1477376905",
      pc: "https://desktop.github.com"
    }
  },
  {
    id: "dropbox",
    name: "Dropbox",
    category: "productivity",
    categoryLabel: "Productivity",
    tagline: "Secure cloud file sync and sharing",
    description: "Smart storage and collaboration tool to backup personal photos, documents, and corporate digital assets.",
    icon: "https://cdn.simpleicons.org/dropbox/ffffff",
    iconBg: "#0061ff",
    color: "#0061ff",
    website: "https://www.dropbox.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.dropbox.android",
      ios: "https://apps.apple.com/app/dropbox-cloud-storage-drive/id327211849",
      pc: "https://www.dropbox.com/install"
    }
  },
  {
    id: "evernote",
    name: "Evernote",
    category: "productivity",
    categoryLabel: "Productivity",
    tagline: "Remember everything, organize easily",
    description: "Note-taking app to capture ideas, web pages, scanned receipts, checklists, and project research.",
    icon: "https://cdn.simpleicons.org/evernote/ffffff",
    iconBg: "#00a82d",
    color: "#00a82d",
    website: "https://evernote.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.evernote",
      ios: "https://apps.apple.com/app/evernote-notes-organizer/id281796108",
      pc: "https://evernote.com/download"
    }
  },
  {
    id: "asana",
    name: "Asana",
    category: "productivity",
    categoryLabel: "Productivity",
    tagline: "Work management and enterprise goals",
    description: "Connect work to goals so teams know what needs to be done, why it matters, and how to get it done.",
    icon: "https://cdn.simpleicons.org/asana/ffffff",
    iconBg: "#f06a6a",
    color: "#f06a6a",
    website: "https://asana.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.asana.app",
      ios: "https://apps.apple.com/app/asana-work-in-one-place/id489969512",
      pc: "https://asana.com/download"
    }
  },
  {
    id: "bitwarden",
    name: "Bitwarden",
    category: "productivity",
    categoryLabel: "Productivity",
    tagline: "Open source password manager",
    description: "End-to-end encrypted password and sensitive credential manager for individuals and organizations.",
    icon: "https://cdn.simpleicons.org/bitwarden/ffffff",
    iconBg: "#175ddc",
    color: "#175ddc",
    website: "https://vault.bitwarden.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.x8bit.bitwarden",
      ios: "https://apps.apple.com/app/bitwarden-password-manager/id1352778147",
      pc: "https://bitwarden.com/download/"
    }
  },
  {
    id: "todoist",
    name: "Todoist",
    category: "productivity",
    categoryLabel: "Productivity",
    tagline: "To-do list and task manager",
    description: "Organize your life and work, build good habits, and gain peace of mind with natural language tasks.",
    icon: "https://cdn.simpleicons.org/todoist/ffffff",
    iconBg: "#e44332",
    color: "#e44332",
    website: "https://todoist.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.todoist",
      ios: "https://apps.apple.com/app/todoist-to-do-list-tasks/id572688855",
      pc: "https://todoist.com/downloads"
    }
  },

  // =================== EDUCATION & LEARNING ===================
  {
    id: "duolingo",
    name: "Duolingo",
    category: "education",
    categoryLabel: "Education",
    tagline: "Learn languages free and fun",
    description: "Bite-sized, gamified lessons to master over 40 languages including Spanish, French, Japanese, and German.",
    icon: "https://cdn.simpleicons.org/duolingo/ffffff",
    iconBg: "#58cc02",
    color: "#58cc02",
    website: "https://www.duolingo.com",
    trending: true,
    featured: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.duolingo",
      ios: "https://apps.apple.com/app/duolingo-language-lessons/id570060128",
      pc: "https://www.duolingo.com"
    }
  },
  {
    id: "coursera",
    name: "Coursera",
    category: "education",
    categoryLabel: "Education",
    tagline: "Online courses from top universities",
    description: "Earn recognized degrees and professional certifications from Stanford, Google, IBM, Yale, and more.",
    icon: "https://cdn.simpleicons.org/coursera/ffffff",
    iconBg: "#0056d2",
    color: "#0056d2",
    website: "https://www.coursera.org",
    trending: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=org.coursera.android",
      ios: "https://apps.apple.com/app/coursera-learn-career-skills/id736535961",
      pc: "https://www.coursera.org"
    }
  },
  {
    id: "khanacademy",
    name: "Khan Academy",
    category: "education",
    categoryLabel: "Education",
    tagline: "Free, world-class education for anyone",
    description: "Comprehensive lessons, practice exercises, and instructional videos in math, science, and humanities.",
    icon: "https://cdn.simpleicons.org/khanacademy/ffffff",
    iconBg: "#14bf96",
    color: "#14bf96",
    website: "https://www.khanacademy.org",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=org.khanacademy.android",
      ios: "https://apps.apple.com/app/khan-academy/id469863705",
      pc: "https://www.khanacademy.org"
    }
  },
  {
    id: "udemy",
    name: "Udemy",
    category: "education",
    categoryLabel: "Education",
    tagline: "Master coding, business, design & more",
    description: "Massive online learning marketplace with over 220,000 video courses taught by real-world industry experts.",
    icon: "https://cdn.simpleicons.org/udemy/ffffff",
    iconBg: "#a435f0",
    color: "#a435f0",
    website: "https://www.udemy.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.udemy.android",
      ios: "https://apps.apple.com/app/udemy-online-courses/id562413829",
      pc: "https://www.udemy.com"
    }
  },
  {
    id: "wikipedia",
    name: "Wikipedia",
    category: "education",
    categoryLabel: "Education",
    tagline: "The free online encyclopedia",
    description: "Multilingual collaborative encyclopedia offering free knowledge on millions of topics across humanity.",
    icon: "https://cdn.simpleicons.org/wikipedia/ffffff",
    iconBg: "#000000",
    color: "#000000",
    website: "https://www.wikipedia.org",
    trending: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=org.wikipedia",
      ios: "https://apps.apple.com/app/wikipedia/id324715238",
      pc: "https://www.wikipedia.org"
    }
  },
  {
    id: "quizlet",
    name: "Quizlet",
    category: "education",
    categoryLabel: "Education",
    tagline: "Digital flashcards and study guides",
    description: "Practice and master whatever you are learning through flashcards, interactive games, and mock tests.",
    icon: "https://cdn.simpleicons.org/quizlet/ffffff",
    iconBg: "#4257b2",
    color: "#4257b2",
    website: "https://quizlet.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.quizlet.quizletandroid",
      ios: "https://apps.apple.com/app/quizlet-flashcards-study/id546473333",
      pc: "https://quizlet.com"
    }
  },
  {
    id: "edx",
    name: "edX",
    category: "education",
    categoryLabel: "Education",
    tagline: "Courses from Harvard, MIT, and Oxford",
    description: "Advance your career with university-accredited masterclasses, boot camps, and degree credentials.",
    icon: "https://cdn.simpleicons.org/edx/ffffff",
    iconBg: "#02262b",
    color: "#b92528",
    website: "https://www.edx.org",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=org.edx.mobile",
      ios: "https://apps.apple.com/app/edx-courses-by-harvard-mit/id945480667",
      pc: "https://www.edx.org"
    }
  },
  {
    id: "codecademy",
    name: "Codecademy",
    category: "education",
    categoryLabel: "Education",
    tagline: "Learn to code interactively",
    description: "Hands-on coding courses in Python, JavaScript, HTML/CSS, SQL, C++, and Web Development in your browser.",
    icon: "https://cdn.simpleicons.org/codecademy/ffffff",
    iconBg: "#1f4056",
    color: "#1f4056",
    website: "https://www.codecademy.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.ryzac.codecademyone",
      ios: "https://apps.apple.com/app/codecademy-go/id1376029326",
      pc: "https://www.codecademy.com"
    }
  },
  {
    id: "googleclassroom",
    name: "Google Classroom",
    category: "education",
    categoryLabel: "Education",
    tagline: "Centralized learning hub for schools",
    description: "Helps educators create engaging learning experiences, organize assignments, and track student grades.",
    icon: "https://cdn.simpleicons.org/googleclassroom/ffffff",
    iconBg: "#00ac47",
    color: "#00ac47",
    website: "https://classroom.google.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.google.android.apps.classroom",
      ios: "https://apps.apple.com/app/google-classroom/id924620130",
      pc: "https://classroom.google.com"
    }
  },
  {
    id: "ted",
    name: "TED",
    category: "education",
    categoryLabel: "Education",
    tagline: "Ideas worth spreading across the world",
    description: "Inspiring and insightful talks from world-leading thinkers, scientists, tech pioneers, and creatives.",
    icon: "https://cdn.simpleicons.org/ted/ffffff",
    iconBg: "#e62b1e",
    color: "#e62b1e",
    website: "https://www.ted.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.ted.android",
      ios: "https://apps.apple.com/app/ted/id376183339",
      pc: "https://www.ted.com"
    }
  },

  // =================== GAMING ===================
  {
    id: "steam",
    name: "Steam",
    category: "gaming",
    categoryLabel: "Gaming",
    tagline: "The ultimate destination for PC gaming",
    description: "Store, community, and launcher for thousands of games, player discussions, and digital game downloads.",
    icon: "https://cdn.simpleicons.org/steam/ffffff",
    iconBg: "#171a21",
    color: "#171a21",
    website: "https://store.steampowered.com",
    trending: true,
    featured: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.valvesoftware.android.steam.community",
      ios: "https://apps.apple.com/app/steam-mobile/id495369748",
      pc: "https://store.steampowered.com/about/"
    }
  },
  {
    id: "roblox",
    name: "Roblox",
    category: "gaming",
    categoryLabel: "Gaming",
    tagline: "Explore millions of 3D immersive worlds",
    description: "Virtual sandbox universe where millions create, share experiences, play together, and craft games.",
    icon: "https://cdn.simpleicons.org/roblox/ffffff",
    iconBg: "#000000",
    color: "#000000",
    website: "https://www.roblox.com",
    trending: true,
    featured: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.roblox.client",
      ios: "https://apps.apple.com/app/roblox/id431946152",
      pc: "https://apps.microsoft.com/detail/9nblggh2z69k"
    }
  },
  {
    id: "epicgames",
    name: "Epic Games Store",
    category: "gaming",
    categoryLabel: "Gaming",
    tagline: "Home of Fortnite & weekly free games",
    description: "Premier digital game store offering blockbuster releases, exclusive discounts, and Unreal Engine creations.",
    icon: "https://cdn.simpleicons.org/epicgames/ffffff",
    iconBg: "#313131",
    color: "#313131",
    website: "https://store.epicgames.com",
    trending: true,
    downloads: {
      android: "https://store.epicgames.com/mobile",
      ios: "https://store.epicgames.com/mobile",
      pc: "https://store.epicgames.com/download"
    }
  },
  {
    id: "playstation",
    name: "PlayStation App & Network",
    category: "gaming",
    categoryLabel: "Gaming",
    tagline: "Connect with friends, manage PS5/PS4",
    description: "Browse the PS Store, message players, download games to your console remotely, and join voice chats.",
    icon: "https://cdn.simpleicons.org/playstation/ffffff",
    iconBg: "#003791",
    color: "#003791",
    website: "https://www.playstation.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.scee.psxandroid",
      ios: "https://apps.apple.com/app/playstation-app/id410896080",
      pc: "https://www.playstation.com/ps-plus/pc-game-streaming/"
    }
  },
  {
    id: "xbox",
    name: "Xbox & Game Pass",
    category: "gaming",
    categoryLabel: "Gaming",
    tagline: "Cloud gaming and Xbox network hub",
    description: "Play hundreds of console games on PC and mobile devices with Xbox Cloud Gaming and stay connected to friends.",
    icon: "https://cdn.simpleicons.org/xbox/ffffff",
    iconBg: "#107c10",
    color: "#107c10",
    website: "https://www.xbox.com",
    trending: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.microsoft.xboxone.smartglass",
      ios: "https://apps.apple.com/app/xbox/id736179781",
      pc: "https://apps.microsoft.com/detail/9mv0b5hzvk9z"
    }
  },
  {
    id: "chesscom",
    name: "Chess.com",
    category: "gaming",
    categoryLabel: "Gaming",
    tagline: "Play chess online with millions",
    description: "Master chess with interactive lessons, puzzles, tactical bots, and live multiplayer tournaments worldwide.",
    icon: "https://cdn.simpleicons.org/chessdotcom/ffffff",
    iconBg: "#7fa650",
    color: "#7fa650",
    website: "https://www.chess.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.chess",
      ios: "https://apps.apple.com/app/chess-play-learn/id329218549",
      pc: "https://www.chess.com"
    }
  },
  {
    id: "gog",
    name: "GOG.com",
    category: "gaming",
    categoryLabel: "Gaming",
    tagline: "DRM-free PC games and classics",
    description: "Digital game distribution platform focused on DRM-free classics, indie gems, and modern masterpieces.",
    icon: "https://cdn.simpleicons.org/gogdotcom/ffffff",
    iconBg: "#86328a",
    color: "#86328a",
    website: "https://www.gog.com",
    downloads: {
      android: "https://www.gog.com",
      ios: "https://www.gog.com",
      pc: "https://www.gog.com/galaxy"
    }
  },
  {
    id: "minecraft",
    name: "Minecraft",
    category: "gaming",
    categoryLabel: "Gaming",
    tagline: "Build, explore, and survive in blocks",
    description: "Iconic block-building sandbox game where players craft structures, explore biomes, and survive against monsters.",
    icon: "https://cdn.simpleicons.org/minecraft/ffffff",
    iconBg: "#528e38",
    color: "#528e38",
    website: "https://www.minecraft.net",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.mojang.minecraftpe",
      ios: "https://apps.apple.com/app/minecraft/id479516143",
      pc: "https://www.minecraft.net/download"
    }
  },

  // =================== SHOPPING & E-COMMERCE ===================
  {
    id: "amazon",
    name: "Amazon",
    category: "shopping",
    categoryLabel: "Shopping",
    tagline: "Spend less, smile more with fast delivery",
    description: "Online marketplace with millions of products, electronics, groceries, fashion, and fast Prime shipping.",
    icon: "https://cdn.simpleicons.org/amazon/ffffff",
    iconBg: "#ff9900",
    color: "#ff9900",
    website: "https://www.amazon.com",
    trending: true,
    featured: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.amazon.mShop.android.shopping",
      ios: "https://apps.apple.com/app/amazon-shopping/id297606951",
      pc: "https://apps.microsoft.com/detail/9p8b9w15bv97"
    }
  },
  {
    id: "ebay",
    name: "eBay",
    category: "shopping",
    categoryLabel: "Shopping",
    tagline: "Buy, sell, and discover unique deals",
    description: "Global online auction and shopping website where people buy and sell goods and collector items worldwide.",
    icon: "https://cdn.simpleicons.org/ebay/ffffff",
    iconBg: "#e53238",
    color: "#e53238",
    website: "https://www.ebay.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.ebay.mobile",
      ios: "https://apps.apple.com/app/ebay-buy-sell-save/id282614216",
      pc: "https://www.ebay.com"
    }
  },
  {
    id: "aliexpress",
    name: "AliExpress",
    category: "shopping",
    categoryLabel: "Shopping",
    tagline: "Smarter shopping, better living",
    description: "Massive online retail platform offering factory-direct prices across millions of gadgets, fashion, and home goods.",
    icon: "https://cdn.simpleicons.org/aliexpress/ffffff",
    iconBg: "#ff4747",
    color: "#ff4747",
    website: "https://www.aliexpress.com",
    trending: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.alibaba.aliexpresshd",
      ios: "https://apps.apple.com/app/aliexpress-shopping-app/id436672029",
      pc: "https://www.aliexpress.com"
    }
  },
  {
    id: "walmart",
    name: "Walmart",
    category: "shopping",
    categoryLabel: "Shopping",
    tagline: "Save money, live better",
    description: "Shop everyday low prices for groceries, electronics, pharmacy items, apparel, and get same-day pickup.",
    icon: "https://cdn.simpleicons.org/walmart/ffffff",
    iconBg: "#0071ce",
    color: "#0071ce",
    website: "https://www.walmart.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.walmart.android",
      ios: "https://apps.apple.com/app/walmart-shopping-grocery/id338135380",
      pc: "https://www.walmart.com"
    }
  },
  {
    id: "etsy",
    name: "Etsy",
    category: "shopping",
    categoryLabel: "Shopping",
    tagline: "Handmade, vintage, and creative goods",
    description: "Global online marketplace for unique, handcrafted pieces, custom gifts, vintage jewelry, and decor.",
    icon: "https://cdn.simpleicons.org/etsy/ffffff",
    iconBg: "#f1641e",
    color: "#f1641e",
    website: "https://www.etsy.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.etsy.android",
      ios: "https://apps.apple.com/app/etsy-custom-creative-goods/id477128284",
      pc: "https://www.etsy.com"
    }
  },
  {
    id: "temu",
    name: "Temu",
    category: "shopping",
    categoryLabel: "Shopping",
    tagline: "Shop like a billionaire at low prices",
    description: "E-commerce marketplace offering heavily discounted prices on consumer electronics, clothing, and home accessories.",
    icon: "https://cdn.simpleicons.org/target/ffffff",
    iconBg: "#fb7701",
    color: "#fb7701",
    website: "https://www.temu.com",
    trending: true,
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.einnovation.temu",
      ios: "https://apps.apple.com/app/temu-shop-like-a-billionaire/id1641486558",
      pc: "https://www.temu.com"
    }
  },
  {
    id: "shein",
    name: "SHEIN",
    category: "shopping",
    categoryLabel: "Shopping",
    tagline: "Trending fashion and lifestyle apparel",
    description: "Global e-retailer providing trendy women's, men's, and kids' clothing, shoes, beauty items, and accessories.",
    icon: "https://cdn.simpleicons.org/zara/ffffff",
    iconBg: "#000000",
    color: "#000000",
    website: "https://www.shein.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.zzkko",
      ios: "https://apps.apple.com/app/shein-shopping-online/id878577184",
      pc: "https://www.shein.com"
    }
  },
  {
    id: "target",
    name: "Target",
    category: "shopping",
    categoryLabel: "Shopping",
    tagline: "Expect more, pay less",
    description: "American retail store chain providing household essentials, trendy furniture, groceries, and electronics.",
    icon: "https://cdn.simpleicons.org/target/ffffff",
    iconBg: "#cc0000",
    color: "#cc0000",
    website: "https://www.target.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.target.ui",
      ios: "https://apps.apple.com/app/target/id297430070",
      pc: "https://www.target.com"
    }
  },
  {
    id: "bestbuy",
    name: "Best Buy",
    category: "shopping",
    categoryLabel: "Shopping",
    tagline: "Expert tech deals and electronics",
    description: "Leading consumer electronics destination for computers, appliances, cell phones, TVs, and Geek Squad services.",
    icon: "https://cdn.simpleicons.org/bestbuy/ffffff",
    iconBg: "#0046be",
    color: "#0046be",
    website: "https://www.bestbuy.com",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.bestbuy.android",
      ios: "https://apps.apple.com/app/best-buy/id314855255",
      pc: "https://www.bestbuy.com"
    }
  },
  {
    id: "shopify",
    name: "Shop (by Shopify)",
    category: "shopping",
    categoryLabel: "Shopping",
    tagline: "Track deliveries & discover independent brands",
    description: "Track all online deliveries automatically, pay securely with Shop Pay, and shop from local indie stores.",
    icon: "https://cdn.simpleicons.org/shopify/ffffff",
    iconBg: "#96bf48",
    color: "#96bf48",
    website: "https://shop.app",
    downloads: {
      android: "https://play.google.com/store/apps/details?id=com.shopify.arrive",
      ios: "https://apps.apple.com/app/shop-package-order-tracker/id1223471316",
      pc: "https://shop.app"
    }
  },
  {
    "id": "viber",
    "name": "Rakuten Viber",
    "category": "social",
    "categoryLabel": "Social Media",
    "tagline": "Free and secure calls and messages",
    "description": "Connect with anyone, anywhere with crystal-clear voice and video calls and end-to-end encryption.",
    "icon": "https://cdn.simpleicons.org/viber/ffffff",
    "iconBg": "#7360f2",
    "color": "#7360f2",
    "website": "https://www.viber.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.viber.voip",
      "ios": "https://apps.apple.com/app/viber-messenger-chats-calls/id382617920",
      "pc": "https://www.viber.com/download/"
    }
  },
  {
    "id": "line",
    "name": "LINE Messenger",
    "category": "social",
    "categoryLabel": "Social Media",
    "tagline": "Free messages, calls, and stickers",
    "description": "Popular messaging app offering voice/video calls, funny stickers, timelines, and games.",
    "icon": "https://cdn.simpleicons.org/line/ffffff",
    "iconBg": "#00c300",
    "color": "#00c300",
    "website": "https://line.me",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=jp.naver.line.android",
      "ios": "https://apps.apple.com/app/line/id443904275",
      "pc": "https://line.me/download"
    }
  },
  {
    "id": "clubhouse",
    "name": "Clubhouse",
    "category": "social",
    "categoryLabel": "Social Media",
    "tagline": "Social audio conversations and drop-in rooms",
    "description": "Drop in with friends, share stories, debate thoughts, and listen to voice conversations globally.",
    "icon": "https://cdn.simpleicons.org/clubhouse/ffffff",
    "iconBg": "#e8b839",
    "color": "#e8b839",
    "website": "https://www.clubhouse.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.clubhouse.app",
      "ios": "https://apps.apple.com/app/clubhouse/id1503133294",
      "pc": "https://www.clubhouse.com"
    }
  },
  {
    "id": "medium",
    "name": "Medium",
    "category": "social",
    "categoryLabel": "Social Media",
    "tagline": "Where good ideas find you",
    "description": "Read, write, and deepen your understanding of tech, business, life, and science articles.",
    "icon": "https://cdn.simpleicons.org/medium/ffffff",
    "iconBg": "#000000",
    "color": "#000000",
    "website": "https://medium.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.medium.reader",
      "ios": "https://apps.apple.com/app/medium-read-write-stories/id828256236",
      "pc": "https://medium.com"
    }
  },
  {
    "id": "bluesky",
    "name": "Bluesky Social",
    "category": "social",
    "categoryLabel": "Social Media",
    "tagline": "Decentralized open social networking",
    "description": "Open social network powered by the AT Protocol, offering customizable feeds and user sovereignty.",
    "icon": "https://cdn.simpleicons.org/bluesky/ffffff",
    "iconBg": "#1185fe",
    "color": "#1185fe",
    "website": "https://bsky.app",
    "trending": true,
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=xyz.blueskyweb.app",
      "ios": "https://apps.apple.com/app/bluesky-social/id6444265621",
      "pc": "https://bsky.app"
    }
  },
  {
    "id": "deezer",
    "name": "Deezer",
    "category": "entertainment",
    "categoryLabel": "Entertainment",
    "tagline": "Flow into millions of high-fidelity songs",
    "description": "Personalized music streaming platform with HiFi FLAC audio, curated playlists, and podcast discovery.",
    "icon": "https://cdn.simpleicons.org/deezer/ffffff",
    "iconBg": "#a238ff",
    "color": "#a238ff",
    "website": "https://www.deezer.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=deezer.android.app",
      "ios": "https://apps.apple.com/app/deezer-music-podcast-player/id329464631",
      "pc": "https://www.deezer.com/download"
    }
  },
  {
    "id": "tidal",
    "name": "TIDAL",
    "category": "entertainment",
    "categoryLabel": "Entertainment",
    "tagline": "Master-quality audio streaming",
    "description": "High-fidelity sound, master-quality audio recordings, expertly crafted playlists, and original videos.",
    "icon": "https://cdn.simpleicons.org/tidal/ffffff",
    "iconBg": "#000000",
    "color": "#00ffff",
    "website": "https://tidal.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.aspiro.tidal",
      "ios": "https://apps.apple.com/app/tidal-music/id913943275",
      "pc": "https://tidal.com/download"
    }
  },
  {
    "id": "hbomax",
    "name": "Max (HBO)",
    "category": "entertainment",
    "categoryLabel": "Entertainment",
    "tagline": "The one to watch for HBO & Warner Bros",
    "description": "Stream premium HBO originals, Warner Bros films, Max Originals, and DC universe blockbusters.",
    "icon": "https://cdn.simpleicons.org/max/ffffff",
    "iconBg": "#002be7",
    "color": "#002be7",
    "website": "https://www.max.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.wbd.stream",
      "ios": "https://apps.apple.com/app/max-stream-hbo-tv-movies/id971265422",
      "pc": "https://www.max.com"
    }
  },
  {
    "id": "dailymotion",
    "name": "Dailymotion",
    "category": "entertainment",
    "categoryLabel": "Entertainment",
    "tagline": "Video exploration and trending topics",
    "description": "Watch trending news, sports highlights, music videos, and creative indie entertainment worldwide.",
    "icon": "https://cdn.simpleicons.org/dailymotion/ffffff",
    "iconBg": "#0066dc",
    "color": "#0066dc",
    "website": "https://www.dailymotion.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.dailymotion.dailymotion",
      "ios": "https://apps.apple.com/app/dailymotion-video-app/id336978041",
      "pc": "https://www.dailymotion.com"
    }
  },
  {
    "id": "shazam",
    "name": "Shazam",
    "category": "entertainment",
    "categoryLabel": "Entertainment",
    "tagline": "Identify songs playing around you in seconds",
    "description": "Recognize music with a single tap, find lyrics, and stream tracks immediately via your favorite service.",
    "icon": "https://cdn.simpleicons.org/shazam/ffffff",
    "iconBg": "#0088ff",
    "color": "#0088ff",
    "website": "https://www.shazam.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.shazam.android",
      "ios": "https://apps.apple.com/app/shazam-music-discovery/id284993459",
      "pc": "https://apps.microsoft.com/detail/9wzdncrfj406"
    }
  },
  {
    "id": "leonardo-ai",
    "name": "Leonardo.ai",
    "category": "ai",
    "categoryLabel": "AI Tools",
    "tagline": "Generative AI for games, assets & art",
    "description": "Produce stunning high-quality game assets, fantasy art, concept design, and marketing visuals with AI.",
    "icon": "https://cdn.simpleicons.org/affinitydesigner/ffffff",
    "iconBg": "#5c24ff",
    "color": "#5c24ff",
    "website": "https://leonardo.ai",
    "trending": true,
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=ai.leonardo.mobile",
      "ios": "https://apps.apple.com/app/leonardo-ai-art-generator/id6446798744",
      "pc": "https://leonardo.ai"
    }
  },
  {
    "id": "phind",
    "name": "Phind",
    "category": "ai",
    "categoryLabel": "AI Tools",
    "tagline": "Intelligent search engine for developers",
    "description": "Instant developer answers, debugging help, and code snippets linked with exact documentation sources.",
    "icon": "https://cdn.simpleicons.org/codefactor/ffffff",
    "iconBg": "#111827",
    "color": "#38bdf8",
    "website": "https://www.phind.com",
    "downloads": {
      "android": "https://www.phind.com",
      "ios": "https://www.phind.com",
      "pc": "https://www.phind.com"
    }
  },
  {
    "id": "synthesia",
    "name": "Synthesia",
    "category": "ai",
    "categoryLabel": "AI Tools",
    "tagline": "AI video generation with realistic avatars",
    "description": "Create studio-quality training, explainer, and corporate videos from text with hyper-realistic AI presenters.",
    "icon": "https://cdn.simpleicons.org/airplayvideo/ffffff",
    "iconBg": "#3b82f6",
    "color": "#3b82f6",
    "website": "https://www.synthesia.io",
    "downloads": {
      "android": "https://www.synthesia.io",
      "ios": "https://www.synthesia.io",
      "pc": "https://www.synthesia.io"
    }
  },
  {
    "id": "gamma-app",
    "name": "Gamma",
    "category": "ai",
    "categoryLabel": "AI Tools",
    "tagline": "Generate beautiful presentations and docs with AI",
    "description": "A new medium for presenting ideas. Powered by AI, create polished slide decks and webpages in seconds.",
    "icon": "https://cdn.simpleicons.org/sparkfun/ffffff",
    "iconBg": "#8b5cf6",
    "color": "#8b5cf6",
    "website": "https://gamma.app",
    "trending": true,
    "downloads": {
      "android": "https://gamma.app",
      "ios": "https://gamma.app",
      "pc": "https://gamma.app"
    }
  },
  {
    "id": "v0-dev",
    "name": "v0 by Vercel",
    "category": "ai",
    "categoryLabel": "AI Tools",
    "tagline": "Generative UI system powered by AI",
    "description": "Generate copy-paste friendly modern React, Tailwind CSS, and Shadcn UI components from simple natural text.",
    "icon": "https://cdn.simpleicons.org/vercel/ffffff",
    "iconBg": "#000000",
    "color": "#000000",
    "website": "https://v0.dev",
    "downloads": {
      "android": "https://v0.dev",
      "ios": "https://v0.dev",
      "pc": "https://v0.dev"
    }
  },
  {
    "id": "airtable",
    "name": "Airtable",
    "category": "productivity",
    "categoryLabel": "Productivity",
    "tagline": "Connected apps and relational database",
    "description": "Combines the simplicity of a spreadsheet with the power of a relational database for custom team workflows.",
    "icon": "https://cdn.simpleicons.org/airtable/ffffff",
    "iconBg": "#18bfff",
    "color": "#18bfff",
    "website": "https://airtable.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.formagrid.airtable",
      "ios": "https://apps.apple.com/app/airtable/id914172636",
      "pc": "https://airtable.com/downloads"
    }
  },
  {
    "id": "miro",
    "name": "Miro",
    "category": "productivity",
    "categoryLabel": "Productivity",
    "tagline": "Visual collaboration and whiteboard workspace",
    "description": "Infinite collaborative canvas for mind mapping, brainstorming, sprint planning, and architectural diagrams.",
    "icon": "https://cdn.simpleicons.org/miro/ffffff",
    "iconBg": "#ffd02f",
    "color": "#ffd02f",
    "website": "https://miro.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.realtimeboard",
      "ios": "https://apps.apple.com/app/miro-visual-collaboration/id1009009904",
      "pc": "https://miro.com/apps/"
    }
  },
  {
    "id": "clickup",
    "name": "ClickUp",
    "category": "productivity",
    "categoryLabel": "Productivity",
    "tagline": "One app to replace them all",
    "description": "Comprehensive productivity platform with tasks, docs, goals, whiteboards, chat, and automated sprints.",
    "icon": "https://cdn.simpleicons.org/clickup/ffffff",
    "iconBg": "#7b68ee",
    "color": "#7b68ee",
    "website": "https://clickup.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=co.clickup.mobile",
      "ios": "https://apps.apple.com/app/clickup-manage-teams-tasks/id1593597659",
      "pc": "https://clickup.com/apps"
    }
  },
  {
    "id": "linear",
    "name": "Linear",
    "category": "productivity",
    "categoryLabel": "Productivity",
    "tagline": "The issue tracker built for high-performance teams",
    "description": "Streamline software projects, sprints, tasks, and bug tracking with lightning-fast keyboard-first design.",
    "icon": "https://cdn.simpleicons.org/linear/ffffff",
    "iconBg": "#5e6ad2",
    "color": "#5e6ad2",
    "website": "https://linear.app",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=app.linear",
      "ios": "https://apps.apple.com/app/linear-mobile/id6443652876",
      "pc": "https://linear.app/download"
    }
  },
  {
    "id": "loom",
    "name": "Loom",
    "category": "productivity",
    "categoryLabel": "Productivity",
    "tagline": "Video messages for async communication",
    "description": "Record quick screen and camera videos to share instant walkthroughs and cut down unnecessary meetings.",
    "icon": "https://cdn.simpleicons.org/loom/ffffff",
    "iconBg": "#625df5",
    "color": "#625df5",
    "website": "https://www.loom.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.loom.android",
      "ios": "https://apps.apple.com/app/loom-screen-recorder-video/id1474480829",
      "pc": "https://www.loom.com/desktop"
    }
  },
  {
    "id": "skillshare",
    "name": "Skillshare",
    "category": "education",
    "categoryLabel": "Education",
    "tagline": "Online classes in illustration, design & animation",
    "description": "Explore creativity with thousands of inspiring classes in illustration, photography, UI design, and freelance craft.",
    "icon": "https://cdn.simpleicons.org/skillshare/ffffff",
    "iconBg": "#00ff84",
    "color": "#00ff84",
    "website": "https://www.skillshare.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.skillshare.Skillshare",
      "ios": "https://apps.apple.com/app/skillshare-online-classes/id916865862",
      "pc": "https://www.skillshare.com"
    }
  },
  {
    "id": "datacamp",
    "name": "DataCamp",
    "category": "education",
    "categoryLabel": "Education",
    "tagline": "Learn data science, Python, and AI",
    "description": "Master essential data science, SQL, machine learning, and business analytics skills through interactive coding.",
    "icon": "https://cdn.simpleicons.org/datacamp/ffffff",
    "iconBg": "#03ef62",
    "color": "#03ef62",
    "website": "https://www.datacamp.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.datacamp",
      "ios": "https://apps.apple.com/app/datacamp-learn-data-analysis/id1263413087",
      "pc": "https://www.datacamp.com"
    }
  },
  {
    "id": "memrise",
    "name": "Memrise",
    "category": "education",
    "categoryLabel": "Education",
    "tagline": "Language learning with native video clips",
    "description": "Learn how real native speakers talk with thousands of real-life video clips and spaced repetition drills.",
    "icon": "https://cdn.simpleicons.org/memrise/ffffff",
    "iconBg": "#ffb400",
    "color": "#ffb400",
    "website": "https://www.memrise.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.memrise.android.memrisecompanion",
      "ios": "https://apps.apple.com/app/memrise-easy-language-learning/id635966718",
      "pc": "https://www.memrise.com"
    }
  },
  {
    "id": "brilliant",
    "name": "Brilliant.org",
    "category": "education",
    "categoryLabel": "Education",
    "tagline": "Interactive math, science, and computer science",
    "description": "Master foundational concepts through guided problem-solving, interactive simulations, and intuitive math thinking.",
    "icon": "https://cdn.simpleicons.org/sparkpost/ffffff",
    "iconBg": "#111827",
    "color": "#f59e0b",
    "website": "https://brilliant.org",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=org.brilliant.android",
      "ios": "https://apps.apple.com/app/brilliant-solve-learn-grow/id913335252",
      "pc": "https://brilliant.org"
    }
  },
  {
    "id": "ubisoft",
    "name": "Ubisoft Connect",
    "category": "gaming",
    "categoryLabel": "Gaming",
    "tagline": "Ecosystem of Ubisoft game services",
    "description": "Access Assassin's Creed, Far Cry, Rainbow Six, earn rewards, cross-progression, and join friendly challenges.",
    "icon": "https://cdn.simpleicons.org/ubisoft/ffffff",
    "iconBg": "#0070ff",
    "color": "#0070ff",
    "website": "https://ubisoftconnect.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.ubisoft.uplay",
      "ios": "https://apps.apple.com/app/ubisoft-connect/id1535496677",
      "pc": "https://ubisoftconnect.com"
    }
  },
  {
    "id": "riotgames",
    "name": "Riot Games & Client",
    "category": "gaming",
    "categoryLabel": "Gaming",
    "tagline": "Home of League of Legends & Valorant",
    "description": "Premier competitive esports developer behind League of Legends, Valorant, TFT, and Teamfight Tactics.",
    "icon": "https://cdn.simpleicons.org/riotgames/ffffff",
    "iconBg": "#d32936",
    "color": "#d32936",
    "website": "https://www.riotgames.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.riotgames.mobile.leagueconnect",
      "ios": "https://apps.apple.com/app/riot-mobile/id1077150310",
      "pc": "https://www.riotgames.com"
    }
  },
  {
    "id": "battlenet",
    "name": "Battle.net",
    "category": "gaming",
    "categoryLabel": "Gaming",
    "tagline": "Blizzard and Activision gaming platform",
    "description": "Play Call of Duty, World of Warcraft, Overwatch 2, Diablo, and connect with global gaming companions.",
    "icon": "https://cdn.simpleicons.org/battledotnet/ffffff",
    "iconBg": "#0074e0",
    "color": "#0074e0",
    "website": "https://battle.net",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.blizzard.bna",
      "ios": "https://apps.apple.com/app/battle-net/id1241040030",
      "pc": "https://www.blizzard.com/apps/battle.net/desktop"
    }
  },
  {
    "id": "geforcenow",
    "name": "NVIDIA GeForce NOW",
    "category": "gaming",
    "categoryLabel": "Gaming",
    "tagline": "Cloud gaming on RTX 4080 servers",
    "description": "Stream games you already own from Steam, Epic, and Ubisoft across low-end laptops, Macs, TVs, and mobile.",
    "icon": "https://cdn.simpleicons.org/nvidia/ffffff",
    "iconBg": "#76b900",
    "color": "#76b900",
    "website": "https://www.nvidia.com/geforce-now/",
    "trending": true,
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.nvidia.geforcenow",
      "ios": "https://play.geforcenow.com",
      "pc": "https://www.nvidia.com/geforce-now/download/"
    }
  },
  {
    "id": "ikea",
    "name": "IKEA",
    "category": "shopping",
    "categoryLabel": "Shopping",
    "tagline": "Affordable home furnishings & design",
    "description": "Browse stylish furniture, home decor, kitchenware, AR room planning, and click-and-collect ordering.",
    "icon": "https://cdn.simpleicons.org/ikea/ffffff",
    "iconBg": "#0058a3",
    "color": "#ffdb00",
    "website": "https://www.ikea.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.ingka.ikea.app",
      "ios": "https://apps.apple.com/app/ikea/id1452164827",
      "pc": "https://www.ikea.com"
    }
  },
  {
    "id": "uber-eats",
    "name": "Uber Eats",
    "category": "shopping",
    "categoryLabel": "Shopping",
    "tagline": "Food delivery from local favorites",
    "description": "Order delivery from your favorite restaurants, grocers, and convenience stores with live courier tracking.",
    "icon": "https://cdn.simpleicons.org/ubereats/ffffff",
    "iconBg": "#06c167",
    "color": "#06c167",
    "website": "https://www.ubereats.com",
    "trending": true,
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.ubercab.eats",
      "ios": "https://apps.apple.com/app/uber-eats-food-delivery/id1058959277",
      "pc": "https://www.ubereats.com"
    }
  },
  {
    "id": "doordash",
    "name": "DoorDash",
    "category": "shopping",
    "categoryLabel": "Shopping",
    "tagline": "Delivery & pickup from restaurants & stores",
    "description": "Get food, drinks, pet essentials, and retail goods delivered straight to your door in under an hour.",
    "icon": "https://cdn.simpleicons.org/doordash/ffffff",
    "iconBg": "#ff3008",
    "color": "#ff3008",
    "website": "https://www.doordash.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.dd.dashdash",
      "ios": "https://apps.apple.com/app/doordash-food-delivery/id719972451",
      "pc": "https://www.doordash.com"
    }
  },
  {
    "id": "instacart",
    "name": "Instacart",
    "category": "shopping",
    "categoryLabel": "Shopping",
    "tagline": "Fresh grocery delivery & pickup",
    "description": "Shop supermarket essentials online from local grocers and get them delivered to your doorstep quickly.",
    "icon": "https://cdn.simpleicons.org/instacart/ffffff",
    "iconBg": "#003d29",
    "color": "#ff8200",
    "website": "https://www.instacart.com",
    "downloads": {
      "android": "https://play.google.com/store/apps/details?id=com.instacart.client",
      "ios": "https://apps.apple.com/app/instacart-grocery-delivery/id545599290",
      "pc": "https://www.instacart.com"
    }
  }
];


// Provide categories summary
const categoriesList = [
  { id: "all", name: "All Apps", icon: "bi-grid-fill" },
  { id: "social", name: "Social Media", icon: "bi-people-fill" },
  { id: "entertainment", name: "Entertainment", icon: "bi-film" },
  { id: "ai", name: "AI Tools", icon: "bi-cpu-fill" },
  { id: "productivity", name: "Productivity", icon: "bi-briefcase-fill" },
  { id: "education", name: "Education", icon: "bi-mortarboard-fill" },
  { id: "gaming", name: "Gaming", icon: "bi-controller" },
  { id: "shopping", name: "Shopping", icon: "bi-bag-fill" }
];
