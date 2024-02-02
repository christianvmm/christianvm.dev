export default function Home() {
   return (
      <div className='flex flex-col justify-center items-center'>
         <div className='flex items-center'>
            <h1
               style={{
                  display: 'inline-block',
                  margin: '0 20px 0 0',
                  paddingRight: 23,
                  fontSize: 24,
                  fontWeight: 500,
                  verticalAlign: 'top',
                  borderRight: '1px solid rgba(127, 127, 127, .3)',
               }}
            >
               404
            </h1>

            <div className='inline-block'>
               <h2
                  style={{
                     fontSize: 14,
                     fontWeight: 400,
                     lineHeight: '28px',
                  }}
               >
                  This page could not be found.
               </h2>
            </div>
         </div>
      </div>
   )
}
