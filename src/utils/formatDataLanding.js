const formatDataLanding = (data) => {
  let j = 0
  let formatedData = []
  for (let i = 0; i < 9; i++) {
    let g = j + 20
    const arr = data.slice(j, g)
    formatedData.push({ [i]: arr })
    j = j + 20
  }
  return formatedData
}

export default formatDataLanding
