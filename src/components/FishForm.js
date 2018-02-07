import React from 'react'


const FishForm = (props)=> {
        
    return (
        <div>
            <h1>Fish Form</h1>
            <form className="fish-edit" onSubmit={props.addFish}>
                
                <input type="text" name="fishName"/>
                
                <input type="text" name="price"/>
                
                <select name="inStock">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>

                <textarea name="description" rows="8" cols="40"></textarea>

                <input type="text" name="image"/>

                <button type="submit" name="submit"> Add Mofo Fish </button>
            </form>
        </div>
    )
}


export default FishForm;
