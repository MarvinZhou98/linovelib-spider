import { downloadHtml, formatHtml, getUrl, saveAsFile } from './utils';

const main = async () => {
    const html = await downloadHtml(getUrl(2013, 72034));
    const formatData = await formatHtml(html);
    saveAsFile('body', html, formatData);
    console.log('success');
};

export default main;
