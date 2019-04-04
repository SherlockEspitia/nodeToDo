const fs = require('fs');

let listToDo = [];

const saveDB = () => {

    let data = JSON.stringify(listToDo);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
};


const loadDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }

};


const crear = (description) => {

    loadDB();

    let porHacer = {
        description,
        completed: false
    };

    listToDo.push(porHacer);

    saveDB();

    return porHacer;
};

const getListed = () => {
    loadDB();
    return listToDo;
}

const update = (description, completed = true) => {

    loadDB();

    let index = listToDo.findIndex(goal => {
        return goal.description === description;
    });

    if (index >= 0) {
        listToDo[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const deleted = (description) => {
    loadDB();
    let newList = listToDo.filter(goal => {
        return goal.description !== description;
    });
    if (listToDo.length === newList.length) return false;
    else {
        listToDo = newList;
        saveDB();
        return true;
    }
};
module.exports = {
    crear,
    getListed,
    update,
    deleted
};