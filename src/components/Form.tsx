export default function Form() {
    const onChange = (e : any) => {
        console.log(e.target.value);
    }
    return (
        <div>
            <input onChange={onChange} name='name' type="text" placeholder="Your Name" className="form-control bg-dark text-white border-warning mt-4"/>
            <textarea onChange={onChange} name='message' className="form-control text-white bg-dark my-3 border-warning" placeholder="Your message"></textarea>
            <button className="btn btn-primary"><a className="nav-link text-white"href="mailto:someone@example.com">Send Message</a></button>
        </div>
    )
}
