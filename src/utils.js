export const options = {
  itemsInPage: 50,
  id: "id",
  firstName: "firstName",
  lastName: "lastName",
  email: "email",
  phone: "phone",
};

export const sliceArr = (arr) => {
  var i,
    j,
    tmp = [];
  for (i = 0, j = arr.length; i < j; i += options.itemsInPage) {
    tmp.push(arr.slice(i, i + options.itemsInPage));
  }
  return tmp;
};

export const getData = (size, data, page) => {
  console.log(data);
  return !size == "big" ? data : sliceArr(data)[page - 1];
};
export const sortData = (data, element, order) => {
  const sortData = data.slice();
  switch (element) {
    case options.id:
      if (order === 1) {
        return sortData.sort((a, b) => a.id - b.id);
      } else if (order === 2) {
        return sortData.sort((a, b) => b.id - a.id);
      }
    case options.firstName:
      if (order === 1) {
        return sortData.sort((a, b) => {
          if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
            return -1;
          } else if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
            return 1;
          }
        });
      } else if (order === 2) {
        return sortData.sort((a, b) => {
          if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
            return -1;
          } else if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
            return 1;
          }
        });
      }
  }
};
