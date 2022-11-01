// This module refreshes the current page

export function refresh() {
    // Get content container from index.html
    const content = document.querySelector('#content');
    // Resfresh
    return content.innerHTML = '';
}