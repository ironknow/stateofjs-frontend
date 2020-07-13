export const formatDataHeatMap = (usages) => {
  const keys = {
    range_less_than_1: `<1`,
    range_1_2: `1~2`,
    range_2_5: `2~5`,
    range_5_10: `5~10`,
    range_10_20: `10~20`,
    range_more_than_20: `>20`,
  }

  return usages.reduce((acc, { id, ranges }) => {
    let data = { framework: id }
    ranges.forEach(({ range, percentage }) => {
      data[keys[range]] = Number(percentage)
    })

    return [...acc, data]
  }, [])
}
