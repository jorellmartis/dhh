import React,{FormEvent, SyntheticEvent, useState} from 'react'
import styled from 'styled-components'
import '@sentisso/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker,{DayValue} from '@sentisso/react-modern-calendar-datepicker';
import { CREATE_RESERV } from '../../queries/forms';
import apolloClient from '../../helpers/apollo'

const FormBlock = styled.div`
    margin-left: 20px;
    margin-top: -20px;
    z-index: 2;
    background: white;
    width: 30%;
`
const FormContainer = styled.div`
  width: 100%;
  box-shadow: 0 6px 12px 0 rgb(0 0 0 / 4%), 0 1px 45px 0 rgb(0 0 0 / 8%);
  form{
    display: flex;
    flex-direction: column;
    padding: 5% 10%;
    .DatePicker{
      margin-bottom: 10px;
      z-index: 3;
    }
  }
`
type pageID ={
  pageID:{
    id:number
  }
}
const ReserveProp = ({pageID}: pageID) => {
  const [startDay, setStartDay] = useState<DayValue>(null);
  const [endDay, setEndDay] = useState<DayValue>(null);
  const handleFormSubmission = async (e: FormEvent) => {
    e.preventDefault();
    const startDateFormatted = new Date(`${startDay?.year}-${startDay?.month}-${startDay?.day}`)
    const endDateFormatted = new Date(`${endDay?.year}-${endDay?.month}-${endDay?.day}`)
    //converting date to yy-m-dd format
    let startDate = JSON.stringify(startDateFormatted)
    startDate = startDate.slice(1,11)
    let endDate = JSON.stringify(endDateFormatted)
    endDate = endDate.slice(1,11)
    console.log(startDate,"start",endDate,"end")
    const { data } = await apolloClient.mutate({
      mutation: CREATE_RESERV,
      variables: {
        startDate: startDate,
        endDate: endDate,
        propertyID: pageID,
      },
    });
  }
  return (
    <FormBlock>
      <FormContainer>
        <form onSubmit={handleFormSubmission}>
          <h3>Book this apartment</h3>
          <h4>From AED1,082.00 per night</h4>
          <DatePicker
          value={startDay}
          onChange={setStartDay}
          calendarPopperPosition= "bottom"
          inputPlaceholder="Start day"
          />
          <DatePicker
          value={endDay}
          onChange={setEndDay}
          calendarPopperPosition= "bottom"
          inputPlaceholder="End day"
          />
          <input style={{display:'block'}} type="submit" value="Submit" />

          {/* <input  placeholder='Start Date' type='text' id='startDate' name='startDate'></input><br/>
          <label htmlFor='startDate'><DatePicker/></label><br/>
          <input placeholder='End Date' type='text' id='endDate' name='endDate'></input>
          <label htmlFor='endDate'></label><br/> */}
        </form>
      </FormContainer>
    </FormBlock>
  )
}

export default ReserveProp