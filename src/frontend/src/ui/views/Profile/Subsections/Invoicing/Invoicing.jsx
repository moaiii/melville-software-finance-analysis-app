import React from 'react';
import TextField from '@material-ui/core/TextField';


const Invoicing = ({ isVisible, setFieldContent, fields }) => {
  if (isVisible) {
    return (
      <div className="SubSection --invoicing">
        <h2>Invoicing</h2>
        <div className="Subsection__container --invoicing">
          <TextField
            id="address-field-1"
            label="Address line 1"
            type="text"
            value={fields.addressline1}
            onChange={e => setFieldContent({
              key: 'addressline1',
              value: e.target.value,
              middlewareMode: 'first',
            })}
            className={''}
            margin="normal" />
          <TextField
            id="address-field-2"
            label="Address line 2"
            type="text"
            value={fields.addressline2}
            onChange={e => setFieldContent({
              key: 'addressline2',
              value: e.target.value,
              middlewareMode: 'first',
            })}
            className={''}
            margin="normal" />
          <TextField
            id="address-field-postcode"
            label="Postcode"
            type="text"
            value={fields.postcode}
            onChange={e => setFieldContent({
              key: 'postcode',
              value: e.target.value,
              middlewareMode: 'first',
            })}
            className={''}
            margin="normal" />
          <TextField
            id="address-field-phone"
            label="Phone"
            type="telephone"
            value={fields.phone}
            onChange={e => setFieldContent({
              key: 'phone',
              value: e.target.value,
              middlewareMode: 'first',
            })}
            className={''}
            margin="normal" />
        </div>
      </div>
    );
  }

  return null;
};

export default Invoicing;
