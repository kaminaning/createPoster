interface posterOptions {
    type: "png" | "jpg";
    size: {
        width: number;
        height: number;
    };
    bg?: {
        src: string | URL;
        pos: Array<number>;
        width: number;
        height: number;
    };
    fill?: string;
    eleList?: Array<ImageType | TextType>;
}
declare type ImageType = {
    type: string;
    pos: Array<number>;
    src: string | URL;
    width: number;
    height: number;
};
declare type TextType = {
    type: string;
    pos: Array<number>;
    txt: string;
    color: string;
    font: string;
};
declare function createPoster({ type, size, bg, fill, eleList, }: posterOptions): Promise<string>;
export default createPoster;
