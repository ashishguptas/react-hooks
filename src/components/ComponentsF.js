import React from 'react'
import { UserContext, ChannelContext } from '../App';
function ComponentsF() {
    return (
        <div>
        <UserContext.Consumer>
            {
                user => {
                    return (
                        <ChannelContext.Consumer>
                            {
                                channel => {
                                    return <div>user context value is {user} and channel user name is {channel}</div>
                                } 
                            }
                        </ChannelContext.Consumer>
                    ) 
                }
            }
        </UserContext.Consumer>
        </div>
    )
}

export default ComponentsF
