const d = {
  left: {
    left: {
      left: 1,
      right: {
        left: 0,
        right: 1,
      },
    },
    right: {
      left: 0,
      right: 1,
    },
  },
  right: 1,
};

const foo = (obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = foo(obj[key])
    };
  };

  if (typeof obj === 'number') {
    return obj === 1 ? 0 : 1;
  };

  return obj;
};

foo(d);
console.log(d);
