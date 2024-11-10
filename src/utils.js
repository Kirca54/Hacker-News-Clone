export function formatTime(timestamp) {
    const diff = Date.now() / 1000 - timestamp; // Time difference in seconds
    if (diff < 60) {
        return `${Math.floor(diff)} seconds ago`;
    } else if (diff < 3600) {
        return `${Math.floor(diff / 60)} minutes ago`;
    } else if (diff < 86400) {
        return `${Math.floor(diff / 3600)} hours ago`;
    } else if (diff < 2592000) {
        return `${Math.floor(diff / 86400)} days ago`;
    } else if (diff < 31536000) {
        return `${Math.floor(diff / 2592000)} months ago`;
    } else {
        return `${Math.floor(diff / 31536000)} years ago`;
    }
}
