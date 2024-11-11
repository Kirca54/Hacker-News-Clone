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
export function sharePost(url) {
    if (navigator.share) {
        // Check if the browser supports the Web Share API
        navigator.share({
            title: 'Check out this post on Hacker News!',
            url: url,
        })
            .then(() => console.log('Post shared successfully!'))
            .catch((error) => console.error('Error sharing post:', error));
    } else {
        // Fallback: Use window.open to share the post URL
        const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank');
    }
}
