// @flow
import Calendar from './Calendar.jsx';
import {connect} from 'react-redux';
import {setCalendarDataValues} from './Calendar.action';
import store from '../../../db/store';

function mapStoreToProps( store ) {
  return {
    calendarData: store.CalendarReducer.calendarData,
  }
}
 
function mapDispatchToProps( dispatch ) {
  return {
    setCalendarDataValues: () => dispatch(setCalendarDataValues())
  }
}


export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Calendar);
