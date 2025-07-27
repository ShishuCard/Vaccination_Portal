import emailjs from "@emailjs/browser";

export const sendReminderEmail = async ({ parentEmail, childName, vaccineName, dueDate }) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_VACCINE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const templatePar = {
    to_email: parentEmail,
    child_name: childName,
    vaccine_name: vaccineName,
    due_date: dueDate,
  };

  try {
    const response = await emailjs.send(serviceId, templateId, templatePar, publicKey);
    console.log("✅ Reminder Email sent successfully:", response);
  } catch (error) {
    console.error("❌ Error sending reminder email:", error);
  }
};
