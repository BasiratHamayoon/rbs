import ContactHeading from '@/Components/contact/ContactHeading'
import ContactInfo from '@/Components/contact/ContactInfo'
import GeneralEnquiries from '@/Components/contact/GeneralEnquiries'
import MoreInformation from '@/Components/contact/MoreInformation'
import React from 'react'

function page() {
  return (
    <section className="bg-white w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 w-full">
        <ContactHeading />
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mt-8 lg:mt-12 w-full">
          <div className="lg:col-span-1 space-y-6 lg:space-y-8 w-full">
            <ContactInfo />
          </div>
          <div className="lg:col-span-2 w-full">
            <GeneralEnquiries />
          </div> 
        </div>
        <MoreInformation />
      </div>
    </section>
  )
}

export default page