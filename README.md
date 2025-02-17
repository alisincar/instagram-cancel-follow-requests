# Instagram Unfollow Manager (Sequential & Control)

**Unfollow Manager** is a Chrome extension designed to manage unfollow operations sequentially. It offers detailed logs, progress reports, and start/stop controls. The extension captures the HTML of the active tab and processes the unfollow operations in an offscreen DOM, ensuring that even if you switch tabs, the process continues uninterrupted.

## Features

- **Sequential Unfollow Operations:** Process unfollow tasks one by one in a controlled sequence.
- **Batch Processing:** Automatically starts the next batch after the current one finishes.
- **Real-time Logging and Progress Reporting:** View detailed logs and progress updates in the popup interface.
- **Offscreen DOM Processing:** Captures the active tab's HTML and processes it offscreen, keeping the operation running even if the user navigates away.
- **Customizable Settings:** Easily customize button texts (e.g., "Request Sent", "Follow", "Unfollow") to suit your preferences.
- **Start/Stop Control:** Easily start or stop the process with intuitive controls.

## Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/alisincar/instagram-cancel-follow-requests.git
    ```

2. **Load the Extension in Chrome:**

    - Open Chrome and navigate to `chrome://extensions`.
    - Enable **Developer mode** in the top-right corner.
    - Click on **Load unpacked** and select the project folder.

## Usage

1. Click the extension icon in the Chrome toolbar to open the popup interface.
2. Configure the button texts and settings in the popup, then click **Save Settings**.
3. Click **Start Batch** to capture the active tab's HTML and begin processing URLs in batches.
4. As the unfollow operations are processed (across multiple tabs), you will see live log updates and progress reports.
5. Once a batch completes, the next batch will automatically start after a short delay.
6. To stop the process at any time, click **Stop**.

## File Structure

- **manifest.json:** Contains metadata, permissions, background service worker, content scripts, and offscreen resource definitions.
- **popup.html & popup.js:** Provide the user interface and manage interactions in the popup.
- **background.js:** Handles batch processing, offscreen DOM management, and inter-script messaging.
- **content.js:** Runs on target pages to facilitate the unfollow process and communicate with the background script.
- **offscreen.html & offscreen.js:** Handle the offscreen processing of captured HTML for executing unfollow operations.

## Known Issues / Limitations

- The extension utilizes the Offscreen API, which requires Chrome version 109 or later.
- If the target website's DOM structure changes, you may need to update the CSS selectors accordingly.
- For large-scale unfollow operations, you might need to adjust the batch size for optimal performance.

## Contributing

Contributions are welcome! If you encounter issues, have feature requests, or want to contribute improvements, please open an [issue](https://github.com/alisincar/instagram-cancel-follow-requests/issues) or submit a pull request. For major changes, please open an issue first to discuss your ideas.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

Thank you to everyone who has contributed to this project. The support of the open source community makes projects like this possible.
