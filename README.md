# VRC Media Bridge

VRC Media Bridge lets you play videos from supported sites directly in VRChat. It grabs the direct video stream (usually `.m3u8` or `.mp4`) and redirects to it, making it easy to watch in-world.

## Features

- Fetches the direct stream link and redirects to it
- Web UI for easily prepending the VRChat prefix
- Supports both general and NSFW platforms

# Supported Platforms

**🟢 General:** `X (Twitter)` `Reddit`

**🔴 NSFW:** `Pornhub` `xHamster` `xVideos` `XNXX` `YouPorn` `Rule34 Video`

NSFW platforms are only enabled if you set the environment variable:

```
NUXT_PUBLIC_ENABLE_NSFW=true
```
