import React, { useState } from "react";

function Sign(props) {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("")
    const [profile, setProfile] = useState("")

    const handleSubmit = (e) => {
        
        

        localStorage.setItem("currentUser", name)
        // add localStorage.clear() to log out function 


        props.handleSignUp(name, password, profile)







    }






    const handleOnChangeN = (e) => {

        setName(e.target.value)

    }

    const handleOnChangeP = (e) => {

        setPassword(e.target.value)

    }

    const handleOnChangePP = (e) => {

        setProfile(e.target.value)

    }

    return (
        <form onSubmit={(e) => { handleSubmit(e) }}>
           <div class="spacer"></div>
           <div class="spacer"></div>
           <div class="spacer"></div>
           <div class="spacer"></div>
           <div class="spacer"></div>
           <div class="spacer"></div>
           <div class="spacer"></div>
           <div class="spacer"></div>
           <div class="spacer"></div>
           <div class="spacer"></div>
            <h2>Sign up</h2>
            <label>
                Name
        <ul></ul>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => { handleOnChangeN(e) }}
                />

            </label>
            <ul></ul>
            <label>
                Password
        <ul></ul>
                <input
                    type="text"
                    value={password}
                    onChange={(e) => { handleOnChangeP(e) }}
                />

            </label>
            <ul></ul>
            <label>
                Status
        <ul></ul>
                <input
                    type="text"
                    value={profile}
                    onChange={(e) => { handleOnChangePP(e) }}
                />

            </label>
            <ul></ul>
            <button type="submit"> Submit</button>
        </form>



    );
}

export default Sign;




















