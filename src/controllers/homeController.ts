import { Request , Response } from 'express';

import { Login } from '../models/Login';
import { createMenuObject } from '../helpers/createMenuObjects';

export const home = (req: Request, res: Response ) =>{

    res.send('home');

    /*
    let list = Login.getAll();
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner:{
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
    */

}

export const dogs = (req: Request, res: Response ) =>{
    
    let list = Login.getFromType('dog');

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner:{
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });

}


