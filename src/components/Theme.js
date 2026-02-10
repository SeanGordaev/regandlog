

export function Reg() {
    return (<>
        <div className='ui'>
            <input placeholder="Enter Your Full Name"/>
            <input type='email' placeholder="Enter Your Email" />
            <input type='password' placeholder="Password"/>

            <button>Go In</button>
        </div>
    </>)
}

export function Log() {
    return (<>
        <div className='ui'>
            <input type='email' placeholder="Enter Your Email" />
            <input type='password' placeholder="Password"/>

            <button>Go In</button>
        </div>
    </>)
}