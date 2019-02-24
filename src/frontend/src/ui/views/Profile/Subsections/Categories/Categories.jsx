import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';

const Categories = ({
  isVisible,
  setFieldContent,
  fields,
  addField,
  removeField
}) => {
  if (isVisible) {
    return (
      <div className="SubSection --categories">
        <h2>Categories</h2>
        <div className="Subsection__container --categories">
          {
            fields.map((field, index) => {
              return (
                <div className="field">
                  <TextField
                    key={`${index}-category-field`}
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
                      subCategory: 'Categories',
                    })} />
                </div>
              );
            })
          }
        </div>
        <div className="button-container">
          <Button
            onClick={() => addField('Categories')}
            variant="contained"
            className={``}>
            Add category
          </Button>
        </div>
      </div>
    );
  }

  return null;
};

export default Categories;
