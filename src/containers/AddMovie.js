import React from 'react';
import arrowOpen from '../images/ARROWOPEN.svg';
import arrowClose from '../images/ARROWCLOSE.svg';
import AddBoard from '../components/AddBoard';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';



class AddMovie extends React.Component {

  state = {
    active: false,
  }


  handleCollapse = () => {
    this.setState(prevState => {
      return {
        active: !prevState.active
      }
    })
  }

  render() {

      
    const headerStyle = {
      backgroundColor: '#fff',
      minHeight: '48px',
      padding: '0',
      width: '100%',
      userSelect: 'none'
    }

    const headerElem = {
      minHeight: '48px',
      padding: '0',
      width: '100%'
    }


    return (
      <Accordion style={headerStyle} className="addMovie">
        <AccordionItem>
            <AccordionItemTitle style={headerElem}>
              <div className="headerContainer" onClick={this.handleCollapse}>
                <p className="add">Add Movie</p>
                <img className="arrow" src={this.state.active ? arrowClose : arrowOpen } alt="open arrow"/>
              </div>
            </AccordionItemTitle>
            <AccordionItemBody className="boardContainer">
              <AddBoard/>
            </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    )
  }
}
 
export default AddMovie;