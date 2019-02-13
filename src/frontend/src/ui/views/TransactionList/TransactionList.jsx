// @flow
import * as React from "react";

import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Fab from '@material-ui/core/Fab';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SaveIcon from '@material-ui/icons/Save';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';

type Props = {};
type State = {};

export default class TransactionList extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      expanded: -1,
      loading: false,
      success: false,
    };
  }

  componentDidMount(): void {
    this.props.getTransactions();
  }

  handleTransactionSelect = (i) => {
    this.setState({ expanded: i });
  }

  handleCategoryChange = (i, id) => {
    // this.setState({ expanded: i });
  }

  handleSave = () => {
    this.props.saveTransaction();
    this.setState({loading: true}, () => {
      setTimeout(() => {
        this.setState({ success: true, loading: false })
      }, 2000);
    })
  }

  render(): React.Element<"div"> {
    
    const { transactions, categories } = this.props;
    const { expanded, loading, success } = this.state;

    const _transactions = transactions
      .map((t, i) => {
        return (
          <ExpansionPanel 
            key={`${i}-${t.id}-transaction`}
            expanded={expanded === i} 
            onChange={() => this.handleTransactionSelect(i)}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{t.Reference}</Typography>
              <Typography>£{t['Money Out']}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <TextField
                id={`${i}-transaction-${t.id}-hyperlink`}
                label="Receipt hyperlink"
                placeholder="Receipt hyperlink"
                className={`Transaction__hyperlink`}
                margin="normal"
                variant="outlined"/>
              <FormControl>
                <InputLabel htmlFor={`category-${t.id}`}>
                  Category
                </InputLabel>
                <Select
                  value={''}
                  onChange={() => this.handleCategoryChange(i, t.id)}
                  inputProps={{
                    name: 'category',
                    id: `category-${t.id}`,
                  }}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {
                    categories.map((c, i) => {
                      return (
                        <MenuItem 
                          key={`${i}-${t.id}-menu-item`}
                          value={c}>{c}</MenuItem>
                      );
                    })
                  }
                </Select>
              </FormControl>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })

    return (
      <div className={`TransactionList`}>
        {_transactions}
        <div>
          <Fab color="primary" onClick={() => this.handleSave()}>
            {success ? <CheckIcon /> : <SaveIcon />}
          </Fab>
          {loading && <CircularProgress size={68} />}
        </div>
      </div>
    );
  }
}
