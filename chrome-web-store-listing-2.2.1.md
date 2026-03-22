# Chrome Web Store Listing - 2.2.1

## Name
Instagram Unfollower & Pending Request Canceler

## Short Description
Efficiently cancel pending Instagram follow requests and unfollow profiles automatically with human-like delays. Bulk management tool.

## Detailed Description
Instagram Unfollower & Pending Request Canceler is your ultimate cleaning tool for Instagram. Manage your account activity by automatically canceling pending follow requests and unfollowing non-followers in a controlled way.

Avoid manual clicking! This extension handles massive lists profile-by-profile with built-in delays to mimic human behavior.

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

## What's New in 2.2.1
- Prevented unnecessary click-delay when a profile already shows the Follow button
- Added a button-readiness probe before scheduling click-delay in auto mode
- Improved handling for late-rendered Instagram action buttons
- Preserved log scroll position while reading earlier entries
- Refined already-resolved profile detection before processing begins

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
Version 2.2.1 focuses on reducing unnecessary waiting, improving already-resolved profile detection, and making live log review easier during long sessions.

## Keywords
- Instagram Unfollower
- Cancel Pending Request
- Bulk Unfollow
- Instagram Helper
- Auto Cancel Request
- Instagram Clean
- Auto Unfollow
- Controlled Human-like Delays
- Manage Following
- Instagram Automation

## Alternative Short Description
Controlled Instagram pending-request cancellation with logs, recovery, memory, and background processing support.
