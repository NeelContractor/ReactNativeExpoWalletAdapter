import { transact } from "@solana-mobile/mobile-wallet-adapter-protocol-web3js";
import { PublicKey } from "@solana/web3.js";
import { Buffer } from "buffer";
import { useState } from "react";

export function useMobileWallet() {
  const [publicKey, setPublicKey] = useState<PublicKey | null>(null);

  const connect = async () => {
    try {
      await transact(async (wallet) => {
        const res = await wallet.authorize({
          cluster: "devnet",
          identity: { name: "Solana Mobile App" },
        });

        console.log("Auth result:", res);

        if (res.accounts.length > 0) {
          const base64Address = res.accounts[0].address;

          const decoded = Buffer.from(base64Address, "base64");

          const pk = new PublicKey(decoded);
          setPublicKey(pk);

          console.log("Connected:", pk.toBase58());
        }
      });
    } catch (err) {
      console.log("Wallet error:", err);
    }
  };

  return { publicKey, connect };
}
