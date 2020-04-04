import { AUTHORIZE, OUT_AUTHORIZE } from "../action-types";

export function authorize(payload) {
  return { type: AUTHORIZE, payload };
}

export function outAuthorize(payload) {
  return { type: OUT_AUTHORIZE, payload }
}

// export function message(payload) {
//   return {type: MESSAGE, payload}
// }

// export function messages(payload) {
//   return {type: MESSAGES, payload}
// }