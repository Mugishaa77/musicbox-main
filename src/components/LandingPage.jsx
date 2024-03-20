import '../styles/Navbar.css'

export function LandingPage() {
  return (
    <>
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-start justify-content-start text-start">
            <div className="text-body col-lg-8 align-self-center float-start shadow-lg rounded-4 m-0 p-4">
              <h1 className="row d-inline font-weight-bold text-black">MusicBox</h1>
              <hr className='divider'></hr>
              <p className="row mb-5 text-black">
                Share your Music and reviews while connecting with other
                music minded people
              </p>
              
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
}
