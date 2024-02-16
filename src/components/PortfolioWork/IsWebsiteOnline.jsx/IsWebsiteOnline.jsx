function IsWebsiteOnline(work) {
    let workItem = { ...work.value }
    if(workItem.isOnline) {
        return (    
            <a href={workItem.link} alt={workItem.id + " project link"} target="_blank" rel="noreferrer"><b>Visiter le site</b></a>
        )
    } else {
        return (
            <a href={workItem.link} alt={workItem.id + " project code"} target="_blank" rel="noreferrer"><b>Voir le code</b></a>
        )
    }
}

export default IsWebsiteOnline