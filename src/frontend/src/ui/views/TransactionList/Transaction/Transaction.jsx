import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export default ({
  categories,
  transactionData, 
  handleTransactionSelect, 
  handleCategoryChange, 
  expanded,
  index
}) => {
  const { id, Reference } = transactionData;
  const isCredit = !!parseInt(transactionData['Money In'].replace('£', ''));

  const value = isCredit 
    ? `+ £${transactionData['Money In']}` 
    : `- £${transactionData['Money Out']}` ;

  return (
    <ExpansionPanel 
      key={`${index}-${id}-transaction`}
      expanded={expanded} 
      onChange={() => handleTransactionSelect(index)}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{Reference}</Typography>
        <Typography>{value}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <TextField
          id={`${index}-transaction-${id}-hyperlink`}
          label="Receipt hyperlink"
          placeholder="Receipt hyperlink"
          className={`Transaction__hyperlink`}
          margin="normal"
          variant="outlined"/>
        <FormControl>
          <InputLabel htmlFor={`category-${id}`}>
            Category
          </InputLabel>
          <Select
            value={''}
            onChange={() => handleCategoryChange(index, id)}
            inputProps={{
              name: 'category',
              id: `category-${id}`,
            }}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {
              categories.map((category, i) => {
                return (
                  <MenuItem 
                    key={`${i}-${id}-menu-item`}
                    value={category}>
                      {category}
                  </MenuItem>
                );
              })
            }
          </Select>
        </FormControl>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}