import React from "react";
import { MenuItem, Select, FormControl } from "@material-ui/core";
const QuizResultFilter = function ({ filteredValue, handleChange, appLocale }) {
  return (
    <div className="quiz-result-filter">
      {/* <FormControl variant="standard" sx={{ minWidth: 120 }}> */}
      <Select value={filteredValue} onChange={handleChange}>
        <MenuItem value="all">{appLocale.resultFilterAll}</MenuItem>
        <MenuItem value="correct">{appLocale.resultFilterCorrect}</MenuItem>
        <MenuItem value="incorrect">{appLocale.resultFilterIncorrect}</MenuItem>
      </Select>
      {/* </FormControl> */}
    </div>
  );
};

export default QuizResultFilter;
