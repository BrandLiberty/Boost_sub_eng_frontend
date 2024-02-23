import React from 'react';
import styles from '../../assets/css/branches.module.css'
// import '../../assets/css/component/branches.css'
import Card from './Card';

const Branch = () => {
  const numberOfCards = 14; // Define the number of cards you want to display

  const addressArr = [{
    name: '',
    address : '',
    location : ''
  },{
    name: '',
    address : '',
    location : ''
  },{
    name: '',
    address : '',
    location : ''
  },{
    name: '',
    address : '',
    location : ''
  },{
    name: '',
    address : ' ',
    location : ''
  },{
    name: '',
    address : '',
    location : ''
  },{
    name: '',
    address : '',
    location : ''
  },{
    name: '',
    address : '',
    location : ''
  },{
    name: ' ',
    address : '',
    location : ''
  },{
    name: '',
    address : ' ',
    location : ''
  },{
    name: '',
    address : ' ',
    location : ''
  },{
    name: '',
    address : '',
    location : ''
  },{
    name: '',
    address : '',
    location : ''
  },{
    name: '',
    address : '',
    location : ' '
  }]

  const cards = addressArr.map((info , index)=><Card key={index} index={index} info={info}/>) 
 

  return (
    <>
      <section className="about-part branches-part">
        <div className="container">
          <div className="about-part-details 
                branches-part-details text-center">
            <h2>Our Branches</h2>
            <div className="about-part-content">
              <div className="breadcrumbs">
                <div className="container">
                  <ol className="breadcrumb">
                    <li><a href="/home" style={{ color: 'white' }}>home</a><span style={{ color: 'white' }}>//</span></li>
                    <li><a href="/commitment-to-esg" style={{ color: 'white' }}>Our Branches</a></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <div className={styles.container}>
        <div className="esg-head heading-font-size background-clip" style={{textAlign:`center`}}>
          OUR BRANCHES
        </div>
        <div className={styles.firstSection}>
          {/* Content of the first section */}
          <iframe onScrollCapture={null} onScroll={()=>null} src="https://www.google.com/maps/d/u/0/embed?mid=1I8eG8SsOT94QL59kCx-6UT1HLb1banw&ehbc=2E312F&noprof=1" width="100%" height="100%"></iframe>
        </div>
        <div className={styles.secondSection}>
          {/* Cards in the second section */}
          {cards}
        </div>
      </div>
    </>
  );
};

export default Branch;
