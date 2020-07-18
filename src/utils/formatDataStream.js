const formatDataStream = (experiences, framework, survey) => {
  return experiences.reduce((acc, experience) => {
    const data = experience.buckets.reduce((bucket, { id, count }) => {
      console.log(typeof Number(count))
      bucket[id] = Number(count)
      return bucket
    }, {})

    return [...acc, data]
  }, [])
}

export default formatDataStream
