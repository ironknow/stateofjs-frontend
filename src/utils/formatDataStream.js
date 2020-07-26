const formatDataStream = (experiences, survey) => {
  return experiences.reduce((acc, experience) => {
    const data = experience.buckets.reduce((bucket, value) => {
      console.log(Number(value[survey]))
      console.log(survey)
      bucket[value.id] = Number(value[survey])
      return bucket
    }, {})

    return [...acc, data]
  }, [])
}

export default formatDataStream
