export const getPageCount = (totalPages, limit) => {
    return Math.ceil(totalPages / limit)
}

export const getPagesArray = (totalPages) => {
    let pagesArray = []
  for(let i = 1; i <= totalPages; i++) {
    pagesArray.push(i)
  }
  return pagesArray
}