// JSON Type
type Premitives = number | string | boolean | null
type JSONArray = JSONValue[]
type JSONObject = {[key: string]: JSONValue}
type JSONValue = Premitives | JSONArray | JSONObject
