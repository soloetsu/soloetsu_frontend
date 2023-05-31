import merge from "lodash/merge";

const mergeStyles = (...source) => merge({}, ...source);
export default mergeStyles;
