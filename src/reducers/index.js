//This is the Root reducer is is common to call it index.js
//productData will be used to hold Api Data
//isFetching is used to load the loading indicator
//isError is used to render an error message in case we dont get data back

//set the initial state
const initialState = {
    Data: {},
    isFetching: false,
    isError: false,
};

//declare the reducer and pass it the initial state the return state
const asyncReducer = (state = initialState, action) =>{
    //we are using a switch (like a big if statement) checks the actions passed to the reducer
    // then decides what to do based on the action
    
    
    //if action is Fetch the Product gets fired off then set the loadint to true and error false
    //Object.assign is used to keep the reducer pure, It makes a new copy of the state and we mutate it
    
    switch (action.type){
        case "FETCH_PRODUCT":
        return Object.assign({}, state,{
            isFetching: true,
            Data: {},
            isError:false
        });
		//if Feteched_PRODUCT fires off (see fetchActions.js) then set the loading to false we dont need a loader and
		//error to flase we got the data back
		case "FETCHED_PRODUCT":
			return Object.assign({}, state, {
				Data: action.data,
				isFetching: false,
				isError: false
			});
			//if RECEIVE_ERROR fires off then the data isent returned, and we set is loading to false and show the user some input
			case "RECEIVE_ERROR":
				return Object.assign({}, state, {
					isError: true,
					isFetching: false
				});
				default:
				return state;
				//reducer has to return state the first time

	}

};

//exports the reducer wtih initail state set
export default asyncReducer;