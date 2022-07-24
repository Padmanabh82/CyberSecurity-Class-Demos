if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("QPLE2ESessionMarkers",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({NONE:"none",START:"start",END:"end"});c=a;f["default"]=c}),66);
__d("QPLE2E",["QuickPerformanceLogger"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(){}var b=a.prototype;b.logPoint=function(a,b,d,e){var f,g;e===void 0&&(e={});f=(f=e.timestamp)!=null?f:c("QuickPerformanceLogger").currentTimestamp();var h=babelHelpers["extends"]({},e.pointData);g=(g=e.action)!=null?g:12524;e.secondaryOrder!=void 0&&(h.string||(h.string={}),h.string.qpl_e2e__secondary_order=e.secondaryOrder);if(e.sessionMarker&&e.sessionMarker!=="none"){var i;h.bool||(h.bool={});h.bool=babelHelpers["extends"]({},h.bool,(i={},i.qpl_e2e__session_marker_start_point=e.sessionMarker==="start",i.qpl_e2e__session_marker_end_point=e.sessionMarker==="end",i))}c("QuickPerformanceLogger").markerStart(a,void 0,f,{samplingBasis:d});c("QuickPerformanceLogger").markerPoint(a,b,{data:h,timestamp:f*2});e.annotations&&c("QuickPerformanceLogger").markerAnnotate(a,e.annotations);c("QuickPerformanceLogger").markerAnnotate(a,{string:(i={},i.join_id=d,i.source="client",i),bool:(b={},b.qpl_e2e__align_points=!0,b)});c("QuickPerformanceLogger").markerEnd(a,g,void 0,f)};return a}();b=new a();g["default"]=b}),98);
__d("PlatformOAuthDialogLoginFunnelLogger",["FBLogger","QPLE2E","URI","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h=1;a=function(a,b,d,e,f,g){e===void 0&&(e=!0);if(null==d||""===d||e&&(null==b||""===b||0===b)){c("FBLogger")("platform_login_web_funnel_client_js").mustfix("\nerror: null_required_field\naction: "+a+"\nloggerId: "+String(d)+"\ncbt: "+String(b)+"\n        ");return}e="number"!==typeof b?parseInt(b,10):b;b=Date.now()-e;var l=i(),m=j();l={string:{logger_id:d},"int":{first_paint_time:l,response_start_time:m,cbt_delta:b}};m={"int":{client_funnel_version:h,cbt:e},string:{},bool:{duo_like_passwordless_user:g}};m.string.gdp_type=f;if(a==="client_logged_out_init_impression"){b=k();m.string.login_uri=b}c("QPLE2E").logPoint(c("qpl")._(195562276,"891"),a,d,{pointData:l,annotations:m})};var i=function(){if(l()){var a=window.performance.getEntriesByType("paint").filter(function(a){return"first-paint"===a.name});if(null==a||0<!a.length)return null;a=a[0].startTime+a[0].duration;return a}return null},j=function(){if(l()){var a=window.performance.getEntriesByType("navigation");return null==a||0<!a.length?null:a[0].responseStart}return null},k=function(){return c("URI").getRequestURI().setQueryString("").toString()},l=function(){return window.performance&&typeof window.performance.getEntriesByType==="function"};g.CLIENT_FUNNEL_VERSION=h;g.log=a}),98);
__d("XOauthDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/dialog/oauth/",{display:{type:"Enum",enumType:1},auth_type:{type:"String"},logger_id:{type:"String"},redirect_uri:{type:"String"},sso_device:{type:"Enum",enumType:1},sdk:{type:"String"},ref:{type:"String"},ret:{type:"String"},scope:{type:"StringVector"},app_id:{type:"Int"},auth_method:{type:"Enum",enumType:1},facebook_sdk_version:{type:"String"},calling_package_key:{type:"String"},context_uri:{type:"String"},default_audience:{type:"Enum",enumType:1},domain:{type:"String"},encoded_state:{type:"String"},fallback_redirect_uri:{type:"String"},force_confirmation:{type:"Bool",defaultValue:!1},kid_directed_site:{type:"Bool",defaultValue:!1},install_nonce:{type:"String"},legacy_override:{type:"String"},logged_out_behavior:{type:"Enum",enumType:0},loyalty_program_id:{type:"Int"},shop_id:{type:"Int"},native_login_button:{type:"Bool",defaultValue:!1},original_redirect_uri:{type:"String"},privacyx:{type:"String"},return_format:{type:"EnumVector",enumType:{member:1}},return_scopes:{type:"Bool",defaultValue:!1},scope_objects:{type:"String"},scope_objects_count:{type:"String"},sdk_version:{type:"String"},seen_scopes:{type:"String"},sheet_name:{type:"String"},state:{type:"String"},user_mobile_phone:{type:"String"},android_key:{type:"String"},sso:{type:"String"},sso_key:{type:"String"},nonce:{type:"String"},user_code:{type:"String"},auth_nonce:{type:"String"},fbs:{type:"Int"},fbapp_pres:{type:"Bool",defaultValue:!1},is_comet_compat:{type:"Bool",defaultValue:!1},response_type:{type:"String"},ignore_reentry:{type:"Bool",defaultValue:!1},type:{type:"Enum",enumType:1},l_nonce:{type:"String"},cbt:{type:"Int"},ies:{type:"Bool",defaultValue:!1},cct_over_app_switch:{type:"Bool",defaultValue:!1},cct_prefetching:{type:"Bool",defaultValue:!1},page_id_account_linking:{type:"Int"},messenger_page_id:{type:"Int"},reset_messenger_state:{type:"Bool",defaultValue:!1},aid:{type:"Int"},deferred_redirect_uri:{type:"String"},code_redirect_uri:{type:"String"},shared_id:{type:"String"},extras:{type:"String"},add_email_reauth_nonce:{type:"String"},tp:{type:"Enum",enumType:1},encrypted_query_string:{type:"String"},account_type:{type:"Enum",enumType:0},fx_app:{type:"Enum",enumType:1},account_deduplication_user_cipher:{type:"String"},skip_dedupe:{type:"Bool",defaultValue:!1},is_promote_auth:{type:"Bool",defaultValue:!1},window_width:{type:"Int"},window_height:{type:"Int"},code_challenge:{type:"String"},code_challenge_method:{type:"Enum",enumType:1},switched_accounts:{type:"Bool",defaultValue:!1},is_first_party_account_linking:{type:"Bool",defaultValue:!1},loyalty_ad_id:{type:"String"},loyalty_referrer:{type:"Enum",enumType:1},privacy_mutation_token:{type:"String"}})}),null);
__d("PlatformDialogCBTSetter",["PlatformOAuthDialogLoginFunnelLogger","URI","XOauthDialogController","uuid"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c,e){if(a.value===""){var f=Date.now();a.value=f.toString()}d("PlatformOAuthDialogLoginFunnelLogger").log(b,a.value,c,!0,e)}function b(a,b,e){var f=new(c("URI"))(a.action),g=f.getQueryData().next;if(!g)return;g=new(c("URI"))(g);var h=c("XOauthDialogController").getURIBuilder().getURI().getPath().toString();h.endsWith("/")&&(h=h.substr(0,h.length-1));if(!g.getPath().includes(h))return;h=g.getQueryData().cbt;var i=g.getQueryData().logger_id;h||(h=Date.now(),g.addQueryData("cbt",h),f.addQueryData("next",g.toString()),a.action=f.toString());i||(i=c("uuid")(),g.addQueryData("logger_id",i),f.addQueryData("next",g.toString()),a.action=f.toString());d("PlatformOAuthDialogLoginFunnelLogger").log(b,h,i,!0,null,e)}g.setCBTInFieldAndLog=a;g.setCBTInFormAndLog=b}),98);