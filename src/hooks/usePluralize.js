function usePluralize({
  count = 0,
  singularText = '',
  pluralText = '',
  noDataText = ''
}) {
  if (count === 0) return noDataText
  if (count === 1) return singularText

  return `${count} ${pluralText}`
}

export default usePluralize
