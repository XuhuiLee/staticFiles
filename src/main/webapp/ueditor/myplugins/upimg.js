var ue;
UE.commands['upimg'] = {
	    execCommand : function(cmdName, align){
	    	ue = this;
            $("#uploadFileType").val("contentImg");
            $("#uploadFile").val("");
            $("#uploadFile").trigger("click");
	    },
		queryCommandState:function(){
		     return 0;
		}
};