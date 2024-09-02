const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY_MS = HOUR * 24

export function getTimeAgo(
   date: string | Date,
   dayPrecision?: boolean
): string {
   let currentDate = toUTC(new Date())
   let targetDate = typeof date === 'string' ? createDate(date) : date

   let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
   let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
   let daysAgo = currentDate.getDate() - targetDate.getDate()
   let diffMs = currentDate.getTime() - targetDate.getTime()

   if (yearsAgo > 0) {
      return `${yearsAgo}y ago`
   }

   if (monthsAgo > 0) {
      return `${monthsAgo}mo ago`
   }

   if (daysAgo > 0 && diffMs > DAY_MS) {
      return `${daysAgo}d ago`
   }

   if (!dayPrecision) {
      return 'Today'
   }

   if (diffMs > HOUR) {
      return `${Math.floor(diffMs / HOUR)}h ago`
   }

   if (diffMs > MINUTE) {
      return `${Math.floor(diffMs / MINUTE)}m ago`
   }

   return `${Math.floor(diffMs / SECOND)}s ago`
}

function createDate(dateStr: string): Date {
   if (!dateStr.includes('T')) {
      dateStr = `${dateStr}T00:00:00`
   }

   return toUTC(new Date(dateStr))
}

function toUTC(date: Date) {
   return new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds()
   )
}

export function formatDate(date: string | Date, hideTimeAgo?: boolean): string {
   const targetDate = typeof date === 'string' ? createDate(date) : date
   const timeAgo = getTimeAgo(targetDate)
   const fullDate = targetDate.toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
   })

   if (hideTimeAgo) {
      return fullDate
   }

   return `${fullDate} (${timeAgo})`
}
