import styled from "styled-components";
import { useSettings } from "./useSettings";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useUpdateSettings } from "./useUpdateSettings";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;
function UpdateSettingsForm() {
  const {
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
    isLoading,
  } = useSettings();
  const {updateSetting,isUpdating}=useUpdateSettings()

  if (isLoading) return <Spinner />;
  function handleUpdate(e,p){
    const {value}=e.target
    // console.log(value)
    if(!value)return
    updateSetting({[p]:value})

  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input type="number" id="min-nights" defaultValue={minBookingLength} disabled={isLoading} onBlur={(e)=>{handleUpdate(e,"minBookingLength")}}/>
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input type="number" id="max-nights" defaultValue={maxBookingLength} disabled={isLoading} onBlur={(e)=>{handleUpdate(e,"maxBookingLength")}}/>
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabled={isLoading} onBlur={(e)=>{handleUpdate(e,"maxGuestsPerBooking")}}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isLoading} onBlur={(e)=>{handleUpdate(e,"breakfastPrice")}}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
