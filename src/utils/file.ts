import fs from 'fs';

export const saveAsFile = (filename: string, context: string) => {
    fs.writeFile(
        `${process.cwd()}/${filename}.txt`,
        context,
        { flag: 'w' },
        (err) => {
            if (err) {
                console.error('文件保存失败', filename, err.message);
            }
        }
    );
};
