export const getAfterSlashId = (url) => {
  const afterLastSlash = url.substring(url.lastIndexOf('/') + 1)
  return afterLastSlash
}
