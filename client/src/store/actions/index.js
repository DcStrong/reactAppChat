import { AUTHORIZE } from "../action-types";

export function authorize(payload) {
  return { type: AUTHORIZE, payload };
}