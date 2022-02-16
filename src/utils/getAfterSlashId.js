export const getAfterSlashId = (url) => {
  const afterLastSlash = url.substring(url.lastIndexOf('/') + 1)
  console.log(afterLastSlash)
  return afterLastSlash
}
