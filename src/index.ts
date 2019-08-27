export { OAuth as AuthClient } from 'oauth';

export interface Token {
   type?: string;
   /**
    * Credential that can be used by a application to access an API once the
    * application has been authenticated, such as with an API key and secret.
    * @see https://auth0.com/docs/tokens/access-token
    */
   access: string;
   secret?: string;
   request?: string;
   /**
    * Token that can be used to obtain a new access token.
    * @see https://auth0.com/learn/refresh-tokens/
    */
   refresh?: string;
   accessExpiration?: Date;
}

/**
 * @see https://oauth1.wp-api.org/docs/basics/Signing.html
 */
export const enum SigningMethod {
   HMAC = 'HMAC-SHA1',
   RSA = 'RSA-SHA1',
   PlainText = 'PLAINTEXT'
}

export interface AuthConfig {
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
    * Whether tokens are empty.
    */
   isEmpty(): boolean;
   /**
    * OAuth callback URL.
    */
   url(): string;
}
