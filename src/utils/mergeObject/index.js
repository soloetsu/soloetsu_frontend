import merge from "lodash/merge";

const mergeObjects = (...source) => merge({}, ...source);
export default mergeObjects;
