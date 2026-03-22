# Unfollow Manager (Sequential & Control)

Unfollow Manager is a Chrome extension for processing pending Instagram follow requests in a controlled, sequential flow.

It is built for long lists, visibility during runtime, and safer session management than a naive bulk-click approach.

## Highlights

- Processes profiles one by one instead of opening chaotic parallel flows
- Supports background-run behavior for large pending-request lists
- Keeps progress, logs, and last-session visibility available in the popup
- Tries to recover cleanly after interruptions
- Skips already-resolved profiles when possible
- Supports multiple UI languages through configurable button labels

## Why This Extension Exists

Managing large pending follow-request lists manually is slow and error-prone. This project focuses on:

- predictable sequencing
- session recovery
- visibility through runtime logs
- reduced wasted time on already-resolved profiles

The goal is control first, not blind speed.

## Core Flow

1. Open the extension popup.
2. Read profile URLs from Instagram or load an exported list.
3. Start automatic processing in visible or background mode.
4. Monitor progress and logs at any time from the popup.

## Main Capabilities

- Persistent progress tracking across popup reopen events
- Runtime log viewer inside the main popup UI
- Memory support for previously resolved profiles
- Recovery logic for interrupted or partially completed runs
- Adaptive pacing, round handling, and retry behavior
- Chrome MV3 service-worker based background control

## Project Structure

- `background.js`: queue control, scheduling, persistence, alarms, recovery
- `content.js`: page-level button detection and profile processing logic
- `popup.html`: extension UI
- `popup.js`: popup state, logs, progress rendering, settings, translations
- `manifest.json`: MV3 configuration

## Local Development

1. Clone the repository.
2. Open `chrome://extensions/`.
3. Enable Developer Mode.
4. Choose `Load unpacked`.
5. Select this project folder.

## Packaging

To create the Chrome Web Store package:

```bash
npm run package:cws
```

Generated archives are written to the `release/` directory.

## Permissions

- `scripting`: used for page checks and interactions on Instagram
- `tabs`: used to open, monitor, and close processing tabs
- `storage`: used for settings, logs, progress, and memory
- `alarms`: used for pacing, retries, and recovery timing
- `activeTab`: used to start extraction from the current Instagram tab

## Disclaimer

This extension is provided as-is. Any action performed with it, and any resulting account, platform, or policy consequence, is solely the responsibility of the user. The developer accepts no liability for outcomes resulting from its use.

## Related Links

This project is connected to the broader product and software work of our team:

- [Mozared](https://mozared.com) for product, community, and platform initiatives
- [Mozared Online](https://mozared.online) as our software company and development studio
- [MeetupExpress](https://meetupexpress.com) for related event and growth-focused product work

## Support

If you are adapting or extending this project, keep the processing model sequential and observable. Most reliability problems in this category come from overlapping tab actions, weak state persistence, and poor interruption handling.
