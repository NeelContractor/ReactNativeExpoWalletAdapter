# Solana Mobile Wallet Adapter

A minimal React Native Expo app demonstrating how to connect a Solana wallet using the Solana Mobile Wallet Adapter and fetch wallet balance on devnet.

## Getting Started
## Clone repo
``` bash
git clone https://github.com/yourusername/solana-mobile-wallet-adapter.git
cd solana-mobile-wallet-adapter
```
## Install dependencies
```bash
npm install
```
## Install Expo dev client
```bash
npx expo install expo-dev-client
```

## Android Setup

You must use a dev build (wallet adapter does not work in Expo Go).

Build app:
```bash

npx expo run:android
```

Start dev server:
```bash
npx expo start --dev-client
```

Connect your Android device with USB debugging enabled.