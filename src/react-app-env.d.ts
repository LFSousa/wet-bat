/// <reference types="react-scripts" />
declare module "d3-geo-projection";

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly PUBLIC_URL: string;
    readonly SERVER_URL: string;
  }
}
