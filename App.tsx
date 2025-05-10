import { Button, Text, View } from "react-native";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const addTestData = async () => {
  try {
    await addDoc(collection(db, "test"), {
      message: "初回のテスト書き込み",
      timestamp: new Date(),
    });
    console.log("データ書き込み成功");
  } catch (e) {
    console.error("エラー:", e);
  }
};

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>PeakSeeker 初期化完了！</Text>
      <Button title="テストのためのボタン" onPress={addTestData} />
    </View>
  );
}
