sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("zupload.banner.controller.View1", {
		
		onInit: function(){
			
			
			var oModel = new sap.ui.model.json.JSONModel({});
		},
		
		handleUploadPress: function(oevt){
			
			var oFileUploader = this.getView().byId("fileUploader1");
			
			var oFile = jQuery.sap.domById(oFileUploader.getId()+"-fu").files[0]
			var oFileReader = new FileReader();			
			
			oFileReader.onload = function(oFile){
				
				var fnUploadImage = function(isImage){
					firebase.database().ref('bannerlist/image1').set({
					   id : "test1",
					   image : isImage
					});
				};
				
				return function(oevt){
					var BASE64_MARKER = 'data:' + oFile.type + ';base64,';
					
					var base64Index = oevt.target.result.indexOf(BASE64_MARKER) + BASE64_MARKER.length,
		        		base64 		= oevt.target.result.substring(base64Index);

					var sBaseImg = BASE64_MARKER + base64;
					fnUploadImage(sBaseImg);
//					debugger;
				}
			}(oFile);
			oFileReader.readAsDataURL(oFile);		
		},
		
		handleGetImg: function(oevt){
			var oView = this.getView();
			
//			return firebase.database().ref('/bannerlist').once('value').then(function(snapshot) {
//
////				var oImage = oView.byId("image1");
////				oImage.setSrc(snapshot.val().image);
//				debugger;
//			});
			
			return firebase.database().ref('/').once('value').then(function(snapshot) {

//				var oImage = oView.byId("image1");
//				oImage.setSrc(snapshot.val().image);
				debugger;
			});
			
//			firebase.database().ref('/').set({
//			   array: [
//			     {
//			    	 id: "01",
//			    	 name: "aaa"
//			     },
//			     {
//			    	 id: "02",
//			    	 name: "bbb"
//			     }
//			   ]
//			});
		}
		
	});
});