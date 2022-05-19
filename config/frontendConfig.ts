import ThirdPartyReact, {Google, Facebook} from 'supertokens-auth-react/recipe/thirdparty'
import SessionReact from 'supertokens-auth-react/recipe/session'
import { appInfo } from './appInfo'

export const frontendConfig = () => {
  return {
    appInfo,
    recipeList: [
      ThirdPartyReact.init({
        signInAndUpFeature: {
          providers: [
            ThirdPartyReact.Google.init(),
            // ThirdPartyReact.Facebook.init(),
            // ThirdPartyReact.Apple.init(),
            // ThirdPartyReact.Github.init(),
          ],
        },
      }),
      SessionReact.init(),
    ],
  }
}
