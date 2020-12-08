import store from "../store";
//import the store (state)

//file exports action fetch_product
export const fetch_product = () =>{
    return{
        type: "FETCH_PRODUCT"
    };
};


//file exports action receive_product

export const receive_product = product => {
    return {
        type: "FETCHED_PRODUCT",
        data: product
    }
}

//file export action receive_error
export const receive_error = () => {
    return{
        type: "RECEIVE_ERROR"
    };
};

//Action creators are just functions that returns an action object

//Actions are plain Js objects that have a mandatory type property

//This property defines what sort of action/event is taking place

//The first action is responsible for starting the fetch it will be used for the loading indicator

//The second action creator will be called when we get back the data


//Finally we have the error handling Action


//takes in productData as a parameter (this will come from a user sumbit or click)
export const thunk_action_creator = productData => {
    
    ///take the username and sanitize the data
    const product = productData.replace(/\s/g,"");
    //first dispatch calling fetch_product which will be used for setting the loader
    store.dispatch(fetch_product());
    //next we return a function with access to dispatch and getState methods of store
    return function(dispatch,getState){
        
        //we return the fetch call passing the api the prodcutData we want
        return fetch(`https://www.landpride.com/applications/api/lp/products?key=GIDJBPweD1NHIH5a&products=${product}`)
		.then(data => data.json())
		//when data returns we convert to json
		.then(data => {
		    //after data is converted then we check if found
		    if(data.message =="Not Found"){
		        throw new Error("No such iteam found!!");
		        //if no error then dispatch recieve_product
		        // and send data from the fetch with it
		    } else dispatch(receive_product(data))
		}).catch(err => dispatch(receive_error()));
		//catch will take the throw error and fire off the action recieve_error
    };
};



