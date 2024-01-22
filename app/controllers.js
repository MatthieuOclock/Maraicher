import data from "./data.js";

export const about = (req, res) => {
    res.locals = { 
        title: "about"
    }
    res.render('index');
};

export const list = (req, res) => { 
    const array = []; 
    for(const item of data){ 
        array.push(item.title); 
    }
    res.locals = { 
        title: "list", 
        product: array.sort()
    }
    res.render('index');
};

export const product = (req, res) => {
    const url = data.find(x => x.slug == req.params.name); 

    res.locals = { 
        title: "product", 
        DataUrl : url
    }
    res.render('index');
};

export const fruit = (req, res) => { 
    const array = []; 
    for(const item of data){ 
        if(item.category == "fruits"){
            array.push(item.title); 
        }
    }
    res.locals = { 
        title: "list-fruits", 
        product: array.sort()
    }
    res.render('index');
};

export const legume = (req, res) => { 
    const array = []; 
    for(const item of data){ 
        if(item.category == "legumes"){
            array.push(item.title); 
        }
    }
    res.locals = { 
        title: "list-legumes", 
        product: array.sort()
    }
    res.render('index');
};

