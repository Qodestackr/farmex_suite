farmex_client Development Setup
Welcome to the development setup guide for farmex_client. This guide will walk you through the process of setting up your development environment and introduce the tools used in the project.

Prerequisites
Make sure you have the following software installed on your machine:

Node.js (LTS version recommended)
Git
Getting Started

Clone the farmex_client repository:

git clone https://github.com/your-username/farmex_client.git

Change into the project directory:

cd farmex_client
npm install

Build Tools and Configuration
Husky
Husky is a tool that enables Git hooks. It's used to automate tasks before commits.

Installation

npm install husky --save-dev

Prettier
Prettier is a code formatter that ensures consistent code style.

Installation

npm install prettier --save-dev

lint-staged
lint-staged runs linters on pre-committed files in Git.

Applying Prettier Formatting
To apply Prettier formatting to your codebase, run the following command:

```bash
npx prettier --write .
```
