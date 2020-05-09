var CronJob = require('cron').CronJob;
const log4js = require('log4js');
const fs = require('fs');
const nodemailer = require("nodemailer");


const athloneTimes = require('./cities/athlone');
const ballinaTimes = require('./cities/ballina');
const ballinasloeTimes = require('./cities/ballinasloe');
const ballyhaunisTimes = require('./cities/ballyhaunis');
const carlowTimes = require('./cities/carlow');
const castlebarTimes = require('./cities/castlebar');
const cavanTimes = require('./cities/cavan');
const clonmelTimes = require('./cities/clonmel');
const corkTimes = require('./cities/cork');
const donegalTimes = require('./cities/donegal');
const droghedaTimes = require('./cities/drogheda');
const dublinTimes = require('./cities/dublin');
const dundalkTimes = require('./cities/dundalk');
const ennisTimes = require('./cities/ennis');
const galwayTimes = require('./cities/galway');
const kildareTimes = require('./cities/kildare');
const kilkennyTimes = require('./cities/kilkenny');
const letterkennyTimes = require('./cities/letterkenny');
const limerickTimes = require('./cities/limerick');
const longfordTimes = require('./cities/longford');
const monaghanTimes = require('./cities/monaghan');
const mullingarTimes = require('./cities/mullingar');
const naasTimes = require('./cities/naas');
const navanTimes = require('./cities/navan');
const portlaoiseTimes = require('./cities/portlaoise');
const roscommonTimes = require('./cities/roscommon');
const sligoTimes = require('./cities/sligo');
const thurlesTimes = require('./cities/thurles');
const traleeTimes = require('./cities/tralee');
const tullamoreTimes = require('./cities/tullamore');
const waterfordTimes = require('./cities/waterford');
const wexfordTimes = require('./cities/wexford');


log4js.configure({
    appenders: {
        out: { type: 'stdout' },
        app: { type: 'file', filename: 'database.log' }
    },
    categories: {
        default: { appenders: ['out', 'app'], level: 'error' }
    }
});

const logger = log4js.getLogger('Database');



var knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: '',
        password: '',
        database: 'prayer-timings'
    }
});

var today = new Date();
var mm = String(today.getMonth() + 1).padStart(2, '0');
var dd = String(today.getDate()).padStart(2, '0');
var yyyy = today.getFullYear();

var day = yyyy + '-' + mm + '-' + dd;

function insertTime(city, res) {
    knex(city).insert({
        day: day,
        fajr: res.Fajr,
        dhuhr: res.Dhuhr,
        asr: res.Asr,
        maghrib: res.Maghrib,
        isha: res.Isha
    })
        .then(console.log)
        .catch(err => {
            logger.error(err)
        })
}

