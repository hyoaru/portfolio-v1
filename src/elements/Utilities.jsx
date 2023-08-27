import Axios from 'axios';
import fileDownload from 'js-file-download';

export function downloadFromURL(url, filename) {
    Axios.get(url, {
        responseType: 'blob',
    }).then(res => {
        fileDownload(res.data, filename);
    });
}
