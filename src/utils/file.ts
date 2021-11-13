import fs from 'fs';
import { PageBaseInfo } from '../types';

export const saveAsFile = (
    filename: string,
    context: string,
    info: PageBaseInfo
) => {
    fs.writeFile(
        `${process.cwd()}/out/${filename}.txt`,
        context,
        { flag: 'w' },
        (err) => {
            if (err) {
                console.error('文件保存失败', filename, err.message);
            }
        }
    );
    fs.writeFile(
        `${process.cwd()}/out/${filename}.json`,
        JSON.stringify(info, null, 2),
        { flag: 'w' },
        (err) => {
            if (err) {
                console.error('文件保存失败', filename, err.message);
            }
        }
    );
};
