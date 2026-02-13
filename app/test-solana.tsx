import { Connection, clusterApiUrl } from "@solana/web3.js";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function TestSolana() {
  const [balance, setBalance] = useState<number | null>(null);

  const test = async () => {
    const connection = new Connection(clusterApiUrl("devnet"));
    const slot = await connection.getSlot();
    setBalance(slot);
  };

  return (
    <View style={{ marginTop: 100 }}>
      <Text style={{ color: "#FFF4EA" }}>Test Solana</Text>
      <Button title="Test Solana" onPress={test} />
      <Text style={{ color: "#ffffff" }}>Slot: {balance}</Text>
    </View>
  );
}
