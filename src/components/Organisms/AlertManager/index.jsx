import { useAlertHandlerContext } from "../../contexts/alert_handler";
import { Alert } from "../../Atoms/Alert/index";
import { useEffect } from "react";

export default function ALertManager() {
  /* コンポーネント関数内 */
  //Contextを取得
  const AlertHandlerContext = useAlertHandlerContext();

  //時間経過で消えるシステム
  //AlertHandlerContextから直接値が取り出せる
  console.log(AlertHandlerContext.visible);
  useEffect(() => {
    setTimeout(() => {
      AlertHandlerContext.closeAlert();
    }, 5000);
  }, [AlertHandlerContext.visible]);

  return <Alert />;
}
