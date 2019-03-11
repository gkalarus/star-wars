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

    return (
      <Accordion className="addMovie">
        <AccordionItem>
            <AccordionItemTitle className="accItemTitle">
              <div className="headerContainer" onClick={this.handleCollapse}>
                <p className="add">Add Movie</p>
                <img className="arrow" src={this.state.active ? arrowClose : arrowOpen } alt="open arrow"/>
              </div>
            </AccordionItemTitle>
            <AccordionItemBody className={this.state.active ? "boardContainer" : ''}>
              <AddBoard 
                active={this.state.active}
                handleAddMovie={this.props.handleAddMovie}
              />
            </AccordionItemBody>
        </AccordionItem>
      </Accordion>
    )
  }
}
 
export default AddMovie;