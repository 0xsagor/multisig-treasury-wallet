# Multi-Signature Treasury Wallet

This repository provides a robust, expert-level Multi-Sig wallet implementation. It is designed for groups or DAOs that require collective authorization for fund movements, preventing a single point of failure.

### Core Mechanics
* **Owners:** Set multiple authorized addresses during deployment.
* **Confirmations:** Transactions require a predefined threshold of approvals (e.g., 2 out of 3).
* **Security:** Prevents unauthorized fund transfers and re-entrancy attacks.
* **Flat Structure:** All necessary files are in the root directory for a copy-paste friendly experience.

### How to Use
1. Install dependencies: `npm install`
2. Update `deploy.js` with your owner addresses.
3. Deploy: `npx hardhat run deploy.js`
4. Use `interact.js` to propose and confirm transactions.
