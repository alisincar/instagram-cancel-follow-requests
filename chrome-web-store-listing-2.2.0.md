# Chrome Web Store Listing - 2.2.0

## Name
Unfollow Manager (Sequential & Control)

## Short Description
Cancels pending Instagram follow requests one by one with logs, recovery, and controlled background flow.

## Detailed Description
Unfollow Manager is a Chrome extension built to cancel pending Instagram follow requests one by one in a controlled and sequential flow.

This release focuses on stability, visibility, and long-run control instead of raw speed.

Key capabilities:

- Processes pending follow requests profile by profile in sequence
- Supports background tab management for long-running sessions
- Tracks progress and logs during large runs
- Preserves recent session state and activity history
- Attempts to recover and continue after interruptions
- Skips previously resolved profiles with memory support
- Supports multiple Instagram interface languages with advanced button-label settings

Usage options:

- Read profile links from the current Instagram page
- Upload a list from an Instagram archive export
- Run in background mode or visible tab mode
- Use automatic action mode or tab-open-only mode

This extension is designed for users who need a more controlled way to manage large numbers of pending follow requests.

## Disclaimer
This extension is provided as-is. All actions performed with it, and any account, platform, or policy-related consequences, are solely the responsibility of the user. The developer accepts no liability for outcomes resulting from its use.

## What's New in 2.2.0
- Improved persistent progress, logs, and last-session visibility
- Stronger recovery behavior for interrupted long-running sessions
- Tightened processing flow around a single active profile model
- Removed unnecessary profile-image handling
- Added direct log access from the main screen
- Improved log scrolling behavior
- Rebalanced delays and round-break timing
- Added short pacing pauses inside rounds
- Added footer promo area with multilingual content

## Permissions Justification

### scripting
Used to run the required page-level checks and button interactions on Instagram pages.

### tabs
Used to create, monitor, and close processing tabs.

### storage
Used to save settings, memory, logs, progress, and recent session data.

### alarms
Used for wait timing, round breaks, pacing pauses, and recovery scheduling.

### activeTab
Used to start link extraction from the tab currently opened by the user.

### Host Permissions
The extension only runs on `instagram.com` and its subdomains.

## Privacy Summary
- The extension only runs on relevant Instagram pages
- Uploaded or extracted list data is used only for the automation flow
- Settings, logs, memory, and recent session data are stored in browser storage
- The extension is not designed to send user lists or logs to an external server
- The extension does not request access outside the domains required for its function

## Release Notes
Version 2.2.0 focuses on reliability, progress tracking, log access, memory behavior, interruption recovery, and large-list processing flow.

## Alternative Short Description
Controlled Instagram pending-request cancellation with logs, recovery, memory, and background processing support.
