const express = require("express");
const boxSDK = require("box-node-sdk");
const config = require("./config.js");

const app = express();

app.set("views", ".");
app.set("view engine", "ejs");

/**
 * setup.jsで作成したファイルとユーザー
 */

const USER_ID = "12771965844";
const FILE_ID = "665319803554";

app.get("/", async (req, res) => {
  try {
    console.log("config", config);
    const sdk = boxSDK.getPreconfiguredInstance(config);
    // AppUserの権限でClientオブジェクトを作成
    const auClient = sdk.getAppAuthClient("user", USER_ID);

    console.log(2);
    // トークンをダウンスコープする
    // APIリファレンスには載っていないが、UI Elementsの説明には書いてあるAPI
    // ここでは、OpenWithで必要なものと、Previewで必要なものを両方スコープにいれてトークンをダウンスコープする
    const downToken = await auClient.exchangeToken(
      [
        "item_execute_integration",
        "item_readwrite",
        "item_preview",
        "root_readwrite",
      ],
      `https://api.box.com/2.0/folders/0`
    );

    console.log(3);
    // テンプレートにパラメータを渡して、HTMLを返す
    res.render("index_client_long_polling", {
      fileId: FILE_ID,
      token: downToken.accessToken,
    });
    console.log(4);
  } catch (e) {
    console.error(e.toString());
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`express started on port ${port}`);
});
