const formatDataBump = (frameworks, survey) => {
  const colors = [
    "#455EDF",
    "#43C6C7",
    "#F64AA7",
    "#FD696A",
    "#85EBA2",
    "#FCF24C",
  ]

  return frameworks.map((framework, index) => {
    const formatFramework = framework[survey].map(
      ({ year, rank, percentage }) => {
        return { x: year, y: rank, percentage: percentage }
      }
    )
    return {
      id: framework.id.charAt(0).toUpperCase() + framework.id.slice(1),
      color: colors[index],
      data: formatFramework,
    }
  })
}

export default formatDataBump
