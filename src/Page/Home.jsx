import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHistory } from 'react-icons/fa';
import AddVideo from '../Components/AddVideo';
import ViewVideo from '../Components/ViewVideo';
import AddCategory from '../Components/AddCategory';

function Home() {
  const [addVideoResp, setAddVideoResp] = useState({});

  return (
    <div className="container" style={{paddingTop:'20px'}}>
      <div className="row">
        <div className="col-md-3 d-flex flex-column justify-content-center p-3" style={{ backgroundColor: '#f0f0f0', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h1 className='mx-3' style={{ color: '#007bff',fontSize:'40px' }}>Upload Video</h1>
          <AddVideo  setAddVideoResp={setAddVideoResp} />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-end">
          <Link
            to='/watchinghistory'
            style={{ textDecoration: 'none', color: 'white', padding: '10px', backgroundColor: '#007bff', borderRadius: '5px' }}
          >
            Watching History <FaHistory className='fs-5' />
          </Link>
        </div>
      </div>

      <div className='row mt-4'>
        <div className='col-md-9'>
          <h1 className='text-center' style={{ color: 'white' ,fontSize:'40px'}}>All Videos</h1>
          <ViewVideo addVideoResp={addVideoResp} />
        </div>
        <div className='col-md-3'>
          <h1 className='text-center' style={{ color: 'white',fontSize:'40px' }}>Category</h1>
          <AddCategory />
        </div>
      </div>
    </div>
  );
}

export default Home;
