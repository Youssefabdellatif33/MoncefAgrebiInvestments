import { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const PortfolioFullWidthIsotope = () => {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState('*');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const Isotope = require('isotope-layout');

      setTimeout(() => {
        isotope.current = new Isotope('.project-row', {
          itemSelector: '.project-column',
          percentPosition: true,
          masonry: {
            columnWidth: '.project-column',
          },
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
          },
        });
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === '*'
        ? isotope.current.arrange({ filter: '*' })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? 'active' : '');

  return (
    <Fragment>
      <div className="row justify-content-center" style={{padding:10}}>
        <div className="col-lg-10">
          <div className="portfolio-filter-button text-center mb-60 wow fadeInDown">
            <ul className="filter-btn">
             
            </ul>
          </div>
        </div>
      </div>
      <div className="row project-row">
        <div className="col-lg-4 col-md-4 col-sm-12 project-column cat-2">
          <div className="img-holder" style={{ height: '800px', overflow: 'hidden' ,borderRadius:250 }}>
            <img src="assets/images/about/Camel9.jpg" alt="Camel in the desert" style={{ width: 400, height: 700, marginLeft:20 }} />
          </div>
         
          <div className="description" style={{ flex: 1, paddingLeft: 20, alignSelf: 'center' }}>
            <div className="hover-content"></div>
          </div>
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12 project-column cat-1" style={{ padding: 30 }}>
          <h3 className="title">
            <Link href="/portfolio-details">
              <a>Kharai</a>
            </Link>
          </h3>
          <a style={{
              fontSize: '18px',
              lineHeight: '1.8',
              padding: '20px',
              display: 'block',
              width: '100%',
              textAlign: 'justify',
            }}>
            Sit amet consectetur adipisc elit sed eiusmod tempor incdunt labore et dolore magna Sit amet consectetur adipisc elit sed eiusmod tempor incdunt labore et dolore magna Sit amet consectetur adipisc elit sed eiusmod tempor incdunt labore et dolore magna Sit amet consectetur adipisc elit sed eiusmod tempor incdunt labore et dolore magna Sit amet consectetur adipisc elit sed eiusmod tempor incdunt labore et dolore magna.
            Sit amet consectetur adipisc elit sed eiusmod tempor incdunt labore et dolore magna
          </a>
          <br />
          <a style={{
              fontSize: '18px',
              lineHeight: '1.8',
              padding: '20px',
              display: 'block',
              width: '100%',
              textAlign: 'justify',
            }}>
            Sit amet consectetur adipisc elit sed eiusmod tempor incdunt labore et dolore magna Sit amet consectetur adipisc elit sed eiusmod tempor incdunt labore et dolore magna Sit amet consectetur adipisc elit sed eiusmod tempor incdunt labore et dolore magna Sit amet consectetur adipisc elit sed eiusmod tempor incdunt labore et dolore magna Sit amet consectetur adipisc elit sed eiusmod tempor incdunt labore et dolore magna.
          </a>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-1">
          <div className="project-item-three mb-30 wow fadeInUp">
            <div className="img-holder" style={{ height: '300px', overflow: 'hidden' }}>
              <img src="assets/images/about/Camel9.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link href="/portfolio-details">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link href="/portfolio-details">
                      <a>Kharai</a>
                    </Link>
                  </h3>
                
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-2">
          <div className="project-item-three mb-30 wow fadeInDown">
            <div className="img-holder" style={{ height: '300px', overflow: 'hidden' }}>
              <img src="assets/images/about/camelfarm.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link href="/portfolio-details">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link href="/portfolio-details">
                      <a>Kharai</a>
                    </Link>
                  </h3>
                
                </div>
              </div>
            </div>
          </div>
        </div>

      

        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-4">
          <div className="project-item-three mb-30 wow fadeInDown">
            <div className="img-holder" style={{ height: '300px', overflow: 'hidden' }}>
              <img src="assets/images/about/Camel2.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link href="/portfolio-details">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link href="/portfolio-details">
                      <a>Kharai</a>
                    </Link>
                  </h3>
                  <p>
                    {/* <a href="#">Agriculture</a>,<a href="#">Foods</a> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-5">
          <div className="project-item-three mb-30 wow fadeInUp">
            
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 project-column cat-6">
          <div className="project-item-three mb-30 wow fadeInDown">
            <div className="img-holder" style={{ height: '300px', overflow: 'hidden' }}>
              <img src="assets/images/about/Camel0.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="hover-portfolio">
                <div className="icon-btn">
                  <Link href="/portfolio-details">
                    <a>
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="hover-content">
                  <h3 className="title">
                    <Link href="/portfolio-details">
                      <a>Kharai</a>
                    </Link>
                  </h3>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  );
};

export default PortfolioFullWidthIsotope;
