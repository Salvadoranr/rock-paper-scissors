const generateSelection = (options) => {
    const optList = Object.keys(options)
    if (optList.length > 0) {
        const idx = Math.floor(Math.random() * (optList.length))
        return optList[idx]
    }
    return ''
}
export default generateSelection