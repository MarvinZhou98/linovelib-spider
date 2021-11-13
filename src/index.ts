import { downloadHtml, saveAsFile } from './utils';

const main = async () => {
    const html = await downloadHtml(2013, 72034);
    saveAsFile('body', html);
};

export default main;
