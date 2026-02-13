import { Connection, PublicKey } from "@solana/web3.js";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { useMobileWallet } from "../../hooks/useMobileWallet";

const connection = new Connection("https://api.devnet.solana.com");

export default function Home() {
  const { publicKey, connect } = useMobileWallet();
  const [balance, setBalance] = useState<number | null>(null);

  async function getBalance(address: string) {
    const pubkey = new PublicKey(address);
    const lamports = await connection.getBalance(pubkey);
    const sol = lamports / 1e9;
    setBalance(sol);
    console.log("Balance:", sol);
  }

  useEffect(() => {
    if (!publicKey) return;

    const run = async () => {
      await getBalance(publicKey.toBase58());
    };

    run();
  }, [publicKey]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Solana Mobile App
      </Text>

      {publicKey ? (
        <>
          <Text 
            style={{
              fontSize: 10,
              opacity: 0.6,
              marginTop: 6,
              textAlign: "center",
              paddingHorizontal: 20,
            }}
            numberOfLines={2}
            adjustsFontSizeToFit
          >{publicKey.toBase58()}</Text>
          <Text style={{ marginTop: 10 }}>
            Balance: {balance ?? "..."} SOL
          </Text>
        </>
      ) : (
        <Button title="Connect Wallet" onPress={connect} />
      )}
    </View>
  );
}
