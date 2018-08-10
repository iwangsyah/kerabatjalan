import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import logo from './icon.png';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import 'rc-menu/assets/index.css';import './App.css';
import { Flex, Box } from 'reflexbox'

class App extends Component {
  handleSelect(info) {
    console.log('selected ', info);
  }

  handleDeselect(info) {
    console.log('deselect ', info);
  }

  render() {
    let titleRight1 = (<span>Trip Wisata &emsp; ▾</span>);
    let titleRight2 = (<span>Nasional</span>);
    let titleRight3 = (<span>Internasional</span>);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Menu
          multiple
          onSelect={this.handleSelect}
          onDeselect={this.handleDeselect}
          defaultSelectedKeys={['2', '1-1']}
          mode={'horizontal'}
          style={{background: '#afeeee'}}
        >
          <MenuItem key="1">Home</MenuItem>
          <MenuItem key="2">About</MenuItem>
          <MenuItem key="3">Gallery</MenuItem>
          <SubMenu title={titleRight1} key="4">
            <SubMenu
              key="4-1"
              title={titleRight2}
            >
              <MenuItem key="4-1-1">Bromo</MenuItem>
              <MenuItem key="4-1-2-">Bandung</MenuItem>
              <MenuItem key="4-1-3">Malang</MenuItem>
            </SubMenu>
            <SubMenu
              key="4-2"
              title={titleRight3}
            >
              <MenuItem key="4-2-1">Malaysia</MenuItem>
              <MenuItem key="4-2-2">Singapore</MenuItem>
              <MenuItem key="4-2-3">Thailand</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem key="4-3">Promo</MenuItem>
        </Menu>
        <Carousel autoplay={true}
          renderCenterLeftControls={({ previousSlide }) => console.log('prev')}
          renderCenterRightControls={({ nextSlide }) => console.log('next')}
        >
          <img src={require('./images/001.jpg')} alt="gambar1" />
          <img src={require('./images/002.jpg')} alt="gambar2"/>
          <img src={require('./images/001.jpg')} alt="gambar3"/>
        </Carousel>
        <Flex p={0} wrap>
          <Box w={1/2} style={{border:'1px solid black', margin:0, height: 300, backgroundColor:'#c3edd5'}}>
            <p style={{backgroundColor:'#b4c5bf', padding:10}}><b>HEADLINE NEWS</b></p>
          </Box>
          <Box w={1/2} style={{border:'1px solid black', margin:0, height: 300, backgroundColor:'#e6cdcd'}}>
            <p style={{backgroundColor:'#b4c5bf', padding:10}}><b>NEWS</b></p>
          </Box>
        </Flex>
        <Flex p={0} wrap>
          <Box w={1/2} style={{border:'1px solid black', margin:0, height: 300}}>
            <p style={{backgroundColor:'#b4c5bf', padding:10}}><b>RECENT NEWS</b></p>
            <div>
              afadsisaconhoishfmioshdf isohcfoishdf csdfhsidhf csodhf spf ucsdhfusihcs dihsic shiishd uigsd fuihsd hsidhf ciusdhushc iusdhuh scuhfusdh fchdsuihf uicsdf uishd fchsduihf csudhf suhdf cushdfuh suicdfhusdhf ucs hfdu fhus ducf sud fhucisd fusc udfh usdhf cusd fuhs dufc udscf udshf cushd cfhus duhfus fos dfchsiudf sofhso hufi chsui ufc us cuishc uisdh fuch fuisd uch fuisd fuch dfuisfhc uihsf us cush fucics fchudfc siuh
            </div>
          </Box>
          <Box w={1/2} style={{border:'1px solid black', margin:0, height: 300}}>
            <p style={{backgroundColor:'#b4c5bf', padding:10}}><b>PROMO</b></p>
            <div>
              <img src={require('./images/promo1.jpg')} alt="gambar1" style={{width:200, margin:5}}/>
              <img src={require('./images/promo2.jpg')} alt="gambar2" style={{width:200, margin:5}}/>
              <img src={require('./images/promo3.jpg')} alt="gambar3" style={{width:200, margin:5}}/>
            </div>
          </Box>
        </Flex>
        <hr/>
        <p style={{backgroundColor:'#b4c5bf', padding:10}}><b>GALLERY</b></p>
        <Carousel slidesToShow={5} cellSpacing={30}>
          <img src={require('./images/001.jpg')} alt="gambar1" />
          <img src={require('./images/002.jpg')} alt="gambar2"/>
          <img src={require('./images/001.jpg')} alt="gambar3"/>
          <img src={require('./images/001.jpg')} alt="gambar4" />
          <img src={require('./images/002.jpg')} alt="gambar5"/>
          <img src={require('./images/001.jpg')} alt="gambar6"/>
          <img src={require('./images/001.jpg')} alt="gambar7" />
          <img src={require('./images/002.jpg')} alt="gambar8"/>
          <img src={require('./images/001.jpg')} alt="gambar9"/>
          <img src={require('./images/001.jpg')} alt="gambar10" />
          <img src={require('./images/002.jpg')} alt="gambar11"/>
          <img src={require('./images/001.jpg')} alt="gambar12"/>
        </Carousel>
        <div className="App-footer">
          <p className="App-intro">
            Alamat :<br/>
            Jalan Cempaka 7\n<br/>
            No. 122A<br/>
            Jakasampurna, Bekasi
          </p>
        </div>
      </div>
    );
  }
}

export default App;
