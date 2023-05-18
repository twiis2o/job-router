import { Form, redirect, useActionData } from "react-router-dom"

const Contact = () => {
  const data = useActionData();
  return (
    <div className="contact">
    <h3>Contact Us</h3>
    <Form method="POST" action="/help/contact">
      <label>
        <span>Your email:</span>
        <input type="email" name="email" required />
      </label>
      <label>
        <span>Your message:</span>
        <textarea name="message" required></textarea>
      </label>
      <button>Submit</button>
      {data && data.error && <p>{data.error}</p>}
    </Form>
  </div>
  )
}

export default Contact

export const actionData=async({request})=> {
  const res= await request.formData();
  console.log(res);
  const data = {
    email:res.get("email"),
    message:res.get("message"),
  }

  if(data.message.length <5) {
    return {error : "Message must be 10 chars long"};
  }
  return redirect("/");
}