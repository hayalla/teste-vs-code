module.exports = (settings, message, to, subject) => {

    if (!settings) throw new Error(`The settings object is required to send e-mails!`);
    if (!settings.sendGridKey ||
        (!settings.email && !to))
        throw new Error(`The SendGrid settings are not defined!`);

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(settings.sendGridKey);

    const msg = {
        to: to || settings.email,
        from: settings.email,
        subject: subject || 'Olivers Bot Trader tem uma mensagem para você!',
        text: message,
    }

    return sgMail.send(msg);
}