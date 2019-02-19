import React from 'react';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';


const BillableItem = ({
  unitPrice,
  description,
  quantity,
  totalPrice,
  index,
  removeBillableItem,
  setBillableItemField,
}) => {
  return (
    <div className={'billable-item'}>
      <TextField
        id="billable-item-description"
        label="Description"
        type="text"
        value={description}
        onChange={e => setBillableItemField({
          key: index,
          property: 'description',
          value: e.target.value,
          middlewareMode: 'last',
        })}
        className={''}
        margin="normal" />
      <TextField
        id="billable-item-unit-price"
        label="Unit price"
        type="number"
        value={unitPrice}
        onChange={e => setBillableItemField({
          key: index,
          property: 'unitPrice',
          value: e.target.value,
          middlewareMode: 'last',
        })}
        className={''}
        margin="normal" />
      <TextField
        id="billable-item-quantity"
        label="Quantity"
        type="number"
        value={quantity}
        onChange={e => setBillableItemField({
          key: index,
          property: 'quantity',
          value: e.target.value,
          middlewareMode: 'last',
        })}
        className={''}
        margin="normal" />
      <TextField
        id="billable-item-total-price"
        label="Total price"
        type="number"
        value={totalPrice}
        className={''}
        margin="normal" />
      <Button
        color="secondary"
        onClick={() => removeBillableItem(index)}>
        <CloseIcon />
      </Button>
    </div>
  );
};

export default BillableItem;
