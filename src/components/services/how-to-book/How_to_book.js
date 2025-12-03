// import React from 'react'
// import './How_to_book.css'
// import Common_title from '../../common/common-title/Common_title'

// const How_to_book = () => {
//   return (
//     <>
//         <section className='How_to_book_sec'>
//             <div className='container'>
//                 <Common_title specialtext={'How to Book a Cab with DriWE?'} />
//                 <div className='row mt-5'>
//                     <div className='col-md-6'>
//                         <div className='left_sec'>
//                             <img className='banner' src={process.env.PUBLIC_URL + '/assets/images/services/how-to-book/book-banner.png'} />
//                         </div>
//                     </div>
//                     <div className='col-md-6'>
//                         <div className='right_sec'>
//                             <img className='gif' src={process.env.PUBLIC_URL + '/assets/images/services/how-to-book/cab.gif'} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </> 
//   )
// }

// export default How_to_book


import React from 'react'
import './How_to_book.css'
import Common_title from '../../common/common-title/Common_title'

const How_to_book = () => {
  return (
    <>
      <section className="How_to_book_sec">
        <div className="container">
          <Common_title specialtext={'How to Book a Cab with DriWE?'} />

          <div className="row mt-5">
            {/* Left Box */}
            <div className="col-md-6 mb-4">
              <div className="box">
                <img 
                  src={process.env.PUBLIC_URL + '/assets/images/services/how-to-book/book-banner.png'} 
                  alt="Book Banner"
                />
              </div>
            </div>

            {/* Right Box */}
            <div className="col-md-6 mb-4">
              <div className="box">
                <img 
                  src={process.env.PUBLIC_URL + '/assets/images/services/how-to-book/cab.gif'} 
                  alt="Cab GIF"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default How_to_book
