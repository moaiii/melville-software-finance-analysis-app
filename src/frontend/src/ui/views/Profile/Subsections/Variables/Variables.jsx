import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';

const Variables = ({
  isVisible,
  setFieldContent,
  fields,
  addField,
  removeField
}) => {
  if (isVisible) {
    return (
      <div className="SubSection --variables">
        <h2>Variables</h2>
        <div className="Subsection__container --variables">
          {
            fields.map((field, index) => {
              return (
                <div className="field">
                  <TextField
                    key={`${index}-variables-field`}
                    id={field.key}
                    label={field.label}
                    type={field.type}
                    value={field.value}
                    onChange={e => setFieldContent({
                      key: field.key,
                      value: e.target.value,
                      middlewareMode: 'first',
                    })}
                    className={''}
                    margin="normal" />
                  <CancelIcon
                    onClick={() => removeField({
                      index,
                      subCategory: 'Variables',
                    })} />
                </div>
              );
            })
          }
        </div>
        <div className="button-container">
          <Button
            onClick={() => addField('Variables')}
            variant="contained"
            className={``}>
            Add variable
          </Button>
        </div>
      </div>
    );
  }

  return null;
};

export default Variables;
