const GetFormattedDate = (dateString: string): string => {
   return new Intl.DateTimeFormat('en-US', {dateStyle: 'long'}).format(new Date(dateString))
}

export default GetFormattedDate;