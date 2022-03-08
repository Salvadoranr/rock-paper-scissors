const generateSelection = (options) => {
    const optList = Object.keys(options)
    const idx = Math.floor(Math.random() * (optList.length))
    return optList[idx]
}
export default generateSelection