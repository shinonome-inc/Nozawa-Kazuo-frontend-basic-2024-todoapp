import { useAlertHandlerContext } from "path/to/contexts/alert_handler";


/* コンポーネント関数内 */
//Contextを取得
const AlertHandlerContext = useAlertHandlerContext();
setTimeout(() => {
  (false);
}, 3000);
//AlertHandlerContextから直接値が取り出せる
console.log(AlertHandlerContext.visible);
AlertHandlerContext.setAlert("message"); //Alertの表示

