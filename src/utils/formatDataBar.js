const formatDataBar = (overviews, surveyBar) => {
  console.log(overviews)

  const colors = {
    would_use: "#EE6363",
    would_not_use: "#FC8E8F",
    interested: "#43C6C7",
    not_interested: "#63E0E1",
    never_heard: "#BFBFBE",
  }

  return overviews.reduce((acc, overview) => {
    let data = {
      framework: overview.id.charAt(0).toUpperCase() + overview.id.slice(1),
    }
    overview.buckets.forEach((bucket) => {
      data[bucket.id] = bucket[surveyBar]
      data[`${bucket.id}Color`] = colors[bucket.id]
    })

    return [...acc, data]
  }, [])
}

export default formatDataBar
