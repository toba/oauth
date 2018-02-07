export { OAuth as OAuthClient } from 'oauth';

export interface Token {
   type?: string;
   access: string;
   secret?: string;
   request?: string;
   refresh?: string;
   accessExpiration: Date;
}

export interface Auth {
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
