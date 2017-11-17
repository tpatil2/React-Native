export const selectLibrary = (libraryId) =>{
  return {
    type: 'select_library',
    payload: libraryId
  };
};
//this file contains action creater which tells what action to perform
