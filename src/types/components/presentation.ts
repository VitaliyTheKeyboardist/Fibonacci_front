export interface IPresentationImage {
    description: string
    api_url: string
}


export interface ISlide {
    title: string
    text: string
    images: IPresentationImage[]
}


export interface IPresentation {
    title: string
    template: string
    slides: ISlide[]
}