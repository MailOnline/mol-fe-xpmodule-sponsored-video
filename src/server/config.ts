import { ConfigExports, XpModule } from "@mol-fe/mol-fe-registry-types";
import { getSchema } from "./config/getSchema";

declare const xpModule: XpModule;

xpModule.exports = {
  getSchema
} as ConfigExports;
