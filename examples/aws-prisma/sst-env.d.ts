/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */
import "sst"
export {}
declare module "sst" {
  export interface Resource {
    "MyPostgres": {
      "database": string
      "host": string
      "password": string
      "port": number
      "type": "sst.aws.Postgres"
      "username": string
    }
    "MyService": {
      "service": string
      "type": "sst.aws.Service"
      "url": string
    }
    "MyVpc": {
      "bastion": string
      "type": "sst.aws.Vpc"
    }
  }
}
