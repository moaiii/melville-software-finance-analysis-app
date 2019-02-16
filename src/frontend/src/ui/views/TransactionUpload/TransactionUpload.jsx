// @flow
import * as React from "react";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

type Props = {
  uploadStatus: {

  },
  uploadCSV: Function
};
type State = {};

export default class TransactionUpload extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      // uploadStatus: this.props.uploadStatus
    };
  }

  componentDidMount(): void {
    this.props.uploadCSV();
  }

  // shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
  //   return true;
  // };

  upload = (e) => {
    const form = document.getElementById('csv-upload-file');
    const csvFiles = new FormData(form);
    this.props.uploadCSV(csvFiles);
  }

  render(): React.Element<"div"> {

    const { /* uploadStatus */ } = this.props;
    const { } = this.state;

    return (
      <div className={`TransactionUpload`}>
        <Paper className={`TransactionUpload__container`} elevation={1}>
          <Typography component="h3">Select a CSV file from your computer to upload</Typography>
          <input
            accept=".csv"
            className={`TransactionUpload__input`}
            id="csv-upload-file"
            multiple
            type="file"
          />
          <label htmlFor="csv-upload-file">
            <Button
              onClick={() => this.upload()}
              variant="outlined"
              component="span"
              className={`TransactionUpload__button`}>
              Upload
            </Button>
          </label>
        </Paper>
      </div>
    );
  }
}
