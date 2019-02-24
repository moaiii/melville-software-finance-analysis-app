import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';

const People = ({
  isVisible,
  setFieldContent,
  fields,
  addField,
  removeField
}) => {
  if (isVisible) {
    return (
      <div className="SubSection --people">
        <h2>People</h2>
        <div className="Subsection__container --people">
          {
            fields.map((field, index) => {
              return (
                <div className="field">
                  <TextField
                    key={`${index}-people-field`}
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
                      subCategory: 'People',
                    })} />
                </div>
              );
            })
          }
        </div>
        <div className="button-container">
          <Button
            onClick={() => addField('People')}
            variant="contained"
            className={``}>
            Add person
          </Button>
        </div>
      </div>
    );
  }

  return null;
};

export default People;
