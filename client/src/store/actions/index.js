import { AUTHORIZE } from "../action-types";

export function authorize(payload) {
  console.log(2);
  return { type: AUTHORIZE, payload };
}