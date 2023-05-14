export function getIconUrl(icon) {
    const iconName = icon.substring(icon.lastIndexOf('/') + 1);
    return `/topics/${iconName}`;
}