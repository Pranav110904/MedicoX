const twilio = require("twilio");

const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSMSOTP = async (phone, otp) => {
    await client.messages.create({
        body: `Your OTP is: ${otp}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phone
    });
};

module.exports = sendSMSOTP;
