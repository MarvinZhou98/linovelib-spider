import cheerio from 'cheerio';

import { FormatData, PageBaseInfo } from '../types';

const getTargetFromInfoStr = (target: string, infoStr: string) => {
    const regexp = RegExp(`${target}:'.*?',`);
    const res = regexp.exec(infoStr);
    if (!Array.isArray(res)) {
        return '';
    }
    return res[0].slice(target.length + 2, -2);
};

const getPageBaseInfo = (html: string): PageBaseInfo => {
    const baseInfo: PageBaseInfo = {
        url_previous: '',
        url_next: '',
        url_index: '',
        url_articleinfo: '',
        url_image: '',
        url_home: '',
        articleid: '',
        articlename: '',
        subid: '',
        author: '',
        chapterid: '',
        page: '',
        chaptername: '',
    };
    const regexp = /ReadParams=\{.*?\}/;
    const infoStrArr = regexp.exec(html);
    if (Array.isArray(infoStrArr)) {
        const infoStr = infoStrArr[0].slice(11);
        Object.keys(baseInfo).forEach((item) => {
            (baseInfo as any)[item] = getTargetFromInfoStr(item, infoStr);
        });
    }
    return baseInfo;
};

const getContext = (html: string): string[] => {
    const $ = cheerio.load(html);
    const acontent = $('#acontent').first();
    const children = acontent
        .contents()
        .map((i, el) => $(el).text())
        .toArray()
        .filter((item) => !!item && !item.startsWith('\n'))
        .map((item) => item.replace('\n', ''));
    return children;
};

export const formatHtml = async (html: string): Promise<FormatData> => {
    const baseInfo = getPageBaseInfo(html);
    const context = getContext(html);
    return {
        baseInfo,
        context,
    };
};
