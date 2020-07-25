const formatDataBar = (overviews, surveyBar, hover) => {
  console.log("state hover", hover)
  console.log("state hover", !hover)
  const colors = {
    would_use: hover === "would_use" || !hover ? "#FD696A" : "#2C2D33",
    would_not_use: hover === "would_not_use" || !hover ? "#FC8E8F" : "#2C2D33",
    interested: hover === "interested" || !hover ? "#43C6C7" : "#2C2D33",
    not_interested:
      hover === "not_interested" || !hover ? "#63E0E1" : "#2C2D33",
    never_heard: hover === "never_heard" || !hover ? "#BFBFBE" : "#2C2D33",
  }

  return overviews.reduce((acc, overview) => {
    let data = {
      framework: overview.id.charAt(0).toUpperCase() + overview.id.slice(1),
    }
    overview.buckets.forEach((bucket) => {
      data[bucket.id] = Number(bucket[surveyBar])
      data[`${bucket.id}Color`] = colors[bucket.id]
    })

    return [...acc, data]
  }, [])
}

export default formatDataBar
