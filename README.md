# OnePass Knowledge Base Repository

Welcome to the **OnePass Knowledge Base (KB)** repository! This repository hosts support articles, guides, and technical documentation to help users, startups, and investors navigate the OnePass ecosystem.

## How to install

1. Clone this repository:

```bash
git clone https://github.com/getonepass/onepass.docs.git
```

1. Go into project

```bash
cd onepass.docs
```

1. Install dependencies

```bash
yarn
```

1. Run project

```bash
yarn dev
```

## 📖 About This Repository

This repository contains:

- **Support Articles** – FAQs and troubleshooting guides.
- **Guides & Tutorials** – Step-by-step instructions for using OnePass products.
- **Technical Documentation** – API references and developer resources.

All contributions should follow the [Contribution Guidelines](CONTRIBUTING.md).

## 📂 Folder Structure

```text
📂 src/content/
 ├── 📂 articles/      # Support articles
 ├── 📂 guides/        # How-to guides & tutorials
 ├── 📂 docs/          # Technical documentation
 ├── 📂 assets/        # Images and media files
 ├── README.md        # Repository overview
 ├── CONTRIBUTING.md  # Contribution guidelines
```

## 🛠 Contribution Guidelines

To contribute:

1. Fork this repository.
2. Create a new branch.
3. Follow the formatting and metadata structure outlined in [CONTRIBUTING.md](CONTRIBUTING.md).
4. Submit a pull request (PR) for review.

## 📝 Formatting & Metadata

Each document should include YAML metadata:

```yaml
---
title: Choosing a holder wallet for managing your credentials
sidebarTitle: Choosing a holder wallet
description: Learn how to choose a holder wallet for managing your credentials.
keywords: "Credentials, SSI, Holder, Wallet, Verifiable Credentials, OnePass"
category: "OPP, Bridge, Credentials"
display: true
asIndexPage: false
theme: 
  toc: true
  timestamp: true
  pagination: true
  breadcrumb: true
  sidebar: true
---
```

## 🛠 Supported File Formats

We support both `.md` and `.mdx` files.
