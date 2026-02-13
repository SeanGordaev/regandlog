
export function Reg() {
    return (<>
        <div className='ui'>
            <input placeholder="Enter Your Full Name"/>
            <input type='email' placeholder="Enter Email" />
            <input type='password' placeholder="Enter Password"/>

            <button>Go In</button>
        </div>
    </>)
}

export function Log() {
    return (<>
        <div className='ui'>
            <input type='email' placeholder="Enter Email" />
            <input type='password' placeholder="Enter Password"/>

            <button>Go In</button>
        </div>
    </>)
}