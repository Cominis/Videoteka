const formatBytes = (bytes) => {
    if (bytes === 1) {
        return '1 byte';
    }
    const i = ~~(Math.log2(bytes) / 10);
    const unit = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][i];
    if (unit === 'bytes') {
        return bytes + ' ' + unit;
    }

    return (bytes  / Math.pow(1024, i)).toFixed(2) + ' ' + unit;
}

export default formatBytes;
