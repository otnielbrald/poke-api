export function searchUrl() {
  let {hash} = location
  let Name

  if (hash.includes('/')) {
    let index = hash.lastIndexOf('/')
    Name = hash.slice(index)
  }

  return Name
}