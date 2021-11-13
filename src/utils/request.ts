import request from 'request';

export const getUrl = (year: number, index: number, suffix?: number) =>
    `https://w.linovelib.com/novel/${year}/${index}${suffix ? '_' : ''}${
        suffix ? suffix : ''
    }.html`;

export const downloadHtml = (year: number, index: number, suffix?: number) => {
    return new Promise<string>((resove, reject) => {
        request(getUrl(year, index, suffix), (error, res, body) => {
            if (error) {
                reject('获取数据失败');
            }
            if (res.statusCode === 200 && typeof body === 'string') {
                resove(body);
            } else {
                reject('获取数据失败');
            }
        });
    });
};
