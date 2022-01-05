import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='events' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Events</h2>
          <p>
           Here are some of our past and future events! Click on the pictures to learn more about each event!
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage}/>
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
