import React from 'react'
import PropertyImg from './PropertyImg'
import '../../css/propertyListing.css'

const PropertyListing = () => {
  return (
    <div className='property-container' >
        <p className='property-header' >Beautiful Villa In Gao</p>
        <h6 className='property-location'>
            <span className='material-symbols-outlined' >House</span>
            <span className='location' >ecr, chennai, tamilnadu</span>
        </h6>
        <PropertyImg images={["/assets/property2.webp"]} />
        <div className='middle-container row' >
          <div className='des-and-amenities col-md-8 col-sm-12 col-12' >
            <h2 className='property-description-header' >Description</h2>
            <p className='property-description' >This is a simple Description of a luxury villa located near the beach. perfect for family and groups
              <br/> <br/> Max number of guests: 6
            </p>

          </div>
        </div>




    </div>
  )
}

export default PropertyListing