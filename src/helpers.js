export const formatDate = (publishedAt) => {
  let date = new Date(publishedAt)
  const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' }) 
  const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(date) 

  return `${day}/${month}/${year}`;

}

export const compare = (a, b)=> {
  if ( a < b ){
    return -1;
  }
  if ( a > b ){
    return 1;
  }
  return 0;
}