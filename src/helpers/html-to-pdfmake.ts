import htmlToPdfmake from 'html-to-pdfmake';
import { JSDOM } from 'jsdom';

interface ContentReplacer {
    [key:string]:string;
};


export const getHtmlContent = ( html:string, replacers:ContentReplacer = {} ) => {
    
    Object.entries(replacers).forEach(([key, value ]) => {
        
        const Key1 = `{{ ${key} }}`;
        const Key2 = `{{${key}}}`;
        
        html = html.replaceAll(Key1, value).replaceAll(Key2, value);
    });

    const { window } = new JSDOM();
    return htmlToPdfmake( html, { window } );
};