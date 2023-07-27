# Evermark- Note Taking Website

Evermark is a note-taking website developed using Node.js, EJS, MongoDB, and Express. It allows users to create, read, update, and delete notes seamlessly. Additionally, the website features a powerful search notes feature to help users find specific notes quickly. The application also ensures secure user authentication using both local signup/login and Passport Google authentication.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (https://nodejs.org)
- MongoDB (https://www.mongodb.com)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MayankSethi27/EverMark.git
   cd evermark
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root of the project and add the following:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/evermark
   ```

   Note: Modify the `PORT` and `MONGODB_URI` values as needed.

4. Run the application:

   ```bash
   npm start
   ```

   The website will be accessible at `http://localhost:3000`.

## Features

- **User Authentication:** Users can sign up and log via Gmail to access their notes securely.
- **Create Note:** Users can create new notes with a title and content.
- **Read Note:** Users can view all their existing notes and read individual notes in detail.
- **Update Note:** Users can edit the content of their existing notes.
- **Delete Note:** Users can delete notes they no longer need.
- **Search Notes:** The powerful search feature allows users to find notes based on keywords or phrases.

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Sign up for a new account or log in with your existing credentials.
3. Create new notes by clicking on the "New Note" button.
4. View all your notes on the dashboard and click on any note to read its content.
5. Edit or delete notes using the respective buttons.
6. Use the search bar to find specific notes based on keywords or phrases.

## Contributing

Contributions are welcome! If you find any bugs or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using Evermark Note Taking Website! If you have any questions or need further assistance, please don't hesitate to contact us. Happy note-taking!
