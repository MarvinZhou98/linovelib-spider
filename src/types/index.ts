export interface PageBaseInfo {
    url_previous: string;
    url_next: string;
    url_index: string;
    url_articleinfo: string;
    url_image: string;
    url_home: string;
    articleid: string;
    articlename: string;
    subid: string;
    author: string;
    chapterid: string;
    page: string;
    chaptername: string;
}

export interface FormatData {
    baseInfo: PageBaseInfo;
    context: string[];
}
