
function browserDetect() {
    var agent = navigator.userAgent
    //alert(agent)
    if (agent.search('Edge') >= 0) {
        return "Edge"
    } else if (agent.search("Firefox") >= 0) {
        return "Firefox"
    } else if (agent.search("OPR") >= 0) {
        return "Opera"
    } else if (agent.search("Chrome") >= 0) {
        return "Chrome"
    } else if (agent.search("Safari") >= 0) { 
        return "Safari"
    }
}
