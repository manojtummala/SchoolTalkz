export function exclude<ToBeModifiedObject, ToBeRemovedKey extends keyof ToBeModifiedObject>(
  obj: ToBeModifiedObject,
  keys: ToBeRemovedKey[]
): Omit<ToBeModifiedObject, ToBeRemovedKey> {
  for (let key of keys) {
    delete obj[key]
  }
  return obj
}