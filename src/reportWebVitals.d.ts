import "./reportWebVitals.js";

declare module "./reportWebVitals" {
  const reportWebVitals: (onPerfEntry?: (entry: any) => void) => void;
  export default reportWebVitals;
}