var job = new CronJob('0 25 16 * * *', () => {

    athloneTimes.athlone().then(res => {
        insertTime('athlone', res);
    })
        .catch(err => console.log(err));

    ballinaTimes.ballina().then(res => {
        insertTime('ballina', res);
    })
        .catch(err => console.log(err));

    ballinasloeTimes.ballinasole().then(res => {
        insertTime('ballinasloe', res);
    })
        .catch(err => console.log(err));

    ballyhaunisTimes.ballyhaunis().then(res => {
        insertTime('ballyhaunis', res);
    })
        .catch(err => console.log(err));

    carlowTimes.carlow().then(res => {
        insertTime('carlow', res);
    })
        .catch(err => console.log(err));

    castlebarTimes.castlebar().then(res => {
        insertTime('castlebar', res);
    })
        .catch(err => console.log(err));

    cavanTimes.cavan().then(res => {
        insertTime('cavan', res);
    })
        .catch(err => console.log(err));

    clonmelTimes.clonmel().then(res => {
        insertTime('clonmel', res);
    }).catch(err => console.log(err));

    corkTimes.cork().then(res => {
        insertTime('cork', res);
    }).catch(err => console.log(err));

    donegalTimes.donegal().then(res => {
        insertTime('donegal', res);
    }).catch(err => console.log(err));

    droghedaTimes.drogheda().then(res => {
        insertTime('drogheda', res);
    }).catch(err => console.log(err));

    dublinTimes.dublin().then(res => {
        insertTime('dublin', res);
    }).catch(err => console.log(err));

    dundalkTimes.dundalk().then(res => {
        insertTime('dundalk', res);
    }).catch(err => console.log(err));

    ennisTimes.ennis().then(res => {
        insertTime('ennis', res);
    }).catch(err => console.log(err));

    galwayTimes.galway().then(res => {
        insertTime('galway', res);
    }).catch(err => console.log(err));

    kildareTimes.kildare().then(res => {
        insertTime('kildare', res);
    }).catch(err => console.log(err));

    kilkennyTimes.kilkenny().then(res => {
        insertTime('kilkenny', res);
    }).catch(err => console.log(err));

    letterkennyTimes.letterkenny().then(res => {
        insertTime('letterkenny', res);
    }).catch(err => console.log(err));

    limerickTimes.limerick().then(res => {
        insertTime('limerick', res);
    }).catch(err => console.log(err));

    longfordTimes.longford().then(res => {
        insertTime('longford', res);
    }).catch(err => console.log(err));

    monaghanTimes.monaghan().then(res => {
        insertTime('monaghan', res);
    }).catch(err => console.log(err));

    mullingarTimes.mullingar().then(res => {
        insertTime('mullingar', res);
    }).catch(err => console.log(err));

    naasTimes.naas().then(res => {
        insertTime('naas', res);
    }).catch(err => console.log(err));

    navanTimes.navan().then(res => {
        insertTime('navan', res);
    }).catch(err => console.log(err));

    portlaoiseTimes.portlaoise().then(res => {
        insertTime('portlaoise', res);
    }).catch(err => console.log(err));

    roscommonTimes.roscommon().then(res => {
        insertTime('roscommon', res);
    }).catch(err => console.log(err));

    sligoTimes.sligo().then(res => {
        insertTime('sligo', res);
    }).catch(err => console.log(err));

    thurlesTimes.thurles().then(res => {
        insertTime('thurles', res);
    }).catch(err => console.log(err));

    traleeTimes.tralee().then(res => {
        insertTime('tralee', res);
    }).catch(err => console.log(err));

    tullamoreTimes.tullamore().then(res => {
        insertTime('tullamore', res);
    }).catch(err => console.log(err));

    waterfordTimes.waterford().then(res => {
        insertTime('waterford', res);
    }).catch(err => console.log(err));

    wexfordTimes.wexford().then(res => {
        insertTime('wexford', res);
    }).catch(err => console.log(err));

}, null, true, 'Europe/Dublin');

var jobTwo = new CronJob('0 26 16 * * *', () => {
    fs.readFile('./database.log', 'utf-8', (err, data) => {
        if (data) {
            async function correct() {
                // create reusable transporter object using the default SMTP transport
                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true, // true for 465, false for other ports
                    auth: {
                        user: 'ali@abdesigns.net', // generated ethereal user
                        pass: 'gscmhdbzgffiinis' // generated ethereal password
                    }
                });
                // send mail with defined transport object
                let info = await transporter.sendMail({
                    from: '"Fred Foo 👻" <ali@localhost.com>', // sender address
                    to: "ali.haider.baloch@gmail.com", // list of receivers
                    subject: "Prayer Time Update Error", // Subject line
                    text: "Check logs", // plain text body
                    html: "<b>Check logs</b>" // html body
                });

                console.log("Message sent: %s", info.messageId);
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            }
            correct().catch(() => (console.log('email error')))
        }
        else if (err) {
            console.error(err)
            return
        } else {
            console.log('nodata')
        }
    })

}, null, true, 'Europe/Dublin');

var jobThree = new CronJob('0 27 16 * * *', () => {
    fs.writeFile('./database.log', '', function () { console.log('done') })
}, null, true, 'Europe/Dublin');

job.start();
jobTwo.start();
jobThree.start();

module.exports = {
    job
}







