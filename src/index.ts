import { downloadHtml, formatHtml, getUrl, saveAsFile } from './utils';

const main = async () => {
    const html = await downloadHtml(getUrl(2013, 72034));
    const { baseInfo, newHtml } = await formatHtml(html);
    saveAsFile('body', newHtml, baseInfo);
    console.log('success');
};

export default main;
