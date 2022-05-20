declare global {
	namespace NodeJS {
		interface ProcessEnv {
			SUPERTOKENS_CONNECTIONURI: string,
			SUPERTOKENS_APIKEY: string,
			GOOGLE_OATH_CLIENTID: string,
			GOOGLE_OATH_CLIENTSECRET: string,
		}
	}
}

export {}