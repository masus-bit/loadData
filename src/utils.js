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
    case options.lastName:
      if (order === 1) {
        return sortData.sort((a, b) => {
          if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
            return -1;
          } else if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
            return 1;
          }
        });
      } else if (order === 2) {
        return sortData.sort((a, b) => {
          if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
            return -1;
          } else if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
            return 1;
          }
        });
      }
    case options.email:
      if (order === 1) {
        return sortData.sort((a, b) => {
          if (a.email.toLowerCase() < b.email.toLowerCase()) {
            return -1;
          } else if (a.email.toLowerCase() > b.email.toLowerCase()) {
            return 1;
          }
        });
      } else if (order === 2) {
        return sortData.sort((a, b) => {
          if (a.email.toLowerCase() > b.email.toLowerCase()) {
            return -1;
          } else if (a.email.toLowerCase() < b.email.toLowerCase()) {
            return 1;
          }
        });
      }
    case options.phone:
      if (order === 1) {
        return sortData.sort((a, b) => a.phone - b.phone);
      } else if (order === 2) {
        return sortData.sort((a, b) => b.phone - a.phone);
      }
  }
};

export const searchContact = (inputValue, contacts, field) => {
  switch (field) {
    case options.id:
      return contacts.filter((item) => {
        let regexp = new RegExp(`${inputValue}`, "i");
        if (regexp.test(item.id)) {
          return item;
        }
      });
    case options.firstName:
      return contacts.filter((item) => {
        let regexp = new RegExp(`${inputValue}`, "i");
        if (regexp.test(item.firstName)) {
          return item;
        }
      });
    case options.lastName:
      return contacts.filter((item) => {
        let regexp = new RegExp(`${inputValue}`, "i");
        if (regexp.test(item.lastName)) {
          return item;
        }
      });
    case options.email:
      return contacts.filter((item) => {
        let regexp = new RegExp(`${inputValue}`, "i");
        if (regexp.test(item.email)) {
          return item;
        }
      });
    case options.phone:
      return contacts.filter((item) => {
        let regexp = new RegExp(`${inputValue}`, "i");
        if (regexp.test(item.phone)) {
          return item;
        }
      });
  }
};
