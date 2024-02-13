function IsWebsiteOnline(work) {
    let workItem = { ...work.value }
    if(workItem.isOnline) {
        return (    
            <a href={workItem.link} alt={workItem.id + " project link"}><b>Visiter le site</b></a>
        )
    } else {
        return (
            <a href={workItem.link} alt={workItem.id + " project code"}><b>Voir le code</b></a>
        )
    }
}

export default IsWebsiteOnline