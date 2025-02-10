export interface Image {
    src: string;
    alt: string;
}
declare module "*.jpg" {
    const value: string;
    export default value;
}

declare module "*.svg" {
    const value: string;
    export default value;
}