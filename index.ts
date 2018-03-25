export { OAuth as Client } from 'oauth';

export interface Token {
   type?: string;
   access: string;
   secret?: string;
   request?: string;
   refresh?: string;
   accessExpiration?: Date;
}

/**
 * https://oauth1.wp-api.org/docs/basics/Signing.html
 */
export enum SigningMethod {
   HMAC = 'HMAC-SHA1',
   RSA = 'RSA-SHA1',
   PlainText = 'PLAINTEXT'
}

export interface Config {
   /** OAuth 2 client ID */
   clientID?: string;
   apiKey: string;
   secret: string;
   /** URL that will be invoked by authenticator */
   callback: string;
   token?: Token;
}

export interface BasicAuth {
   getAccessToken(code: string): Promise<Token>;
   getAccessToken(requestToken: string, verifier: string): Promise<Token>;
   /**
    * Whether tokens are empty
    */
   isEmpty(): boolean;
   /**
    * OAuth callback URL
    */
   url(): string;
}
