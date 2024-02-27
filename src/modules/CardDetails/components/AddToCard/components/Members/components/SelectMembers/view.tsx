import { Autocomplete, Checkbox, CircularProgress, TextField } from '@/components/UIElements';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { UserOption } from '../../type';

type SelectMembersViewProps = {
  isLoading: boolean;
  options: UserOption[];
  onChangeMembers: (_params: {
    members?: UserOption[] | undefined;
    selectedRecommendationIds?: string[] | undefined;
  }) => void;
};

function SelectMembersView({ isLoading, options, onChangeMembers }: SelectMembersViewProps) {
  return (
    <Autocomplete
      multiple
      size="small"
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      style={{ width: '100%', marginTop: 20 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Add members"
          placeholder="Members"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading && <CircularProgress color="inherit" size={20} />}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      onChange={(_event, selectedValues, _reason, _details) => {
        onChangeMembers({ members: selectedValues });
      }}
    />
  );
}

export default SelectMembersView;
