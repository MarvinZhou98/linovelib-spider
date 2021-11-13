import request from 'request';

const Host = 'https://w.linovelib.com/novel';

export const getUrl = (bookIndex: number, index: number, suffix?: number) =>
    `${Host}/${bookIndex}/${index}${suffix ? '_' : ''}${
        suffix ? suffix : ''
    }.html`;

export const getNextPageUrl = (url_next: string) => `${Host}${url_next}`;

export const downloadHtml = (url: string) => {
    return new Promise<string>((resove, reject) => {
        request(url, (error, res, body) => {
            if (error) {
                reject('获取数据失败');
                return;
            }
            if (res.statusCode === 200 && typeof body === 'string') {
                resove(body);
            } else {
                reject('获取数据失败');
            }
        });
    });
};
