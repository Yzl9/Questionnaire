export default{
	enterNext(state){
		state.itemNum++;
	},
	remberAnswer(state,id){
		state.answerid.push(id);
	}
}
