import ThirdPartyNode from "supertokens-node/recipe/thirdparty";
import SessionNode from "supertokens-node/recipe/session";
import { appInfo } from "./appInfo";
import { TypeInput } from "supertokens-node/types";
import { env } from "process";

export const backendConfig = (): any => {
  return {
    enableDebugLogs: true,
    framework: "express",
    supertokens: {
      connectionURI: env.SUPERTOKENS_CONNECTIONURI!,
      apiKey: env.SUPERTOKENS_APIKEY,
    },
    appInfo,
    recipeList: [
      ThirdPartyNode.init({
        signInAndUpFeature: {
          providers: [
            // We have provided you with development keys which you can use for testsing.
            // IMPORTANT: Please replace them with your own OAuth keys for production use.
            ThirdPartyNode.Google({
              clientId: env.GOOGLE_OATH_CLIENTID!,
              clientSecret: env.GOOGLE_OATH_CLIENTSECRET!,
            }),
            // ThirdPartyNode.Github({
            //   clientId: "467101b197249757c71f",
            //   clientSecret: "e97051221f4b6426e8fe8d51486396703012f5bd",
            // }),
          ],
        },
      }),
      SessionNode.init({
        jwt: {
          enable: true,
        },
      }),
    ],
    isInServerlessEnv: true,
  };
};
