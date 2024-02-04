declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";
declare module "*.less";
declare module "*.css";

declare global {
  interface Window {
    stringify: () => string;
  }
}
window.stringify = function () {
  return JSON.stringify(this);
};
