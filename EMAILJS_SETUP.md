# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and create an account
2. Verify your email address

## Step 2: Add Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose **Gmail** as your email service
4. Connect your Gmail account (jeweljesta@gmail.com)
5. Copy the **Service ID** - you'll need this

## Step 3: Create Email Templates

### Main Contact Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

**Template Name:** `contact_form`
**Subject:** `New Contact from {{from_name}} - {{subject}}`
**Content:**
```
Hi Jewel,

You have received a new contact form submission:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

### Auto-Reply Template
1. Create another template for auto-replies
2. **Template Name:** `auto_reply`
3. **Subject:** `Thanks for reaching out! - Jewel Jose`
4. **Content:**
```
Hi {{to_name}},

Thank you for contacting me! I have received your message and will get back to you within 24-48 hours.

In the meantime, feel free to check out my portfolio and recent projects on my website.

Best regards,
Jewel Jose
MERN Stack Developer
Email: jeweljesta@gmail.com
Phone: +91 70129 46751

---
This is an automated response. Please do not reply to this email.
```

## Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

## Step 5: Update Your Code
In `src/components/Contact.tsx`, replace these values:

```javascript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'template_contact_form_id';
const EMAILJS_AUTO_REPLY_TEMPLATE_ID = 'template_auto_reply_id';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

## Step 6: Test Your Form
1. Save your changes
2. Fill out the contact form on your website
3. Check if you receive the email
4. Check if the sender receives the auto-reply

## Troubleshooting
- Make sure your Gmail account allows "Less secure app access" or use App Passwords
- Check your EmailJS dashboard for delivery status
- Verify all IDs are correctly copied
- Check browser console for any errors

## Rate Limits
- EmailJS free plan: 200 emails/month
- Upgrade to paid plan for higher limits if needed