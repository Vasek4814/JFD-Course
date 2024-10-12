const getKiller = (suspectinfo, deadpeople) => {
  for (const name in suspectinfo) {
    const peoples = suspectinfo[name];
    const isKiller = deadpeople.every((name) => peoples.includes(name));
    if (isKiller) {
      return name;
    }
    console.log(name, isKiller);
  }
};

const result = getKiller(
  {
    James: ['Jacob', 'Bill', 'Lucas'],
    Johnny: ['David', 'Kyle', 'Lucas'],
    Peter: ['Lucy', 'Kyle'],
  },
  ['Lucas', 'Bill']
);

<<<<<<< HEAD
const result2 = getKiller(
  {
    Brad: [],
    Megan: ['Ben', 'Kevin'],
    Finn: [],
  },
  ['Ben']
);
console.log(result, result2);
=======


}

getKiller(
    {
        'James': ['Jacob', 'Bill', 'Lucas'],
        'Johnny': ['David', 'Kyle', 'Lucas'],
        'Peter': ['Lucy', 'Kyle'],
    }, ['Lucas', 'Bill']
 );
  
 getKiller(
    {
        'Brad': [],
        'Megan': ['Ben', 'Kevin'],
        'Finn': [],
    },
    ['Ben']
 );
>>>>>>> b94c05fa01783a9748f3f334b504f16d94b7faad
