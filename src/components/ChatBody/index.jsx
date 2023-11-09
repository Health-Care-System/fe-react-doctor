import React from "react"
import messages from "../../utils/dataObject"
import { Bubble } from "../ui/Bubble"
import { NavbarBottomChat, NavbarChat } from "../Navbar"

export const Chatbody = () => {
  return (
    <>
      <section className="d-flex flex-column w-100">
        <NavbarChat />
        <div className="d-flex flex-column chatBody gap-3 px-4 py-5">
          {
            messages?.map((message, index) => (
              <React.Fragment key={index}>
                <Bubble
                  author={message.author}
                  text={message.content}
                  date={message.date}
                  type={message.type}
                  status={message.status}
                />
              </React.Fragment>
            ))
          }
        </div>
        <NavbarBottomChat />
      </section>
    </>
  )
}
