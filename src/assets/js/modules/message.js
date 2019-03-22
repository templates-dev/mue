/*
█████████████████████████████████████████████████████████████                                                                        
██                                                         ██
██           ███    ███ ██    ██ ███████                   ██  
██           ████  ████ ██    ██ ██                        ██ 
██           ██ ████ ██ ██    ██ █████                     ██ 
██           ██  ██  ██ ██    ██ ██                        ██ 
██           ██      ██  ██████  ███████                   ██ 
██                                                         ██ 
██                                                         ██                                                                                                 
██      Copyright 2018-2019 David Ralph (ohlookitsderpy)   ██
██                 Licensed under MIT                      ██                    
██      GitHub: https://github.com/ohlookitsderpy/Mue      ██
██                                                         ██
██          Special thanks to contributors! <3             ██
█████████████████████████████████████████████████████████████
*/

const { setHTMLContent } = require('./util.js');

module.exports = class Message {
    // English
    static engMessageSet() {
        const hour = new Date().getHours(); // Get the current hour
        let time = 'Good evening'; // Set the default time string to "Good evening"	
        if (hour < 12) time = 'Good morning'; //If it's before 12am, set the time string to "Good morning"
        else if (hour < 18) time = 'Good afternoon'; //If it's before 6pm, set the time string to "Good afternoon"
        else time = time; //If it's unknown, set the time stirng to "Good evening"
        setHTMLContent('.greeting', time); // Write the string contents to the HTML
    }

    // Italian
    static itMessageSet() {
        const hour = new Date().getHours(); // Get the current hour
        let time = 'Buongiorno';
        if (hour > 18) time = 'Buonasera'; //In Italian there is just Buongiorno or Buonasera
        setHTMLContent('.greeting', time); // Write the string contents to the HTML
    }

    // Dutch
    static nlMessageSet() {
        const hour = new Date().getHours(); // Get the current hour
        let time = 'Goedemiddag'; // Set the default time string to "Good evening"
        if (hour < 12) time = 'Goedemorgen'; //If it's before 12am, set the time string to "Good morning"
        else if (hour > 18) time = 'Goedenavond'; //If it's before 6pm, set the time string to "Good afternoon"
        else time = time; //If it's unknown, set the time stirng to "Good evening"
        setHTMLContent('.greeting', time); // Write the string contents to the HTML
    }

    // French
    static frMessageSet() {
        const hour = new Date().getHours(); // Get the current hour
        let time = 'Bonsoir'; // Set the default time string to "Good evening"
        if (hour < 12) time = 'Bonjour'; //If it's before 12am, set the time string to "Good morning"
        else if (hour > 18) time = 'Bonne après-midi'; //If it's before 6pm, set the time string to "Good afternoon"
        setHTMLContent('.greeting', time); // Write the string contents to the HTML
    }

    // Spanish
    static spMessageSet() {
        const hour = new Date().getHours(); // Get the current hour
        let time = 'Buenas Tardes'; // Set the default time string to "Good evening"
        if (hour < 12) time = 'Buenos Días'; // If it's before 12am, set the time string to "Good morning"
        else if (hour > 18) time = 'Buenas Noches'; // If it's before 6pm, set the time string to "Good afternoon"
        else time = time; //If it's unknown, set the time stirng to "Good evening"
        setHTMLContent('.greeting', time); // Write the string contents to the HTML
    }

    // Finnish
    static fiMessageSet() {
        const hour = new Date().getHours(); // Get the current hour
        let time = 'Hyvää iltaa'; // Set the default time string to "Good evening"
        if (hour < 12) time = 'Hyvää huomenta'; // If it's before 12am, set the time string to "Good morning"
        else if (hour > 18) time = 'Hyvää iltapäivää'; // If it's before 6pm, set the time string to "Good afternoon"
        else time = time; //If it's unknown, set the time stirng to "Good evening"
        setHTMLContent('.greeting', time); // Write the string contents to the HTML
    }

    // German
    static deMessageSet() {
        const hour = new Date().getHours(); // Get the current hour
        let time = 'Guten Abend'; // Set the default time string to "Good evening"
        if (hour < 12) time = 'Guten Morgen'; // If it's before 12am, set the time string to "Good morning"
        else if (hour > 18) time = 'Guten Nachmittag'; // If it's before 6pm, set the time string to "Good afternoon"
        setHTMLContent('.greeting', time); // Write the string contents to the HTML
    }

    // Hebrew
    static heMessageSet() {
        const hour = new Date().getHours(); // Get the current hour
        let time = 'ערב טוב'; // Set the default time string to "Good evening"
        if (hour < 12) time = 'בוקר טוב'; // If it's before 12am, set the time string to "Good morning"
        else if (hour > 18) time = 'אחר הצהריים טובים'; // If it's before 6pm, set the time string to "Good afternoon"
        else time = time; //If it's unknown, set the time stirng to "Good evening"
        setHTMLContent('.greeting', time); // Write the string contents to the HTML
    }

    // Russian
    static ruMessageSet() {
        const hour = new Date().getHours(); // Get the current hour
        let time = 'Добрый Вечер'; // Set the default time string to "Good evening"
        if (hour < 12) time = 'добрый утро'; // If it's before 12am, set the time string to "Good morning"
        else if (hour > 18) time = 'добрый день'; // If it's before 6pm, set the time string to "Good afternoon"
        else time = time; //If it's unknown, set the time stirng to "Good evening"
        setHTMLContent('.greeting', time); // Write the string contents to the HTML
    }

    // Arabic
    static arMessageSet() {
        const hour = new Date().getHours(); // Get the current hour
        let time = 'مساء الخير'; // Set the default time string to "Good evening"
        if (hour < 12) time = 'صباح الخير'; // If it's before 12am, set the time string to "Good morning"
        else if (hour > 18) time = 'مساء الخير'; // If it's before 6pm, set the time string to "Good afternoon"
        else time = time; //If it's unknown, set the time stirng to "Good evening"
        setHTMLContent('.greeting', time); // Write the string contents to the HTML
    }

    // Swedish
    static svMessageSet() {
        const hour = new Date().getHours(); // Get the current hour
        let time = 'God kväll'; // Set the default time string to "Good evening"
        if (hour < 12) time = 'God morgon'; // If it's before 12am, set the time string to "Good morning"
        else if (hour > 18) time = 'Dod eftermiddag'; // If it's before 6pm, set the time string to "Good afternoon"
        setHTMLContent('.greeting', time); // Write the string contents to the HTML
    }
};