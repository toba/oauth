export { OAuth as Client } from 'oauth';

export interface Token {
   type?: string;
   access: string;
   secret?: string;
   request?: string;
   refresh?: string;
   accessExpiration: Date;
}

export interface Config {
   apiKey: string;
   secret: string;
   /** URL that will be invoked by authenticator */
   callbackURL: string;
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
