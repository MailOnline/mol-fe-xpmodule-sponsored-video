import { XpModule } from "@mol-fe/mol-fe-registry-types";

declare const xpModule: XpModule;

export type Environment = "development" | "integration" | "production";

export interface Config {
  baseUrl: string;
}

export const environment =
  (xpModule && (xpModule.environment as Environment)) || "development";

const config: { [key in Environment]: Config } = {
  development: {
    baseUrl: "http://localhost:8080/dist/client",
  },
  integration: {
    baseUrl: `https://scripts.dailymail.co.uk/static/mol-fe/static/mol-fe-xpmodule-sponsored-video/${xpModule.version}`,
  },
  production: {
    baseUrl: `https://scripts.dailymail.co.uk/static/mol-fe/static/mol-fe-xpmodule-sponsored-video/${xpModule.version}`,
  },
};
export const baseUrl = config[environment].baseUrl;
