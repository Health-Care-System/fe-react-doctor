import './Card.css'

export const ChatList = ({ id, name, messages, hanldeUser }) => {
  return (
    <>
      <div onClick={() => hanldeUser(id)} className='chat-list'>
        <img width={'60'} height={'60'} className="rounded-3 object-fit-cover" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile Picture" />
        <section className="d-flex flex-row w-100">
          <div className="w-75">
            <h6 className=" fw-semibold">{name}</h6>
            <p className="line-clamp-1">{messages}</p>
          </div>
          <div className="d-flex flex-column align-items-end gap-2 text-body-secondary w-25">
            <p className="fs-5">11:49 pm</p>
            <div className="rounded-5 p-1" style={{ backgroundColor: '#DFF6F4' }}>
              <p className=" text-primary fw-semibold fs-5">5+</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
