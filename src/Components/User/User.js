import React from 'react';

const User = (props) => {
    const familiar = props.familiar

    let greeting ;

    if(familiar){
        greeting = <p>Welcome, My Friend !</p>
    }
    else{
        greeting =  <p>Who the hell are You ?</p>
    }


    return (
        <div>
            <div>
                <h2>Greetings</h2>
                    {
                        greeting
                    }
            </div>
            <div>
                <h2>Food</h2>
                {
                    familiar ? <p>I Will buy Food for You </p> :  <p>Let's eat his-his-whose-whose ?</p>
                }
                
            </div>
            <div>
                <h2>Connection</h2>
                {
                    familiar &&  <p>Let's Join my Facebook</p>
                }
               
                    {/* <p>I don't add Stranger</p> */}
            </div>
        </div>
    );
};

export default User;