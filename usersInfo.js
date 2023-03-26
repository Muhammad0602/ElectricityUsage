import { Temporal } from '@js-temporal/polyfill';

const now = Temporal.Now.plainDateISO();

const usersInfo = [
    {
        Address: "Sino1, kuch.J.Rasulov, b. 67/7, u. 60",
        "Full Name": "Davlatov Davlatali",
        Date: now,
        Reading: [4536, 4638, 4758, 4821, 4912, 4999]
    },
    {
        Address: "Sino1, kuch.J.Rasulov, b. 67/7, u. 63",
        "Full Name": "Sodikov Bahrom",
        Date: now,
        Reading: [4265, 4372, 4521, 4612, 4689, 4712]
    },
    {
        Address: "Sino1, kuch.J.Rasulov, b. 67/7, u. 65",
        "Full Name": "Pirov Yosh",
        Date: now,
        Reading: [2876, 2932, 2997, 3087, 3176, 3245]
    }

]

export {usersInfo};