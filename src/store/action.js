export default {
	entNext(context,id){
		context.commit('remberAnswer',id);
		if(context.state.itemNum<context.state.itemDetail.length){
			context.commit('enterNext');
		}
	}
}
